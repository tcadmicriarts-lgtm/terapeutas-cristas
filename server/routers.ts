import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  ADMIN_ACCESS_COOKIE,
  createAdminSessionToken,
  getAdminCookieOptions,
  hasAdminSession,
  verifyAdminPassword,
} from "./adminAuth";
import { getSessionCookieOptions } from "./_core/cookies";
import { ENV } from "./_core/env";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { sendLeadAlertEmail, sendWelcomeEmail } from "./email";

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo.").max(120),
  whatsapp: z
    .string()
    .trim()
    .refine(value => value.replace(/\D/g, "").length >= 10, "Informe um WhatsApp válido."),
  email: z.string().trim().email("Informe um e-mail válido.").max(320),
  utm_source: z.string().trim().min(1).max(255).optional(),
  utm_medium: z.string().trim().min(1).max(255).optional(),
  utm_campaign: z.string().trim().min(1).max(255).optional(),
  utm_term: z.string().trim().min(1).max(255).optional(),
  utm_content: z.string().trim().min(1).max(255).optional(),
});

const adminPasswordSchema = z.object({
  password: z.string().min(1, "Informe a senha de acesso.").max(512),
});

const storedLeadSchema = z.object({
  id: z.string().uuid(),
  nome: z.string(),
  whatsapp: z.string(),
  email: z.string().email(),
  status: z.string().nullable().optional(),
  origem: z.string().nullable().optional(),
  utm_source: z.string().nullable().optional(),
  utm_medium: z.string().nullable().optional(),
  utm_campaign: z.string().nullable().optional(),
  utm_term: z.string().nullable().optional(),
  utm_content: z.string().nullable().optional(),
  consentimento_em: z.string().nullable().optional(),
  criado_em: z.string().nullable().optional(),
});

const leadPageSchema = z.object({
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(10).max(100).default(50),
});

const leadColumns = "id,nome,whatsapp,email,status,origem,utm_source,utm_medium,utm_campaign,utm_term,utm_content,consentimento_em,criado_em";

function getSupabaseRestUrl(url: string) {
  const normalizedUrl = url.replace(/\/+$/, "").replace(/\/rest\/v1$/, "");
  return `${normalizedUrl}/rest/v1`;
}

function assertAdminSession(req: Parameters<typeof hasAdminSession>[0]) {
  if (!hasAdminSession(req)) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Acesso administrativo não autorizado.",
    });
  }
}

async function fetchLeadBatch(offset: number, limit: number) {
  if (!ENV.supabaseUrl || !ENV.supabaseServiceRoleKey) {
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Dados indisponíveis." });
  }

  const response = await fetch(
    `${getSupabaseRestUrl(ENV.supabaseUrl)}/leads_psicanalise?select=${leadColumns}&order=criado_em.desc&limit=${limit}&offset=${offset}`,
    {
      headers: {
        apikey: ENV.supabaseServiceRoleKey,
        Authorization: `Bearer ${ENV.supabaseServiceRoleKey}`,
      },
    }
  );

  if (!response.ok) {
    console.error("[Admin] Falha ao consultar leads", response.status);
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Não foi possível carregar os leads." });
  }

  const result = storedLeadSchema.array().safeParse(await response.json());
  if (!result.success) {
    console.error("[Admin] Resposta de leads inválida", result.error.flatten());
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Não foi possível ler os leads." });
  }

  return result.data;
}

async function fetchAllLeads() {
  const batchSize = 1000;
  const leads = [] as z.infer<typeof storedLeadSchema>[];
  let offset = 0;

  while (true) {
    const batch = await fetchLeadBatch(offset, batchSize);
    leads.push(...batch);
    if (batch.length < batchSize) return leads;
    offset += batchSize;
  }
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  admin: router({
    status: publicProcedure.query(({ ctx }) => ({ authenticated: hasAdminSession(ctx.req) })),
    login: publicProcedure.input(adminPasswordSchema).mutation(({ ctx, input }) => {
      if (!verifyAdminPassword(input.password)) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Senha inválida." });
      }

      ctx.res.cookie(
        ADMIN_ACCESS_COOKIE,
        createAdminSessionToken(),
        getAdminCookieOptions(ctx.req)
      );
      return { success: true } as const;
    }),
    logout: publicProcedure.mutation(({ ctx }) => {
      ctx.res.clearCookie(ADMIN_ACCESS_COOKIE, getAdminCookieOptions(ctx.req));
      return { success: true } as const;
    }),
    listLeads: publicProcedure.input(leadPageSchema).query(async ({ ctx, input }) => {
      assertAdminSession(ctx.req);
      const offset = (input.page - 1) * input.pageSize;
      const items = await fetchLeadBatch(offset, input.pageSize + 1);
      return {
        items: items.slice(0, input.pageSize),
        hasNextPage: items.length > input.pageSize,
      };
    }),
    exportLeads: publicProcedure.query(async ({ ctx }) => {
      assertAdminSession(ctx.req);
      return fetchAllLeads();
    }),
  }),

  leads: router({
    create: publicProcedure.input(leadSchema).mutation(async ({ input }) => {
      if (!ENV.supabaseUrl || !ENV.supabaseServiceRoleKey) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "O cadastro de interesse está temporariamente indisponível.",
        });
      }

      const lead = {
        nome: input.nome,
        whatsapp: input.whatsapp.replace(/\D/g, ""),
        email: input.email.toLowerCase(),
        origem: input.utm_source ?? "site",
        utm_source: input.utm_source,
        utm_medium: input.utm_medium,
        utm_campaign: input.utm_campaign,
        utm_term: input.utm_term,
        utm_content: input.utm_content,
      };

      const response = await fetch(`${getSupabaseRestUrl(ENV.supabaseUrl)}/leads_psicanalise`, {
        method: "POST",
        headers: {
          apikey: ENV.supabaseServiceRoleKey,
          Authorization: `Bearer ${ENV.supabaseServiceRoleKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        const detail = await response.text().catch(() => "");
        console.error("[Leads] Falha ao registrar interesse", response.status, detail);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Não foi possível registrar seu interesse. Tente novamente em instantes.",
        });
      }

      const notificationSent = await notifyOwner({
        title: "Novo interesse em Psicanálise e Neurociência",
        content: "Um novo lead foi cadastrado pelo formulário do site. Consulte a tabela leads_psicanalise no Supabase para realizar o atendimento.",
      }).catch(() => false);
      const [emailAlertSent, welcomeEmailSent] = await Promise.all([
        sendLeadAlertEmail(lead),
        sendWelcomeEmail(lead),
      ]);

      return { success: true, notificationSent, emailAlertSent, welcomeEmailSent } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;

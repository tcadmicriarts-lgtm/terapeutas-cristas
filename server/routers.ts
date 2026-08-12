import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { ENV } from "./_core/env";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo.").max(120),
  whatsapp: z
    .string()
    .trim()
    .refine(value => value.replace(/\D/g, "").length >= 10, "Informe um WhatsApp válido."),
  email: z.string().trim().email("Informe um e-mail válido.").max(320),
});

function getSupabaseRestUrl(url: string) {
  const normalizedUrl = url.replace(/\/+$/, "").replace(/\/rest\/v1$/, "");
  return `${normalizedUrl}/rest/v1`;
}

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
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

      const response = await fetch(`${getSupabaseRestUrl(ENV.supabaseUrl)}/leads_psicanalise`, {
        method: "POST",
        headers: {
          apikey: ENV.supabaseServiceRoleKey,
          Authorization: `Bearer ${ENV.supabaseServiceRoleKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          nome: input.nome,
          whatsapp: input.whatsapp.replace(/\D/g, ""),
          email: input.email.toLowerCase(),
        }),
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

      return { success: true, notificationSent } as const;
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;

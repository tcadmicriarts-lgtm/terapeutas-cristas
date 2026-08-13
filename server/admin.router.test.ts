import { describe, expect, it, vi } from "vitest";

import { ADMIN_ACCESS_COOKIE, createAdminSessionToken } from "./adminAuth";
import type { TrpcContext } from "./_core/context";
import { ENV } from "./_core/env";
import { appRouter } from "./routers";

function createContext(): TrpcContext {
  return {
    user: null,
    req: { headers: {} } as TrpcContext["req"],
    res: { cookie: vi.fn(), clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

function createAuthenticatedContext(): TrpcContext {
  const context = createContext();
  context.req = {
    headers: { cookie: `${ADMIN_ACCESS_COOKIE}=${createAdminSessionToken()}` },
  } as TrpcContext["req"];
  return context;
}

describe("admin", () => {
  it("rejeita senha incorreta sem criar uma sessão", async () => {
    const context = createContext();
    const caller = appRouter.createCaller(context);

    await expect(caller.admin.login({ password: "incorreta" })).rejects.toMatchObject({
      code: "UNAUTHORIZED",
    });
    expect(context.res.cookie).not.toHaveBeenCalled();
  });

  it("cria a sessão administrativa apenas com a senha configurada", async () => {
    const context = createContext();
    const caller = appRouter.createCaller(context);

    await expect(caller.admin.login({ password: ENV.adminAccessPassword })).resolves.toEqual({
      success: true,
    });
    expect(context.res.cookie).toHaveBeenCalledOnce();
  });

  it("impede a leitura de leads sem sessão administrativa", async () => {
    const caller = appRouter.createCaller(createContext());

    await expect(caller.admin.listLeads({ page: 1, pageSize: 50 })).rejects.toMatchObject({
      code: "UNAUTHORIZED",
    });
  });

  it("permite exportar todos os lotes de leads para uma sessão válida", async () => {
    const firstLead = {
      id: "0ca2e88f-51ee-463c-875f-a8906c4a6e80",
      nome: "Ana Silva",
      whatsapp: "11999999999",
      email: "ana@example.com",
      status: "novo",
      origem: "site",
      consentimento_em: "2026-08-13T12:00:00Z",
      criado_em: "2026-08-13T12:00:00Z",
    };
    const firstBatch = Array.from({ length: 1000 }, (_, index) => ({
      ...firstLead,
      id: `${index.toString(16).padStart(8, "0")}-51ee-463c-875f-a8906c4a6e80`,
    }));
    const finalLead = {
      ...firstLead,
      id: "fca2e88f-51ee-463c-875f-a8906c4a6e80",
      nome: "Beatriz Souza",
    };
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(new Response(JSON.stringify(firstBatch), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify([finalLead]), { status: 200 }));

    const caller = appRouter.createCaller(createAuthenticatedContext());
    const exported = await caller.admin.exportLeads();
    expect(exported).toHaveLength(1001);
    expect(exported.at(-1)).toEqual(finalLead);
    expect(fetchMock).toHaveBeenCalledTimes(2);
    fetchMock.mockRestore();
  });
});

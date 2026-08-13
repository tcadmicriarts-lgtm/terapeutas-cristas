import { afterEach, describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {} as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("leads.create", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("rejeita cadastro sem nome, WhatsApp e e-mail válidos", async () => {
    const caller = appRouter.createCaller(createPublicContext());

    await expect(
      caller.leads.create({ nome: "A", whatsapp: "123", email: "invalido" })
    ).rejects.toMatchObject({ code: "BAD_REQUEST" });
  });

  it("persiste os UTMs recebidos junto ao novo lead", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify([{ id: "lead-utm" }]), { status: 201 })
    );
    vi.stubGlobal("fetch", fetchMock);

    const caller = appRouter.createCaller(createPublicContext());
    await caller.leads.create({
      nome: "Ana UTM",
      whatsapp: "(11) 99999-9999",
      email: "ana.utm@example.com",
      utm_source: "instagram",
      utm_medium: "paid_social",
      utm_campaign: "formacao-agosto",
      utm_term: "terapia-crista",
      utm_content: "reel-1",
    });

    const supabaseCall = fetchMock.mock.calls.find(([url]) => String(url).includes("leads_psicanalise"));
    expect(supabaseCall).toBeDefined();
    const request = supabaseCall?.[1] as RequestInit;
    expect(JSON.parse(String(request.body))).toMatchObject({
      nome: "Ana UTM",
      whatsapp: "11999999999",
      email: "ana.utm@example.com",
      origem: "instagram",
      utm_source: "instagram",
      utm_medium: "paid_social",
      utm_campaign: "formacao-agosto",
      utm_term: "terapia-crista",
      utm_content: "reel-1",
    });
  });
});

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
    const result = await caller.leads.create({
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

    expect(fetchMock).toHaveBeenCalledTimes(3);
    const emailPayloads = fetchMock.mock.calls
      .filter(([url]) => String(url) === "https://api.resend.com/emails")
      .map(([, options]) => JSON.parse(String((options as RequestInit).body)));
    expect(emailPayloads).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ to: [process.env.LEAD_ALERT_TO] }),
        expect.objectContaining({ to: ["ana.utm@example.com"] }),
      ])
    );
    expect(result.leadMagnet).toMatchObject({
      title: "5 Dias para Silenciar a Ansiedade e Ouvir a Voz de Deus",
      url: expect.stringContaining("guia-5-dias-silenciar-ansiedade_587d0f06.pdf"),
    });
  });
});

import { afterEach, describe, expect, it, vi } from "vitest";
import { sendLeadAlertEmail, sendWelcomeEmail } from "./email";

describe("sendLeadAlertEmail", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("envia o alerta ao Resend com os dados do lead escapados no HTML", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{"id":"email_123"}', { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    const sent = await sendLeadAlertEmail({
      nome: "Ana & Maria",
      whatsapp: "5511989943662",
      email: "ana@example.com",
    });

    expect(sent).toBe(true);
    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    const payload = JSON.parse(String(options.body));

    expect(url).toBe("https://api.resend.com/emails");
    expect(options.method).toBe("POST");
    expect(options.headers).toMatchObject({
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    });
    expect(payload).toMatchObject({
      from: process.env.LEAD_ALERT_FROM,
      to: [process.env.LEAD_ALERT_TO],
      subject: "Novo interesse: Psicanálise e Neurociência",
    });
    expect(payload.html).toContain("Ana &amp; Maria");
  });

  it("retorna falso se o provedor não aceitar o alerta", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("domínio não verificado", { status: 422 })));

    await expect(
      sendLeadAlertEmail({
        nome: "Ana Maria",
        whatsapp: "5511989943662",
        email: "ana@example.com",
      })
    ).resolves.toBe(false);

    expect(warn).toHaveBeenCalled();
  });

  it("envia a confirmação de boas-vindas ao e-mail cadastrado com o convite do WhatsApp", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{"id":"email_456"}', { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      sendWelcomeEmail({ nome: "Ana Maria", whatsapp: "5511989943662", email: "ana@example.com" })
    ).resolves.toBe(true);

    const [, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    const payload = JSON.parse(String(options.body));
    expect(payload).toMatchObject({
      from: process.env.LEAD_ALERT_FROM,
      to: ["ana@example.com"],
      subject: "Confirmação da sua inscrição | Terapeutas Cristãs 🌿",
    });
    expect(payload.html).toContain("https://chat.whatsapp.com/JAoqm6FRyrj43Bt1ng5RGe");
    expect(payload.html).toContain("5 Dias para Silenciar a Ansiedade e Ouvir a Voz de Deus");
    expect(payload.html).toContain("guia-5-dias-silenciar-ansiedade_587d0f06.pdf");
    expect(payload.html).toContain("Olá, Ana Maria!");
    expect(payload.html).toContain("A paz do Senhor!");
    expect(payload.html).toContain("Adeilda e Débora");
  });
});

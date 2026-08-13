import { describe, expect, it } from "vitest";

describe("integração Resend", () => {
  it("autentica a chave de envio consultando os domínios da conta", async () => {
    const apiKey = process.env.RESEND_API_KEY;

    expect(apiKey, "RESEND_API_KEY deve estar configurada").toBeTruthy();

    const response = await fetch("https://api.resend.com/domains", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    expect(response.ok, `Resend respondeu com HTTP ${response.status}`).toBe(true);
  }, 15_000);
});

import { describe, expect, it } from "vitest";

import { captureUtmParameters, withUtmParameters } from "./utm";

describe("captureUtmParameters", () => {
  it("captura somente os parâmetros UTM preenchidos da URL", () => {
    expect(
      captureUtmParameters("?utm_source=instagram&utm_medium=paid_social&utm_campaign=agosto&utm_term=&utm_content=video-1&ref=ignored")
    ).toEqual({
      utm_source: "instagram",
      utm_medium: "paid_social",
      utm_campaign: "agosto",
      utm_content: "video-1",
    });
  });

  it("limita valores excessivamente longos para proteger o registro", () => {
    const longValue = "x".repeat(300);
    expect(captureUtmParameters(`?utm_campaign=${longValue}`).utm_campaign).toHaveLength(255);
  });

  it("anexa os UTMs capturados ao payload enviado pelo formulário", () => {
    const parameters = captureUtmParameters("?utm_source=instagram&utm_campaign=lista-de-espera");
    expect(
      withUtmParameters(
        { nome: "Ana", whatsapp: "11999999999", email: "ana@example.com" },
        parameters
      )
    ).toMatchObject({
      nome: "Ana",
      utm_source: "instagram",
      utm_campaign: "lista-de-espera",
    });
  });
});

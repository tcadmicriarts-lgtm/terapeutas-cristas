import { describe, expect, it } from "vitest";

import { buildLeadsCsv } from "./leadsCsv";

describe("buildLeadsCsv", () => {
  it("inclui cada lead recebido e escapa aspas para a exportação", () => {
    const csv = buildLeadsCsv([
      {
        id: "d1fb0e69-8e8c-4206-ae53-4b4529559f6f",
        nome: "Ana \"Silva\"",
        whatsapp: "11999999999",
        email: "ana@example.com",
        utm_source: "instagram",
        utm_campaign: "agosto",
        consentimento_em: "2026-08-13T12:00:00Z",
      },
      { id: "d4c7d6a5-7829-4e77-934b-cb49757b471b", nome: "Beatriz", whatsapp: "11888888888", email: "bia@example.com", origem: "instagram" },
    ]);

    expect(csv).toContain('"Ana ""Silva"""');
    expect(csv).toContain('"Beatriz"');
    expect(csv).toContain('"d1fb0e69-8e8c-4206-ae53-4b4529559f6f"');
    expect(csv).toContain('"2026-08-13T12:00:00Z"');
    expect(csv).toContain('"instagram"');
    expect(csv).toContain('"agosto"');
    expect(csv.split("\n")).toHaveLength(3);
  });
});

import { describe, expect, it } from "vitest";

describe("conexão do Supabase", () => {
  it("permite acesso seguro à tabela de leads", async () => {
    const url = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    expect(url).toMatch(/^https:\/\/.+\.supabase\.co$/);
    expect(serviceRoleKey).toBeTruthy();

    const response = await fetch(`${url}/rest/v1/leads_psicanalise?select=id&limit=1`, {
      headers: {
        apikey: serviceRoleKey as string,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
    });

    expect(response.ok).toBe(true);
  });
});

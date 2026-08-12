import { describe, expect, it } from "vitest";

describe("conexão do Supabase", () => {
  it("permite acesso seguro à tabela de leads", async () => {
    const url = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    expect(url).toBeTruthy();
    expect(serviceRoleKey).toBeTruthy();

    const restUrl = (url as string).replace(/\/+$/, "").replace(/\/rest\/v1$/, "") + "/rest/v1";
    expect(restUrl).toMatch(/^https:\/\/.+\.supabase\.co\/rest\/v1$/);

    const response = await fetch(`${restUrl}/leads_psicanalise?select=id&limit=1`, {
      headers: {
        apikey: serviceRoleKey as string,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
    });

    expect(response.ok).toBe(true);
  });
});

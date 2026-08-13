export type CsvLead = {
  id: string;
  nome: string;
  whatsapp: string;
  email: string;
  status?: string | null;
  origem?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  consentimento_em?: string | null;
  criado_em?: string | null;
};

const csvValue = (value: string | null | undefined) => `"${(value ?? "").replaceAll('"', '""')}"`;

export function buildLeadsCsv(leads: CsvLead[]) {
  const rows = [
    ["ID", "Nome", "WhatsApp", "E-mail", "Status", "Origem", "UTM Source", "UTM Medium", "UTM Campaign", "UTM Term", "UTM Content", "Data do consentimento", "Data do cadastro"],
    ...leads.map(lead => [
      lead.id,
      lead.nome,
      lead.whatsapp,
      lead.email,
      lead.status ?? "novo",
      lead.origem ?? "site",
      lead.utm_source ?? "",
      lead.utm_medium ?? "",
      lead.utm_campaign ?? "",
      lead.utm_term ?? "",
      lead.utm_content ?? "",
      lead.consentimento_em ?? "",
      lead.criado_em ?? "",
    ]),
  ];

  return `\uFEFF${rows.map(row => row.map(csvValue).join(";")).join("\n")}`;
}

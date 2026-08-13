import { ENV } from "./_core/env";

export type LeadAlertInput = {
  nome: string;
  whatsapp: string;
  email: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

function buildLeadAlertEmail(lead: LeadAlertInput) {
  const nome = escapeHtml(lead.nome);
  const whatsapp = escapeHtml(lead.whatsapp);
  const email = escapeHtml(lead.email);

  return {
    from: ENV.leadAlertFrom,
    to: [ENV.leadAlertTo],
    subject: "Novo interesse: Psicanálise e Neurociência",
    text: `Novo lead cadastrado no site.\n\nNome: ${lead.nome}\nWhatsApp: ${lead.whatsapp}\nE-mail: ${lead.email}`,
    html: `
      <main style="font-family: Arial, sans-serif; color: #2f2442; line-height: 1.5;">
        <h1 style="font-family: Georgia, serif; color: #6b1fa8;">Novo interesse no site</h1>
        <p>Uma pessoa demonstrou interesse na formação de Psicanálise e Neurociência.</p>
        <dl>
          <dt><strong>Nome</strong></dt><dd>${nome}</dd>
          <dt><strong>WhatsApp</strong></dt><dd>${whatsapp}</dd>
          <dt><strong>E-mail</strong></dt><dd>${email}</dd>
        </dl>
      </main>`,
  };
}

/**
 * Envia o alerta após o lead já ter sido gravado. Falhas de configuração ou de
 * rede são registradas no servidor e não devem bloquear o cadastro da interessada.
 */
export async function sendLeadAlertEmail(lead: LeadAlertInput): Promise<boolean> {
  if (!ENV.resendApiKey || !ENV.leadAlertFrom || !ENV.leadAlertTo) {
    console.warn("[Resend] Alerta de lead não enviado: configuração incompleta.");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ENV.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(buildLeadAlertEmail(lead)),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Resend] Alerta de lead não enviado (${response.status})${detail ? `: ${detail}` : ""}`
      );
      return false;
    }

    return true;
  } catch (error) {
    console.warn("[Resend] Erro ao enviar alerta de lead:", error);
    return false;
  }
}

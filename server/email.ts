import { ENV } from "./_core/env";

export type LeadAlertInput = {
  nome: string;
  whatsapp: string;
  email: string;
};

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/JAoqm6FRyrj43Bt1ng5RGe";

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

function buildWelcomeEmail(lead: LeadAlertInput) {
  const nome = escapeHtml(lead.nome);

  return {
    from: ENV.leadAlertFrom,
    to: [] as string[],
    subject: "Confirmação da sua inscrição | Terapeutas Cristãs 🌿",
    text: `Olá, ${lead.nome}!\n\nA paz do Senhor!\n\nQue alegria ter você conosco. Confirmamos o seu cadastro com sucesso em nosso site.\n\nPara que você não perca nenhuma novidade, conteúdos exclusivos e os links das nossas Aulas Gratuitas, preparamos um grupo VIP e exclusivo no WhatsApp.\n\nClique aqui para entrar no Grupo de Aulas Gratuitas no WhatsApp:\n${WHATSAPP_GROUP_URL}\n\nConte conosco nessa jornada!\n\nCom carinho,\nAdeilda e Débora\nEquipe Terapeutas Cristãs`,
    html: `
      <main style="font-family: Arial, sans-serif; color: #2f2442; line-height: 1.6; max-width: 620px; margin: 0 auto; padding: 24px;">
        <h1 style="font-family: Georgia, serif; color: #6b1fa8; font-size: 28px;">Olá, ${nome}!</h1>
        <p><strong>A paz do Senhor!</strong></p>
        <p>Que alegria ter você conosco. Confirmamos o seu cadastro com sucesso em nosso site.</p>
        <p>Para que você não perca nenhuma novidade, conteúdos exclusivos e os links das nossas Aulas Gratuitas, preparamos um grupo VIP e exclusivo no WhatsApp.</p>
        <p style="margin: 30px 0;">
          <a href="${WHATSAPP_GROUP_URL}" style="display: inline-block; background: #14ADA9; color: #ffffff; text-decoration: none; font-weight: 700; padding: 14px 20px; border-radius: 8px;">Entrar no Grupo de Aulas Gratuitas no WhatsApp</a>
        </p>
        <p>Conte conosco nessa jornada!</p>
        <p style="margin-top: 28px;">Com carinho,<br /><strong>Adeilda e Débora</strong><br />Equipe Terapeutas Cristãs</p>
      </main>`,
  };
}

async function sendResendEmail(
  payload: { from: string; to: string[]; subject: string; text: string; html: string },
  label: string
) {
  if (!ENV.resendApiKey || !ENV.leadAlertFrom) {
    console.warn(`[Resend] ${label} não enviado: configuração incompleta.`);
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ENV.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(`[Resend] ${label} não enviado (${response.status})${detail ? `: ${detail}` : ""}`);
      return false;
    }

    return true;
  } catch (error) {
    console.warn(`[Resend] Erro ao enviar ${label.toLowerCase()}:`, error);
    return false;
  }
}

/** Envia o alerta depois do lead ser salvo, sem impedir o cadastro se o serviço externo falhar. */
export async function sendLeadAlertEmail(lead: LeadAlertInput): Promise<boolean> {
  if (!ENV.leadAlertTo) return false;
  return sendResendEmail(buildLeadAlertEmail(lead), "Alerta de lead");
}

/** Envia a confirmação de boas-vindas após o cadastro, sem impedir o registro do lead em caso de falha externa. */
export async function sendWelcomeEmail(lead: LeadAlertInput): Promise<boolean> {
  const message = buildWelcomeEmail(lead);
  message.to = [lead.email];
  return sendResendEmail(message, "E-mail de boas-vindas");
}

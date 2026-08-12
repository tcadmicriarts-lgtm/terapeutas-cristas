/**
 * Direção visual: identidade Instituto TC — púrpura profundo, dourado, superfícies de pergaminho e curvas orgânicas.
 * Esta seção preserva imagens reais das formações, enquadrando-as em uma apresentação editorial e CTAs claros.
 */
import { ArrowUpRight, Award, CreditCard, Globe, Clock, MessageCircle } from "lucide-react";

const checkoutLinks = {
  formacaoTc: "https://pay.kiwify.com.br/KPuty2z",
  teologia: "https://pay.kiwify.com.br/7CAZL0N",
  posGraduacao: "https://pay.kiwify.com.br/thmk8Hg",
};

const WHATSAPP_URL = "https://wa.me/5511989943662";

function CheckoutButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
      style={{
        background: "linear-gradient(135deg, #D4AF37, #F0D060)",
        color: "#3d0070",
      }}
    >
      <CreditCard className="h-4 w-4" />
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export default function Formacoes() {
  return (
    <section id="formacoes" className="relative overflow-hidden bg-[#fffdfa] py-20 md:py-28">
      <div aria-hidden="true" className="absolute -left-28 top-28 h-72 w-72 rounded-[48%_52%_44%_56%/60%_42%_58%_40%] bg-[#f0d060]/20 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-24 h-80 w-80 rounded-[60%_40%_55%_45%/45%_55%_45%_55%] bg-purple-200/35 blur-3xl" />
      <div className="container relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: "linear-gradient(135deg, #f3e8ff, #ede9fe)" }}
          >
            <Award className="h-4 w-4 text-purple-700" />
            <span className="text-sm font-semibold text-purple-700">Conheça Nossas Formações</span>
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Formações de Capacitação Profissional{" "}
            <span className="text-gradient-brand">reconhecidas em todo o Brasil</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Cursos 100% online para fortalecer sua prática profissional. Comece hoje.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            { icon: Globe, label: "100% Online" },
            { icon: Clock, label: "Aulas ao Vivo e Gravadas" },
            { icon: Award, label: "Capacitação Reconhecida" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-foreground/60">
              <Icon className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Formação principal */}
        <article className="mb-8 overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/30 bg-white shadow-[0_22px_55px_rgba(61,0,112,0.12)]">
          <img
            src="/images/formacao-tc.png"
            alt="Formação Terapeuta Cristã"
            className="h-auto w-full"
          />
          <div className="flex flex-col gap-5 bg-gradient-to-r from-[#fffdf8] via-white to-[#f8f0ff] p-6 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-7">
            <div>
              <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-purple-700">Formação principal</p>
              <p className="font-display text-2xl font-semibold text-foreground">Formação Terapeutas Cristãs</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/60">
                Faça sua inscrição e prossiga para o checkout com cartão ou PIX.
              </p>
            </div>
            <CheckoutButton href={checkoutLinks.formacaoTc} label="Inscreva-se Agora" />
          </div>
        </article>

        {/* Formações complementares */}
        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-[1.5rem] border border-purple-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/images/teologia.png"
              alt="Formação em Teologia"
              className="h-auto w-full"
            />
            <div className="bg-[#fffdfa] p-6">
              <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-purple-700">Fé & conhecimento</p>
              <p className="font-display text-2xl font-semibold text-foreground">Formação em Teologia</p>
              <p className="mt-1 mb-5 text-sm leading-relaxed text-foreground/60">
                Clique para escolher cartão ou PIX no checkout seguro.
              </p>
              <CheckoutButton href={checkoutLinks.teologia} label="Matricule-se em Teologia" />
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.5rem] border border-purple-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <img
              src="/images/pos-graduacao.png"
              alt="Pós-Graduação em Neurociência Cristã e Transformação Comportamental"
              className="h-auto w-full"
            />
            <div className="bg-[#fffdfa] p-6">
              <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-purple-700">Especialização</p>
              <p className="font-display text-2xl font-semibold text-foreground">Pós-Graduação</p>
              <p className="mt-1 mb-5 text-sm leading-relaxed text-foreground/60">
                Neurociência Cristã e Transformação Comportamental.
              </p>
              <CheckoutButton href={checkoutLinks.posGraduacao} label="Inscreva-se na Pós" />
            </div>
          </article>
        </div>

        <article className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/35 bg-[#fffdfa] shadow-[0_22px_55px_rgba(61,0,112,0.12)]">
          <div aria-hidden="true" className="absolute -right-14 top-[44%] h-44 w-44 rounded-[48%_52%_44%_56%/60%_42%_58%_40%] bg-[#f0d060]/20 blur-3xl" />
          <img
            src="/manus-storage/psicanalise-neurociencia_8dcd3088.png"
            alt="Em breve: Psicanálise e Neurociência"
            className="h-auto w-full"
          />
          <div className="relative flex flex-col gap-5 bg-gradient-to-r from-[#fffdf8] via-white to-[#f8f0ff] p-6 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-7">
            <div>
              <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-purple-700">Em breve no Instituto TC</p>
              <p className="font-display text-2xl font-semibold text-foreground">Psicanálise e Neurociência</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/60">
                Uma nova formação está a caminho. Fale com a nossa equipe para receber as novidades.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97] sm:w-auto"
              style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)", color: "white" }}
            >
              <MessageCircle className="h-4 w-4" />
              Fale Conosco
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </article>

        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-purple-100 bg-white shadow-xl">
          <img
            src="/images/no-conforto.png"
            alt="Formações online no conforto da sua casa"
            className="h-auto w-full"
          />
        </div>

        <p className="mt-8 text-center text-sm text-foreground/55">
          Ao clicar em “Inscreva-se”, você será direcionada ao checkout para finalizar o pagamento por cartão ou PIX.
        </p>
      </div>
    </section>
  );
}

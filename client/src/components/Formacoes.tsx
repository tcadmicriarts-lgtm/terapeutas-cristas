/**
 * Direção visual: identidade Instituto TC — púrpura profundo, dourado, superfícies de pergaminho e curvas orgânicas.
 * Esta seção preserva imagens reais das formações, enquadrando-as em uma apresentação editorial e CTAs claros.
 */
import { ArrowUpRight, Award, CreditCard, Globe, Clock, MessageCircle } from "lucide-react";
import PsicanaliseLeadForm from "./PsicanaliseLeadForm";

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
          <div className="relative overflow-hidden bg-gradient-to-br from-[#3d0070] via-[#6b1fa8] to-[#a83fc6] px-6 py-10 text-white md:px-10 md:py-12">
            <div aria-hidden="true" className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[#f0d060]/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f0d060]/50 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f8df85]">
                <Award className="h-4 w-4" />
                Instituto TC
              </div>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Formação Terapeutas Cristãs
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Uma jornada de capacitação profissional para mulheres que desejam servir com propósito, conhecimento e fé.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">100% online</span>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">Aulas ao vivo e gravadas</span>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2">Capacitação profissional</span>
              </div>
            </div>
          </div>
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
              src="/manus-storage/teologia_0cd9cf69.png"
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
          <div className="relative grid gap-7 bg-gradient-to-r from-[#fffdf8] via-white to-[#f8f0ff] p-6 md:grid-cols-[minmax(0,1fr)_minmax(19rem,0.9fr)] md:items-center md:px-8 md:py-8">
            <div className="max-w-xl">
              <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-purple-700">Em breve no Instituto TC</p>
              <p className="font-display text-3xl font-semibold text-foreground">Psicanálise e Neurociência</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                Uma nova formação está a caminho. Cadastre-se para receber as informações de abertura, conteúdos e condições de inscrição.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-purple-700 transition-colors hover:text-purple-900"
              >
                <MessageCircle className="h-4 w-4" />
                Prefere falar com a equipe agora?
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <PsicanaliseLeadForm />
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

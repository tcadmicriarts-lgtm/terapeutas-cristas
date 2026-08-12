/**
 * Direção visual: identidade Instituto TC — púrpura profundo, dourado e presença editorial.
 * Os cursos livres usam imagens reais e um CTA de checkout direto, sem simulação de pagamento.
 */
import { ArrowUpRight, CreditCard } from "lucide-react";

const CURSOS_LIVRES_CHECKOUT = "https://pag.ae/818FLZegb";

export default function CursosLivres() {
  return (
    <section
      id="cursos"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #f8f0ff, #fdf4ff)" }}
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2">
            <span className="text-sm font-semibold text-purple-700">Cursos Livres</span>
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Cursos com Certificações de{" "}
            <span className="text-gradient-brand">Capacitação Profissional</span>
          </h2>
          <p className="mt-4 text-foreground/60">
            Inicie hoje mesmo a sua capacitação ministerial e terapêutica.
          </p>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-xl">
          <img
            src="/images/cursos-livres-valores.png"
            alt="Cursos Livres com condições de parcelamento e valores"
            className="h-auto w-full"
          />
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-xl">
          <img
            src="/manus-storage/cursos-modulos_f2257a06.png"
            alt="Cursos livres por módulos: Ministro de Cura, Batalha Espiritual, Cura Interior, Fundamentos da Fé, Libertação e Apocalipse"
            className="h-auto w-full"
          />
        </div>

        <div className="rounded-2xl border border-[#D4AF37]/30 bg-white p-7 text-center shadow-lg md:p-10">
          <p className="font-display text-2xl font-semibold text-foreground md:text-3xl">
            Pronta para começar sua capacitação?
          </p>
          <p className="mx-auto mt-3 max-w-xl text-foreground/60">
            Escolha seu curso livre e conclua a inscrição no checkout, com opções de pagamento por cartão ou PIX.
          </p>
          <a
            href={CURSOS_LIVRES_CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F0D060)",
              color: "#3d0070",
            }}
          >
            <CreditCard className="h-5 w-5" />
            Ver checkout dos Cursos Livres
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

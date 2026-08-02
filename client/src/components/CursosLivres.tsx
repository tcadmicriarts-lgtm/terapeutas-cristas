import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

export default function CursosLivres() {
  return (
    <section id="cursos" className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, #f8f0ff, #fdf4ff)" }}>
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-4">
            <span className="text-sm font-semibold text-purple-700">Cursos Livres</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Cursos com Certificações de{" "}
            <span className="text-gradient-brand">Capacitação Profissional</span>
          </h2>
          <p className="text-foreground/60 mt-4">
            12x sem juros. Inicie hoje mesmo a sua capacitação ministerial e terapêutica.
          </p>
        </div>

        {/* Cursos Livres pricing image */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-purple-100 mb-8">
          <img
            src="/manus-storage/cursos-livres_f151c566.png"
            alt="Cursos Livres - Terapeuta Nutricional, Marketing Digital, Palestrante de Sucesso, Aperfeiçoamento"
            className="w-full h-auto"
          />
        </div>

        {/* Cursos por módulos */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-purple-100 mb-8">
          <img
            src="/manus-storage/cursos-modulos_3cc32654.png"
            alt="Cursos Livres por Módulos - Ministro de Cura, Batalha Espiritual, Cura Interior, Fundamentos da Fé, Libertação, Apocalipse"
            className="w-full h-auto"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 text-lg"
            style={{ background: "linear-gradient(135deg, #6b1fa8, #9b3fd4)" }}
          >
            Quero conhecer os cursos
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

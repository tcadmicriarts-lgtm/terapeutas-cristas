import { GraduationCap, Compass, BookHeart } from "lucide-react";

const painPoints = [
  {
    icon: GraduationCap,
    title: "Sem certificação",
    description:
      "Você serve e aconselha, mas sente falta de um título reconhecido para atuar com segurança e credibilidade no mercado.",
  },
  {
    icon: Compass,
    title: "Sem direção para começar",
    description:
      "Tem o chamado, sente o propósito, mas não sabe como estruturar seu ministério e carreira de forma profissional.",
  },
  {
    icon: BookHeart,
    title: "Sem base bíblica sólida",
    description:
      "Deseja fundamentar sua prática terapêutica na Palavra, integrando fé e técnica com profundidade e segurança.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 md:py-28 bg-gradient-brand-soft">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-display italic text-lg text-primary mb-3">Talvez você esteja aqui porque sente que…</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Quando o seu chamado pede espaço no mercado,{" "}
            <span className="text-gradient-brand">a formação certa</span> vira a ponte segura para começar.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-brand-soft flex items-center justify-center mb-6 group-hover:gradient-brand transition-all">
                <point.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

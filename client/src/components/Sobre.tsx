import { Target, Users, Shield, HeartHandshake } from "lucide-react";

const valores = [
  {
    icon: Target,
    title: "Propósito",
    description: "Despertar mulheres para viverem seu chamado, cumprindo seu ministério com excelência e fé.",
  },
  {
    icon: Shield,
    title: "Capacitação",
    description: "Capacitação profissional reconhecida em todo o Brasil para atuar com segurança e credibilidade.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Uma rede de mulheres cristãs que se apoiam e crescem juntas em fé e técnica.",
  },
  {
    icon: HeartHandshake,
    title: "Acolhimento",
    description: "Um espaço seguro para superar medos e sentimentos de incapacidade com amor e direção.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Turma formada - full width real image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-16">
          <img
            src="/images/turma-formada.png"
            alt="Turma formada - Seja você a próxima Terapeuta Cristã"
            className="w-full h-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual quote card (no AI image) */}
          <div className="relative">
            <div
              className="rounded-3xl p-8 md:p-12 shadow-xl h-full flex flex-col justify-center"
              style={{ background: "linear-gradient(135deg, #3d0070 0%, #6b1fa8 100%)" }}
            >
              <HeartHandshake className="w-12 h-12 mb-6" style={{ color: "#D4AF37" }} />
              <blockquote className="font-display text-xl md:text-2xl text-white leading-relaxed italic mb-6">
                "Você pode viver do que ama, cumprir seu propósito e ainda impactar
                vidas com excelência."
              </blockquote>
              <p className="text-white/70 leading-relaxed">
                Nascemos do desejo de ver mulheres cristãs ocupando seus lugares no mercado de
                trabalho com dignidade, competência e autoridade espiritual.
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100">
              <span className="text-sm font-semibold text-purple-700">Nossa Missão</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Uma plataforma que une{" "}
              <span className="text-gradient-brand">fé, técnica e reconhecimento</span>{" "}
              para mulheres cristãs
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Nascemos do desejo de ver mulheres cristãs ocupando seus lugares no mercado de
              trabalho com dignidade, competência e autoridade espiritual. Acreditamos que é
              possível servir a Deus através do profissionalismo.
            </p>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Nossas formações preparam mulheres cristãs para ingressar no mercado de trabalho
              com reconhecimento, certificação e autoridade espiritual — superando medos e
              sentimentos de incapacidade.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {valores.map((valor, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 border border-purple-100 hover:shadow-md transition-all duration-300 hover:border-purple-300"
                  style={{ background: "linear-gradient(135deg, #faf5ff, #fdf4ff)" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-3">
                    <valor.icon className="w-5 h-5 text-purple-700" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-foreground mb-1">
                    {valor.title}
                  </h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {valor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

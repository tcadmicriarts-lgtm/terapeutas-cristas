/* Direção visual: identidade Instituto TC — púrpura e dourado com acentos botânicos discretos e presença editorial. */
import { BookOpen, Heart, Sparkles, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

const beneficios = [
  {
    icon: Heart,
    title: "Cura emocional à luz da Palavra",
    description: "Encontre restauração e libertação através de ensinamentos bíblicos práticos.",
  },
  {
    icon: Sparkles,
    title: "Fortalecimento da fé",
    description: "Devocionais que aproximam você de Deus e fortalecem sua caminhada espiritual.",
  },
  {
    icon: BookOpen,
    title: "Autoconhecimento cristão",
    description: "Descubra quem você é em Cristo e viva o propósito para o qual foi criada.",
  },
];

const dores = [
  "Você se sente cansada de ser forte sozinha?",
  "Carrega dores emocionais que parecem não ter fim?",
  "Sente que perdeu a conexão com Deus?",
  "Deseja um recomeço verdadeiro com Ele?",
];

export default function Livros() {
  return (
    <section id="livros" className="relative overflow-hidden py-20 md:py-28" style={{ background: "linear-gradient(180deg, #faf5ff 0%, #f3e8ff 100%)" }}>
      <div aria-hidden="true" className="absolute -right-24 top-16 h-80 w-80 rounded-[58%_42%_55%_45%/45%_58%_42%_55%] border-[28px] border-[#D4AF37]/15" />
      <div aria-hidden="true" className="absolute -bottom-24 -left-16 h-72 w-72 rounded-[42%_58%_45%_55%/55%_42%_58%_45%] bg-purple-200/30 blur-3xl" />
      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="font-display italic text-lg text-primary mb-3">Livros para Mulheres</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Livros para mulheres que estão{" "}
            <span className="text-gradient-brand italic">cansadas de ser fortes sozinhas</span>
          </h2>
          <p className="text-foreground/60 mt-4 text-lg">
            Livros cristãos devocionais e terapêuticos para mulheres que desejam cura emocional,
            fortalecimento da fé e um recomeço verdadeiro com Deus.
          </p>
        </div>

        <div className="relative mb-16 overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/30 bg-white shadow-[0_22px_55px_rgba(61,0,112,0.12)]">
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/50 bg-[#3d0070]/90 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#F0D060] shadow-lg">
            Coleção Instituto TC
          </div>
          <img
            src="/manus-storage/livros-para-mulheres_9eac413a.png"
            alt="Livros para Mulheres: Desabrochar, É Amor ou Cilada, Mulheres como Luzeiros no Mundo e Como Amar o Outro sem Perder a Si Mesma"
            className="h-auto w-full"
          />
        </div>

        {/* Conteúdo editorial acompanhado pela imagem real dos livros */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Dores */}
          <div className="space-y-6 rounded-[1.75rem] bg-white/60 p-6 backdrop-blur-sm md:p-8">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Se alguma dessas dores é sua…
            </h3>
            <ul className="space-y-3">
              {dores.map((dor, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-lg">{dor}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-100">
              <p className="text-foreground/70 leading-relaxed">
                <strong className="text-foreground">Saiba que existe esperança.</strong> Muitas mulheres
                já passaram por isso e encontraram cura e transformação através da Palavra.
                Nossos livros te conectam com Deus.
              </p>
            </div>
          </div>

          {/* Right - CTA card */}
          <div className="relative">
            <div
              className="rounded-[1.75rem] border border-[#D4AF37]/20 p-8 shadow-xl md:p-10"
              style={{ background: "linear-gradient(135deg, #3d0070 0%, #6b1fa8 100%)" }}
            >
              <BookOpen className="w-12 h-12 mb-6" style={{ color: "#D4AF37" }} />
              <h4 className="font-display text-2xl font-bold text-white mb-4">
                Devocionais que transformam
              </h4>
              <p className="text-white/80 leading-relaxed mb-8">
                Cada página foi escrita para acolher sua dor, renovar sua fé e te conduzir
                a um recomeço verdadeiro com Deus. Palavras que curam, histórias que inspiram,
                ensinamentos que libertam.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Cura emocional através da Palavra",
                  "Devocionais práticos para o dia a dia",
                  "Recomeço verdadeiro com Deus",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <Heart className="w-4 h-4 flex-shrink-0" style={{ color: "#D4AF37" }} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-purple-900"
                style={{ background: "linear-gradient(135deg, #D4AF37, #F0D060)" }}
              >
                Comprar agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {beneficios.map((beneficio, i) => (
            <div
              key={i}
              className="rounded-[1.5rem] border border-purple-100 bg-white/90 p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "linear-gradient(135deg, #faf5ff, #f3e8ff)" }}>
                <beneficio.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                {beneficio.title}
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

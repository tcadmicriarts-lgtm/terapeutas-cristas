import { ArrowRight, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #3d0070 0%, #6b1fa8 40%, #8b2fbe 60%, #a040d0 100%)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Main content */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-semibold text-white">Pós-Graduação & Extensão Universitária</span>
            </div>

            {/* Heading */}
            <div>
              <p className="text-white/80 text-lg mb-2 font-medium tracking-wide uppercase text-sm">
                Formação Especialista
              </p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                Terapeutas<br />
                <span style={{ color: "#D4AF37" }}>Cristãs</span>
              </h1>
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              Construa sua carreira sem abrir mão da sua fé. Capacite-se para transformar vidas
              e ser reconhecida com certificação oficial pelo MEC.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-5 border-y border-white/20">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-white">+50</p>
                <p className="text-xs text-white/70 mt-1">Alunas formadas</p>
              </div>
              <div className="text-center border-x border-white/20">
                <p className="font-display text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-white/70 mt-1">Online</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold" style={{ color: "#D4AF37" }}>MEC</p>
                <p className="text-xs text-white/70 mt-1">Certificado</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formacoes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 text-purple-900"
                style={{ background: "linear-gradient(135deg, #D4AF37, #F0D060)" }}
              >
                Ver Formações
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold border border-white/40 hover:bg-white/30 transition-all hover:scale-105 active:scale-95"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Real image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <img
                  src="/manus-storage/tc-banner_f88515fb.png"
                  alt="Formação Especialista Terapeutas Cristãs"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 max-w-[200px]">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-gray-800">Certificação reconhecida</p>
                <p className="text-xs text-gray-500">em todo o Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

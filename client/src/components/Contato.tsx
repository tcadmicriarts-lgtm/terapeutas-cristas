import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";
const EMAIL = "adeildaedebora@gmail.com";

export default function Contato() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full gradient-brand blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full gradient-brand blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-brand-soft mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Vamos conversar</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Pronta para dar o próximo passo{" "}
            <span className="text-gradient-brand">no seu chamado?</span>
          </h2>

          <p className="text-foreground/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Fale com nossa equipe e descubra como unir fé, técnica e chamado em uma
            formação de capacitação profissional reconhecida em todo o Brasil.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-brand text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground font-semibold border border-border shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              Enviar e-mail
            </a>
          </div>

          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-brand-soft hover:shadow-md transition-all text-left"
            >
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-semibold text-foreground">+55 11 98994-3662</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-brand-soft hover:shadow-md transition-all text-left"
            >
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <p className="font-semibold text-foreground text-sm">{EMAIL}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

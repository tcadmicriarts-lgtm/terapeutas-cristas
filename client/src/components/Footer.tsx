import { MessageCircle, Mail, Heart } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";
const EMAIL = "adeildaedebora@gmail.com";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Formações", href: "#formacoes" },
  { label: "Livros", href: "#livros" },
  { label: "Método", href: "#metodo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shadow-lg">
                <span className="font-display font-bold text-white text-xl">TC</span>
              </div>
              <div>
                <p className="font-display text-xl font-semibold">Terapeutas Cristãs</p>
                <p className="text-sm text-background/60">Formação com Fé e Certificação</p>
              </div>
            </div>
            <p className="text-background/60 leading-relaxed text-sm max-w-xs">
              Plataforma cristã de cursos, mentorias e formações para mulheres que desejam
              atuar com fé, técnica e reconhecimento oficial.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/60 hover:text-background transition-colors text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  +55 11 98994-3662
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-background/60 hover:text-background transition-colors text-sm"
                >
                  <Mail className="w-5 h-5" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Terapeutas Cristãs. Todos os direitos reservados.
          </p>
          <p className="text-background/40 text-sm flex items-center gap-1.5">
            Feito com <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> e fé.
          </p>
        </div>
      </div>
    </footer>
  );
}

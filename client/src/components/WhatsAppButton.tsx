import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511989943662";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-brand flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute inset-0 rounded-full gradient-brand animate-ping opacity-20" />
      <span className="absolute right-full mr-3 whitespace-nowrap bg-white text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
}

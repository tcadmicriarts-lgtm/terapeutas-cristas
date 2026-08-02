import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Formacoes from "@/components/Formacoes";
import CursosLivres from "@/components/CursosLivres";
import Livros from "@/components/Livros";
import Metodo from "@/components/Metodo";
import Sobre from "@/components/Sobre";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Formacoes />
        <CursosLivres />
        <Livros />
        <Metodo />
        <Sobre />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

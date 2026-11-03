import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import FeaturedProject from "@/components/FeaturedProject";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-linen">
      <Header />
      <div className="relative min-h-[100svh] md:h-[120svh] motion-reduce:md:h-[100svh]">
        <div className="relative min-h-[100svh] md:sticky md:top-0 md:h-[100svh] motion-reduce:relative">
          <Hero />
        </div>
      </div>
      <div className="relative z-10 md:-mt-[20svh] motion-reduce:mt-0">
        <About />
        <Projects />
        <Benefits />
        <Process />
        <FeaturedProject />
        <CTA />
        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
}

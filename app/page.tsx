import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import FeaturedProject from "@/components/FeaturedProject";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-linen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Benefits />
      <Process />
      <FeaturedProject />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

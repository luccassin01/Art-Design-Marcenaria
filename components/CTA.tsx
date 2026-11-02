import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-ink-950 py-28 lg:py-36">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
          alt="Detalhe de marcenaria planejada em tons neutros"
          fill
          sizes="50vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-content px-6 lg:px-12">
        <span className="mb-8 block h-px w-16 gold-rule" />
        <h2 className="max-w-lg font-serif text-3xl leading-tight text-linen sm:text-4xl lg:text-5xl">
          Seu espaço merece um projeto único.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-linen/65">
          Conte-nos sobre o ambiente que você deseja transformar.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-sm bg-gradient-to-b from-bronze-300 to-bronze-600 px-9 py-4 text-sm font-medium text-ink-950 transition-transform duration-300 hover:scale-[1.02]"
        >
          Falar com a Art Design
        </a>
      </div>
    </section>
  );
}

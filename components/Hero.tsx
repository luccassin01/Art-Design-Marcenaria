import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="topo" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
        alt="Cozinha planejada de alto padrão em madeira nobre e mármore, com iluminação natural"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Camada azul-marinho para preservar a identidade da marca sobre a foto */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/70 to-ink-900/30" />
      <div className="absolute inset-0 bg-ink-900/20" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-40 lg:px-12 lg:pb-28">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-serif text-sm tracking-wide text-linen">
            Art Design
          </span>
          <span className="h-px w-10 gold-rule" />
          <span className="text-[11px] tracking-widest2 text-bronze-300">
            MARCENARIA
          </span>
        </div>

        <h1 className="max-w-3xl font-serif text-[2.2rem] leading-[1.15] text-linen sm:text-5xl lg:text-6xl">
          Projetamos ambientes que transformam espaços em experiências.
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-linen/75 lg:text-lg">
          Móveis sob medida desenvolvidos para unir design, funcionalidade e
          acabamento em cada detalhe.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-gradient-to-b from-bronze-300 to-bronze-600 px-8 py-3.5 text-sm font-medium text-ink-950 transition-transform duration-300 hover:scale-[1.02]"
          >
            Solicitar orçamento
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center justify-center rounded-sm border border-linen/25 px-8 py-3.5 text-sm text-linen transition-colors duration-300 hover:border-bronze-300 hover:text-bronze-300"
          >
            Conheça nossos projetos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="h-10 w-px bg-linen/30" />
        <span className="text-[10px] tracking-widest2 text-linen/50">
          ROLAR
        </span>
      </div>
    </section>
  );
}

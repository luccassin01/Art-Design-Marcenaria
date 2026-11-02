import Image from "next/image";

const MARKERS = [
  "Projetos sob medida",
  "Design personalizado",
  "Acabamento de alto padrão",
];

export default function About() {
  return (
    <section id="sobre" className="bg-linen py-24 lg:py-36">
      <div className="mx-auto grid max-w-content gap-14 px-6 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="relative h-[420px] lg:col-span-5 lg:h-[620px]">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
            alt="Painel de marcenaria em madeira nobre com detalhe de acabamento"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <span className="absolute -bottom-5 -right-5 hidden h-24 w-24 border border-bronze-400/50 lg:block" />
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <h2 className="max-w-md font-serif text-3xl leading-tight text-ink-900 lg:text-4xl">
            Design pensado para o seu espaço.
          </h2>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-900/70">
            A Art Design Marcenaria transforma ideias em ambientes
            personalizados, desenvolvendo móveis sob medida que valorizam
            cada espaço, cada detalhe e cada escolha.
          </p>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-900/70">
            Do projeto à instalação, unimos precisão, qualidade e design para
            criar ambientes que realmente pertencem a quem os vive.
          </p>

          <div className="mt-12 flex flex-col gap-4 border-t border-ink-900/10 pt-8 sm:flex-row sm:gap-10">
            {MARKERS.map((marker) => (
              <span
                key={marker}
                className="text-xs tracking-wide text-ink-900/60"
              >
                {marker}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section className="relative flex h-[85vh] min-h-[560px] items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80"
        alt="Sala de estar contemporânea com marcenaria planejada, madeira e mármore"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/55" />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 lg:px-12">
        <h2 className="max-w-xl font-serif text-3xl leading-tight text-linen sm:text-4xl lg:text-5xl">
          Um ambiente.
          <br />
          Uma identidade.
        </h2>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-linen/70 lg:text-base">
          Projetos personalizados para quem valoriza design, funcionalidade e
          detalhes.
        </p>
        <a
          href="#projetos"
          className="mt-10 inline-flex items-center justify-center border border-bronze-300/60 px-8 py-3.5 text-sm text-bronze-300 transition-colors duration-300 hover:bg-bronze-300/10"
        >
          Ver projetos
        </a>
      </div>
    </section>
  );
}

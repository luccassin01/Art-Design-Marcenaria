const PLACEHOLDER_TESTIMONIALS = [1, 2, 3];

export default function Testimonials() {
  return (
    <section className="bg-linen py-24 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <h2 className="max-w-lg font-serif text-3xl leading-tight text-ink-900 lg:text-4xl">
          A experiência também faz parte do projeto.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {PLACEHOLDER_TESTIMONIALS.map((n) => (
            <figure key={n} className="border-t border-ink-900/10 pt-6">
              <blockquote className="text-[15px] italic leading-relaxed text-ink-900/70">
                [Depoimento do cliente]
              </blockquote>
              <figcaption className="mt-5 text-xs tracking-wide text-ink-900/50">
                [Nome do cliente]
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

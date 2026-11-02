const STEPS = [
  {
    number: "01",
    title: "Conversa",
    text: "Entendemos seu espaço, suas necessidades e suas referências.",
  },
  {
    number: "02",
    title: "Projeto",
    text: "Desenvolvemos a solução ideal para o ambiente.",
  },
  {
    number: "03",
    title: "Produção",
    text: "Transformamos o projeto em móveis com precisão.",
  },
  {
    number: "04",
    title: "Instalação",
    text: "Finalizamos o ambiente com atenção a cada detalhe.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="bg-linen py-24 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <h2 className="max-w-lg font-serif text-3xl leading-tight text-ink-900 lg:text-4xl">
          Do conceito à realidade.
        </h2>

        <ol className="mt-16 flex flex-col lg:flex-row lg:items-start lg:gap-6">
          {STEPS.map((step, index) => (
            <li key={step.number} className="flex flex-1 lg:flex-col">
              <div className="flex flex-col items-start lg:items-start">
                <span className="font-serif text-2xl text-bronze-600">
                  {step.number}
                </span>
                <h3 className="mt-3 font-serif text-lg text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-ink-900/60">
                  {step.text}
                </p>
              </div>

              {index < STEPS.length - 1 && (
                <div className="mx-6 hidden items-center lg:flex">
                  <span className="mt-3 h-px w-16 gold-rule" />
                </div>
              )}
              {index < STEPS.length - 1 && (
                <div className="my-6 ml-3 flex lg:hidden">
                  <span className="h-10 w-px gold-rule" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

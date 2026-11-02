const ITEMS = [
  {
    number: "01",
    title: "Projeto personalizado",
    text: "Cada solução é desenvolvida considerando o ambiente, o estilo e as necessidades de cada cliente.",
  },
  {
    number: "02",
    title: "Sob medida",
    text: "Aproveitamento inteligente de cada espaço, respeitando proporções e características do ambiente.",
  },
  {
    number: "03",
    title: "Acabamento",
    text: "Atenção aos detalhes, materiais e acabamento para entregar um resultado sofisticado.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "Do primeiro contato à instalação, cada etapa é acompanhada com cuidado.",
  },
];

export default function Benefits() {
  return (
    <section className="texture-ink py-24 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <h2 className="max-w-lg font-serif text-3xl leading-tight text-linen lg:text-4xl">
          Precisão em cada detalhe.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <div key={item.number} className="border-t border-linen/10 pt-6">
              <span className="font-serif text-4xl text-bronze-400/80">
                {item.number}
              </span>
              <h3 className="mt-4 font-serif text-xl text-linen">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-linen/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

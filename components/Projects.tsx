import Image from "next/image";

type Project = {
  name: string;
  category: string;
  image: string;
  span: string; // tailwind grid span classes
};

const PROJECTS: Project[] = [
  {
    name: "Residência Jardins",
    category: "Cozinhas",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    span: "lg:col-span-7 lg:row-span-2 h-[420px] lg:h-full",
  },
  {
    name: "Studio Vila Nova",
    category: "Home Office",
    image:
      "https://images.unsplash.com/photo-1593476550610-87baa860004a?auto=format&fit=crop&w=1000&q=80",
    span: "lg:col-span-5 h-[320px]",
  },
  {
    name: "Apartamento Higienópolis",
    category: "Salas",
    image:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1000&q=80",
    span: "lg:col-span-5 h-[320px]",
  },
  {
    name: "Cobertura Panorama",
    category: "Closets",
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=1000&q=80",
    span: "lg:col-span-4 h-[300px]",
  },
  {
    name: "Escritório Central",
    category: "Escritórios",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1000&q=80",
    span: "lg:col-span-4 h-[300px]",
  },
  {
    name: "Residência Alto de Pinheiros",
    category: "Quartos",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80",
    span: "lg:col-span-4 h-[300px]",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="bg-linen py-24 lg:py-36">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-lg font-serif text-3xl leading-tight text-ink-900 lg:text-4xl">
            Projetos que falam por si.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink-900/60">
            Cada ambiente nasce de uma necessidade. Cada detalhe é pensado
            para fazer parte dela.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-4">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href="#contato"
              className={`group relative block overflow-hidden ${project.span}`}
            >
              <Image
                src={project.image}
                alt={`${project.name} — projeto de marcenaria sob medida, categoria ${project.category}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-ink-950/0 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 opacity-0 transition-all duration-400 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <p className="text-[11px] tracking-widest2 text-bronze-300">
                    {project.category}
                  </p>
                  <p className="mt-1 font-serif text-lg text-linen">
                    {project.name}
                  </p>
                </div>
                <span className="font-serif text-xl text-linen">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

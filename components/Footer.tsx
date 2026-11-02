import {
  getWhatsAppLink,
  WHATSAPP_DISPLAY_NUMBER,
} from "@/lib/whatsapp";

const LINKS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 pb-10 pt-20">
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 border-b border-linen/10 pb-14 sm:grid-cols-3">
          <div>
            <span className="font-serif text-xl text-linen">Art Design</span>
            <span className="mt-1 block text-[10px] tracking-widest2 text-bronze-300">
              MARCENARIA
            </span>
            <p className="mt-6 max-w-[220px] text-sm leading-relaxed text-linen/50">
              Móveis sob medida que unem design, funcionalidade e acabamento.
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-widest2 text-linen/40">
              Navegação
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-linen/70 transition-colors duration-300 hover:text-bronze-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-widest2 text-linen/40">
              Contato
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-linen/70">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-bronze-300"
                >
                  WhatsApp — {WHATSAPP_DISPLAY_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@artdesignmarcenaria.com.br"
                  className="transition-colors duration-300 hover:text-bronze-300"
                >
                  contato@artdesignmarcenaria.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-xs text-linen/30">
          © {year} Art Design Marcenaria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

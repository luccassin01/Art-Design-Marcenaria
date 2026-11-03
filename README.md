# Art Design Marcenaria — Landing Page

Landing page premium para a Art Design Marcenaria, construída com Next.js 14 (App Router), React, TypeScript e Tailwind CSS.

## Sobre a logo

Este projeto foi construído a partir da **descrição** da identidade visual fornecida (fundo azul-marinho, tipografia serifada, detalhes dourados/bronze) — nenhum arquivo de imagem da logo chegou anexado a esta conversa, apenas o texto do briefing. Os tokens de cor e tipografia seguem essa descrição fielmente. Se você enviar o arquivo real da logo, o design pode ser ajustado com mais precisão (peso exato do dourado, proporções, textura de fundo).

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Como personalizar

- **WhatsApp**: edite `lib/whatsapp.ts` — número e mensagem automática. O número de contato atual também é exibido no rodapé.
- **Imagens**: todas as fotos usam placeholders do Unsplash via `next/image`. Basta trocar a URL em `src` em cada componente (`Hero.tsx`, `About.tsx`, `Projects.tsx`, `FeaturedProject.tsx`, `CTA.tsx`) por fotos reais dos projetos.
- **Contato**: o rodapé exibe o WhatsApp configurado em `lib/whatsapp.ts`. Outros dados de contato só devem ser adicionados quando confirmados.
- **Depoimentos**: a seção foi removida até que avaliações reais de clientes estejam disponíveis.
- **Cores**: tokens em `tailwind.config.ts` (`ink`, `bronze`, `linen`).
- **Tipografia**: Playfair Display (serif, títulos) + Inter (sans, textos/navegação), carregadas via `next/font` em `app/layout.tsx`.
- **Open Graph**: adicione uma imagem real em `public/og-image.jpg` (1200×630) para as prévias de compartilhamento.

## Estrutura

```
app/
  layout.tsx      Metadata, SEO, fontes
  page.tsx        Composição das seções
  globals.css     Textura, foco visível, prefers-reduced-motion
components/
  Header, Hero, About, Projects, Benefits, Process,
  FeaturedProject, Testimonials, CTA, Footer, WhatsAppButton
lib/
  whatsapp.ts     Número e link do WhatsApp centralizados
```

## Deploy

Pronto para deploy na Vercel: `vercel --prod`, ou qualquer host compatível com Next.js.

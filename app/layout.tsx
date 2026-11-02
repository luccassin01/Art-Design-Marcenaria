import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.artdesignmarcenaria.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Art Design Marcenaria | Móveis Sob Medida",
  description:
    "Projetos de marcenaria sob medida que unem design, funcionalidade e acabamento para transformar seus ambientes.",
  openGraph: {
    title: "Art Design Marcenaria | Móveis Sob Medida",
    description:
      "Projetos de marcenaria sob medida que unem design, funcionalidade e acabamento para transformar seus ambientes.",
    url: siteUrl,
    siteName: "Art Design Marcenaria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Art Design Marcenaria — projetos de marcenaria sob medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Art Design Marcenaria | Móveis Sob Medida",
    description:
      "Projetos de marcenaria sob medida que unem design, funcionalidade e acabamento para transformar seus ambientes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

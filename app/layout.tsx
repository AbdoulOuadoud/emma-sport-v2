import type { Metadata } from "next";
import "./globals.css";
import ScrollRevealEffect from "@/components/ScrollRevealEffect";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emma-sport.bj";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Emma Sport — Équipez-vous comme un champion",
    template: "%s | Emma Sport",
  },
  description:
    "EMMA SPORT — entreprise béninoise spécialisée dans les équipements sportifs. Maillots, crampons, fitness, trophées, tenues personnalisées. Livraison sur tout le territoire. Bénin & Afrique de l'Ouest.",
  keywords: [
    "Emma Sport",
    "équipements sportifs Bénin",
    "maillots football",
    "crampons",
    "fitness Bénin",
    "trophées médailles",
    "personnalisation maillots",
    "sport Bénin",
    "Abomey-Calavi",
  ],
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    siteName: "Emma Sport",
    title: "Emma Sport — Équipez-vous comme un champion",
    description:
      "Entreprise béninoise spécialisée dans les équipements sportifs. Maillots authentiques, crampons, fitness, trophées et personnalisation. Livraison sur tout le territoire.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emma Sport",
    description: "Équipements sportifs au Bénin — Football, Fitness, Musculation, Trophées et plus.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Nunito:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollRevealEffect />
        {children}
      </body>
    </html>
  );
}

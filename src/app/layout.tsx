import type { Metadata, Viewport } from "next";
import { Inter, Sora, Fraunces } from "next/font/google";
import "./globals.css";
import { CONTACTO } from "@/lib/data/contenido";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${CONTACTO.nombrePublico} · la alegría tambien transforma`,
    template: `%s · ${CONTACTO.nombrePublico}`,
  },
  description:
    "El primer paso siempre es animarse. Reporta problemas, súmate como voluntario y conoce mi trabajo diario en Benito Juárez.",
  keywords: [
    "Carlos De la O",
    "Benito Juárez",
    "Movimiento Ciudadano",
    "participación ciudadana",
    "reportar problemas",
    "voluntariado CDMX",
  ],
  authors: [{ name: CONTACTO.nombreCompleto }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: CONTACTO.nombrePublico,
    title: `${CONTACTO.nombrePublico} · Movimiento Ciudadano`,
    description:
      "Hago comunidad y le resuelvo al vecino.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: CONTACTO.nombrePublico,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONTACTO.nombrePublico} · Movimiento Ciudadano`,
    description:
      "Hago comunidad y le resuelvo al vecino.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF5A1F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${sora.variable} ${fraunces.variable}`}
    >
      <body>
        {/* Enlace para saltar al contenido (accesibilidad). */}
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-naranja-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}

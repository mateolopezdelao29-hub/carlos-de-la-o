import type { MetadataRoute } from "next";
import { COLUMNAS } from "@/lib/data/contenido";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const columnas = COLUMNAS.map((c) => ({
    url: `${base}/columna/${c.slug}`,
    lastModified: new Date(c.fecha),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/columna`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/aviso-de-privacidad`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terminos`, changeFrequency: "yearly", priority: 0.3 },
    ...columnas,
  ];
}

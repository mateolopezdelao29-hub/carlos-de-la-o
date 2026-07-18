import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Reveal } from "@/components/reveal";
import { COLUMNAS } from "@/lib/data/contenido";
import { formatearFecha } from "@/lib/utils";

export const metadata: Metadata = {
  title: "La columna",
  description:
    "Columnas de opinión sobre temas de interés público en Benito Juárez, por Carlos De la O.",
};

export default function ColumnasPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28">
        <div className="container py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-tinta-mute hover:text-naranja-600"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al inicio
          </Link>

          <header className="mt-8 max-w-2xl border-b border-tinta pb-8">
            <p className="eyebrow">La columna</p>
            <h1 className="mt-4 font-editorial text-4xl font-semibold italic text-tinta sm:text-5xl">
              Todas las columnas
            </h1>
            <p className="mt-4 text-lg text-tinta-mute">
              Opinión sobre lo público, con nombre y fecha. Una nueva cada semana.
            </p>
          </header>

          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {COLUMNAS.map((col, i) => (
              <Reveal key={col.slug} delay={i % 3}>
                <Link href={`/columna/${col.slug}`} className="group block">
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-crema">
                    <Image
                      src={col.imagen}
                      alt={col.titulo}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-tinta-mute">
                    <time>{formatearFecha(col.fecha)}</time>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {col.minutosLectura} min
                    </span>
                  </div>
                  <h2 className="mt-2 font-editorial text-xl font-semibold text-tinta transition-colors group-hover:text-naranja-700">
                    {col.titulo}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-tinta-mute">
                    {col.extracto}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { COLUMNAS } from "@/lib/data/contenido";
import { formatearFecha } from "@/lib/utils";

type Props = { params: { slug: string } };

/** Genera las rutas estáticas de cada columna en build. */
export function generateStaticParams() {
  return COLUMNAS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const col = COLUMNAS.find((c) => c.slug === params.slug);
  if (!col) return {};
  return {
    title: col.titulo,
    description: col.extracto,
    openGraph: {
      title: col.titulo,
      description: col.extracto,
      images: [{ url: col.imagen }],
      type: "article",
    },
  };
}

export default function ColumnaPage({ params }: Props) {
  const col = COLUMNAS.find((c) => c.slug === params.slug);
  if (!col) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-white pt-28">
        <article className="container py-16">
          <div className="mx-auto max-w-prose">
            <Link
              href="/columna"
              className="inline-flex items-center gap-2 text-sm font-medium text-tinta-mute hover:text-naranja-600"
            >
              <ArrowLeft className="h-4 w-4" /> Todas las columnas
            </Link>

            <header className="mt-8">
              <p className="eyebrow">La columna de la semana</p>
              <h1 className="mt-4 font-editorial text-4xl font-semibold leading-tight text-tinta sm:text-5xl">
                {col.titulo}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-tinta-mute">
                <span className="font-medium text-tinta">Por {col.autor}</span>
                <span>·</span>
                <time>{formatearFecha(col.fecha)}</time>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {col.minutosLectura} min de lectura
                </span>
              </div>
            </header>
          </div>

          <div className="relative mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl bg-crema">
            <Image
              src={col.imagen}
              alt={col.titulo}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-12 max-w-prose">
            {col.contenido.map((parrafo, i) => (
              <p
                key={i}
                className="mb-6 font-editorial text-lg leading-relaxed text-tinta-suave first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-naranja-500 [&:not(:first-child)]:first-letter:float-none [&:not(:first-child)]:first-letter:m-0 [&:not(:first-child)]:first-letter:text-lg [&:not(:first-child)]:first-letter:font-editorial [&:not(:first-child)]:first-letter:text-tinta-suave"
              >
                {parrafo}
              </p>
            ))}

            <div className="mt-12 rounded-2xl bg-crema p-8 text-center">
              <p className="font-display text-lg font-semibold text-tinta">
                ¿Te resonó esta columna?
              </p>
              <p className="mt-2 text-tinta-mute">
                Recíbela cada semana junto con las acciones de la comunidad.
              </p>
              <Link
                href="/#columna"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-naranja-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-naranja-600"
              >
                Suscribirme al newsletter
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

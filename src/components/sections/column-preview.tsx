import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { COLUMNAS } from "@/lib/data/contenido";
import { formatearFecha } from "@/lib/utils";

export function ColumnPreview() {
  const [destacada, ...anteriores] = COLUMNAS;

  return (
    <section id="columna" className="section bg-white">
      <div className="container">
        <div className="flex flex-col gap-4 border-b border-tinta pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">La columna de la semana</p>
            <h2 className="mt-3 font-editorial text-4xl font-semibold italic text-tinta sm:text-5xl">
              Palabras que acompañan la acción
            </h2>
          </div>
          <Button asChild variant="ghost" className="self-start sm:self-auto">
            <Link href="/columna">
              Ver todas las columnas <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Columna destacada — portada de "periódico" */}
        <Reveal className="mt-12">
          <Link
            href={`/columna/${destacada.slug}`}
            className="group grid gap-8 md:grid-cols-2 md:gap-12"
          >
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-crema">
              <Image
                src={destacada.imagen}
                alt={destacada.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-tinta-mute">
                <span className="font-medium text-naranja-600">Edición reciente</span>
                <span>·</span>
                <time>{formatearFecha(destacada.fecha)}</time>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {destacada.minutosLectura} min
                </span>
              </div>
              <h3 className="mt-4 font-editorial text-3xl font-semibold leading-tight text-tinta transition-colors group-hover:text-naranja-700 sm:text-4xl">
                {destacada.titulo}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-tinta-mute">
                {destacada.extracto}
              </p>
              <p className="mt-6 text-sm font-medium text-tinta">
                Por {destacada.autor}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 font-semibold text-naranja-600">
                Leer columna <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Columnas anteriores */}
        {anteriores.length > 0 && (
          <div className="mt-16 grid gap-8 border-t border-linea pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {anteriores.map((col, i) => (
              <Reveal key={col.slug} delay={i}>
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
                  <h4 className="mt-2 font-editorial text-xl font-semibold text-tinta transition-colors group-hover:text-naranja-700">
                    {col.titulo}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-tinta-mute">
                    {col.extracto}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PROYECTOS } from "@/lib/data/contenido";

export function Work() {
  return (
    <section id="trabajo" className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Mi trabajo"
          title="Lo que ya estamos haciendo"
          description="Proyectos reales, con fecha e impacto. Porque el trabajo se demuestra, no se anuncia."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROYECTOS.map((p, i) => (
            <Reveal key={p.slug} delay={i % 3}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-linea bg-white transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(20,20,20,0.25)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-crema">
                  <Image
                    src={p.imagen}
                    alt={p.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-tinta backdrop-blur">
                    {p.fecha}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-tinta">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 flex-1 leading-relaxed text-tinta-mute">
                    {p.descripcion}
                  </p>
                  <div className="mt-5 border-t border-linea pt-4">
                    <span className="eyebrow">Impacto</span>
                    <p className="mt-1 font-medium text-tinta">{p.impacto}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

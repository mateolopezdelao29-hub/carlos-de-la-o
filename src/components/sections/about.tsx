import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TIMELINE, CONTACTO } from "@/lib/data/contenido";

export function About() {
  return (
    <section id="sobre-mi" className="section bg-white">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Retrato */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-crema">
              <Image
                src="/images/retrato.jpg"
                alt="Retrato de Carlos De la O"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm text-tinta-mute">
              {CONTACTO.nombreCompleto}. Delegado de Fundación México con Valores
              y Coach del Campus Naranja.
            </p>
          </Reveal>

          {/* Historia + timeline */}
          <div>
            <SectionHeading
              eyebrow="Sobre mí"
              title="No soy un político. Soy un vecino que decidió actuar."
              description="Mi historia no empieza en una oficina. Empieza caminando las calles de mi alcaldía y preguntándome qué podía hacer yo."
            />

            <div className="mt-14 space-y-0">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.titulo} delay={i}>
                  <div className="relative grid grid-cols-[auto_1fr] gap-6 pb-10">
                    {/* Riel de la línea del tiempo */}
                    <div className="flex flex-col items-center">
                      <span className="grid h-3 w-3 place-items-center rounded-full bg-naranja-500 ring-4 ring-naranja-100" />
                      {i < TIMELINE.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-linea" />
                      )}
                    </div>
                    <div className="-mt-1 pb-2">
                      <span className="eyebrow">{item.anio}</span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-tinta">
                        {item.titulo}
                      </h3>
                      <p className="mt-2 leading-relaxed text-tinta-mute">
                        {item.texto}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

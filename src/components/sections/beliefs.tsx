import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CREENCIAS } from "@/lib/data/contenido";

export function Beliefs() {
  return (
    <section id="creo" className="section bg-crema">
      <div className="container">
        <SectionHeading
          eyebrow="Mis convicciones"
          title="Las causas que me mueven"
          description="Los principios con los que trabajo y sonrio todos los días."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CREENCIAS.map((c, i) => {
            const Icon = c.icono;
            return (
              <Reveal key={c.titulo} delay={i % 3}>
                <article className="group h-full rounded-2xl border border-linea bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-naranja-200 hover:shadow-[0_12px_40px_-12px_rgba(240,62,0,0.18)]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-naranja-50 text-naranja-600 transition-colors group-hover:bg-naranja-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-tinta">
                    {c.titulo}
                  </h3>
                  <p className="mt-2 leading-relaxed text-tinta-mute">
                    {c.texto}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

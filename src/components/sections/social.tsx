import { Instagram, Facebook } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CONTACTO } from "@/lib/data/contenido";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function Social() {
  const redes = [
    {
      icon: Instagram,
      nombre: "Instagram",
      handle: "@carlosdelao",
      desc: "Historias y momentos del día a día en la comunidad.",
      href: CONTACTO.instagram,
    },
    {
      icon: XIcon,
      nombre: "X",
      handle: "@carlosdelao",
      desc: "Ideas cortas y lo que está pasando en Benito Juárez.",
      href: CONTACTO.x,
    },
    {
      icon: Facebook,
      nombre: "Facebook",
      handle: "Carlos De la O",
      desc: "Eventos, convocatorias y avisos para vecinos.",
      href: CONTACTO.facebook,
    },
  ];

  return (
    <section className="section bg-tinta">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-naranja-300 [&::before]:bg-naranja-400">
            Redes sociales
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
            Sigue el movimiento, día con día
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Lo que hacemos no cabe en una sola página. Acompáñanos en redes y sé
            parte de la conversación.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {redes.map(({ icon: Icon, nombre, handle, desc, href }, i) => (
            <Reveal key={nombre} delay={i}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-naranja-400/50 hover:bg-white/[0.06]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-naranja-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {nombre}
                </h3>
                <p className="text-sm text-naranja-300">{handle}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

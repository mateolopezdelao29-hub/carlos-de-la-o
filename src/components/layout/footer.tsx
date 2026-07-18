import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { CONTACTO } from "@/lib/data/contenido";

// Ícono de X (Twitter) — Lucide aún no lo trae con este trazo.
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function Footer() {
  const redes = [
    { icon: Instagram, href: CONTACTO.instagram, label: "Instagram" },
    { icon: XIcon, href: CONTACTO.x, label: "X" },
    { icon: Facebook, href: CONTACTO.facebook, label: "Facebook" },
    {
      icon: MessageCircle,
      href: `https://wa.me/52${CONTACTO.whatsapp}`,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="border-t border-linea bg-crema">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold text-tinta">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-naranja-500 text-white">
                C
              </span>
              {CONTACTO.nombrePublico}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-tinta-mute">
              Una comunidad que trabaja todos los días por mejorar {CONTACTO.alcaldia}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-tinta">Navega</h3>
            <ul className="mt-4 space-y-3 text-sm text-tinta-mute">
              <li><a href="#reportar" className="hover:text-naranja-600">Reporta un problema</a></li>
              <li><a href="#sumate" className="hover:text-naranja-600">Voluntariado</a></li>
              <li><a href="#columna" className="hover:text-naranja-600">La columna</a></li>
              <li><a href="#donaciones" className="hover:text-naranja-600">Donaciones</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-tinta">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-tinta-mute">
              <li>
                <a
                  href={`https://wa.me/52${CONTACTO.whatsapp}`}
                  className="hover:text-naranja-600"
                >
                  WhatsApp: 55 3454 8267
                </a>
              </li>
              <li>{CONTACTO.alcaldia}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {redes.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-linea text-tinta-suave transition-colors hover:border-naranja-500 hover:text-naranja-600"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-linea pt-6 text-xs text-tinta-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {CONTACTO.nombrePublico}. Movimiento
            ciudadano.
          </p>
          <div className="flex gap-6">
            <Link href="/aviso-de-privacidad" className="hover:text-naranja-600">
              Aviso de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-naranja-600">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

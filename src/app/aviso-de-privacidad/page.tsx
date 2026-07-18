import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CONTACTO } from "@/lib/data/contenido";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: { index: false },
};

export default function AvisoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28">
        <div className="container max-w-prose py-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-tinta-mute hover:text-naranja-600">
            <ArrowLeft className="h-4 w-4" /> Volver
          </Link>
          <h1 className="mt-8 font-display text-4xl font-bold text-tinta">
            Aviso de privacidad
          </h1>
          <div className="mt-6 space-y-4 leading-relaxed text-tinta-suave">
            <p>
              En el movimiento ciudadano de {CONTACTO.nombrePublico} valoramos y
              protegemos tus datos personales. Este aviso describe cómo los
              recabamos y usamos.
            </p>
            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Datos que recabamos
            </h2>
            <p>
              Nombre, teléfono, correo, colonia y la información que compartes al
              reportar un problema, registrarte como voluntario, ofrecer una
              donación o suscribirte al newsletter.
            </p>
            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Finalidad
            </h2>
            <p>
              Usamos tus datos únicamente para dar seguimiento a tu solicitud,
              coordinar actividades comunitarias y mantenerte informado. No
              vendemos ni compartimos tus datos con terceros con fines
              comerciales.
            </p>
            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Tus derechos
            </h2>
            <p>
              Puedes solicitar acceder, rectificar, cancelar u oponerte al uso de
              tus datos escribiendo por WhatsApp al 55 3454 8267.
            </p>
            <p className="pt-6 text-sm text-tinta-mute">
              Este es un texto de referencia. Sustitúyelo por la versión revisada
              conforme a la legislación aplicable antes de publicar.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

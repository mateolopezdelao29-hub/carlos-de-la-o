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
            <p className="text-sm text-tinta-mute">Última actualización: 20 de julio de 2026.</p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Responsable de tus datos
            </h2>
            <p>
              Carlos Mateo López De la O, en adelante “el
              movimiento ciudadano de {CONTACTO.nombrePublico}”, con domicilio
              para efectos de este aviso en Calle Patricio Sanz 33, Benito Juárez, Ciudad de México y correo de contacto{" "}
              mateolopezdelao29@gmail.com, es responsable del tratamiento y protección
              de tus datos personales, conforme a la Ley Federal de Protección de
              Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Datos que recabamos
            </h2>
            <p>
              Recabamos únicamente los datos que tú nos proporcionas a través de
              los formularios del sitio:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Identificación y contacto: nombre, teléfono y correo electrónico.</li>
              <li>Ubicación: colonia y la ubicación del problema que reportas.</li>
              <li>Al reportar: la descripción y, si la adjuntas, una fotografía del problema.</li>
              <li>Voluntariado: edad, disponibilidad y áreas de interés.</li>
              <li>Newsletter: tu correo electrónico.</li>
            </ul>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Datos sensibles
            </h2>
            <p>
              Registrarte como voluntario/a de un movimiento ciudadano puede
              revelar tu afiliación o simpatía política, considerada un dato
              personal sensible. Al registrarte, otorgas tu consentimiento
              expreso para que tratemos esa información con la única finalidad de
              coordinar las actividades del movimiento. No recabamos ningún otro
              dato sensible.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Para qué usamos tus datos
            </h2>
            <p>Finalidades necesarias (para atender tu solicitud):</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Dar seguimiento a los reportes y gestiones que nos compartes.</li>
              <li>Contactarte sobre el estado de tu solicitud.</li>
              <li>Coordinar el voluntariado y las donaciones en especie.</li>
            </ul>
            <p>Finalidades adicionales (opcionales):</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Enviarte el boletín e informarte de actividades de la comunidad.</li>
            </ul>
            <p>
              Si no deseas que usemos tus datos para las finalidades opcionales,
              puedes indicárnoslo en cualquier momento escribiendo a mateolopezdelao29@gmail.com; esto no afectará la atención de tu solicitud.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Con quién los compartimos
            </h2>
            <p>
              No vendemos ni transferimos tus datos a terceros con fines
              comerciales. Cuando tu reporte requiera la intervención de una
              autoridad (por ejemplo, la Alcaldía Benito Juárez), podremos
              compartir la información indispensable con el único fin de gestionar
              su solución. Tus datos se resguardan en servicios de infraestructura
              con medidas de seguridad razonables.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Tus derechos (ARCO)
            </h2>
            <p>
              Tienes derecho a Acceder, Rectificar y Cancelar tus datos, así como a
              Oponerte a su uso (derechos ARCO), y a revocar tu consentimiento en
              cualquier momento. Para ejercerlos, escribe a mateolopezdelao29@gmail.com
              indicando tu nombre y la solicitud específica. Si consideras que tu
              derecho a la protección de datos fue vulnerado, puedes acudir a la
              autoridad competente en la materia.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Cookies
            </h2>
            <p>
              Este sitio no utiliza cookies con fines publicitarios ni de rastreo.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Cambios a este aviso
            </h2>
            <p>
              Cualquier modificación a este aviso se publicará en esta misma
              página, con su fecha de actualización.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

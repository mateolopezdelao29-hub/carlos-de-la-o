import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CONTACTO } from "@/lib/data/contenido";

export const metadata: Metadata = {
  title: "Términos de uso",
  robots: { index: false },
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28">
        <div className="container max-w-prose py-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-tinta-mute hover:text-naranja-600">
            <ArrowLeft className="h-4 w-4" /> Volver
          </Link>
          <h1 className="mt-8 font-display text-4xl font-bold text-tinta">
            Términos de uso
          </h1>

          <div className="mt-6 space-y-4 leading-relaxed text-tinta-suave">
            <p className="text-sm text-tinta-mute">Última actualización: 20 de julio de 2026.</p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Aceptación
            </h2>
            <p>
              Al usar este sitio aceptas estos términos. Si no estás de acuerdo con
              ellos, te pedimos no utilizarlo.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Qué es este sitio
            </h2>
            <p>
              Es la plataforma de Movimiento Ciudadano de {CONTACTO.nombrePublico}{" "}
              en {CONTACTO.alcaldia}. Sirve para reportar problemas de la
              comunidad, sumarte como voluntario/a, ofrecer donaciones en especie
              y mantenerte informado/a. No es un portal oficial de gobierno.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Uso correcto
            </h2>
            <p>
              Al llenar los formularios te comprometes a proporcionar información
              veraz y a usar el sitio de buena fe. No está permitido enviar
              contenido falso, ofensivo, ilícito o que vulnere derechos de
              terceros. Podremos descartar cualquier reporte que no cumpla con lo
              anterior.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Reportes ciudadanos
            </h2>
            <p>
              Atendemos cada reporte con el mayor esfuerzo posible y le damos
              seguimiento de forma transparente. Sin embargo, su resolución puede
              depender de autoridades u otras instancias ajenas
              por lo que no podemos garantizar un resultado ni un plazo
              determinado.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Donaciones en especie
            </h2>
            <p>
              Este sitio solo gestiona donaciones en especie (víveres, materiales,
              tiempo). No solicitamos ni recibimos donativos en dinero a través de
              esta plataforma.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Contenido y opiniones
            </h2>
            <p>
              Las columnas de opinión reflejan el punto de vista de su autor. El
              contenido del sitio es de {CONTACTO.nombrePublico} y no puede
              reproducirse con fines comerciales sin autorización. Los enlaces a
              redes sociales u otros sitios se rigen por sus propios términos.
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Datos personales
            </h2>
            <p>
              El tratamiento de tus datos se rige por nuestro{" "}
              <Link href="/aviso-de-privacidad" className="text-naranja-600 underline">
                Aviso de privacidad
              </Link>
              .
            </p>

            <h2 className="pt-4 font-display text-xl font-semibold text-tinta">
              Cambios y contacto
            </h2>
            <p>
              Podemos actualizar estos términos; los cambios se publicarán en esta
              página. Para cualquier duda, escribe a mateolopezdelao29@gmail.com.
              Estos términos se rigen por las leyes aplicables en la Ciudad de
              México.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

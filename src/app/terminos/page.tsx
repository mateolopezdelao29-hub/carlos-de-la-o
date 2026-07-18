import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
            <p>
              Al usar este sitio aceptas hacerlo de buena fe y proporcionar
              información veraz en los formularios.
            </p>
            <p>
              Los reportes ciudadanos se atienden con el mayor esfuerzo posible,
              pero su resolución puede depender de autoridades u otras instancias
              ajenas a este movimiento.
            </p>
            <p>
              El contenido de las columnas de opinión refleja el punto de vista
              del autor.
            </p>
            <p className="pt-6 text-sm text-tinta-mute">
              Texto de referencia. Ajústalo a tus necesidades legales antes de
              publicar.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

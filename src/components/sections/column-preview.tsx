import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const COLUMNA_URL = "https://entrelineas-mx.netlify.app/columna/";

export function ColumnPreview() {
  return (
    <section id="columna" className="section bg-white">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-linea bg-crema px-8 py-16 text-center sm:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-naranja-600">
              La columna
            </p>
            <h2 className="mt-4 font-editorial text-4xl font-semibold italic text-tinta sm:text-5xl">
              Palabras que acompañan la acción
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-tinta-mute">
              Cada semana escribo sobre lo que pasa en Benito Juárez y en lo
              público. Puedes leer mi columna en Entre Líneas.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href={COLUMNA_URL} target="_blank" rel="noopener noreferrer">
                Leer mi columna <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

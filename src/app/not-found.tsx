import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-crema px-6 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-naranja-500">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-tinta">
          Esta página no existe
        </h1>
        <p className="mt-2 text-tinta-mute">
          Puede que el enlace esté roto o la página se haya movido.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </main>
  );
}

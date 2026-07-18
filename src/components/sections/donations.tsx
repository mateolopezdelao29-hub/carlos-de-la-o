"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle, Package } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/ui/field";
import { createClient } from "@/lib/supabase/client";
import { donacionSchema, type DonacionInput } from "@/lib/validations/schemas";

type Estado = "idle" | "enviando" | "exito" | "error";

export function Donations() {
  const [estado, setEstado] = useState<Estado>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DonacionInput>({ resolver: zodResolver(donacionSchema) });

  const onSubmit = async (data: DonacionInput) => {
    setEstado("enviando");
    try {
      const supabase = createClient();
      const { error } = await supabase.from("donaciones").insert(data);
      if (error) throw error;
      reset();
      setEstado("exito");
    } catch (err) {
      console.error(err);
      setEstado("error");
    }
  };

  return (
    <section id="donaciones" className="section bg-white">
      <div className="container">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Donaciones en especie"
              title="¿Quieres ayudar a transformar nuestra comunidad?"
              description="No recibimos dinero. Solo donaciones en especie. Déjanos tus datos y nos pondremos en contacto para coordinar la entrega."
            />
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-naranja-100 bg-naranja-50/60 p-5 text-sm text-tinta-suave">
              <Package className="h-6 w-6 shrink-0 text-naranja-600" />
              Materiales, herramienta, plantas, libros, tiempo… todo suma cuando
              es para la comunidad.
            </div>
          </div>

          <Reveal>
            {estado === "exito" ? (
              <div className="rounded-3xl border border-naranja-200 bg-crema p-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-naranja-500" />
                <h3 className="mt-4 font-display text-xl font-bold text-tinta">
                  ¡Gracias por tu generosidad!
                </h3>
                <p className="mt-2 text-tinta-mute">
                  Te contactaremos pronto para coordinar la donación.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setEstado("idle")}>
                  Registrar otra donación
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-3xl border border-linea bg-white p-6 sm:p-8" noValidate>
                <Field label="Nombre" htmlFor="d-nombre" error={errors.nombre?.message}>
                  <Input id="d-nombre" placeholder="Tu nombre" {...register("nombre")} />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Teléfono" htmlFor="d-tel" error={errors.telefono?.message}>
                    <Input id="d-tel" inputMode="tel" placeholder="55 0000 0000" {...register("telefono")} />
                  </Field>
                  <Field label="Correo" htmlFor="d-correo" error={errors.correo?.message}>
                    <Input id="d-correo" type="email" placeholder="tu@correo.com" {...register("correo")} />
                  </Field>
                </div>
                <Field label="¿Qué te gustaría donar?" htmlFor="d-don" error={errors.donacion?.message}>
                  <Input id="d-don" placeholder="Ej. pintura, árboles, tiempo de voluntariado" {...register("donacion")} />
                </Field>
                <Field label="Comentarios (opcional)" htmlFor="d-com">
                  <Textarea id="d-com" placeholder="Cuéntanos más si quieres" {...register("comentarios")} />
                </Field>
                {estado === "error" && (
                  <p role="alert" className="flex items-center gap-2 text-sm font-medium text-destructive">
                    <AlertCircle className="h-4 w-4" /> Algo salió mal. Intenta de nuevo.
                  </p>
                )}
                <Button type="submit" size="lg" className="w-full" disabled={estado === "enviando"}>
                  {estado === "enviando" ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Enviando…</>
                  ) : (
                    "Quiero donar en especie"
                  )}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

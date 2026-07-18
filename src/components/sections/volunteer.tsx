"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import { createClient } from "@/lib/supabase/client";
import {
  voluntariadoSchema,
  type VoluntariadoInput,
} from "@/lib/validations/schemas";

type Estado = "idle" | "enviando" | "exito" | "error";

export function Volunteer() {
  const [estado, setEstado] = useState<Estado>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VoluntariadoInput>({ resolver: zodResolver(voluntariadoSchema) });

  const onSubmit = async (data: VoluntariadoInput) => {
    setEstado("enviando");
    try {
      const supabase = createClient();
      const { error } = await supabase.from("voluntarios").insert(data);
      if (error) throw error;
      reset();
      setEstado("exito");
    } catch (err) {
      console.error(err);
      setEstado("error");
    }
  };

  return (
    <section id="sumate" className="section bg-crema">
      <div className="container">
        <SectionHeading
          eyebrow="Voluntariado"
          title="Súmate. Aquí cabe todo el que quiere ayudar."
          description="No necesitas experiencia ni militancia. Solo ganas de mejorar tu comunidad. Déjanos tus datos y te contamos cómo participar."
          align="center"
        />

        <Reveal className="mt-14">
          {estado === "exito" ? (
            <div className="mx-auto max-w-xl rounded-3xl border border-naranja-200 bg-white p-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-naranja-500" />
              <h3 className="mt-4 font-display text-2xl font-bold text-tinta">
                ¡Bienvenida, bienvenido!
              </h3>
              <p className="mt-2 text-tinta-mute">
                Te escribiremos para invitarte a la próxima actividad.
              </p>
              <Button className="mt-6" variant="outline" onClick={() => setEstado("idle")}>
                Registrar a alguien más
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-3xl rounded-3xl border border-linea bg-white p-6 sm:p-10" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" htmlFor="v-nombre" error={errors.nombre?.message}>
                  <Input id="v-nombre" placeholder="Tu nombre" {...register("nombre")} />
                </Field>
                <Field label="Edad" htmlFor="v-edad" error={errors.edad?.message}>
                  <Input id="v-edad" inputMode="numeric" placeholder="Ej. 24" {...register("edad")} />
                </Field>
                <Field label="Colonia" htmlFor="v-colonia" error={errors.colonia?.message}>
                  <Input id="v-colonia" placeholder="¿Dónde vives?" {...register("colonia")} />
                </Field>
                <Field label="Disponibilidad" htmlFor="v-disp" error={errors.disponibilidad?.message}>
                  <Input id="v-disp" placeholder="Ej. fines de semana" {...register("disponibilidad")} />
                </Field>
                <Field label="Teléfono" htmlFor="v-tel" error={errors.telefono?.message}>
                  <Input id="v-tel" inputMode="tel" placeholder="55 0000 0000" {...register("telefono")} />
                </Field>
                <Field label="Correo" htmlFor="v-correo" error={errors.correo?.message}>
                  <Input id="v-correo" type="email" placeholder="tu@correo.com" {...register("correo")} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Áreas de interés" htmlFor="v-areas" error={errors.areas?.message}>
                    <Input id="v-areas" placeholder="Ej. medio ambiente, jóvenes, espacios públicos" {...register("areas")} />
                  </Field>
                </div>
              </div>

              {estado === "error" && (
                <p role="alert" className="mt-5 flex items-center gap-2 text-sm font-medium text-destructive">
                  <AlertCircle className="h-4 w-4" /> Algo salió mal. Intenta de nuevo.
                </p>
              )}

              <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={estado === "enviando"}>
                {estado === "enviando" ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Enviando…</>
                ) : (
                  "Quiero ser voluntario"
                )}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

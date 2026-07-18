"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ImagePlus, Loader2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/lib/supabase/client";
import {
  reporteSchema,
  type ReporteInput,
  CATEGORIAS_REPORTE,
} from "@/lib/validations/schemas";

type Estado = "idle" | "enviando" | "exito" | "error";

export function ReportForm() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [foto, setFoto] = useState<File | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ReporteInput>({ resolver: zodResolver(reporteSchema) });

  const onSubmit = async (data: ReporteInput) => {
    setEstado("enviando");
    setErrorMsg("");
    try {
      const supabase = createClient();
      let foto_url: string | null = null;

      // 1. Sube la foto al bucket "reportes" si el vecino adjuntó una.
      if (foto) {
        const nombre = `${Date.now()}-${foto.name.replace(/\s+/g, "-")}`;
        const { error: upErr } = await supabase.storage
          .from("reportes")
          .upload(nombre, foto);
        if (upErr) throw upErr;
        const { data: pub } = supabase.storage
          .from("reportes")
          .getPublicUrl(nombre);
        foto_url = pub.publicUrl;
      }

      // 2. Inserta el reporte (estado inicial: "Recibido").
      const { error } = await supabase
        .from("reportes")
        .insert({ ...data, foto_url });
      if (error) throw error;

      setEstado("exito");
      reset();
      setFoto(null);
    } catch (err) {
      console.error(err);
      setErrorMsg("No pudimos enviar tu reporte. Intenta de nuevo en un momento.");
      setEstado("error");
    }
  };

  if (estado === "exito") {
    return (
      <section id="reportar" className="section bg-crema">
        <div className="container">
          <Reveal className="mx-auto max-w-xl rounded-3xl border border-naranja-200 bg-white p-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-naranja-500" />
            <h3 className="mt-5 font-display text-2xl font-bold text-tinta">
              ¡Reporte recibido!
            </h3>
            <p className="mt-3 text-tinta-mute">
              Gracias por cuidar tu comunidad. Le daremos seguimiento y podrás ver
              su estado: Recibido, En proceso o Resuelto.
            </p>
            <Button className="mt-8" onClick={() => setEstado("idle")}>
              Enviar otro reporte
            </Button>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="reportar" className="section bg-crema">
      <div className="container">
        <SectionHeading
          eyebrow="Reporta un problema"
          title="¿Algo no está bien en tu colonia? Cuéntanos."
          description="Baches, alumbrado, basura, parques… Reporta lo que veas. Cada reporte se registra y recibe seguimiento."
        />

        <Reveal className="mt-14">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-3xl rounded-3xl border border-linea bg-white p-6 sm:p-10"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" htmlFor="r-nombre" error={errors.nombre?.message}>
                <Input id="r-nombre" placeholder="Tu nombre" {...register("nombre")} />
              </Field>
              <Field label="Teléfono" htmlFor="r-tel" error={errors.telefono?.message}>
                <Input id="r-tel" inputMode="tel" placeholder="55 0000 0000" {...register("telefono")} />
              </Field>
              <Field label="Correo" htmlFor="r-correo" error={errors.correo?.message}>
                <Input id="r-correo" type="email" placeholder="tu@correo.com" {...register("correo")} />
              </Field>
              <Field label="Colonia" htmlFor="r-colonia" error={errors.colonia?.message}>
                <Input id="r-colonia" placeholder="Del Valle, Narvarte…" {...register("colonia")} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Ubicación / referencia" htmlFor="r-ubi" error={errors.ubicacion?.message}>
                  <Input id="r-ubi" placeholder="Calle y número, cruce o punto de referencia" {...register("ubicacion")} />
                </Field>
              </div>
              <Field label="Categoría" htmlFor="r-cat" error={errors.categoria?.message}>
                <Controller
                  control={control}
                  name="categoria"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger id="r-cat">
                        <SelectValue placeholder="Elige una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIAS_REPORTE.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>

              {/* Adjuntar fotografía */}
              <Field label="Fotografía (opcional)" htmlFor="r-foto">
                <label
                  htmlFor="r-foto"
                  className="flex h-12 cursor-pointer items-center gap-2 rounded-xl border border-dashed border-input bg-white px-4 text-sm text-tinta-mute transition-colors hover:border-naranja-500"
                >
                  <ImagePlus className="h-4 w-4" />
                  {foto ? foto.name : "Sube una foto"}
                </label>
                <input
                  id="r-foto"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => setFoto(e.target.files?.[0] ?? null)}
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Descripción" htmlFor="r-desc" error={errors.descripcion?.message}>
                  <Textarea id="r-desc" placeholder="Describe el problema con el mayor detalle posible" {...register("descripcion")} />
                </Field>
              </div>
            </div>

            {estado === "error" && (
              <p role="alert" className="mt-5 flex items-center gap-2 text-sm font-medium text-destructive">
                <AlertCircle className="h-4 w-4" /> {errorMsg}
              </p>
            )}

            <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={estado === "enviando"}>
              {estado === "enviando" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Enviando…
                </>
              ) : (
                "Enviar reporte"
              )}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

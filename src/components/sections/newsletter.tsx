"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import { newsletterSchema, type NewsletterInput } from "@/lib/validations/schemas";

type Estado = "idle" | "enviando" | "exito" | "error";

export function Newsletter() {
  const [estado, setEstado] = useState<Estado>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async (data: NewsletterInput) => {
    setEstado("enviando");
    try {
      const supabase = createClient();
      const { error } = await supabase.from("suscriptores").insert(data);
      if (error) throw error;
      reset();
      setEstado("exito");
    } catch (err) {
      console.error(err);
      setEstado("error");
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl rounded-3xl bg-naranja-500 px-6 py-12 text-center sm:px-12 sm:py-16">
          <Mail className="mx-auto h-10 w-10 text-white" />
          <h2 className="mt-5 font-display text-2xl font-bold text-white text-balance sm:text-3xl">
            Recibe cada semana mi columna y las acciones que estamos realizando en
            Benito Juárez.
          </h2>

          {estado === "exito" ? (
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-naranja-600">
              <CheckCircle2 className="h-5 w-5" /> ¡Listo! Ya estás suscrito.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <div className="flex-1 text-left">
                <Input
                  type="email"
                  placeholder="tu@correo.com"
                  aria-label="Tu correo"
                  className="h-12 border-transparent bg-white"
                  {...register("correo")}
                />
                {errors.correo && (
                  <p role="alert" className="mt-1 text-sm font-medium text-white">
                    {errors.correo.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-tinta text-white hover:bg-tinta-suave"
                disabled={estado === "enviando"}
              >
                {estado === "enviando" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Suscribirme"
                )}
              </Button>
            </form>
          )}
          {estado === "error" && (
            <p className="mt-3 text-sm text-white">
              Algo salió mal. Intenta de nuevo.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

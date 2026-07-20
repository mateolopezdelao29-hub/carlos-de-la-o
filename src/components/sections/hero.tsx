"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTO } from "@/lib/data/contenido";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-tinta"
    >
      {/* Fotografía enorme de fondo */}
      <Image
        src="/images/hero.jpg"
        alt="Carlos De la O conversando con vecinos en Benito Juárez"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Velo para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-tinta/85 via-tinta/55 to-tinta/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-tinta/70 via-transparent to-transparent" />

      <div className="container relative z-10 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-naranja-300 [&::before]:bg-naranja-400"
        >
          Movimiento ciudadano · {CONTACTO.alcaldia}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-white text-balance sm:text-6xl md:text-7xl"
        >
          {CONTACTO.nombrePublico}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl"
        >
          <span className="text-naranja-300">«Haz el bien sin mirar a quién.»</span>{" "}
          Hago comunidad y le resuelvo al vecino en Benito Juárez.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <a href="#sumate">
              Únete
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-tinta"
          >
            <a href="#reportar">Reporta un problema</a>
          </Button>
        </motion.div>
      </div>

      {/* Indicador de scroll animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-white/70"
      >
        <MousePointer2 className="h-4 w-4 animate-scroll-cue" />
        <span className="text-[11px] uppercase tracking-[0.2em]">Desliza</span>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACTO } from "@/lib/data/contenido";

/** Botón flotante permanente de WhatsApp. */
export function WhatsAppButton() {
  const href = `https://wa.me/52${CONTACTO.whatsapp}?text=${encodeURIComponent(
    "Hola Carlos, "
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg transition-all hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Escríbeme por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[180px] sm:inline">
        {CONTACTO.whatsappTexto}
      </span>
    </motion.a>
  );
}

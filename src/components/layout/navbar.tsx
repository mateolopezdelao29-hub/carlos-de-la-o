"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, CONTACTO } from "@/lib/data/contenido";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-linea bg-white/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Link
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-tinta"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-naranja-500 text-white">
            C
          </span>
          {CONTACTO.nombrePublico}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-tinta-suave transition-colors hover:text-naranja-600"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#sumate">Únete</a>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-tinta md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-linea bg-white md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-tinta-suave hover:bg-naranja-50 hover:text-naranja-600"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2">
                <a href="#sumate" onClick={() => setOpen(false)}>
                  Únete
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

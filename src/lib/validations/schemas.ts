import { z } from "zod";

/** Categorías de reporte ciudadano. */
export const CATEGORIAS_REPORTE = [
  "Baches",
  "Alumbrado",
  "Basura",
  "Parques",
  "Seguridad",
  "Agua",
  "Movilidad",
  "Árboles",
  "Animales",
  "Otro",
] as const;

export const ESTADOS_REPORTE = ["Recibido", "En proceso", "Resuelto"] as const;

const telefono = z
  .string()
  .trim()
  .min(10, "Ingresa un teléfono de al menos 10 dígitos")
  .regex(/^[\d\s()+-]+$/, "El teléfono solo puede tener números");

// ── Reporta un problema ───────────────────────────────────────
export const reporteSchema = z.object({
  nombre: z.string().trim().min(2, "Dinos tu nombre"),
  telefono,
  correo: z.string().trim().email("Revisa tu correo"),
  colonia: z.string().trim().min(2, "¿En qué colonia?"),
  ubicacion: z.string().trim().min(3, "Danos una referencia de ubicación"),
  categoria: z.enum(CATEGORIAS_REPORTE, {
    errorMap: () => ({ message: "Elige una categoría" }),
  }),
  descripcion: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});

export type ReporteInput = z.infer<typeof reporteSchema>;

// ── Donación en especie ───────────────────────────────────────
export const donacionSchema = z.object({
  nombre: z.string().trim().min(2, "Dinos tu nombre"),
  telefono,
  correo: z.string().trim().email("Revisa tu correo"),
  donacion: z.string().trim().min(3, "¿Qué te gustaría donar?"),
  comentarios: z.string().trim().optional(),
});

export type DonacionInput = z.infer<typeof donacionSchema>;

// ── Voluntariado ──────────────────────────────────────────────
export const voluntariadoSchema = z.object({
  nombre: z.string().trim().min(2, "Dinos tu nombre"),
  edad: z.coerce
    .number({ invalid_type_error: "Ingresa tu edad" })
    .int()
    .min(15, "Edad mínima 15 años")
    .max(100, "Revisa tu edad"),
  colonia: z.string().trim().min(2, "¿En qué colonia vives?"),
  disponibilidad: z.string().trim().min(3, "¿Cuándo puedes participar?"),
  telefono,
  correo: z.string().trim().email("Revisa tu correo"),
  areas: z.string().trim().min(3, "¿Qué áreas te interesan?"),
});

export type VoluntariadoInput = z.infer<typeof voluntariadoSchema>;

// ── Newsletter ────────────────────────────────────────────────
export const newsletterSchema = z.object({
  correo: z.string().trim().email("Ingresa un correo válido"),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

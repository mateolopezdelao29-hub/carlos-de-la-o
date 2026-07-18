/** Tipos que reflejan las tablas de Supabase (ver supabase/schema.sql). */

export type EstadoReporte = "Recibido" | "En proceso" | "Resuelto";

export interface Reporte {
  id: string;
  created_at: string;
  nombre: string;
  telefono: string;
  correo: string;
  colonia: string;
  ubicacion: string;
  categoria: string;
  descripcion: string;
  foto_url: string | null;
  estado: EstadoReporte;
}

export interface Donacion {
  id: string;
  created_at: string;
  nombre: string;
  telefono: string;
  correo: string;
  donacion: string;
  comentarios: string | null;
}

export interface Voluntario {
  id: string;
  created_at: string;
  nombre: string;
  edad: number;
  colonia: string;
  disponibilidad: string;
  telefono: string;
  correo: string;
  areas: string;
}

export interface Suscriptor {
  id: string;
  created_at: string;
  correo: string;
}

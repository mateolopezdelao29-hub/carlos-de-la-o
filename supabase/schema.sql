-- ═══════════════════════════════════════════════════════════════
-- Esquema de base de datos — Carlos De la O
-- Ejecuta este archivo en: Supabase → SQL Editor → New query → Run
-- ═══════════════════════════════════════════════════════════════

-- ── Tabla: reportes ────────────────────────────────────────────
create table if not exists public.reportes (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  nombre       text not null,
  telefono     text not null,
  correo       text not null,
  colonia      text not null,
  ubicacion    text not null,
  categoria    text not null,
  descripcion  text not null,
  foto_url     text,
  estado       text not null default 'Recibido'
               check (estado in ('Recibido', 'En proceso', 'Resuelto'))
);

-- ── Tabla: donaciones ──────────────────────────────────────────
create table if not exists public.donaciones (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  nombre       text not null,
  telefono     text not null,
  correo       text not null,
  donacion     text not null,
  comentarios  text
);

-- ── Tabla: voluntarios ─────────────────────────────────────────
create table if not exists public.voluntarios (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  nombre         text not null,
  edad           integer not null,
  colonia        text not null,
  disponibilidad text not null,
  telefono       text not null,
  correo         text not null,
  areas          text not null
);

-- ── Tabla: suscriptores (newsletter) ───────────────────────────
create table if not exists public.suscriptores (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  correo       text not null unique
);

-- ═══════════════════════════════════════════════════════════════
-- Row Level Security (RLS)
-- Regla general: cualquiera puede ENVIAR (insert) desde los
-- formularios públicos; solo usuarios autenticados (el equipo)
-- pueden LEER y ACTUALIZAR desde el panel /admin.
-- ═══════════════════════════════════════════════════════════════

alter table public.reportes      enable row level security;
alter table public.donaciones    enable row level security;
alter table public.voluntarios   enable row level security;
alter table public.suscriptores  enable row level security;

-- Inserción pública (anon + authenticated)
create policy "insert_publico_reportes"     on public.reportes     for insert to anon, authenticated with check (true);
create policy "insert_publico_donaciones"   on public.donaciones   for insert to anon, authenticated with check (true);
create policy "insert_publico_voluntarios"  on public.voluntarios  for insert to anon, authenticated with check (true);
create policy "insert_publico_suscriptores" on public.suscriptores for insert to anon, authenticated with check (true);

-- Lectura solo para el equipo autenticado
create policy "select_equipo_reportes"     on public.reportes     for select to authenticated using (true);
create policy "select_equipo_donaciones"   on public.donaciones   for select to authenticated using (true);
create policy "select_equipo_voluntarios"  on public.voluntarios  for select to authenticated using (true);
create policy "select_equipo_suscriptores" on public.suscriptores for select to authenticated using (true);

-- Actualización de estado de reportes solo para el equipo
create policy "update_equipo_reportes" on public.reportes for update to authenticated using (true) with check (true);

-- ═══════════════════════════════════════════════════════════════
-- Storage: bucket público "reportes" para las fotos adjuntas
-- ═══════════════════════════════════════════════════════════════
insert into storage.buckets (id, name, public)
values ('reportes', 'reportes', true)
on conflict (id) do nothing;

-- Subir fotos: público (desde el formulario)
create policy "subir_fotos_reportes"
  on storage.objects for insert to anon, authenticated
  with check (bucket_id = 'reportes');

-- Ver fotos: público (el bucket es público)
create policy "ver_fotos_reportes"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'reportes');

-- ═══════════════════════════════════════════════════════════════
-- Crear el usuario admin:
--   Supabase → Authentication → Users → Add user
--   Usa un correo y contraseña; con eso entras a /admin.
-- ═══════════════════════════════════════════════════════════════

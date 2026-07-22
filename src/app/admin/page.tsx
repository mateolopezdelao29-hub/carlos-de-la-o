"use client";

import { useCallback, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import {
  Loader2,
  LogOut,
  RefreshCw,
  Lock,
  Inbox,
  Gift,
  Users,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createClient } from "@/lib/supabase/client";
import { ESTADOS_REPORTE } from "@/lib/validations/schemas";
import type {
  Reporte,
  EstadoReporte,
  Donacion,
  Voluntario,
  Suscriptor,
} from "@/types/database";
import { formatearFecha } from "@/lib/utils";

const supabase = createClient();

const estadoColor: Record<EstadoReporte, string> = {
  Recibido: "bg-naranja-100 text-naranja-700",
  "En proceso": "bg-amber-100 text-amber-700",
  Resuelto: "bg-emerald-100 text-emerald-700",
};

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCargando(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) =>
      setSession(s)
    );
    return () => sub.subscription.unsubscribe();
  }, []);

  if (cargando) {
    return (
      <div className="grid min-h-screen place-items-center">
        <Loader2 className="h-6 w-6 animate-spin text-naranja-500" />
      </div>
    );
  }

  return session ? <Dashboard /> : <Login />;
}

// ── Pantalla de acceso ────────────────────────────────────────
function Login() {
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const entrar = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email: correo,
      password: pass,
    });
    if (error) setError("Credenciales incorrectas.");
    setEnviando(false);
  };

  return (
    <div className="grid min-h-screen place-items-center bg-crema px-6">
      <form
        onSubmit={entrar}
        className="w-full max-w-sm rounded-3xl border border-linea bg-white p-8"
      >
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-naranja-50 text-naranja-600">
          <Lock className="h-6 w-6" />
        </div>
        <h1 className="mt-5 font-display text-2xl font-bold text-tinta">
          Panel administrativo
        </h1>
        <p className="mt-1 text-sm text-tinta-mute">
          Acceso solo para el equipo.
        </p>
        <div className="mt-6 space-y-4">
          <Field label="Correo" htmlFor="a-correo">
            <Input
              id="a-correo"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </Field>
          <Field label="Contraseña" htmlFor="a-pass" error={error}>
            <Input
              id="a-pass"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </Field>
        </div>
        <Button type="submit" className="mt-6 w-full" disabled={enviando}>
          {enviando ? <Loader2 className="h-5 w-5 animate-spin" /> : "Entrar"}
        </Button>
      </form>
    </div>
  );
}

// ── Tablero con pestañas ──────────────────────────────────────
type Tab = "reportes" | "donaciones" | "voluntarios" | "suscriptores";

const TABS: { id: Tab; label: string; icono: typeof Inbox }[] = [
  { id: "reportes", label: "Reportes", icono: Inbox },
  { id: "donaciones", label: "Donaciones", icono: Gift },
  { id: "voluntarios", label: "Voluntarios", icono: Users },
  { id: "suscriptores", label: "Suscriptores", icono: Mail },
];

function Dashboard() {
  const [tab, setTab] = useState<Tab>("reportes");

  return (
    <div className="min-h-screen bg-crema">
      <header className="border-b border-linea bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-tinta">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-naranja-500 text-white">
              C
            </span>
            Panel · Carlos De la O
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => supabase.auth.signOut()}
          >
            <LogOut className="h-4 w-4" /> Salir
          </Button>
        </div>
        <div className="container flex gap-1 overflow-x-auto">
          {TABS.map((t) => {
            const activa = t.id === tab;
            const Icono = t.icono;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activa
                    ? "border-naranja-500 text-naranja-600"
                    : "border-transparent text-tinta-mute hover:text-tinta"
                }`}
              >
                <Icono className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>
      </header>

      <main className="container py-10">
        {tab === "reportes" && <Reportes />}
        {tab === "donaciones" && <Donaciones />}
        {tab === "voluntarios" && <Voluntarios />}
        {tab === "suscriptores" && <Suscriptores />}
      </main>
    </div>
  );
}

// ── Barra de sección (título + contador + actualizar) ─────────
function BarraSeccion({
  titulo,
  total,
  onRefrescar,
}: {
  titulo: string;
  total: number;
  onRefrescar: () => void;
}) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="font-display text-xl font-bold text-tinta">
        {titulo} <span className="text-tinta-mute">({total})</span>
      </h2>
      <Button variant="ghost" size="sm" onClick={onRefrescar}>
        <RefreshCw className="h-4 w-4" /> Actualizar
      </Button>
    </div>
  );
}

function Cargando() {
  return (
    <div className="grid place-items-center py-20">
      <Loader2 className="h-6 w-6 animate-spin text-naranja-500" />
    </div>
  );
}

function Vacio({ texto }: { texto: string }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-linea bg-white py-20 text-center">
      <Inbox className="h-10 w-10 text-tinta-mute" />
      <p className="mt-3 font-medium text-tinta">{texto}</p>
    </div>
  );
}

// ── Reportes ──────────────────────────────────────────────────
function Reportes() {
  const [reportes, setReportes] = useState<Reporte[]>([]);
  const [cargando, setCargando] = useState(true);

  const cargar = useCallback(async () => {
    setCargando(true);
    const { data } = await supabase
      .from("reportes")
      .select("*")
      .order("created_at", { ascending: false });
    setReportes((data as Reporte[]) ?? []);
    setCargando(false);
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const actualizarEstado = async (id: string, estado: EstadoReporte) => {
    setReportes((prev) => prev.map((r) => (r.id === id ? { ...r, estado } : r)));
    await supabase.from("reportes").update({ estado }).eq("id", id);
  };

  const conteo = (e: EstadoReporte) =>
    reportes.filter((r) => r.estado === e).length;

  return (
    <>
      <BarraSeccion
        titulo="Reportes"
        total={reportes.length}
        onRefrescar={cargar}
      />
      <div className="grid grid-cols-3 gap-4">
        {ESTADOS_REPORTE.map((e) => (
          <div key={e} className="rounded-2xl border border-linea bg-white p-5">
            <p className="text-sm text-tinta-mute">{e}</p>
            <p className="mt-1 font-display text-3xl font-bold text-tinta">
              {conteo(e)}
            </p>
          </div>
        ))}
      </div>

      {cargando ? (
        <Cargando />
      ) : reportes.length === 0 ? (
        <div className="mt-8">
          <Vacio texto="Aún no hay reportes." />
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {reportes.map((r) => (
            <article
              key={r.id}
              className="rounded-2xl border border-linea bg-white p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-tinta px-2.5 py-0.5 text-xs font-semibold text-white">
                      {r.categoria}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${estadoColor[r.estado]}`}
                    >
                      {r.estado}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-tinta">
                    {r.colonia} · {r.ubicacion}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-tinta-mute">
                    {r.descripcion}
                  </p>
                  <p className="mt-3 text-xs text-tinta-mute">
                    {r.nombre} · {r.telefono} · {r.correo} ·{" "}
                    {formatearFecha(r.created_at)}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  {r.foto_url && (
                    <button
                      type="button"
                      onClick={async () => {
                        const { data } = await supabase.storage
                          .from("reportes")
                          .createSignedUrl(r.foto_url!, 60);
                        if (data?.signedUrl) {
                          window.open(
                            data.signedUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                      className="text-xs font-medium text-naranja-600 hover:underline"
                    >
                      Ver foto
                    </button>
                  )}
                  <div className="w-44">
                    <Select
                      value={r.estado}
                      onValueChange={(v) =>
                        actualizarEstado(r.id, v as EstadoReporte)
                      }
                    >
                      <SelectTrigger className="h-10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ESTADOS_REPORTE.map((e) => (
                          <SelectItem key={e} value={e}>
                            {e}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

// ── Donaciones ────────────────────────────────────────────────
function Donaciones() {
  const [items, setItems] = useState<Donacion[]>([]);
  const [cargando, setCargando] = useState(true);

  const cargar = useCallback(async () => {
    setCargando(true);
    const { data } = await supabase
      .from("donaciones")
      .select("*")
      .order("created_at", { ascending: false });
    setItems((data as Donacion[]) ?? []);
    setCargando(false);
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return (
    <>
      <BarraSeccion titulo="Donaciones" total={items.length} onRefrescar={cargar} />
      {cargando ? (
        <Cargando />
      ) : items.length === 0 ? (
        <Vacio texto="Aún no hay donaciones ofrecidas." />
      ) : (
        <div className="space-y-4">
          {items.map((d) => (
            <article
              key={d.id}
              className="rounded-2xl border border-linea bg-white p-6"
            >
              <h3 className="font-display text-lg font-semibold text-tinta">
                {d.donacion}
              </h3>
              {d.comentarios && (
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-tinta-mute">
                  {d.comentarios}
                </p>
              )}
              <p className="mt-3 text-xs text-tinta-mute">
                {d.nombre} · {d.telefono} · {d.correo} ·{" "}
                {formatearFecha(d.created_at)}
              </p>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

// ── Voluntarios ───────────────────────────────────────────────
function Voluntarios() {
  const [items, setItems] = useState<Voluntario[]>([]);
  const [cargando, setCargando] = useState(true);

  const cargar = useCallback(async () => {
    setCargando(true);
    const { data } = await supabase
      .from("voluntarios")
      .select("*")
      .order("created_at", { ascending: false });
    setItems((data as Voluntario[]) ?? []);
    setCargando(false);
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return (
    <>
      <BarraSeccion titulo="Voluntarios" total={items.length} onRefrescar={cargar} />
      {cargando ? (
        <Cargando />
      ) : items.length === 0 ? (
        <Vacio texto="Aún no hay voluntarios registrados." />
      ) : (
        <div className="space-y-4">
          {items.map((v) => (
            <article
              key={v.id}
              className="rounded-2xl border border-linea bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-semibold text-tinta">
                  {v.nombre}
                </h3>
                <span className="rounded-full bg-naranja-50 px-2.5 py-0.5 text-xs font-semibold text-naranja-700">
                  {v.edad} años
                </span>
              </div>
              <p className="mt-2 text-sm text-tinta-suave">
                <span className="font-medium text-tinta">Colonia:</span>{" "}
                {v.colonia} ·{" "}
                <span className="font-medium text-tinta">Disponibilidad:</span>{" "}
                {v.disponibilidad}
              </p>
              <p className="mt-1 text-sm text-tinta-suave">
                <span className="font-medium text-tinta">Áreas:</span> {v.areas}
              </p>
              <p className="mt-3 text-xs text-tinta-mute">
                {v.telefono} · {v.correo} · {formatearFecha(v.created_at)}
              </p>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

// ── Suscriptores ──────────────────────────────────────────────
function Suscriptores() {
  const [items, setItems] = useState<Suscriptor[]>([]);
  const [cargando, setCargando] = useState(true);

  const cargar = useCallback(async () => {
    setCargando(true);
    const { data } = await supabase
      .from("suscriptores")
      .select("*")
      .order("created_at", { ascending: false });
    setItems((data as Suscriptor[]) ?? []);
    setCargando(false);
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return (
    <>
      <BarraSeccion
        titulo="Suscriptores"
        total={items.length}
        onRefrescar={cargar}
      />
      {cargando ? (
        <Cargando />
      ) : items.length === 0 ? (
        <Vacio texto="Aún no hay suscriptores al boletín." />
      ) : (
        <div className="overflow-hidden rounded-2xl border border-linea bg-white">
          {items.map((s, i) => (
            <div
              key={s.id}
              className={`flex items-center justify-between px-6 py-4 ${
                i > 0 ? "border-t border-linea" : ""
              }`}
            >
              <span className="text-sm font-medium text-tinta">{s.correo}</span>
              <span className="text-xs text-tinta-mute">
                {formatearFecha(s.created_at)}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

# Carlos De la O — Plataforma del movimiento ciudadano

Sitio web del movimiento ciudadano en **Benito Juárez, CDMX**. La comunidad es la
protagonista: reportar problemas, sumarse como voluntario, donar en especie, leer
la columna semanal y seguir el trabajo diario.

Construido con **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer
Motion · shadcn/ui · Supabase · React Hook Form · Zod · Lucide Icons**.

---

## 1. Requisitos

- Node.js **20 o superior**
- Una cuenta gratuita en [Supabase](https://supabase.com)

## 2. Instalación local

```bash
npm install
cp .env.local.example .env.local   # y rellena tus llaves (ver paso 3)
npm run dev
```

Abre <http://localhost:3000>.

## 3. Configurar Supabase

1. Crea un proyecto nuevo en Supabase.
2. Ve a **SQL Editor → New query**, pega el contenido de
   [`supabase/schema.sql`](./supabase/schema.sql) y ejecútalo (**Run**).
   Esto crea las tablas (`reportes`, `donaciones`, `voluntarios`,
   `suscriptores`), las políticas de seguridad (RLS) y el bucket de fotos.
3. Ve a **Project Settings → API** y copia:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Pégalas en tu archivo `.env.local`.

### Crear el usuario del panel admin

**Authentication → Users → Add user.** Usa un correo y contraseña.
Con esas credenciales entras al panel en `/admin` para ver los reportes y
cambiar su estado (Recibido → En proceso → Resuelto).

> Seguridad: los formularios públicos solo pueden **insertar** datos. Leer y
> actualizar reportes requiere iniciar sesión. Todo esto lo garantizan las
> políticas RLS del `schema.sql`.

## 4. Variables de entorno

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL de tu proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Llave pública `anon` |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (para SEO / sitemap) |

## 5. Despliegue en Netlify

1. Sube este proyecto a un repositorio de GitHub.
2. En Netlify: **Add new site → Import an existing project** y elige el repo.
3. Netlify detecta Next.js automáticamente (ya viene `netlify.toml` con el
   plugin oficial `@netlify/plugin-nextjs`).
4. En **Site settings → Environment variables**, agrega las tres variables del
   paso 4 (usa tu dominio real en `NEXT_PUBLIC_SITE_URL`).
5. **Deploy.**

## 6. Personalizar el contenido

Casi todo el contenido editable vive en un solo lugar:

- **`src/lib/data/contenido.ts`** — datos de contacto, WhatsApp, redes, línea del
  tiempo, creencias, proyectos y **las columnas semanales**.

Para publicar una nueva columna, agrega un objeto al arreglo `COLUMNAS` (con su
`slug`, título, fecha, contenido, etc.). La página se genera sola.

Reemplaza las imágenes de `public/images/` (son placeholders de marca) por
fotografías reales. Cambia también `public/og.jpg` (imagen para redes) y
`public/favicon.svg`.

## 7. Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx            # fuentes, metadatos, SEO global
│   ├── page.tsx              # landing (ensambla todas las secciones)
│   ├── admin/                # panel de reportes (login Supabase Auth)
│   ├── columna/              # listado + [slug] de columnas
│   ├── aviso-de-privacidad/  # legales
│   ├── terminos/
│   ├── sitemap.ts            # sitemap.xml dinámico
│   └── robots.ts             # robots.txt dinámico
├── components/
│   ├── layout/               # navbar, footer, botón de WhatsApp
│   ├── sections/             # hero, about, beliefs, work, formularios…
│   └── ui/                   # componentes base (shadcn)
├── lib/
│   ├── supabase/             # clientes de navegador y servidor
│   ├── validations/          # esquemas Zod de los formularios
│   ├── data/contenido.ts     # TODO el contenido editable
│   └── utils.ts
└── types/database.ts         # tipos de las tablas de Supabase
```

## 8. Scripts

| Comando | Acción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir el build |
| `npm run lint` | Linter |
| `npm run typecheck` | Revisar tipos sin compilar |

---

Hecho con cariño para la comunidad de Benito Juárez.

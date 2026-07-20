import {
  Users,
  HeartHandshake,
  GraduationCap,
  Sparkles,
  HandHelping,
  Home,
  type LucideIcon,
} from "lucide-react";

// ── Datos de contacto del movimiento ──────────────────────────
export const CONTACTO = {
  nombrePublico: "Carlos De la O",
  nombreCompleto: "Carlos Mateo López De la O",
  alcaldia: "Benito Juárez, Ciudad de México",
  whatsapp: "5534548267",
  whatsappTexto: "¿Necesitas ayuda? Escríbeme.",
  instagram: "https://instagram.com/",
  x: "https://x.com/",
  facebook: "https://facebook.com/",
} as const;

// ── Navegación ────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#creo", label: "En qué creo" },
  { href: "#trabajo", label: "Mi trabajo" },
  { href: "#columna", label: "Columna" },
  { href: "#reportar", label: "Reportar" },
  { href: "#sumate", label: "Súmate" },
] as const;

// ── Línea del tiempo (Sobre mí) ───────────────────────────────
export const TIMELINE = [
  {
    anio: "El origen",
    titulo: "De una iniciativa por la vivienda digna",
    texto:
      "Llegué a lo público de la mano del liderazgo de Ro Cordera, con quien presenté una iniciativa por la vivienda digna. Lo que siempre me ha movido es simple: las ganas de ayudar y la certeza de que desde lo público sí se puede lograr.",
  },
  {
    anio: "Primera generación",
    titulo: "Campus Naranja",
    texto:
      "Gracias a Paty Urriza y Beto Amor me inscribí en la primera generación del Campus Naranja, la escuela de formación de Movimiento Ciudadano. Me gradué en octubre de 2025.",
  },
  {
    anio: "Nov 2025",
    titulo: "Hacer comunidad en Benito Juárez",
    texto:
      "Empecé a hacer equipo con Alejandro Mijes, Laura Ballesteros y Maribel Ramírez para crear comunidad en la alcaldía. Desde entonces recorro la Benito Juárez todos los días.",
  },
  {
    anio: "Feb 2026",
    titulo: "Coach del Campus Naranja",
    texto:
      "Regresé al Campus Naranja, ahora del otro lado: como coach, acompañando a la siguiente generación de liderazgos.",
  },
  {
    anio: "Abr 2026",
    titulo: "Delegado de Fundación México con Valores",
    texto:
      "Asumí como delegado distrital federal de la Fundación México con Valores en Benito Juárez.",
  },
  {
    anio: "Hoy",
    titulo: "Resolverle al vecino",
    texto:
      "Mi chamba de todos los días es hacer comunidad y resolverle al vecino. No es una campaña: es un hábito.",
  },
] as const;

// ── En qué creo ───────────────────────────────────────────────
export type Creencia = {
  icono: LucideIcon;
  titulo: string;
  texto: string;
};

export const CREENCIAS: Creencia[] = [
  {
    icono: Home,
    titulo: "Vivienda digna para los jóvenes",
    texto:
      "Que quien creció en Benito Juárez pueda quedarse a vivir en Benito Juárez.",
  },
  {
    icono: HeartHandshake,
    titulo: "Una alcaldía cercana",
    texto: "Un gobierno que escucha en la banqueta, no desde el escritorio.",
  },
  {
    icono: Users,
    titulo: "Comunidad",
    texto: "Nadie mejora una colonia en solitario. Se hace en equipo, cara a cara.",
  },
  {
    icono: HandHelping,
    titulo: "Servicio",
    texto:
      "Estar cerca no es un eslogan: es resolverle al vecino cuando lo necesita.",
  },
  {
    icono: GraduationCap,
    titulo: "Formar liderazgos",
    texto: "Formar a más líderes locales multiplica cada esfuerzo por diez.",
  },
  {
    icono: Sparkles,
    titulo: "Juventud",
    texto: "Las nuevas generaciones no son el futuro: ya cambian el presente.",
  },
];

// ── Mi trabajo (proyectos realizados) ─────────────────────────
export type Proyecto = {
  slug: string;
  titulo: string;
  descripcion: string;
  impacto: string;
  fecha: string;
  imagen: string;
};

export const PROYECTOS: Proyecto[] = [
  {
    slug: "recorridos-diarios",
    titulo: "Recorridos diarios",
    descripcion:
      "Camino las colonias de Benito Juárez todos los días, escuchando a las familias y levantando lo que hace falta.",
    impacto: "Todos los días en la calle desde noviembre de 2025",
    fecha: "Desde nov 2025",
    imagen: "/images/proyecto-recorridos.jpg",
  },
  {
    slug: "entrega-de-donativos",
    titulo: "Entrega de donativos",
    descripcion:
      "Llevamos apoyos en especie a familias de la alcaldía. Es apenas la primera de muchas.",
    impacto: "Primera entrega hecha; vienen más",
    fecha: "2026",
    imagen: "/images/proyecto-gestiones.jpg",
  },
  {
    slug: "jornada-medica-madres",
    titulo: "Jornada médica por el Día de las Madres",
    descripcion:
      "Una jornada de salud gratuita para la comunidad, en conmemoración del Día de las Madres.",
    impacto: "Salud gratuita para las mamás de la colonia",
    fecha: "Mayo 2026",
    imagen: "/images/proyecto-recorridos.jpg",
  },
  {
    slug: "coach-campus-naranja",
    titulo: "Coach en el Campus Naranja",
    descripcion:
      "Acompaño a la nueva generación de liderazgos con módulos en modalidad presencial, cíclica y en línea, como parte de la coordinación.",
    impacto: "3 módulos coordinados con éxito",
    fecha: "2026",
    imagen: "/images/proyecto-formacion.jpg",
  },
];

// ── La columna de la semana ───────────────────────────────────
export type Columna = {
  slug: string;
  titulo: string;
  extracto: string;
  contenido: string[];
  fecha: string;
  minutosLectura: number;
  autor: string;
  imagen: string;
};

export const COLUMNAS: Columna[] = [
  {
    slug: "la-comunidad-que-si-funciona",
    titulo: "La comunidad que sí funciona",
    extracto:
      "Lo que aprendí recorriendo Benito Juárez todos los días: los problemas se resuelven más rápido cuando los vecinos se organizan.",
    fecha: "2026-07-10",
    minutosLectura: 4,
    autor: "Carlos De la O",
    imagen: "/images/columna-1.jpg",
    contenido: [
      "Desde noviembre del año pasado recorro la alcaldía todos los días. La conclusión es sencilla: la comunidad que se organiza consigue resultados que ninguna oficina logra por su cuenta.",
      "Cuando un vecino reporta un bache y otros tres lo respaldan, la gestión avanza distinto. No es magia; es corresponsabilidad. Por eso este proyecto pone a la comunidad en el centro y no a una sola persona.",
      "La transparencia es la otra mitad. Cada gestión que iniciamos queda registrada y se puede consultar. Si prometemos dar seguimiento, tiene que poder comprobarse.",
      "Esta columna existe para eso: contar lo que estamos haciendo, con nombre y fecha, e invitarte a sumarte. Haz el bien sin mirar a quién: Benito Juárez mejora cuando más manos deciden involucrarse.",
    ],
  },
  {
    slug: "vivienda-digna-para-quedarse",
    titulo: "Vivienda digna para quedarse",
    extracto:
      "Empecé en esto con una iniciativa por la vivienda digna. Sigue siendo mi bandera: que los jóvenes puedan quedarse a vivir donde crecieron.",
    fecha: "2026-07-03",
    minutosLectura: 3,
    autor: "Carlos De la O",
    imagen: "/images/columna-2.jpg",
    contenido: [
      "Mi camino en lo público empezó con una iniciativa por la vivienda digna. No fue casualidad: es el tema que más me mueve.",
      "Cada vez conozco a más jóvenes de Benito Juárez que crecieron aquí y hoy no pueden pagar quedarse. Perder a esas generaciones es perder el alma de la alcaldía.",
      "Una alcaldía cercana tiene que hacerse esta pregunta todos los días: ¿qué estamos haciendo para que los nuestros puedan quedarse? De eso van estas líneas, y de eso va el trabajo.",
    ],
  },
];

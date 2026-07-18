import {
  Users,
  HeartHandshake,
  GraduationCap,
  Trees,
  Sparkles,
  ShieldCheck,
  HandHelping,
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
    anio: "El inicio",
    titulo: "Un vecino que decidió no quedarse callado",
    texto:
      "Crecí en Benito Juárez. Vi de cerca lo que funciona y lo que falta. En algún momento dejé de esperar a que alguien más lo arreglara.",
  },
  {
    anio: "Formación",
    titulo: "Datos al servicio de la comunidad",
    texto:
      "Estudiando Ciencia de Datos aprendí que las buenas decisiones nacen de escuchar bien y medir mejor. Esa es la forma en que trabajo.",
  },
  {
    anio: "Servicio",
    titulo: "Delegado y coach ciudadano",
    texto:
      "Como Delegado de Fundación México con Valores y Coach del Campus Naranja, acompaño a más personas a organizarse y actuar.",
  },
  {
    anio: "Hoy",
    titulo: "Una comunidad que trabaja todos los días",
    texto:
      "Recorremos calles, escuchamos vecinos y damos seguimiento a cada gestión. No es una campaña: es un hábito de servicio.",
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
    icono: Users,
    titulo: "Participación ciudadana",
    texto: "El poder real está en los vecinos organizados, no en los escritorios.",
  },
  {
    icono: HeartHandshake,
    titulo: "Comunidad",
    texto: "Nadie mejora una colonia en solitario. Se hace en equipo, cara a cara.",
  },
  {
    icono: GraduationCap,
    titulo: "Educación",
    texto: "Formar a más líderes locales multiplica cada esfuerzo por diez.",
  },
  {
    icono: Trees,
    titulo: "Espacios públicos",
    texto: "Parques y calles dignas son el punto de encuentro de una comunidad sana.",
  },
  {
    icono: Sparkles,
    titulo: "Juventud",
    texto: "Las nuevas generaciones no son el futuro: ya están cambiando el presente.",
  },
  {
    icono: ShieldCheck,
    titulo: "Transparencia",
    texto: "Cada gestión se registra y se puede consultar. Sin cajas negras.",
  },
  {
    icono: HandHelping,
    titulo: "Servicio",
    texto: "Estar cerca no es un eslogan: es responder cuando alguien lo necesita.",
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
    slug: "recorridos-vecinales",
    titulo: "Recorridos vecinales",
    descripcion:
      "Caminamos las colonias de Benito Juárez escuchando a las familias y levantando reportes en el momento.",
    impacto: "Cientos de vecinos escuchados de manera directa",
    fecha: "2025",
    imagen: "/images/proyecto-recorridos.jpg",
  },
  {
    slug: "gestiones-ciudadanas",
    titulo: "Gestiones ciudadanas",
    descripcion:
      "Damos seguimiento puntual a cada reporte de servicios: baches, luminarias, poda y limpieza.",
    impacto: "Seguimiento público a cada solicitud",
    fecha: "2025",
    imagen: "/images/proyecto-gestiones.jpg",
  },
  {
    slug: "formacion-de-liderazgos",
    titulo: "Formación de liderazgos",
    descripcion:
      "Talleres del Campus Naranja para que más jóvenes aprendan a organizar y servir a su comunidad.",
    impacto: "Nuevas y nuevos líderes formados",
    fecha: "2024–2025",
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
      "Lo que aprendí tocando puertas en Benito Juárez: los problemas se resuelven más rápido cuando los vecinos se organizan.",
    fecha: "2025-07-14",
    minutosLectura: 4,
    autor: "Carlos De la O",
    imagen: "/images/columna-1.jpg",
    contenido: [
      "Durante meses he tocado puertas por toda la alcaldía. La conclusión es sencilla: la comunidad que se organiza consigue resultados que ninguna oficina logra por su cuenta.",
      "Cuando un vecino reporta un bache y otros tres lo respaldan, la gestión avanza distinto. No es magia; es corresponsabilidad. Por eso este proyecto pone a la comunidad en el centro y no a una sola persona.",
      "La transparencia es la otra mitad. Cada gestión que iniciamos queda registrada y se puede consultar. Si prometemos dar seguimiento, tiene que poder comprobarse.",
      "Esta columna existe para eso: contar lo que estamos haciendo, con nombre y fecha, y para invitarte a sumarte. Benito Juárez mejora cuando más manos deciden involucrarse.",
    ],
  },
  {
    slug: "datos-para-decidir-mejor",
    titulo: "Datos para decidir mejor",
    extracto:
      "No basta con tener buenas intenciones. Medir qué se reporta y qué se resuelve nos hace más útiles para el vecino.",
    fecha: "2025-07-07",
    minutosLectura: 3,
    autor: "Carlos De la O",
    imagen: "/images/columna-2.jpg",
    contenido: [
      "Vengo de la Ciencia de Datos y no puedo evitar verlo todo con esa lente: lo que no se mide, no se mejora.",
      "Saber qué categorías de problemas se reportan más —baches, alumbrado, basura— nos permite anticipar y no solo reaccionar. Los datos ordenan las prioridades del servicio.",
      "Pero los datos sin cercanía son fríos. Por eso combinamos las cifras con el recorrido a pie: el número te dice dónde mirar, la conversación te dice por qué.",
    ],
  },
];

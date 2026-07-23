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
  instagram: "https://instagram.com/carlosdlaoo",
  x: "https://x.com/CarlosDelaO24",
  facebook: "https://www.facebook.com/share/183sTjtcf5/",
} as const;

// ── Navegación ────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#creo", label: "En qué creo" },
  { href: "#trabajo", label: "Mi trabajo" },
  { href: "#columna", label: "Columna" },
  { href: "#reportar", label: "Reportar" },
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
      "Por invitación de Paty Urriza, Beto Amor y Jose Garulo me inscribí en la primera generación del Campus Naranja, la escuela de formación de Movimiento Ciudadano. 6 meses y con amigos que ya son familia, me gradué del programa de formación en acción polítcica.",
  },
  {
    anio: "Nov 2025",
    titulo: "Hacer comunidad en mi alcaldía, Benito Juárez",
    texto:
      "Empecé a hacer equipo con Alejandro Mijes, Laura Ballesteros y Maribel Ramírez para crear comunidad en la alcaldía. Desde entonces camino la Benito Juárez todos los días.",
  },
  {
    anio: "Feb 2026",
    titulo: "Coach del Campus Naranja",
    texto:
      "Por invitación de Jose Garulo, regresé al Campus Naranja, ahora del otro lado: como coach, acompañando a la siguiente generación de liderazgos, cada momento más seguro que los jovenes no somos el futuo, somos el presente.",
  },
  {
    anio: "Abr 2026",
    titulo: "Delegado de Fundación México con Valores",
    texto:
      "Bajo el liderazgo de Braulio Ochoa y Edgar Martínez, asumí el cargo de delegado distrital federal de la Fundación México con Valores en el distrito 15 con cabecera en Benito Juárez.",
  },
  {
    anio: "Hoy",
    titulo: "Resolverle al vecino",
    texto:
      "Tengo la mejor chamba del mundo, resolver.",
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
      "Que quien creció en Benito Juárez pueda quedarse a vivir en Benito Juárez. Tenemos que recordar a la vivienda como un derecho, no como el lujo que le han estado vendiendo a mi generación.",
  },
  {
    icono: HeartHandshake,
    titulo: "Una alcaldía cercana",
    texto: "Un gobierno que esté donde importe, casa por casa, colonia por colonia, escuchando y atendiendo.",
  },
  {
    icono: Users,
    titulo: "Comunidad",
    texto: "Solos podemos hacer muy poco, juntos podemos todo. En palabras de Laura Ballesteros: Solo la comunidad sostiene a la comunidad.",
  },
  {
    icono: HandHelping,
    titulo: "Primero las niñas y los niños",
    texto:
      "Porque garantizar el bienestar de las niñas y los niños es invertir en el presente y el futuro de la sociedad.",
  },
  {
    icono: GraduationCap,
    titulo: "Formar liderazgos",
    texto: "Formar a más líderes locales multiplica cada esfuerzo por diez.",
  },
  {
    icono: Sparkles,
    titulo: "Juventud",
    texto: "Apostar por la generación del México Nuevo es impulsar a quienes tenemos la energía, las ideas y el potencial para transformar el presente y construir un mejor futuro..",
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
      "Recorro las colonias de Benito Juárez todos los días, junto a Alejandro Mijes y un gran equipo de jóvenes entusiastas comprometidos por pintar nuestra alcaldía, escuchando a las familias y atendiendo en lo que realmente hace falta.",
    impacto: "Todos los días en la calle desde noviembre de 2025",
    fecha: "Desde nov 2025",
    imagen: "/images/proyecto-recorridos.jpg",
  },
  {
    slug: "entrega-de-donativos",
    titulo: "Entrega de donativos",
    descripcion:
      "Trabajamos de la mano con fundaciones de Benito Juárez, llevando apoyos en especie para fortalecer la labor que realizan todos los días.",
    impacto: "Una fundacion y una sonrisa a la vez",
    fecha: "2026",
    imagen: "/images/proyecto-gestiones.jpg",
  },
  {
    slug: "jornada-medica-madres",
    titulo: "Jornada médica por el Día de las Madres",
    descripcion:
      "Llevamos una jornada de salud gratuita para la comunidad, en conmemoración del Día de las Madres, realizada junto a Alejandro Mijes.",
    impacto: "Salud gratuita para las mamás de la alcaldía",
    fecha: "Mayo 2026",
    imagen: "/images/proyecto-recorridos.jpg",
  },
  {
    slug: "intercambio-estampas-mundial",
    titulo: "Intercambio de estampas del Mundial",
    descripcion:
      "Organizamos un intercambio de estampas del Mundial para que más niñas, niños y familias pudieran completar su álbum sin gastar de más, junto a Laura Ballesteros, Maribel Ramírez y Alejandro Mijes.",
    impacto: "Vecinos de todas las edades conviviendo en la calle",
    fecha: "2026",
    imagen: "/images/proyecto-gestiones.jpg",
  },
  {
    slug: "coach-campus-naranja",
    titulo: "Coach en el Campus Naranja",
    descripcion:
      "Acompaño a la nueva generación de liderazgos con módulos en modalidad presencial, cíclica y en línea, como parte de la coordinación.",
    impacto: "3 de 3 módulos coordinados con éxito",
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

export const COLUMNAS: Columna[] = [];

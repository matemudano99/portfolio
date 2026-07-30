// Contenido del portfolio, extraído del diseño (Portfolio.dc.html).
// Editá aquí los textos, proyectos y skills; la UI los consume tipados.

export type Lang = 'en' | 'es';

export type Localized = Record<Lang, string>;
export type LocalizedList = Record<Lang, string[]>;

export interface Strings {
  role: string;
  navWork: string;
  navExperience: string;
  navAbout: string;
  navContact: string;
  loc: string;
  avail: string;
  buildLabel: string;
  scroll: string;
  rollUi: string;
  paletteLabel: string;
  paletteHint: string;
  noResults: string;
  kbdMove: string;
  kbdRun: string;
  cmdGo: string;
  cmdCopy: string;
  cmdAccent: string;
  copied: string;
  hues: { green: string; blue: string; purple: string; orange: string };
  codeRole: string;
  codeOpen: string;
  heroLead: string;
  workLabel: string;
  workNote: string;
  experienceLabel: string;
  experienceNote: string;
  aboutLabel: string;
  skillsLabel: string;
  contactLabel: string;
  contactLead: string;
  cv: string;
  builtWith: string;
  bio1: string;
  bio2: string;
  bio3: string;
  open: string;
  close: string;
}

export const strings: Record<Lang, Strings> = {
  en: {
    role: 'multiplatform app developer · full-stack',
    navWork: 'work',
    navExperience: 'experience',
    navAbout: 'about',
    navContact: 'contact',
    loc: 'Málaga, Spain',
    avail: 'open to junior roles & internships',
    buildLabel: '// I build',
    scroll: 'jump to work',
    rollUi: 'Desktop & web interfaces',
    paletteLabel: 'commands',
    paletteHint: 'type a command or section…',
    noResults: 'no matches',
    kbdMove: 'navigate',
    kbdRun: 'run',
    cmdGo: 'go to',
    cmdCopy: 'copy email address',
    cmdAccent: 'accent',
    copied: 'email copied',
    hues: { green: 'green', blue: 'blue', purple: 'purple', orange: 'orange' },
    codeRole: 'Full-stack developer',
    codeOpen: 'junior roles & internships',
    heroLead:
      'Full-stack developer working across backend services, databases and the interfaces on top of them. Java and Python at the core.',
    workLabel: 'selected work',
    workNote: 'Two real-world products and one study project. Hover to preview, click to expand.',
    experienceLabel: 'experience',
    experienceNote: 'Where I have worked so far — real team, real deadlines.',
    aboutLabel: 'about',
    skillsLabel: 'stack',
    contactLabel: 'contact',
    contactLead:
      'Looking for a first role or internship as a developer — Málaga, remote or hybrid.',
    cv: 'cv.pdf',
    builtWith: 'hand-written HTML · no template',
    bio1: 'I am a multiplatform application developer based in Málaga, finishing a Higher Technician degree in Application Development at Digitech FP.',
    bio2: 'I work mainly on the backend — Java, Spring Boot, Python — designing REST APIs, data models and CRUD systems, and I build the interfaces that sit on top of them.',
    bio3: 'Alongside my studies I run the kitchen at La Terracita Burger, leading a small team. That is where most of my software ideas come from: real operations, real constraints.',
    open: 'open',
    close: 'close',
  },
  es: {
    role: 'desarrollador de aplicaciones multiplataforma · full-stack',
    navWork: 'proyectos',
    navExperience: 'experiencia',
    navAbout: 'sobre mí',
    navContact: 'contacto',
    loc: 'Málaga, España',
    avail: 'disponible para prácticas y primer empleo',
    buildLabel: '// trabajo con',
    scroll: 'ir a proyectos',
    rollUi: 'Interfaces web y escritorio',
    paletteLabel: 'comandos',
    paletteHint: 'escribe un comando o sección…',
    noResults: 'sin resultados',
    kbdMove: 'moverse',
    kbdRun: 'ejecutar',
    cmdGo: 'ir a',
    cmdCopy: 'copiar email',
    cmdAccent: 'acento',
    copied: 'email copiado',
    hues: { green: 'verde', blue: 'azul', purple: 'violeta', orange: 'naranja' },
    codeRole: 'Desarrollador full-stack',
    codeOpen: 'prácticas y primer empleo',
    heroLead:
      'Desarrollador full-stack centrado en servicios backend, bases de datos y las interfaces que las usan. Java y Python como base.',
    workLabel: 'proyectos',
    workNote: 'Dos productos reales y un proyecto de estudios. Pasa el cursor para ver, pulsa para abrir.',
    experienceLabel: 'experiencia',
    experienceNote: 'Dónde he trabajado hasta ahora — equipo real, plazos reales.',
    aboutLabel: 'sobre mí',
    skillsLabel: 'stack',
    contactLabel: 'contacto',
    contactLead:
      'Busco una primera oportunidad o prácticas en un equipo de desarrollo — Málaga, remoto o híbrido.',
    cv: 'cv.pdf',
    builtWith: 'HTML escrito a mano · sin plantilla',
    bio1: 'Soy desarrollador de aplicaciones multiplataforma en Málaga, terminando el Técnico Superior en Desarrollo de Aplicaciones en Digitech FP.',
    bio2: 'Trabajo sobre todo en backend — Java, Spring Boot, Python — diseñando APIs REST, modelos de datos y sistemas CRUD, y construyo las interfaces que los utilizan.',
    bio3: 'En paralelo a los estudios llevo la cocina de La Terracita Burger, con un pequeño equipo a mi cargo. De ahí salen casi todas mis ideas de software: operativa real, límites reales.',
    open: 'abrir',
    close: 'cerrar',
  },
};

/** 'wide' = captura de escritorio, 'tall' = captura de móvil. */
export type ShotKind = 'wide' | 'tall';

export interface Shot {
  src: string;
  kind: ShotKind;
  label: Localized;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  n: string;
  title: string;
  year: string;
  kind: Localized;
  status: Localized;
  roleLine: Localized;
  stack: string[];
  summary: Localized;
  bullets: LocalizedList;
  shots: Shot[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    n: '01',
    title: 'Soldmate',
    year: '2026',
    kind: {
      en: 'multiplatform ERP for hospitality · final degree project',
      es: 'ERP multiplataforma para hostelería · Trabajo de Fin de Grado',
    },
    status: { en: 'in development', es: 'en desarrollo' },
    roleLine: { en: 'solo project · design & development', es: 'proyecto individual · diseño y desarrollo' },
    stack: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Kotlin', 'JWT', 'Docker'],
    summary: {
      en: 'An affordable ERP for small bars and restaurants: inventory, staff, incidents, POS and cash closing in one system. Web app plus a native Android build, with a weather API on the dashboard to anticipate a busy weekend.',
      es: 'Un ERP asequible para bares y restaurantes pequeños: inventario, personal, incidencias, TPV y cierre de caja en un solo sistema. Aplicación web más build nativa de Android, con una API del clima en el panel para anticipar un fin de semana fuerte.',
    },
    bullets: {
      en: [
        'Spring Boot REST API with stateless JWT auth, BCrypt hashing and per-role authorization',
        'Multi-tenant PostgreSQL: the company id travels inside the token, so each business only ever sees its own data',
        'Next.js ERP with dashboard, inventory, POS, users, incidents, finances and an activity log',
        'Native Android app (Kotlin WebView) for Play Store presence and a signed APK',
        'Open-Meteo integration: the forecast on the dashboard helps plan stock and shifts',
      ],
      es: [
        'API REST en Spring Boot con autenticación JWT stateless, hash BCrypt y autorización por rol',
        'PostgreSQL multi-tenant: el id de empresa viaja dentro del token, así cada negocio solo ve sus propios datos',
        'ERP en Next.js con panel, inventario, TPV, usuarios, incidencias, finanzas y registro de actividad',
        'App nativa de Android (Kotlin con WebView) para tener presencia en Play Store y APK firmada',
        'Integración con Open-Meteo: el pronóstico en el panel ayuda a planificar stock y turnos',
      ],
    },
    shots: [
      {
        src: '/projects/soldmate/dashboard.webp',
        kind: 'wide',
        label: { en: 'dashboard with weather alerts', es: 'panel con alertas del clima' },
      },
      {
        src: '/projects/soldmate/pos.webp',
        kind: 'wide',
        label: { en: 'POS — table order and checkout', es: 'TPV — comanda de mesa y cobro' },
      },
      {
        src: '/projects/soldmate/login.webp',
        kind: 'wide',
        label: { en: 'login and business sign-up', es: 'login y alta de negocio' },
      },
      {
        src: '/projects/soldmate/mobile.webp',
        kind: 'tall',
        label: { en: 'Android app', es: 'app de Android' },
      },
    ],
    links: [
      { label: 'soldmate.vercel.app', url: 'https://soldmate.vercel.app/' },
      { label: 'github', url: 'https://github.com/matemudano99/soldmate' },
      {
        label: 'apk',
        url: 'https://drive.google.com/file/d/1LKpU9S7RTyf_3sjByZSkT1G2DRPlya1o/view?usp=sharing',
      },
    ],
  },
  {
    n: '02',
    title: 'La Terracita Burger',
    year: '2026',
    kind: {
      en: 'website + online ordering system · two locations',
      es: 'web y sistema de pedidos online · dos locales',
    },
    status: { en: 'live · used daily', es: 'en producción · en uso diario' },
    roleLine: { en: 'solo full-stack project', es: 'proyecto full-stack individual' },
    stack: ['React', 'Vite', 'Serverless', 'Supabase', 'PostgreSQL', 'MONEI'],
    summary: {
      en: 'Delivery platforms charge 15–30% per order. This is the restaurant’s own ordering channel — real card payments, a live kitchen panel and a sales dashboard — so every order arrives commission-free.',
      es: 'Las plataformas de delivery cobran un 15–30% por pedido. Este es el canal de pedidos propio del restaurante — pagos reales con tarjeta, panel de cocina en vivo y dashboard de ventas — para que cada pedido llegue sin comisiones.',
    },
    bullets: {
      en: [
        'Real payment gateway (card, Bizum, Apple & Google Pay) with verified webhook, server-side price recalculation and automatic refunds',
        'Order stays invisible until payment is confirmed — the server re-queries the gateway, compares the amount and is idempotent',
        'Live kitchen kanban: new → cooking → ready, sound alarm, 58 mm thermal ticket printing and instant sold-out toggles',
        'Admin dashboard with revenue, average ticket, peak hours, top products, per-location breakdown and CSV export',
        'Scheduled orders in the right timezone, delivery-zone check by geocoding and shareable order tracking',
        'GDPR pages, anti-abuse limits and a ~68 KB gzip main bundle',
      ],
      es: [
        'Pasarela de pago real (tarjeta, Bizum, Apple y Google Pay) con webhook verificado, recálculo de precios en servidor y reembolsos automáticos',
        'El pedido permanece invisible hasta confirmar el cobro — el servidor reconsulta la pasarela, compara el importe y es idempotente',
        'Kanban de cocina en vivo: nuevos → en cocina → listas, alarma sonora, impresión de ticket térmico de 58 mm y agotados al instante',
        'Panel de administración con ingresos, ticket medio, horas punta, top productos, desglose por local y export a CSV',
        'Pedidos programados con zona horaria correcta, control de zona de reparto por geocodificación y seguimiento compartible',
        'Páginas RGPD, protección anti-abuso y bundle principal de ~68 KB gzip',
      ],
    },
    shots: [
      {
        src: '/projects/terracita/order.webp',
        kind: 'wide',
        label: { en: 'ordering page — menu and cart', es: 'página de pedidos — carta y carrito' },
      },
      {
        src: '/projects/terracita/dashboard.webp',
        kind: 'wide',
        label: { en: 'admin — sales dashboard', es: 'admin — dashboard de ventas' },
      },
      {
        src: '/projects/terracita/hero.webp',
        kind: 'wide',
        label: { en: 'public site', es: 'web pública' },
      },
      {
        src: '/projects/terracita/checkout.webp',
        kind: 'tall',
        label: { en: 'checkout on mobile', es: 'checkout en móvil' },
      },
    ],
    links: [
      { label: 'laterracitaburger.com', url: 'https://laterracitaburger.com' },
      { label: 'pedir online', url: 'https://laterracitaburger.com/pedir' },
      { label: 'github', url: 'https://github.com/matemudano99/la-terracita-burger' },
    ],
  },
  {
    n: '03',
    title: 'Hospital Manager',
    year: '2025',
    kind: { en: 'desktop management system · team of 6', es: 'sistema de gestión de escritorio · equipo de 6' },
    status: { en: 'course project', es: 'proyecto de curso' },
    roleLine: { en: 'logic & design', es: 'lógica y diseño' },
    stack: ['Java', 'Swing', 'MySQL', 'JDBC'],
    summary: {
      en: 'Desktop application centralising the daily operations of a hospital: staff, patients, appointments and rooms, with the interface adapting to each professional profile.',
      es: 'Aplicación de escritorio que centraliza la operativa diaria de un hospital: personal, pacientes, citas y salas, con la interfaz adaptándose a cada perfil profesional.',
    },
    bullets: {
      en: [
        'Login with five role profiles — admin, administrative, doctor, nurse and maintenance — each with its own permissions and views',
        'Patients and appointments: digital medical history, calendar of doctor availability and room assignment',
        'Infrastructure module: operating theatres and consulting rooms, disinfection scheduling and occupancy stats',
        'Requirements analysis, business logic and a user manual documented with screenshots',
      ],
      es: [
        'Login con cinco perfiles de rol — administrador, administrativo, médico, enfermero y mantenimiento — cada uno con sus permisos y vistas',
        'Pacientes y citas: historial médico digital, calendario de disponibilidad de médicos y asignación de habitaciones',
        'Módulo de infraestructura: quirófanos y consultorios, programación de desinfección y estadísticas de ocupación',
        'Análisis de requisitos, lógica de negocio y manual de uso documentado con capturas',
      ],
    },
    shots: [
      {
        src: '/projects/hospital/menu.webp',
        kind: 'wide',
        label: { en: 'main menu by role', es: 'menú principal por rol' },
      },
      {
        src: '/projects/hospital/patients.webp',
        kind: 'wide',
        label: { en: 'patient management', es: 'gestión de pacientes' },
      },
      {
        src: '/projects/hospital/login.webp',
        kind: 'wide',
        label: { en: 'login with role selection', es: 'login con selección de rol' },
      },
    ],
  },
];

export interface Experience {
  company: string;
  role: Localized;
  kind: Localized; // tipo: prácticas, junior, etc.
  period: string; // año o rango
  length: Localized; // duración legible
  location: string;
  summary: Localized;
  bullets: LocalizedList;
  stack: string[];
}

// TODO (Mateo): esto es un BORRADOR. Reemplaza summary, bullets y stack por lo
// que hiciste realmente en Phonegest — tecnologías concretas, tareas, proyectos
// en los que ayudaste. Ajusta también `location` y `period` si hace falta.
export const experience: Experience[] = [
  {
    company: 'Phonegest',
    role: { en: 'Development intern', es: 'Prácticas de desarrollo' },
    kind: { en: 'internship · FCT', es: 'prácticas · FCT' },
    period: '2024',
    length: { en: '3 months', es: '3 meses' },
    location: 'Málaga, ES',
    summary: {
      en: 'My first professional experience: three months inside a working development team, taking assigned tasks from idea to a tested, delivered feature.',
      es: 'Mi primera experiencia profesional: tres meses dentro de un equipo de desarrollo real, llevando las tareas asignadas desde la idea hasta una funcionalidad probada y entregada.',
    },
    bullets: {
      en: [
        'Worked to a real team workflow — version control, tasks and code review',
        'Turned assigned tickets into working, tested features',
        'Learned how software is built and shipped outside the classroom',
      ],
      es: [
        'Trabajé con el flujo de un equipo real — control de versiones, tareas y revisión de código',
        'Convertí las tareas asignadas en funcionalidades probadas y funcionando',
        'Aprendí cómo se construye y se entrega software fuera del aula',
      ],
    },
    stack: ['Git', 'Teamwork'],
  },
];

export interface SkillGroup {
  label: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: { en: 'languages', es: 'lenguajes' }, items: ['Java', 'Python', 'SQL', 'JavaScript', 'Kotlin (basics)'] },
  { label: { en: 'backend', es: 'backend' }, items: ['Spring Boot', 'Hibernate', 'REST APIs', 'JDBC', 'MVC · OOP'] },
  {
    label: { en: 'frontend', es: 'frontend' },
    items: ['React', 'Next.js', 'Angular', 'Java Swing / JavaFX', 'HTML · CSS'],
  },
  {
    label: { en: 'data', es: 'datos' },
    items: ['MySQL', 'PostgreSQL', 'Supabase', 'MongoDB', 'Data modelling'],
  },
  {
    label: { en: 'tools', es: 'herramientas' },
    items: ['Git · GitHub', 'Docker', 'IntelliJ IDEA', 'Android Studio', 'Vercel', 'Odoo'],
  },
];

export interface Fact {
  k: string;
  v: string;
}

export const facts: Record<Lang, Fact[]> = {
  en: [
    { k: 'based_in', v: 'Málaga, Spain' },
    { k: 'studying', v: 'Higher Technician, App Development' },
    { k: 'languages', v: 'Spanish · English B2/C1 · Italian A1' },
    { k: 'mobility', v: 'Driving licence B · willing to relocate' },
  ],
  es: [
    { k: 'ubicación', v: 'Málaga, España' },
    { k: 'formación', v: 'Técnico Superior en Desarrollo de Aplicaciones' },
    { k: 'idiomas', v: 'Español · Inglés B2/C1 · Italiano A1' },
    { k: 'movilidad', v: 'Carné B · disponibilidad geográfica' },
  ],
};

export type HueKey = 'green' | 'blue' | 'purple' | 'orange';

export interface Accent {
  hex: string;
  key: HueKey;
}

export const accents: Accent[] = [
  { hex: '#7ee787', key: 'green' },
  { hex: '#7aa2f7', key: 'blue' },
  { hex: '#bb9af7', key: 'purple' },
  { hex: '#ff9e64', key: 'orange' },
];

export const DEFAULT_ACCENT = '#7ee787';
export const DEFAULT_LANG: Lang = 'en';

export const links = {
  email: 'mateomudano29@gmail.com',
  phone: '+34 672 40 00 33',
  phoneHref: 'tel:+34672400033',
  github: 'https://github.com/matemudano99',
  linkedin: 'https://www.linkedin.com/in/mateomudano/',
  cv: '/assets/Mateo-Mudano-CV.pdf',
};

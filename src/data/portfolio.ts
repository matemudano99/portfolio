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
    workNote: 'Two products in use, two study projects. Hover to preview, click to expand.',
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
    workNote: 'Dos productos en uso y dos proyectos de estudios. Pasa el cursor para ver, pulsa para abrir.',
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
  shots: LocalizedList;
}

export const projects: Project[] = [
  {
    n: '01',
    title: 'Soldmate',
    year: '2026',
    kind: { en: 'ERP for restaurant management', es: 'ERP para gestión de restaurantes' },
    status: { en: 'in development', es: 'en desarrollo' },
    roleLine: { en: 'design & development', es: 'diseño y desarrollo' },
    stack: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    summary: {
      en: 'An ERP built around how a restaurant actually runs — stock, suppliers, staff and daily sales in one system instead of four spreadsheets.',
      es: 'Un ERP pensado desde cómo funciona un restaurante de verdad: stock, proveedores, personal y ventas diarias en un solo sistema en lugar de cuatro hojas de cálculo.',
    },
    bullets: {
      en: [
        'Role-based access for owners, managers and floor staff',
        'Inventory and supplier orders tied to daily sales',
        'Data model designed from the workflow of a working kitchen',
      ],
      es: [
        'Acceso por roles para propietarios, encargados y sala',
        'Inventario y pedidos a proveedores ligados a la venta diaria',
        'Modelo de datos diseñado desde la operativa real de una cocina',
      ],
    },
    shots: {
      en: ['soldmate — dashboard', 'soldmate — stock view'],
      es: ['soldmate — panel', 'soldmate — inventario'],
    },
  },
  {
    n: '02',
    title: 'La Terracita Burger',
    year: '2025',
    kind: { en: 'restaurant website with online shop', es: 'web de restaurante con tienda online' },
    status: { en: 'live', es: 'en producción' },
    roleLine: { en: 'solo project', es: 'proyecto individual' },
    stack: ['HTML', 'CSS', 'JavaScript', 'Online shop'],
    summary: {
      en: 'Public site and ordering shop for the restaurant I work at: menu, hours and takeaway orders without a delivery platform taking a cut.',
      es: 'Web pública y tienda de pedidos del restaurante donde trabajo: carta, horarios y pedidos para llevar sin que una plataforma se lleve comisión.',
    },
    bullets: {
      en: [
        'Menu and product catalogue editable without touching code',
        'Order flow designed for phones first',
        'Built for a real client with real constraints — my own workplace',
      ],
      es: [
        'Carta y catálogo editables sin tocar código',
        'Flujo de pedido diseñado primero para móvil',
        'Hecho para un cliente real con límites reales: mi propio trabajo',
      ],
    },
    shots: {
      en: ['terracita — home', 'terracita — order flow'],
      es: ['terracita — inicio', 'terracita — pedido'],
    },
  },
  {
    n: '03',
    title: 'Hospital Manager',
    year: '2025',
    kind: { en: 'desktop CRUD system · team of 6', es: 'sistema CRUD de escritorio · equipo de 6' },
    status: { en: 'course project', es: 'proyecto de curso' },
    roleLine: { en: 'backend & database', es: 'backend y base de datos' },
    stack: ['Java', 'Swing', 'MySQL', 'JDBC'],
    summary: {
      en: 'Appointment, patient and staff management for a hospital, built as a six-person team over one term.',
      es: 'Gestión de citas, pacientes y empleados de un hospital, desarrollada en equipo de seis personas durante un trimestre.',
    },
    bullets: {
      en: [
        'RBAC access levels per staff role',
        'Appointments, patients and employees as full CRUD modules',
        'Git workflow across six contributors',
      ],
      es: [
        'Niveles de acceso RBAC según el rol del personal',
        'Citas, pacientes y empleados como módulos CRUD completos',
        'Flujo de trabajo con Git entre seis personas',
      ],
    },
    shots: {
      en: ['hospital — appointments', 'hospital — login / roles'],
      es: ['hospital — citas', 'hospital — acceso / roles'],
    },
  },
  {
    n: '04',
    title: 'Clicker Game',
    year: '2024',
    kind: { en: 'individual project · Python & Tkinter', es: 'proyecto individual · Python y Tkinter' },
    status: { en: 'finished', es: 'terminado' },
    roleLine: { en: 'solo project', es: 'proyecto individual' },
    stack: ['Python', 'Tkinter', 'MVC', 'Git'],
    summary: {
      en: 'A small incremental game written to practise strict MVC separation and version control on my own.',
      es: 'Un pequeño juego incremental escrito para practicar separación MVC estricta y control de versiones por mi cuenta.',
    },
    bullets: {
      en: [
        'Model, view and controller kept strictly separate',
        'State saved between sessions',
        'Versioned from the first commit',
      ],
      es: [
        'Modelo, vista y controlador estrictamente separados',
        'Estado guardado entre sesiones',
        'Versionado desde el primer commit',
      ],
    },
    shots: {
      en: ['clicker — main view', 'clicker — upgrades'],
      es: ['clicker — vista principal', 'clicker — mejoras'],
    },
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
  { label: { en: 'frontend', es: 'frontend' }, items: ['Java Swing / JavaFX', 'Angular', 'React', 'HTML · CSS'] },
  { label: { en: 'data', es: 'datos' }, items: ['MySQL', 'MongoDB', 'Data modelling'] },
  {
    label: { en: 'tools', es: 'herramientas' },
    items: ['Git · GitHub', 'IntelliJ IDEA', 'Android Studio', 'Odoo', 'VS Code · XAMPP'],
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

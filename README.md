# Portfolio

Portfolio personal construido con **Astro**, **React**, **TypeScript**, **Tailwind CSS v4** y **Motion**, con soporte multi-idioma (español / inglés).

## Stack

| Capa          | Tecnología                          |
| ------------- | ----------------------------------- |
| Framework     | Astro 5 (islas de React)            |
| Lenguaje      | TypeScript (modo strict)            |
| Estilos       | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animaciones   | Motion (`motion/react`)             |
| Contenido     | Content Collections + Markdown/MDX  |
| i18n          | Enrutado nativo de Astro (`es` por defecto, `en` en `/en`) |
| Deploy        | Vercel (build estático)             |

## Requisitos

- Node.js 20+ (probado con Node 24)

## Comandos

| Comando             | Acción                                          |
| ------------------- | ----------------------------------------------- |
| `npm install`       | Instala las dependencias                        |
| `npm run dev`       | Servidor de desarrollo en `localhost:4321`      |
| `npm run build`     | Compila el sitio a `./dist/`                     |
| `npm run preview`   | Sirve el build local para revisarlo             |
| `npm run format`    | Formatea el código con Prettier                 |

## Estructura

```
src/
├── components/          Componentes reutilizables (.astro y React en /react)
│   ├── pages/           Componentes de página (reciben `lang`)
│   └── react/           Islas interactivas de React (Motion)
├── content/
│   └── projects/        Proyectos en Markdown, por idioma (es/ · en/)
├── i18n/                Diccionario de textos y utilidades de idioma
├── layouts/             Layout base (head, header, footer, tema)
├── lib/                 Helpers (carga y orden de proyectos)
├── pages/               Rutas. `en/` refleja las rutas en inglés
├── styles/              global.css con tokens de diseño y Tailwind
└── content.config.ts    Esquema de las Content Collections
```

## Añadir un proyecto

Crea un archivo Markdown en `src/content/projects/es/` (y su equivalente en
`en/`). El frontmatter se valida contra el esquema de `src/content.config.ts`.
Campos clave: `title`, `description`, `lang`, `tags`, `featured`, `cover`, `url`, `repo`.

Las imágenes de portada (`cover`) pueden guardarse junto al `.md` y referenciarse
con una ruta relativa; Astro las optimiza automáticamente.

## Idiomas

- `es` es el idioma por defecto y vive en la raíz (`/`, `/projects`).
- `en` vive bajo `/en` (`/en`, `/en/projects`).
- Los textos de interfaz están en `src/i18n/ui.ts`.

## Diseño

Los tokens de diseño (colores, tipografías) están centralizados en el bloque
`@theme` de `src/styles/global.css`. Ajústalos ahí para aplicar tu diseño.

## Deploy en Vercel

1. Sube el repo a GitHub.
2. En Vercel, importa el proyecto: detecta Astro automáticamente.
3. Build command `npm run build`, output `dist/`. Sin configuración extra.

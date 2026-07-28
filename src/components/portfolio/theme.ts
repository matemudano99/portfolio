// Paleta del diseño (tema IDE oscuro). El acento es dinámico vía la variable
// CSS --a, por eso en los estilos usamos ACCENT = 'var(--a)' y no un hex fijo.

export const C = {
  bg: '#0b0d12',
  panel: '#10131a',
  bar: '#0d1017',
  border: 'rgba(255,255,255,.07)',
  border2: 'rgba(255,255,255,.1)',
  border3: 'rgba(255,255,255,.12)',
  text: '#d4d8e2',
  textStrong: '#e6eaf2',
  sub: '#a8b0bf',
  sub2: '#8f97a6',
  sub3: '#c9cfdb',
  muted: '#5f6673',
  muted2: '#7c8493',
  dim: '#3f4553',
  // sintaxis / acentos de color
  purple: '#bb9af7',
  blue: '#7aa2f7',
  green: '#9ece6a',
  yellow: '#e0af68',
  orange: '#ff9e64',
} as const;

/** Acento dinámico: lee la variable CSS que el componente actualiza. */
export const ACCENT = 'var(--a)';

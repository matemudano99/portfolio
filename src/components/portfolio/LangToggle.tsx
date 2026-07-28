import { C, ACCENT } from './theme';
import type { Lang } from '../../data/portfolio';

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
}

/** Slider EN/ES: el knob de acento se desliza al idioma activo. */
export default function LangToggle({ lang, setLang }: Props) {
  const isEs = lang === 'es';
  const label = (code: Lang, text: string) => (
    <span
      onClick={(e) => {
        e.stopPropagation();
        setLang(code);
      }}
      style={{
        position: 'relative',
        flex: 1,
        display: 'grid',
        placeItems: 'center',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '.05em',
        color: lang === code ? C.bg : C.muted,
        zIndex: 1,
        transition: 'color .25s ease',
      }}
    >
      {text}
    </span>
  );

  return (
    <button
      role="switch"
      aria-checked={isEs}
      aria-label="Language / Idioma"
      onClick={() => setLang(isEs ? 'en' : 'es')}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
        width: 58,
        height: 22,
        padding: 0,
        border: `1px solid ${C.border2}`,
        borderRadius: 999,
        background: 'rgba(255,255,255,.03)',
        overflow: 'hidden',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 2,
          left: 2,
          width: 'calc(50% - 2px)',
          height: 'calc(100% - 4px)',
          borderRadius: 999,
          background: ACCENT,
          transform: isEs ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform .25s cubic-bezier(.16,1,.3,1)',
        }}
      />
      {label('en', 'EN')}
      {label('es', 'ES')}
    </button>
  );
}

import type * as React from 'react';
import { useEffect, useState } from 'react';
import { C } from './theme';
import type { ShotVM } from './Work';

/**
 * Galería de capturas: tira horizontal con varias visibles a la vez, todas a
 * la misma altura y con su proporción real (nada de recortes ni marcos vacíos).
 * Al pulsar una se abre a tamaño grande sobre la página.
 */
export default function ShotGallery({ shots, hint }: { shots: ShotVM[]; hint: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const total = shots.length;

  // Teclado del visor ampliado + bloqueo del scroll de fondo.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      else if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % total));
      else if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i - 1 + total) % total));
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, total]);

  if (total === 0) return null;
  const current = open === null ? null : shots[open];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, alignSelf: 'start' }}>
      {/* tira horizontal */}
      <div
        className="dc-strip"
        style={{
          display: 'flex',
          gap: 8,
          overflowX: 'auto',
          overflowY: 'hidden',
          paddingBottom: 6,
          scrollSnapType: 'x proximity',
        }}
      >
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className="dc-shot"
            aria-label={s.label}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(i);
            }}
            style={{
              position: 'relative',
              flex: '0 0 auto',
              height: 'clamp(132px,15vw,180px)',
              aspectRatio: `${s.w} / ${s.h}`,
              padding: 0,
              border: `1px solid ${C.border2}`,
              borderRadius: 4,
              overflow: 'hidden',
              background: C.bg,
              cursor: 'zoom-in',
              scrollSnapAlign: 'start',
              transition: 'border-color .25s ease, transform .35s cubic-bezier(.16,1,.3,1)',
            }}
          >
            <img
              src={s.src}
              alt={s.label}
              width={s.w}
              height={s.h}
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <span
              className="dc-shot-cap"
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                padding: '14px 8px 6px',
                fontSize: 10,
                lineHeight: 1.35,
                textAlign: 'left',
                color: C.text,
                background: 'linear-gradient(to top,rgba(8,10,14,.94),rgba(8,10,14,0))',
                opacity: 0,
                transition: 'opacity .25s ease',
                pointerEvents: 'none',
              }}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>

      <span style={{ fontSize: 10.5, lineHeight: 1.5, color: C.muted }}>
        // {total} {hint}
      </span>

      {/* visor ampliado */}
      {current && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 95,
            background: 'rgba(5,6,9,.9)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            padding: 'clamp(16px,4vw,44px)',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={current.src}
            alt={current.label}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '100%',
              maxHeight: '76vh',
              objectFit: 'contain',
              border: `1px solid ${C.border3}`,
              borderRadius: 4,
              cursor: 'default',
            }}
          />
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 11.5, cursor: 'default' }}
          >
            {total > 1 && (
              <button
                type="button"
                aria-label="previous"
                className="dc-shot-nav"
                onClick={() => setOpen((i) => (i === null ? i : (i - 1 + total) % total))}
                style={navStyle}
              >
                ‹
              </button>
            )}
            <span style={{ color: C.sub }}>{current.label}</span>
            <span style={{ color: C.dim }}>
              {String((open ?? 0) + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
            </span>
            {total > 1 && (
              <button
                type="button"
                aria-label="next"
                className="dc-shot-nav"
                onClick={() => setOpen((i) => (i === null ? i : (i + 1) % total))}
                style={navStyle}
              >
                ›
              </button>
            )}
          </div>
          <span style={{ fontSize: 10.5, color: C.dim }}>esc</span>
        </div>
      )}
    </div>
  );
}

const navStyle: React.CSSProperties = {
  display: 'grid',
  placeItems: 'center',
  width: 28,
  height: 28,
  borderRadius: 3,
  border: `1px solid ${C.border2}`,
  color: C.sub,
  fontSize: 14,
  lineHeight: 1,
};

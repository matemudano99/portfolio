import type * as React from 'react';
import { useEffect, useState } from 'react';
import { C } from './theme';
import type { ShotVM } from './Work';

/**
 * Galería estilo ficha de producto: una captura grande seleccionada y una fila
 * de miniaturas debajo. Al pulsar la grande se abre a pantalla completa, donde
 * se puede hacer zoom y desplazarse por la imagen.
 */
export default function ShotGallery({ shots, hint }: { shots: ShotVM[]; hint: string }) {
  const [i, setI] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(false);
  const total = shots.length;
  const active = shots[Math.min(i, total - 1)];

  const step = (d: number) => {
    setI((n) => (n + d + total) % total);
    setZoom(false);
  };

  // Teclado del visor + bloqueo del scroll de fondo mientras está abierto.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoom) setZoom(false);
        else setLightbox(false);
      } else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, zoom, total]);

  if (total === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
      {/* captura grande */}
      <button
        type="button"
        className="dc-gallery-main"
        aria-label={active.label}
        onClick={(e) => {
          e.stopPropagation();
          setLightbox(true);
        }}
        style={{
          // El marco toma la proporción de la captura activa (nada de bandas
          // vacías en las apaisadas) y se limita en alto para las verticales.
          aspectRatio: `${active.w} / ${active.h}`,
          maxHeight: 'clamp(230px,42vh,430px)',
        }}
      >
        {shots.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={idx === i ? s.label : ''}
            width={s.w}
            height={s.h}
            decoding="async"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: idx === i ? 1 : 0,
              transition: 'opacity .3s ease',
            }}
          />
        ))}
        <span className="dc-gallery-zoom" aria-hidden="true">
          ⤢
        </span>
      </button>

      {/* pie + contador */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <span
          style={{
            fontSize: 10.5,
            lineHeight: 1.5,
            color: C.muted,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          // {active.label}
        </span>
        <span style={{ fontSize: 10.5, color: C.dim, flexShrink: 0 }}>
          {String(i + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>
      </div>

      {/* miniaturas */}
      {total > 1 && (
        <div className="dc-thumbs">
          {shots.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              className="dc-thumb"
              aria-label={s.label}
              aria-current={idx === i}
              data-active={idx === i ? 'true' : undefined}
              onClick={(e) => {
                e.stopPropagation();
                setI(idx);
              }}
            >
              <img
                src={s.src}
                alt=""
                width={s.w}
                height={s.h}
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </button>
          ))}
        </div>
      )}

      <span style={{ fontSize: 10.5, color: C.dim }}>// {hint}</span>

      {/* visor a pantalla completa con zoom */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 95,
            background: 'rgba(5,6,9,.93)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            padding: 'clamp(12px,3vw,36px)',
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setZoom((z) => !z);
            }}
            style={{
              maxWidth: '100%',
              maxHeight: '78vh',
              overflow: zoom ? 'auto' : 'hidden',
              cursor: zoom ? 'zoom-out' : 'zoom-in',
              border: `1px solid ${C.border3}`,
              borderRadius: 4,
              background: C.bg,
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <img
              src={active.src}
              alt={active.label}
              style={{
                display: 'block',
                width: zoom ? `${Math.max(active.w, 1600)}px` : 'auto',
                maxWidth: zoom ? 'none' : '100%',
                maxHeight: zoom ? 'none' : '78vh',
                height: 'auto',
                margin: '0 auto',
              }}
            />
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 11.5, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {total > 1 && (
              <button type="button" aria-label="previous" className="dc-shot-nav" onClick={() => step(-1)} style={navStyle}>
                ‹
              </button>
            )}
            <span style={{ color: C.sub }}>{active.label}</span>
            <span style={{ color: C.dim }}>
              {String(i + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
            </span>
            {total > 1 && (
              <button type="button" aria-label="next" className="dc-shot-nav" onClick={() => step(1)} style={navStyle}>
                ›
              </button>
            )}
          </div>
          <span style={{ fontSize: 10.5, color: C.dim }}>{zoom ? '100% · esc' : 'zoom · esc'}</span>
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

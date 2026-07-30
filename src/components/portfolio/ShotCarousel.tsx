import { useState } from 'react';
import { C, ACCENT } from './theme';
import type { ShotVM } from './Work';

const HATCH = 'repeating-linear-gradient(135deg,rgba(255,255,255,.035) 0 1px,transparent 1px 9px)';

/**
 * Visor de capturas con estética de editor: marco de altura fija (para que el
 * panel no crezca), tira de miniaturas y flechas. Las imágenes se apilan y se
 * funden entre sí, así ninguna se recorta ni se deforma.
 */
export default function ShotCarousel({ shots }: { shots: ShotVM[] }) {
  const [i, setI] = useState(0);
  const total = shots.length;
  const active = shots[Math.min(i, total - 1)];
  if (total === 0) return null;

  const go = (next: number) => setI(((next % total) + total) % total);

  const arrow = (dir: -1 | 1, label: string) => (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        go(i + dir);
      }}
      className="dc-shot-arrow"
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [dir === -1 ? 'left' : 'right']: 8,
        display: 'grid',
        placeItems: 'center',
        width: 26,
        height: 26,
        borderRadius: 3,
        border: `1px solid ${C.border2}`,
        background: 'rgba(11,13,18,.72)',
        backdropFilter: 'blur(4px)',
        color: C.sub,
        fontSize: 13,
        lineHeight: 1,
      }}
    >
      {dir === -1 ? '‹' : '›'}
    </button>
  );

  return (
    <div
      role="group"
      aria-label="screenshots"
      style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, alignSelf: 'start' }}
    >
      {/* marco principal */}
      <div
        style={{
          position: 'relative',
          height: 'clamp(170px,20vw,260px)',
          border: `1px solid ${C.border2}`,
          borderRadius: 4,
          background: C.bg,
          backgroundImage: HATCH,
          overflow: 'hidden',
        }}
      >
        {shots.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.label}
            decoding="async"
            style={{
              // caja fija + contain: la imagen nunca se deforma y, al tener
              // tamaño desde el principio, el lazy-loading sí se dispara.
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              opacity: idx === i ? 1 : 0,
              transform: idx === i ? 'scale(1)' : 'scale(.985)',
              transition: 'opacity .35s ease, transform .45s cubic-bezier(.16,1,.3,1)',
              pointerEvents: 'none',
            }}
          />
        ))}

        {total > 1 && arrow(-1, 'previous screenshot')}
        {total > 1 && arrow(1, 'next screenshot')}

        {/* contador, arriba a la derecha */}
        <span
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            fontSize: 10,
            padding: '3px 6px',
            borderRadius: 3,
            background: 'rgba(11,13,18,.72)',
            border: `1px solid ${C.border}`,
            color: C.muted,
          }}
        >
          {String(i + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>
      </div>

      {/* pie: nombre de la captura + abrir a tamaño real */}
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
        <a
          href={active.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="open full size"
          onClick={(e) => e.stopPropagation()}
          style={{ fontSize: 10.5, color: C.muted, flexShrink: 0 }}
        >
          ↗
        </a>
      </div>

      {/* miniaturas */}
      {total > 1 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {shots.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              aria-label={s.label}
              aria-current={idx === i}
              onClick={(e) => {
                e.stopPropagation();
                setI(idx);
              }}
              style={{
                width: 62,
                height: 40,
                padding: 0,
                borderRadius: 3,
                overflow: 'hidden',
                border: `1px solid ${idx === i ? ACCENT : C.border2}`,
                opacity: idx === i ? 1 : 0.45,
                background: C.bg,
                transition: 'opacity .25s ease, border-color .25s ease',
              }}
            >
              <img
                src={s.src}
                alt=""
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

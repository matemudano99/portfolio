import { C, ACCENT } from './theme';
import type { ProjectLink, Strings } from '../../data/portfolio';
import Reveal from '../react/Reveal';
import ShotCarousel from './ShotCarousel';

export interface ShotVM {
  src: string;
  kind: 'wide' | 'tall';
  label: string;
}

export interface ProjectVM {
  n: string;
  title: string;
  year: string;
  kind: string;
  status: string;
  roleLine: string;
  summary: string;
  bullets: string[];
  stack: string[];
  shots: ShotVM[];
  links: ProjectLink[];
  isOpen: boolean;
  cta: string;
  barW: string;
  numColor: string;
  rowOpacity: number;
  onEnter: () => void;
  onToggle: () => void;
}


interface Props {
  t: Strings;
  projects: ProjectVM[];
  onClearHover: () => void;
}

export default function Work({ t, projects, onClearHover }: Props) {
  return (
    <section
      id="work"
      style={{
        background: C.panel,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: 'clamp(46px,7vw,96px) 0 clamp(34px,5vw,72px)',
      }}
    >
      <Reveal
        className="dc-block"
        y={18}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 20,
            flexWrap: 'wrap',
            padding: '0 clamp(14px,3vw,40px) clamp(24px,4vw,44px)',
          }}
        >
          <h2 style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(22px,3vw,40px)', letterSpacing: '-.035em' }}>
            <span style={{ color: C.muted }}>//</span> {t.workLabel}
          </h2>
          <span style={{ fontSize: 11.5, lineHeight: 1.7, color: C.muted, maxWidth: '36ch' }}>{t.workNote}</span>
        </div>
      </Reveal>

      <div onMouseLeave={onClearHover}>
        {projects.map((p) => (
          <div
            key={p.n}
            style={{ borderTop: `1px solid ${C.border}`, opacity: p.rowOpacity, transition: 'opacity .4s ease' }}
          >
            <div
              onClick={p.onToggle}
              onMouseEnter={p.onEnter}
              style={{
                position: 'relative',
                cursor: 'pointer',
                padding: 'clamp(16px,2.2vw,26px) clamp(14px,3vw,40px)',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 'clamp(12px,3vw,34px)',
                alignItems: 'baseline',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  background: 'rgba(255,255,255,.035)',
                  width: p.barW,
                  transition: 'width .55s cubic-bezier(.16,1,.3,1)',
                  pointerEvents: 'none',
                }}
              />
              <span style={{ position: 'relative', fontSize: 12, color: p.numColor, transition: 'color .3s ease' }}>
                {p.n}
              </span>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 7 }}>
                <h3
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: 'clamp(24px,4.6vw,64px)',
                    lineHeight: 1,
                    letterSpacing: '-.045em',
                  }}
                >
                  {p.title}
                </h3>
                <span style={{ fontSize: 11.5, lineHeight: 1.5, color: C.muted }}>// {p.kind}</span>
              </div>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 'clamp(10px,2vw,20px)' }}>
                <span style={{ fontSize: 11.5, color: C.orange }}>{p.year}</span>
                <span style={{ fontSize: 11.5, color: p.numColor, whiteSpace: 'nowrap' }}>{p.cta}</span>
              </div>
            </div>

            {p.isOpen && (
              <div
                style={{
                  padding: '0 clamp(14px,3vw,40px) clamp(26px,4vw,50px)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
                  gap: 'clamp(18px,3vw,44px)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px,2.2vw,24px)' }}>
                  <p style={{ margin: 0, maxWidth: '48ch', fontSize: 14, lineHeight: 1.7, color: C.sub, textWrap: 'pretty' }}>
                    {p.summary}
                  </p>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      borderTop: `1px solid ${C.border}`,
                      paddingTop: 14,
                    }}
                  >
                    {p.bullets.map((b, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'auto 1fr',
                          gap: 10,
                          fontSize: 13,
                          lineHeight: 1.6,
                          color: C.sub2,
                        }}
                      >
                        <span style={{ color: ACCENT }}>▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: 11,
                          padding: '6px 9px',
                          border: `1px solid ${C.border2}`,
                          borderRadius: 3,
                          background: 'rgba(255,255,255,.02)',
                          color: C.green,
                        }}
                      >
                        "{s}"
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px,2vw,22px)', fontSize: 11.5 }}>
                    <span style={{ color: ACCENT }}>● {p.status}</span>
                    <span style={{ color: C.muted }}>{p.roleLine}</span>
                  </div>
                  {p.links.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {p.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="dc-linkbtn"
                          style={{
                            fontSize: 11.5,
                            padding: '9px 12px',
                            border: `1px solid ${C.border3}`,
                            borderRadius: 3,
                            background: C.bg,
                          }}
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {p.shots.length > 0 && <ShotCarousel key={p.n} shots={p.shots} />}
              </div>
            )}
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${C.border}` }} />
      </div>
    </section>
  );
}

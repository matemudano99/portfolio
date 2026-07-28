import { C, ACCENT } from './theme';
import type { Lang, Strings } from '../../data/portfolio';
import { experience } from '../../data/portfolio';
import Reveal from '../react/Reveal';

export default function Experience({ t, lang }: { t: Strings; lang: Lang }) {
  return (
    <section
      id="experience"
      style={{
        background: C.panel,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: 'clamp(46px,7vw,96px) 0 clamp(34px,5vw,72px)',
      }}
    >
      <Reveal y={18}>
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
            <span style={{ color: C.muted }}>//</span> {t.experienceLabel}
          </h2>
          <span style={{ fontSize: 11.5, lineHeight: 1.7, color: C.muted, maxWidth: '36ch' }}>{t.experienceNote}</span>
        </div>
      </Reveal>

      <div>
        {experience.map((e) => (
          <div
            key={e.company}
            style={{
              borderTop: `1px solid ${C.border}`,
              padding: 'clamp(20px,3vw,34px) clamp(14px,3vw,40px)',
              display: 'grid',
              gridTemplateColumns: 'minmax(120px,180px) 1fr',
              gap: 'clamp(16px,3vw,40px)',
            }}
          >
            {/* columna izquierda: periodo / duración / tipo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 13, color: C.orange }}>{e.period}</span>
              <span style={{ fontSize: 11.5, color: C.muted }}>{e.length[lang]}</span>
              <span style={{ fontSize: 11.5, color: C.muted }}>// {e.kind[lang]}</span>
            </div>

            {/* columna derecha: rol @ empresa + detalle */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <h3
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: 'clamp(20px,2.8vw,34px)',
                    lineHeight: 1.05,
                    letterSpacing: '-.035em',
                  }}
                >
                  {e.role[lang]} <span style={{ color: ACCENT }}>@ {e.company}</span>
                </h3>
                <span style={{ fontSize: 11.5, color: C.muted }}>{e.location}</span>
              </div>

              <p style={{ margin: 0, maxWidth: '52ch', fontSize: 14, lineHeight: 1.7, color: C.sub, textWrap: 'pretty' }}>
                {e.summary[lang]}
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
                {e.bullets[lang].map((b, i) => (
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

              {e.stack.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {e.stack.map((s) => (
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
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

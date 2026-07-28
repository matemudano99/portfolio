import { C } from './theme';
import type { Lang, Strings } from '../../data/portfolio';
import { facts as factsData, skillGroups } from '../../data/portfolio';
import Reveal from '../react/Reveal';

const sectionTitle = (label: string) => (
  <h2
    style={{
      margin: '0 0 clamp(18px,3vw,28px)',
      fontWeight: 700,
      fontSize: 'clamp(22px,3vw,40px)',
      letterSpacing: '-.035em',
    }}
  >
    <span style={{ color: C.muted }}>//</span> {label}
  </h2>
);

export default function About({ t, lang }: { t: Strings; lang: Lang }) {
  const facts = factsData[lang];
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(46px,7vw,96px) clamp(14px,3vw,40px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: 'clamp(26px,5vw,64px)',
      }}
    >
      <Reveal y={18}>
        {sectionTitle(t.aboutLabel)}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13, maxWidth: '56ch' }}>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.75, textWrap: 'pretty' }}>{t.bio1}</p>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.75, color: C.sub, textWrap: 'pretty' }}>{t.bio2}</p>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.75, color: C.sub, textWrap: 'pretty' }}>{t.bio3}</p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
            gap: 14,
            marginTop: 'clamp(24px,4vw,36px)',
            borderTop: `1px solid ${C.border}`,
            paddingTop: 16,
          }}
        >
          {facts.map((f) => (
            <div key={f.k} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ fontSize: 10.5, color: C.muted }}>{f.k}:</span>
              <span style={{ fontSize: 13, lineHeight: 1.5, color: C.yellow }}>{f.v}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal y={18}>
        {sectionTitle(t.skillsLabel)}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: C.panel,
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          {skillGroups.map((g) => (
            <div
              key={g.label[lang]}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(84px,104px) 1fr',
                gap: 'clamp(12px,2vw,22px)',
                padding: '13px 14px',
                borderBottom: `1px solid rgba(255,255,255,.06)`,
              }}
            >
              <span style={{ fontSize: 10.5, lineHeight: 1.5, color: C.purple }}>{g.label[lang]}</span>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '5px 12px',
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: C.sub3,
                }}
              >
                {g.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

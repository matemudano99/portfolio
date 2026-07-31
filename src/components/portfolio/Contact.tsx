import { useEffect, useRef, useState } from 'react';
import { C, ACCENT } from './theme';
import type { Strings } from '../../data/portfolio';
import { links } from '../../data/portfolio';
import Reveal from '../react/Reveal';

interface Row {
  key: string;
  value: string;
  href?: string;
  external?: boolean;
  copy?: string;
}

export default function Contact({ t }: { t: Strings }) {
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = (key: string, text: string) => {
    if (navigator.clipboard) navigator.clipboard.writeText(text);
    setCopied(key);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1800);
  };

  const rows: Row[] = [
    { key: 'email', value: links.email, href: `mailto:${links.email}`, copy: links.email },
    { key: 'phone', value: links.phone, href: links.phoneHref, copy: links.phone },
    { key: 'location', value: 'Málaga, ES' },
    { key: 'github', value: 'github.com/matemudano99', href: links.github, external: true },
    { key: 'linkedin', value: 'linkedin.com/in/mateomudano', href: links.linkedin, external: true },
    { key: 'cv', value: 'Mateo-Mudano-CV.pdf', href: links.cv, external: true },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(46px,7vw,92px) clamp(14px,3vw,40px) clamp(26px,4vw,40px)',
        borderTop: `1px solid ${C.border}`,
        background: C.panel,
      }}
    >
      <Reveal y={18}>
        <div className="dc-contact">
          {/* izquierda: titular y llamada a la acción */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px,2vw,20px)', minWidth: 0 }}>
            <span style={{ fontSize: 11.5, color: C.muted }}>// {t.contactLabel}</span>
            <h2
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: 'clamp(30px,5vw,60px)',
                lineHeight: 1.02,
                letterSpacing: '-.045em',
              }}
            >
              {t.contactTitle}
              <span style={{ color: ACCENT }}>_</span>
            </h2>
            <p style={{ margin: 0, maxWidth: '44ch', fontSize: 14, lineHeight: 1.7, color: C.sub, textWrap: 'pretty' }}>
              {t.contactLead}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
              <a href={`mailto:${links.email}`} className="dc-cta">
                {t.ctaEmail} →
              </a>
              <a href={links.cv} target="_blank" rel="noopener noreferrer" className="dc-linkbtn dc-cta-ghost">
                {t.cv} ↗
              </a>
            </div>
          </div>

          {/* derecha: contact.txt */}
          <div
            style={{
              border: `1px solid ${C.border}`,
              borderRadius: 5,
              background: C.bg,
              overflow: 'hidden',
              minWidth: 0,
              alignSelf: 'start',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '9px 12px',
                borderBottom: `1px solid ${C.border}`,
                fontSize: 11,
                color: C.muted,
              }}
            >
              <span style={{ color: C.purple }}>◆</span> contact.txt
            </div>

            <div style={{ padding: '10px 0' }}>
              {rows.map((r, i) => (
                <div key={r.key} className="dc-crow">
                  <span style={{ textAlign: 'right', color: C.dim, fontSize: 12 }}>{i + 1}</span>
                  <span style={{ color: C.purple, fontSize: 12.5 }}>{r.key}</span>
                  {r.href ? (
                    <a
                      href={r.href}
                      target={r.external ? '_blank' : undefined}
                      rel={r.external ? 'noopener noreferrer' : undefined}
                      style={{
                        color: C.green,
                        fontSize: 12.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {r.value}
                      {r.external ? ' ↗' : ''}
                    </a>
                  ) : (
                    <span
                      style={{
                        color: C.sub,
                        fontSize: 12.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {r.value}
                    </span>
                  )}
                  {r.copy ? (
                    <button
                      type="button"
                      className="dc-copy"
                      aria-label={`${t.copyLabel} ${r.key}`}
                      onClick={() => copy(r.key, r.copy as string)}
                    >
                      {copied === r.key ? <span style={{ color: ACCENT }}>✓</span> : '⧉'}
                    </button>
                  ) : (
                    <span />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          marginTop: 'clamp(34px,6vw,76px)',
          paddingTop: 14,
          borderTop: `1px solid ${C.border}`,
          fontSize: 10.5,
          lineHeight: 1.6,
          color: C.dim,
        }}
      >
        <span>© 2026 Mateo Mudano</span>
        <span>{t.builtWith}</span>
      </div>
    </section>
  );
}

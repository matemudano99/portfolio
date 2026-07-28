import type * as React from 'react';
import { C } from './theme';
import type { Strings } from '../../data/portfolio';
import { links } from '../../data/portfolio';
import Reveal from '../react/Reveal';

function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="dc-linkbtn"
      style={{
        fontSize: 11.5,
        padding: '11px 14px',
        border: `1px solid ${C.border3}`,
        borderRadius: 3,
        background: C.bg,
      }}
    >
      {children}
    </a>
  );
}

export default function Contact({ t }: { t: Strings }) {
  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(46px,7vw,92px) clamp(14px,3vw,40px) clamp(26px,4vw,40px)',
        borderTop: `1px solid ${C.border}`,
        background: C.panel,
      }}
    >
      <Reveal y={18} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(18px,3.4vw,34px)' }}>
        <span style={{ fontSize: 11.5, color: C.muted }}>// {t.contactLabel}</span>
        <a
          href={`mailto:${links.email}`}
          style={{
            fontWeight: 700,
            fontSize: 'clamp(19px,5.2vw,74px)',
            lineHeight: 1.05,
            letterSpacing: '-.045em',
            wordBreak: 'break-all',
            color: C.green,
          }}
        >
          "{links.email}"
        </a>
        <p style={{ margin: 0, maxWidth: '48ch', fontSize: 14, lineHeight: 1.7, color: C.sub, textWrap: 'pretty' }}>
          {t.contactLead}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <LinkButton href={links.github}>github ↗</LinkButton>
          <LinkButton href={links.linkedin}>linkedin ↗</LinkButton>
          <LinkButton href={links.cv}>{t.cv} ↗</LinkButton>
          <a
            href={links.phoneHref}
            className="dc-linkbtn"
            style={{ fontSize: 11.5, padding: '11px 14px', border: `1px solid ${C.border3}`, borderRadius: 3, background: C.bg }}
          >
            {links.phone}
          </a>
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

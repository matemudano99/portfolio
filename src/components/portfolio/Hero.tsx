import type * as React from 'react';
import type { RefObject } from 'react';
import { C, ACCENT } from './theme';
import type { Strings } from '../../data/portfolio';

interface Props {
  t: Strings;
  lineRef: RefObject<HTMLDivElement | null>;
  onMove: (e: React.MouseEvent) => void;
  onLeave: () => void;
}

const num = (n: string) => ({ textAlign: 'right' as const, color: C.dim });

function CodeLine({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '38px 1fr', gap: 10 }}>
      <span style={num(n)}>{n}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Hero({ t, lineRef, onMove, onLeave }: Props) {
  return (
    <section
      id="top"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 'clamp(28px,5vw,56px)',
        padding: '76px clamp(14px,3vw,40px) 54px',
        overflow: 'hidden',
      }}
    >
      <div
        ref={lineRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: 1,
          background: ACCENT,
          opacity: 0,
          transition: 'opacity .4s ease',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 20,
          flexWrap: 'wrap',
          fontSize: 11.5,
          color: C.muted,
          position: 'relative',
        }}
      >
        <span>~/portfolio/index.kt</span>
        <span style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
          2024—2026 · Digitech FP
          <br />
          <span style={{ color: C.yellow }}>Técnico Superior DAM</span>
        </span>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: 11.5, color: C.muted, marginBottom: 14 }}>// {t.role}</div>
        <h1
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: 'clamp(40px,11.4vw,196px)',
            lineHeight: 0.9,
            letterSpacing: '-.05em',
            textTransform: 'uppercase',
          }}
        >
          MATEO
          <br />
          MUDANO<span style={{ color: ACCENT }}>_</span>
        </h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 12,
            marginTop: 'clamp(16px,3vw,30px)',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: 11.5, color: C.muted, whiteSpace: 'nowrap' }}>{t.buildLabel}</span>
          <div
            style={{
              fontWeight: 500,
              fontSize: 'clamp(18px,2.5vw,32px)',
              lineHeight: 1.2,
              height: '1.2em',
              overflow: 'hidden',
              color: ACCENT,
            }}
          >
            <div style={{ animation: 'dc-roll 9s cubic-bezier(.7,0,.3,1) infinite' }}>
              <div>REST APIs</div>
              <div>SQL data models</div>
              <div>{t.rollUi}</div>
              <div>REST APIs</div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 'clamp(20px,4vw,52px)',
          alignItems: 'end',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            fontSize: 'clamp(12px,1.05vw,14px)',
            lineHeight: 1.75,
            background: C.panel,
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            padding: '14px 4px 14px 0',
            overflowX: 'auto',
          }}
        >
          <CodeLine n="1">
            <span style={{ color: C.purple }}>val</span> <span style={{ color: C.blue }}>mateo</span> ={' '}
            <span style={{ color: C.yellow }}>Developer</span>(
          </CodeLine>
          <CodeLine n="2">
            &nbsp;&nbsp;role = <span style={{ color: C.green }}>"{t.codeRole}"</span>,
          </CodeLine>
          <CodeLine n="3">
            &nbsp;&nbsp;base = <span style={{ color: C.green }}>"Málaga, ES"</span>,
          </CodeLine>
          <CodeLine n="4">
            &nbsp;&nbsp;stack = <span style={{ color: C.purple }}>listOf</span>(
            <span style={{ color: C.green }}>"Java"</span>, <span style={{ color: C.green }}>"Spring Boot"</span>,{' '}
            <span style={{ color: C.green }}>"Python"</span>, <span style={{ color: C.green }}>"MySQL"</span>),
          </CodeLine>
          <CodeLine n="5">
            &nbsp;&nbsp;shipped = <span style={{ color: C.orange }}>3</span>,
          </CodeLine>
          <CodeLine n="6">
            &nbsp;&nbsp;openTo = <span style={{ color: C.green }}>"{t.codeOpen}"</span>
          </CodeLine>
          <CodeLine n="7">
            )<span style={{ animation: 'dc-blink 1.1s steps(1) infinite', color: ACCENT }}>▍</span>
          </CodeLine>
        </div>
        <a
          href="#work"
          style={{
            justifySelf: 'end',
            alignSelf: 'end',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 11.5,
            color: C.muted2,
          }}
        >
          {t.scroll} <span style={{ display: 'inline-block', width: 32, height: 1, background: ACCENT }} />
        </a>
      </div>
    </section>
  );
}

import type * as React from 'react';
import type { RefObject } from 'react';
import { C, ACCENT } from './theme';
import type { Strings } from '../../data/portfolio';

export interface CommandVM {
  icon: string;
  iconColor: string;
  label: string;
  hint: string;
  bg: string;
  color: string;
  run: () => void;
  onHover: () => void;
}

interface Props {
  t: Strings;
  query: string;
  commands: CommandVM[];
  noResults: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  onQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClose: () => void;
}

export default function CommandPalette({
  t,
  query,
  commands,
  noResults,
  inputRef,
  onQuery,
  onKeyDown,
  onClose,
}: Props) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'rgba(5,6,9,.6)',
        backdropFilter: 'blur(3px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '12vh 16px 16px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(560px,100%)',
          maxHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          background: C.panel,
          border: `1px solid rgba(255,255,255,.13)`,
          borderRadius: 6,
          boxShadow: '0 26px 70px rgba(0,0,0,.6)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 14px',
            borderBottom: `1px solid rgba(255,255,255,.08)`,
          }}
        >
          <span style={{ fontSize: 13, color: ACCENT }}>›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={onQuery}
            onKeyDown={onKeyDown}
            placeholder={t.paletteHint}
            style={{
              flex: 1,
              minWidth: 0,
              background: 'transparent',
              border: 0,
              outline: 'none',
              color: C.text,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13.5,
            }}
          />
          <span style={{ fontSize: 10.5, color: C.dim }}>esc</span>
        </div>

        <div style={{ overflowY: 'auto', padding: 6 }}>
          {commands.map((c, i) => (
            <div
              key={i}
              onClick={c.run}
              onMouseEnter={c.onHover}
              style={{
                display: 'grid',
                gridTemplateColumns: '18px 1fr auto',
                gap: 10,
                alignItems: 'center',
                padding: '9px 10px',
                borderRadius: 4,
                cursor: 'pointer',
                background: c.bg,
              }}
            >
              <span style={{ fontSize: 11, textAlign: 'center', color: c.iconColor }}>{c.icon}</span>
              <span
                style={{
                  fontSize: 13,
                  color: c.color,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {c.label}
              </span>
              <span style={{ fontSize: 10.5, color: C.dim }}>{c.hint}</span>
            </div>
          ))}
          {noResults && <div style={{ padding: '14px 10px', fontSize: 12, color: C.muted }}>{t.noResults}</div>}
        </div>

        <div
          style={{
            display: 'flex',
            gap: 14,
            padding: '9px 14px',
            borderTop: `1px solid rgba(255,255,255,.08)`,
            fontSize: 10.5,
            color: C.dim,
          }}
        >
          <span>↑↓ {t.kbdMove}</span>
          <span>↵ {t.kbdRun}</span>
        </div>
      </div>
    </div>
  );
}

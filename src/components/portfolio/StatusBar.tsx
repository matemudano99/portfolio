import { C, ACCENT } from './theme';
import type { Lang, Strings } from '../../data/portfolio';
import LangToggle from './LangToggle';

interface Props {
  t: Strings;
  lang: Lang;
  setLang: (l: Lang) => void;
  statusText: string;
  statusColor: string;
  paletteKey: string;
  onOpenPalette: () => void;
}

export default function StatusBar({
  t,
  lang,
  setLang,
  statusText,
  statusColor,
  paletteKey,
  onOpenPalette,
}: Props) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        height: 26,
        padding: '0 12px',
        background: C.bar,
        borderTop: `1px solid ${C.border}`,
        fontSize: 11,
        color: C.muted,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <span style={{ color: ACCENT }}>⎇ main</span>
        <span style={{ color: statusColor }}>{statusText}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, whiteSpace: 'nowrap' }}>
        <button
          onClick={onOpenPalette}
          className="dc-palette-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 11,
            color: C.muted2,
            padding: '3px 7px',
            border: `1px solid ${C.border2}`,
            borderRadius: 3,
          }}
        >
          {paletteKey} <span style={{ color: C.dim }}>{t.paletteLabel}</span>
        </button>
        <span>Málaga, ES</span>
        <LangToggle lang={lang} setLang={setLang} />
      </div>
    </div>
  );
}

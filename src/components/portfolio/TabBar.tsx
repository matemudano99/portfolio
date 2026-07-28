import { C, ACCENT } from './theme';

const TABS = [
  { id: 'top', label: 'index.kt', diamond: C.yellow },
  { id: 'work', label: 'projects.json', diamond: C.green },
  { id: 'about', label: 'about.md', diamond: C.blue },
  { id: 'contact', label: 'contact.txt', diamond: C.purple },
] as const;

export default function TabBar({ active }: { active: string }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: 'flex',
        alignItems: 'stretch',
        background: C.bar,
        borderBottom: `1px solid ${C.border}`,
        height: 40,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '0 14px',
          borderRight: `1px solid ${C.border}`,
          color: C.muted,
          fontSize: 11.5,
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT }} />
        mateo-mudano
      </div>
      <div style={{ display: 'flex', alignItems: 'stretch', overflowX: 'auto', flex: 1 }}>
        {TABS.map((tab) => {
          const on = active === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '0 16px',
                borderRight: `1px solid ${C.border}`,
                fontSize: 12,
                whiteSpace: 'nowrap',
                background: on ? C.panel : 'transparent',
                color: on ? C.text : C.muted,
                borderBottom: `1px solid ${on ? ACCENT : 'transparent'}`,
              }}
            >
              <span style={{ color: tab.diamond }}>◆</span>
              {tab.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

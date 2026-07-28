import type * as React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { C, ACCENT } from './theme';
import {
  strings,
  projects,
  accents,
  links,
  DEFAULT_ACCENT,
  DEFAULT_LANG,
  type Lang,
} from '../../data/portfolio';
import TabBar from './TabBar';
import StatusBar from './StatusBar';
import Hero from './Hero';
import Work, { type ProjectVM } from './Work';
import About from './About';
import Contact from './Contact';
import CommandPalette, { type CommandVM } from './CommandPalette';

interface BaseCommand {
  icon: string;
  iconColor: string;
  label: string;
  hint: string;
  keys: string;
  run: () => void;
}

const HATCH = 'repeating-linear-gradient(135deg,rgba(255,255,255,.05) 0 1px,transparent 1px 9px)';

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  const [accent, setAccent] = useState<string>(DEFAULT_ACCENT);
  const [hovered, setHovered] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(0);
  const [tab, setTab] = useState('top');
  const [palette, setPalette] = useState(false);
  const [query, setQuery] = useState('');
  const [sel, setSel] = useState(0);
  const [copied, setCopied] = useState(false);
  const [paletteKey, setPaletteKey] = useState('Ctrl K');

  const previewRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const matchedRef = useRef<BaseCommand[]>([]);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const t = strings[lang];

  // --- restaurar preferencias e info de plataforma (solo cliente) ---
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en' || savedLang === 'es') setLang(savedLang);
    const savedAccent = localStorage.getItem('accent');
    if (savedAccent) setAccent(savedAccent);
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
    setPaletteKey(isMac ? '⌘K' : 'Ctrl K');
  }, []);

  // --- acento -> variable CSS --a ---
  useEffect(() => {
    document.documentElement.style.setProperty('--a', accent);
    document.body.style.setProperty('--a', accent);
    localStorage.setItem('accent', accent);
  }, [accent]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // --- preview flotante que sigue al cursor ---
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = previewRef.current;
      if (el) el.style.transform = `translate(${e.clientX + 24}px,${e.clientY - 148}px)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // --- atajos de teclado del command palette ---
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = (e.key || '').toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === 'k') {
        e.preventDefault();
        setPalette((p) => !p);
        setQuery('');
        setSel(0);
        return;
      }
      if (k === 'escape') setPalette(false);
      if (k === '/') {
        const tag = document.activeElement?.tagName || '';
        if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
          e.preventDefault();
          setPalette(true);
          setQuery('');
          setSel(0);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // --- scroll spy: marca la pestaña activa ---
  useEffect(() => {
    const secs = ['top', 'work', 'about', 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setTab(en.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    secs.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  // --- foco del input al abrir el palette ---
  useEffect(() => {
    if (palette) inputRef.current?.focus();
  }, [palette]);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 40, behavior: 'smooth' });
  };

  const copyEmail = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(links.email);
    setPalette(false);
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2200);
  };

  const onHeroMove = (e: React.MouseEvent) => {
    const el = lineRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    el.style.left = `${e.clientX - r.left}px`;
    el.style.opacity = '1';
  };
  const onHeroLeave = () => {
    const el = lineRef.current;
    if (el) el.style.opacity = '0';
  };

  // --- view models de proyectos para el idioma actual ---
  const projectVMs: ProjectVM[] = projects.map((p, i) => {
    const isOpen = open === i;
    const isHover = hovered === i;
    return {
      n: p.n,
      title: p.title,
      year: p.year,
      kind: p.kind[lang],
      status: p.status[lang],
      roleLine: p.roleLine[lang],
      summary: p.summary[lang],
      bullets: p.bullets[lang],
      stack: p.stack,
      shots: p.shots[lang],
      isOpen,
      cta: isOpen ? `— ${t.close}` : `+ ${t.open}`,
      barW: isHover && !isOpen ? '100%' : '0%',
      numColor: isHover || isOpen ? ACCENT : C.dim,
      rowOpacity: hovered === null || isHover || isOpen ? 1 : 0.44,
      onEnter: () => setHovered(i),
      onToggle: () => setOpen((o) => (o === i ? null : i)),
    };
  });

  const showPreview = hovered !== null && open !== hovered;
  const previewLabel = hovered !== null ? projects[hovered].shots[lang][0] : '';

  // --- command palette ---
  const baseCommands: BaseCommand[] = useMemo(() => {
    const nav = [
      { id: 'top', name: 'index.kt', alt: '' },
      { id: 'work', name: t.navWork, alt: 'work projects proyectos' },
      { id: 'about', name: t.navAbout, alt: 'about sobre bio stack' },
      { id: 'contact', name: t.navContact, alt: 'contact contacto email' },
    ].map((s) => ({
      icon: '#',
      iconColor: C.blue,
      label: `${t.cmdGo} ${s.name}`,
      hint: 'section',
      keys: `${s.id} ${s.name} ${s.alt}`,
      run: () => {
        setPalette(false);
        goTo(s.id);
      },
    }));

    const langCmds = ([
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Español' },
    ] as { code: Lang; name: string }[])
      .filter((l) => l.code !== lang)
      .map((l) => ({
        icon: '⇄',
        iconColor: C.purple,
        label: l.name,
        hint: 'lang',
        keys: `language idioma lang ${l.code} ${l.name}`,
        run: () => {
          setLang(l.code);
          setPalette(false);
        },
      }));

    const copy: BaseCommand = {
      icon: '⧉',
      iconColor: C.green,
      label: t.cmdCopy,
      hint: 'clipboard',
      keys: 'copy copiar email mail correo',
      run: copyEmail,
    };

    const linkCmds = [
      { label: 'github.com/matemudano99', url: links.github, keys: 'github repo code' },
      { label: 'linkedin.com/in/mateomudano', url: links.linkedin, keys: 'linkedin' },
      { label: t.cv, url: links.cv, keys: 'cv curriculum resume pdf' },
    ].map((l) => ({
      icon: '↗',
      iconColor: C.yellow,
      label: l.label,
      hint: 'open',
      keys: `${l.keys} ${l.label}`,
      run: () => {
        setPalette(false);
        window.open(l.url, '_blank', 'noopener');
      },
    }));

    const hues = accents.map((h) => ({
      icon: '●',
      iconColor: h.hex,
      label: `${t.cmdAccent}: ${t.hues[h.key]}`,
      hint: 'theme',
      keys: `accent acento color theme tema ${h.key} ${t.hues[h.key]}`,
      run: () => {
        setAccent(h.hex);
        setPalette(false);
      },
    }));

    return [...nav, ...langCmds, copy, ...linkCmds, ...hues];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, t]);

  const q = query.trim().toLowerCase();
  const matched = q
    ? baseCommands.filter((c) => `${c.label} ${c.keys}`.toLowerCase().includes(q))
    : baseCommands;
  matchedRef.current = matched;
  const selIndex = Math.min(sel, Math.max(matched.length - 1, 0));
  const commandVMs: CommandVM[] = matched.map((c, i) => ({
    icon: c.icon,
    iconColor: c.iconColor,
    label: c.label,
    hint: c.hint,
    run: c.run,
    bg: i === selIndex ? 'rgba(255,255,255,.06)' : 'transparent',
    color: i === selIndex ? C.textStrong : C.sub,
    onHover: () => setSel(i),
  }));

  const onPaletteKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const list = matchedRef.current;
    const k = e.key;
    if (k === 'ArrowDown') {
      e.preventDefault();
      setSel((s) => (list.length ? (s + 1) % list.length : 0));
    } else if (k === 'ArrowUp') {
      e.preventDefault();
      setSel((s) => (list.length ? (s - 1 + list.length) % list.length : 0));
    } else if (k === 'Enter') {
      e.preventDefault();
      const c = list[Math.min(sel, list.length - 1)];
      if (c) c.run();
    } else if (k === 'Escape') {
      e.preventDefault();
      setPalette(false);
    }
  };

  return (
    <>
      <TabBar active={tab} />
      <StatusBar
        t={t}
        lang={lang}
        setLang={setLang}
        statusText={copied ? `✓ ${t.copied}` : t.avail}
        statusColor={copied ? ACCENT : C.muted}
        paletteKey={paletteKey}
        onOpenPalette={() => {
          setPalette(true);
          setQuery('');
          setSel(0);
        }}
      />

      <Hero t={t} lineRef={lineRef} onMove={onHeroMove} onLeave={onHeroLeave} />
      <Work t={t} projects={projectVMs} onClearHover={() => setHovered(null)} />
      <About t={t} lang={lang} />
      <Contact t={t} />

      {/* preview flotante */}
      <div
        ref={previewRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 80,
          pointerEvents: 'none',
          width: 'min(30vw,280px)',
          opacity: showPreview ? 1 : 0,
          transition: 'opacity .3s ease',
          willChange: 'transform',
        }}
      >
        <div
          style={{
            aspectRatio: '4/5',
            border: `1px solid rgba(255,255,255,.14)`,
            borderRadius: 4,
            background: C.bg,
            backgroundImage: HATCH,
            display: 'flex',
            alignItems: 'flex-end',
            padding: 11,
          }}
        >
          <span style={{ fontSize: 10.5, lineHeight: 1.5, color: C.muted }}>{previewLabel}</span>
        </div>
      </div>

      {palette && (
        <CommandPalette
          t={t}
          query={query}
          commands={commandVMs}
          noResults={matched.length === 0}
          inputRef={inputRef}
          onQuery={(e) => {
            setQuery(e.target.value);
            setSel(0);
          }}
          onKeyDown={onPaletteKey}
          onClose={() => setPalette(false)}
        />
      )}
    </>
  );
}

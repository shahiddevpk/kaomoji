from pathlib import Path

path = Path("app/globals.css")
text = path.read_text(encoding="utf-8")
start = text.find("/* Off-screen face cards")
end = text.find("@media (prefers-reduced-motion: reduce)")
if start < 0 or end < 0:
    raise SystemExit(f"markers missing start={start} end={end}")

new = r'''/* LCP hero text: system stack so Geist never blocks intro paint. */
.lcp-hero {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
}

/* Shared card chrome in CSS (not 96x repeated Tailwind) to cut HTML + style work. */
.kaomoji-card {
  content-visibility: auto;
  contain-intrinsic-size: auto 9.5rem;
  display: flex;
  height: 100%;
  min-height: 8.75rem;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background: var(--card);
  padding: 0.75rem;
  box-shadow: var(--shadow-sm);
}
.kaomoji-card--tall {
  min-height: 10.5rem;
}
.kaomoji-card:hover {
  border-color: color-mix(in srgb, var(--primary) 50%, var(--border));
  background: color-mix(in srgb, var(--hover) 50%, var(--card));
}
.kaomoji-card:focus-within {
  border-color: var(--primary);
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

.kaomoji-face {
  display: flex;
  min-height: 2.75rem;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-family: var(--font-geist-mono), ui-monospace, "Segoe UI Symbol",
    "Noto Sans JP", "Hiragino Sans", "Apple Color Emoji", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.35;
  text-align: center;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
  max-width: 100%;
  user-select: all;
}
.kaomoji-face--tall {
  min-height: 3.5rem;
  align-items: flex-start;
  padding-block: 0.25rem;
}

.kaomoji-copy {
  display: inline-flex;
  width: 100%;
  min-height: 2.75rem;
  min-width: 2.75rem;
  margin-top: auto;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 9999px;
  background: var(--primary);
  color: var(--accent-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;
}
.kaomoji-copy:hover {
  background: var(--primary-hover);
}
.kaomoji-copy:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

@media (min-width: 640px) {
  .kaomoji-card {
    min-height: 9.5rem;
    gap: 0.75rem;
    padding: 1rem;
  }
  .kaomoji-card--tall {
    min-height: 12rem;
  }
  .kaomoji-face {
    font-size: 1.375rem;
  }
}

'''
path.write_text(text[:start] + new + text[end:], encoding="utf-8")
print("globals.css updated ok")

/**
 * Keeps the home page seasonal banner correct without scheduled rebuilds.
 * The server renders the banner for the build date (good for crawlers and
 * no-JS visitors); this swaps it if the visitor's date is in another season.
 * Season data comes from SEASONS in components/kaomoji/seasonal-banner.tsx.
 */
type Season = {
  month: number;
  firstDay?: number;
  lastDay: number;
  href: string;
  face: string;
  title: string;
  blurb: string;
};

function el(tag: string, className?: string, text?: string): HTMLElement {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function applySeason() {
  const slot = document.querySelector<HTMLElement>("[data-season-slot]");
  if (!slot) return;
  let seasons: Season[];
  try {
    seasons = JSON.parse(slot.dataset.seasons || "[]");
  } catch {
    return;
  }
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();
  const season = seasons.find(
    (s) => s.month === month && day >= (s.firstDay ?? 1) && day <= s.lastDay,
  );
  if ((season?.href ?? "") === (slot.dataset.current ?? "")) return;

  slot.dataset.current = season?.href ?? "";
  slot.textContent = "";
  if (!season) return;

  const link = el("a", "seasonal-banner") as HTMLAnchorElement;
  link.href = season.href;
  const face = el("span", "seasonal-banner-face", season.face);
  face.setAttribute("aria-hidden", "true");
  const text = el("span", "flex flex-col");
  text.append(el("span", "type-h3", season.title), el("span", "type-meta", season.blurb));
  const cta = el("span", "seasonal-banner-cta", "Open →");
  cta.setAttribute("aria-hidden", "true");
  link.append(face, text, cta);
  slot.append(link);
}

applySeason();

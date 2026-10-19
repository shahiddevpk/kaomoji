import Link from "next/link";
import { pagesByGroup, siteConfig } from "@/lib/site";

const TOOL_PATHS = [
  "/kaomoji-copy-paste",
  "/kaomoji-generator",
  "/japanese-emoticons",
  "/text-faces",
  "/emoticons",
  "/cute-symbols",
  "/emoji-combos",
];

/** Descriptive anchor text: heading without trailing face glyphs. */
function anchorText(heading: string): string {
  return heading.replace(/\s*[(¯♡].*$/, "").replace(/\s+—.*$/, "").trim() || heading;
}

const linkClass =
  "inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

export function Footer() {
  const browse = pagesByGroup("browse");
  const tools = TOOL_PATHS.map((path) => browse.find((p) => p.path === path)).filter(
    (p) => p != null,
  );
  const moods = browse
    .filter((page) => !TOOL_PATHS.includes(page.path))
    .sort((a, b) => a.heading.localeCompare(b.heading));
  const trust = pagesByGroup("trust");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-card" role="contentinfo">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1fr_2fr_1fr]">
        <div>
          <p className="type-h3 text-foreground">{siteConfig.siteName} (◕‿◕)</p>
          <p className="mt-2 type-meta leading-6">
            A free library of kaomoji, Japanese emoticons, text faces, emoticons,
            and cute symbols — sorted by mood, copied in one tap.
          </p>
          <nav aria-label="Site" className="mt-4">
            <ul className="flex flex-wrap gap-x-4">
              {trust.map((page) => (
                <li key={page.path}>
                  <Link href={`${page.path}/`} className={linkClass}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <nav aria-label="Kaomoji by mood">
          <p className="type-label text-foreground">Kaomoji by mood</p>
          <ul className="footer-links">
            {moods.map((page) => (
              <li key={page.path}>
                <Link href={`${page.path}/`} className={linkClass}>
                  {anchorText(page.heading)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Tools">
          <p className="type-label text-foreground">Copy &amp; paste tools</p>
          <ul className="mt-2">
            {tools.map((page) => (
              <li key={page.path}>
                <Link href={`${page.path}/`} className={linkClass}>
                  {anchorText(page.heading)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="px-4 pb-6 text-center text-xs text-muted">
        © {year} {siteConfig.siteName}
      </p>
    </footer>
  );
}

import Link from "next/link";
import { pagesByGroup, siteConfig } from "@/lib/site";

export function Footer() {
  // Include angry-family specialties (parentPath set) so hub footer links them.
  const specialtyPaths = new Set([
    "/table-flip-kaomoji",
    "/fight-kaomoji",
    "/pout-kaomoji",
  ]);
  const browse = pagesByGroup("browse").filter(
    (page) => !page.parentPath || specialtyPaths.has(page.path),
  );
  const trust = pagesByGroup("trust");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card" role="contentinfo">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 sm:grid-cols-3">
        <div>
          <p className="type-label text-foreground">{siteConfig.siteName}</p>
          <p className="mt-2 type-meta leading-6">
            Kaomoji library with moods, Japanese emoticons, and text faces.
          </p>
        </div>
        <nav aria-label="Browse">
          <p className="type-label text-foreground">Browse</p>
          <ul className="mt-2 space-y-1">
            {browse.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                  {page.heading}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Site">
          <p className="type-label text-foreground">Site</p>
          <ul className="mt-2 space-y-1">
            {trust.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                  {page.label}
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
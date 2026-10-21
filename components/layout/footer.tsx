import Link from "next/link";
import { guidePath, guides } from "@/lib/guides";
import { CATEGORY_GROUPS, TOOLS_GROUP, type NavGroup } from "@/lib/nav-groups";
import { pages, pagesByGroup, siteConfig, type SitePage } from "@/lib/site";

/** Descriptive anchor text: heading without trailing face glyphs. */
function anchorText(heading: string): string {
  return heading.replace(/\s*[(¯♡].*$/, "").replace(/\s+—.*$/, "").trim() || heading;
}

const linkClass =
  "inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

function groupPages(group: NavGroup): SitePage[] {
  return group.paths
    .map((path) => pages.find((p) => p.path === path))
    .filter((p) => p != null);
}

function FooterGroup({ group, wide }: { group: NavGroup; wide?: boolean }) {
  return (
    <nav aria-label={group.heading} className={wide ? "col-span-2" : undefined}>
      <p className="type-label text-foreground">{group.heading}</p>
      <ul className={wide ? "mt-2 grid grid-cols-2 gap-x-4" : "mt-2"}>
        {groupPages(group).map((page) => (
          <li key={page.path}>
            <Link href={`${page.path}/`} className={linkClass}>
              {anchorText(page.heading)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Sitewide footer: every browse page, grouped the same way as the hub tiles
 * and header panel, so crawlers and readers see one consistent topic map.
 */
export function Footer() {
  const [emotions, ...groups] = CATEGORY_GROUPS;
  const site = [pages.find((p) => p.path === "/"), ...pagesByGroup("trust")].filter(
    (p) => p != null,
  );
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-card" role="contentinfo">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="max-w-xl">
          <p className="type-h3 text-foreground">{siteConfig.siteName} (◕‿◕)</p>
          <p className="mt-2 type-meta leading-6">
            A free library of kaomoji, Japanese emoticons, text faces, emoticons,
            and cute symbols — sorted by mood, copied in one tap.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          <FooterGroup group={emotions} wide />
          {groups.map((group) => (
            <FooterGroup key={group.heading} group={group} />
          ))}
          <FooterGroup group={TOOLS_GROUP} />
          <nav aria-label="Guides">
            <p className="type-label text-foreground">Guides</p>
            <ul className="mt-2">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link href={`${guidePath(guide)}/`} className={linkClass}>
                    {guide.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/guides/" className={linkClass}>
                  All guides
                </Link>
              </li>
              <li>
                <Link href="/blog/" className={linkClass}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Site">
            <p className="type-label text-foreground">Site</p>
            <ul className="mt-2">
              {site.map((page) => (
                <li key={page.path}>
                  <Link href={page.path === "/" ? "/" : `${page.path}/`} className={linkClass}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <p className="px-4 pb-6 text-center text-xs text-muted">
        © {year} {siteConfig.siteName}
      </p>
    </footer>
  );
}

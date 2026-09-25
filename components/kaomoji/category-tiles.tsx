import Link from "next/link";
import { pagesByGroup, type SitePage } from "@/lib/site";
import { moodTileClass } from "@/lib/mood-colors";
import { cn } from "@/lib/utils";

/** Hub browse order by intent: moods -> utility -> alt heads. */
const BROWSE_ORDER = [
  "/cute-kaomoji",
  "/happy-kaomoji",
  "/cat-kaomoji",
  "/sad-kaomoji",
  "/crying-kaomoji",
  "/angry-kaomoji",
  // Angry-family specialties (have parentPath; still discoverable from hub)
  "/table-flip-kaomoji",
  "/fight-kaomoji",
  "/pout-kaomoji",
  "/heart-kaomoji",
  "/shy-kaomoji",
  "/kaomoji-copy-paste",
  "/japanese-emoticons",
  "/text-faces",
  "/kaomoji-generator",
] as const;

/** Specialty children normally filtered by parentPath — keep hub-discoverable. */
const HUB_SPECIALTY_PATHS = new Set([
  "/table-flip-kaomoji",
  "/fight-kaomoji",
  "/pout-kaomoji",
]);

function orderedBrowse(): SitePage[] {
  const browse = pagesByGroup("browse").filter(
    (page) => !page.parentPath || HUB_SPECIALTY_PATHS.has(page.path),
  );
  const byPath = new Map(browse.map((page) => [page.path, page]));
  const ordered: SitePage[] = [];
  for (const path of BROWSE_ORDER) {
    const page = byPath.get(path);
    if (page) ordered.push(page);
  }
  for (const page of browse) {
    if (!BROWSE_ORDER.includes(page.path as (typeof BROWSE_ORDER)[number])) {
      ordered.push(page);
    }
  }
  return ordered;
}

export function CategoryTiles() {
  const browse = orderedBrowse();

  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-4">
      {browse.map((page) => (
        <li key={page.path}>
          <Link
            href={page.path}
            className={cn("flex min-h-20 flex-col justify-center rounded-2xl border px-3 py-3 shadow-[var(--shadow-sm)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:min-h-24 sm:px-4 sm:py-4", moodTileClass())}
          >
            <span className="type-label sm:text-base">{page.heading}</span>
            <span className="mt-1 line-clamp-2 type-meta">
              {page.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
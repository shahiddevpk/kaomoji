import Link from "next/link";
import { pagesByGroup, type SitePage } from "@/lib/site";
import { moodTileClass } from "@/lib/mood-colors";
import { cn } from "@/lib/utils";

/** Hub browse order by intent: moods -> utility -> alt heads. */
const BROWSE_ORDER = [
  // Core emotions
  "/cute-kaomoji",
  "/happy-kaomoji",
  "/cat-kaomoji",
  "/sad-kaomoji",
  "/crying-kaomoji",
  "/angry-kaomoji",
  // Angry-family specialties (have parentPath; still hub-discoverable)
  "/table-flip-kaomoji",
  "/fight-kaomoji",
  "/pout-kaomoji",
  // Love / affection cluster
  "/heart-kaomoji",
  "/love-kaomoji",
  "/kiss-kaomoji",
  "/hug-kaomoji",
  "/shy-kaomoji",
  // Celebration / seasonal cluster
  "/star-kaomoji",
  "/sparkle-kaomoji",
  "/birthday-kaomoji",
  "/christmas-kaomoji",
  "/halloween-kaomoji",
  // Nature / animals
  "/flower-kaomoji",
  "/fish-kaomoji",
  // Happy / playful actions
  "/giggling-kaomoji",
  "/smile-kaomoji",
  "/wink-kaomoji",
  "/excited-kaomoji",
  "/dance-kaomoji",
  "/waving-kaomoji",
  "/running-kaomoji",
  "/thumbs-up-kaomoji",
  // Respectful / cultural
  "/bowing-kaomoji",
  // Thoughtful / mild
  "/nervous-kaomoji",
  "/thinking-kaomoji",
  // Utility pages
  "/kaomoji-copy-paste",
  "/japanese-emoticons",
  "/text-faces",
  "/kaomoji-generator",
] as const;

/** Extract decorative face from titleSegment by stripping the heading prefix. */
function extractFace(page: SitePage): string | null {
  const prefix = page.heading + ' ';
  if (!page.titleSegment.startsWith(prefix)) return null;
  const candidate = page.titleSegment.slice(prefix.length).trim();
  if (!candidate) return null;
  // Candidate is descriptive words — extract the kaomoji at the end
  if (/^[a-zA-Z&—]/.test(candidate)) {
    const m = candidate.match(/(\([^)]+\)[\S]*|[^\x00-\x7F][\S]*)\s*$/);
    return m ? m[1] : null;
  }
  return candidate;
}

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
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-4">
      {browse.map((page) => {
        const face = extractFace(page);
        return (
          <li key={page.path}>
            <Link
              href={page.path}
              className={cn("flex min-h-20 flex-col items-center justify-center gap-1 rounded-2xl border px-3 py-3 shadow-[var(--shadow-sm)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:min-h-24 sm:px-4 sm:py-4", moodTileClass(page.path))}
            >
              {face ? <span className="text-lg leading-none">{face}</span> : null}
              <span className="text-center type-label sm:text-base">{page.heading}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
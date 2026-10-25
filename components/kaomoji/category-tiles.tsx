import Link from "next/link";
import { countByCategory, countByTags } from "@/data/index";
import { pages, type SitePage } from "@/lib/site";
import { moodTileClass } from "@/lib/mood-colors";
import { cn } from "@/lib/utils";
import { CATEGORY_GROUPS, TOOL_PATHS } from "@/lib/nav-groups";

/** Tile glyphs for pages whose title does not start with the heading + face. */
const TILE_FACE: Record<string, string> = {
  "/lenny-face": "( ͡° ͜ʖ ͡°)",
  "/shrug-kaomoji": "¯\\_(ツ)_/¯",
  "/uwu-kaomoji": "(˘ω˘)",
  "/food-kaomoji": "(っ˘ڡ˘ς)",
  "/text-faces": "ಠ_ಠ",
  "/shy-kaomoji": "(⁄ ⁄•⁄ω⁄•⁄ ⁄)",
  "/japanese-emoticons": "(＾▽＾)",
  "/halloween-kaomoji": "👻(◕ᴗ◕)🎃",
  "/thanksgiving-kaomoji": "🦃(◕ᴗ◕)",
  "/christmas-kaomoji": "🎄(◕ᴗ◕✿)",
  "/new-year-kaomoji": "🎆＼(＾▽＾)／",
  "/winter-kaomoji": "❄(˘︶˘)☕",
  "/valentine-kaomoji": "(◍•ᴗ•◍)💘",
  "/pout-kaomoji": "(￣ヘ￣)",
  "/flower-kaomoji": "(✿◠‿◠)",
  "/bowing-kaomoji": "m(_ _)m",
  "/sorry-kaomoji": "(｡•́︿•̀｡)",
  "/cool-kaomoji": "(⌐■_■)",
  "/heart-kaomoji": "(´♡‿♡`)",
  "/sick-kaomoji": "(´×ω×`)😷",
  "/scared-kaomoji": "((;°Д°))",
  "/devil-kaomoji": "Ψ(｀▽´)Ψ",
  "/thank-you-kaomoji": "(◍•ᴗ•◍)❤",
  "/border-kaomoji": "╭────────╮",
  "/roblox-kaomoji": "(^_^)",
  "/art-kaomoji": "ʕ•ᴥ•ʔ",
  "/kaomoji-app": "(◕‿◕)",
};

/** Extract decorative face from titleSegment by stripping the heading prefix. */
function extractFace(page: SitePage): string | null {
  if (TILE_FACE[page.path]) return TILE_FACE[page.path];
  const prefix = page.heading + " ";
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

function tileLabel(page: SitePage): string {
  // Strip trailing glyphs from headings like "Lenny Face ( ͡° ͜ʖ ͡°)".
  return page.heading.replace(/\s+[^A-Za-z&].*$/, "").trim() || page.heading;
}

function faceCount(page: SitePage): number {
  if (page.tags && page.tags.length > 0) {
    return countByTags(page.tags, { includeNewlines: page.includeNewlineFaces });
  }
  if (page.category) return countByCategory(page.category);
  return 0;
}

function Tile({ page }: { page: SitePage }) {
  const face = extractFace(page);
  const count = faceCount(page);
  return (
    <li>
      <Link
        href={`${page.path}/`}
        className={cn(
          "flex h-full min-h-20 flex-col items-center justify-center gap-1 rounded-2xl border px-3 py-3 shadow-[var(--shadow-sm)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:min-h-24 sm:px-4 sm:py-4",
          moodTileClass(page.path),
        )}
      >
        {face ? (
          <span className="tile-face max-w-full truncate text-lg leading-none" aria-hidden="true">
            {face}
          </span>
        ) : null}
        <span className="text-center type-label sm:text-base">{tileLabel(page)}</span>
        {count > 0 ? <span className="tile-count">{count.toLocaleString("en-US")} faces</span> : null}
      </Link>
    </li>
  );
}

export function CategoryTiles() {
  const byPath = new Map(pages.map((page) => [page.path, page]));
  const placed = new Set(CATEGORY_GROUPS.flatMap((g) => g.paths));
  // Any browse page not placed above still gets a tile (never orphaned).
  const extra = pages.filter(
    (p) =>
      p.group === "browse" &&
      !placed.has(p.path) &&
      !TOOL_PATHS.includes(p.path),
  );
  const groups = extra.length
    ? [...CATEGORY_GROUPS, { heading: "More", paths: extra.map((p) => p.path) }]
    : CATEGORY_GROUPS;

  return (
    <div>
      {groups.map((group) => (
        <section key={group.heading} aria-label={group.heading}>
          <h3 className="tile-group-heading">{group.heading}</h3>
          <ul className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-4">
            {group.paths.map((path) => {
              const page = byPath.get(path);
              return page ? <Tile key={path} page={page} /> : null;
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

import Link from "next/link";
import { countByCategory, countByTags } from "@/data/index";
import { pages, type SitePage } from "@/lib/site";
import { moodTileClass } from "@/lib/mood-colors";
import { cn } from "@/lib/utils";

/** Hub browse groups by intent — each path appears once. */
const TILE_GROUPS: { heading: string; paths: string[] }[] = [
  // Each group is a multiple of 4 so rows fill at 2 and 4 columns.
  {
    heading: "Emotions",
    paths: [
      "/cute-kaomoji",
      "/happy-kaomoji",
      "/sad-kaomoji",
      "/crying-kaomoji",
      "/angry-kaomoji",
      "/shy-kaomoji",
      "/excited-kaomoji",
      "/nervous-kaomoji",
      "/shocked-kaomoji",
      "/scared-kaomoji",
      "/confused-kaomoji",
      "/smug-kaomoji",
      "/sleepy-kaomoji",
      "/thinking-kaomoji",
      "/pout-kaomoji",
      "/sick-kaomoji",
    ],
  },
  {
    heading: "Famous faces",
    paths: [
      "/lenny-face",
      "/shrug-kaomoji",
      "/table-flip-kaomoji",
      "/uwu-kaomoji",
      "/cool-kaomoji",
      "/devil-kaomoji",
      "/text-faces",
      "/japanese-emoticons",
    ],
  },
  {
    heading: "Love & manners",
    paths: [
      "/heart-kaomoji",
      "/love-kaomoji",
      "/kiss-kaomoji",
      "/hug-kaomoji",
      "/wink-kaomoji",
      "/thank-you-kaomoji",
      "/sorry-kaomoji",
      "/bowing-kaomoji",
    ],
  },
  {
    heading: "Actions",
    paths: [
      "/smile-kaomoji",
      "/giggling-kaomoji",
      "/waving-kaomoji",
      "/dance-kaomoji",
      "/running-kaomoji",
      "/fight-kaomoji",
      "/thumbs-up-kaomoji",
      "/sparkle-kaomoji",
    ],
  },
  {
    heading: "Animals, food & nature",
    paths: [
      "/cat-kaomoji",
      "/dog-kaomoji",
      "/bear-kaomoji",
      "/bunny-kaomoji",
      "/fish-kaomoji",
      "/food-kaomoji",
      "/flower-kaomoji",
      "/star-kaomoji",
    ],
  },
  {
    heading: "Holidays",
    paths: [
      "/halloween-kaomoji",
      "/thanksgiving-kaomoji",
      "/christmas-kaomoji",
      "/birthday-kaomoji",
    ],
  },
];

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
  if (page.tags && page.tags.length > 0) return countByTags(page.tags);
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
  const placed = new Set(TILE_GROUPS.flatMap((g) => g.paths));
  // Any browse page not placed above still gets a tile (never orphaned).
  const extra = pages.filter(
    (p) =>
      p.group === "browse" &&
      !placed.has(p.path) &&
      !["/kaomoji-copy-paste", "/kaomoji-generator", "/emoticons", "/cute-symbols", "/emoji-combos"].includes(p.path),
  );
  const groups = extra.length
    ? [...TILE_GROUPS, { heading: "More", paths: extra.map((p) => p.path) }]
    : TILE_GROUPS;

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

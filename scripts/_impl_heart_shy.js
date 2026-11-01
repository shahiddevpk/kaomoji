const fs = require("fs");
const path = require("path");

function write(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, "utf8");
  console.log("wrote", p);
}

// --- 1) Insert SitePage entries before /about ---
let site = fs.readFileSync("lib/site.ts", "utf8");
if (site.includes('path: "/heart-kaomoji"')) {
  console.log("heart already in site.ts");
} else {
  const heartShy = `
  {
    path: "/heart-kaomoji",
    label: "Heart",
    heading: "Heart Kaomoji",
    titleSegment: "Heart Kaomoji Copy & Paste (♡‿♡)",
    description:
      "Heart kaomoji to copy for affection, crush energy, and warm thanks. Browse love-ready text faces, tap once, and paste into any chat.",
    intro:
      "This hub is for affection, not only soft-cute smiles. Grab heart-woven faces when you mean love, crush, or warm thanks, and use the love chip when you want that angle inside the same grid. Cute pages stay for gentle adorable vibes without a romantic read; shy pages cover bashful blush instead of full heart energy.",
    group: "browse",
    inHeader: true,
    tags: ["heart", "love", "kiss", "hug"],
    howTo: [
      "Open a heart face that matches the warmth you want (light thanks vs full swoon).",
      "Tap Copy so the full string lands on your clipboard.",
      "Paste into your chat, then add your own words around it if you need context.",
    ],
    definition:
      "Affection shows up as hearts woven into poses, not only a single heart glyph. Choose lighter mixes for friends and fuller swoons when the relationship already supports that tone.",
    faqs: [
      {
        question: "What are heart kaomoji for?",
        answer:
          "They add affection, crush energy, or warm thanks without sending a sticker pack. Use them for love notes, friend appreciation, or soft reactions.",
      },
      {
        question: "Heart kaomoji vs the ❤️ emoji?",
        answer:
          "The emoji is one picture glyph. Heart kaomoji weave hearts into a full face or pose, so the reaction feels more expressive and still copies as text.",
      },
      {
        question: "Can these read as too romantic?",
        answer:
          "Some can. For friendship, choose lighter blush-and-heart mixes; save full swoon faces for partners or clearly playful threads.",
      },
      {
        question: "Why browse a heart category instead of searching \\"love\\"?",
        answer:
          "A dedicated grid groups affection poses together so you are not mixing romantic faces with random happy ones from a giant dump.",
      },
    ],
    related: [
      "/shy-kaomoji",
      "/cute-kaomoji",
      "/happy-kaomoji",
      "/kaomoji-generator",
    ],
  },
  {
    path: "/shy-kaomoji",
    label: "Shy",
    heading: "Shy Kaomoji",
    titleSegment: "Shy Kaomoji Copy & Paste (⁄ ⁄•⁄ω⁄•⁄ ⁄)",
    description:
      "Shy kaomoji for bashful, awkward, and blushy moments. Copy soft nervous faces and paste them when a big smile feels too bold.",
    intro:
      "Shy faces are for hesitation and blush, not loud cute energy. Use this grid after compliments, nervous hellos, or gentle \\"I'm flustered\\" beats, and open the blush chip when you want that cue inside the set. Cute stays warmly adorable; heart stays affection-first. This page owns the quiet, bashful read.",
    group: "browse",
    inHeader: true,
    tags: ["shy", "blush", "embarrassed"],
    howTo: [
      "Pick a face with blush, peeking eyes, or a tiny mouth that feels nervous, not shouty.",
      "Tap Copy and keep the page handy on mobile until you switch apps.",
      "Paste into the chat; if the face looks empty, try a simpler shy face from the same grid.",
    ],
    definition:
      "Expect bashful cues like sweat, peeking eyes, and small mouths. They signal nerves or blush more than pure happiness.",
    faqs: [
      {
        question: "When does a shy kaomoji fit better than a smile?",
        answer:
          "When you want soft, awkward, or bashful energy: after a compliment, a nervous hello, or a \\"thanks, I'm blushing\\" beat.",
      },
      {
        question: "What usually marks a shy face?",
        answer:
          "Covered eyes, sweat drops, tiny mouths, sideways glances, or blush markers. The mood is quiet, not loud celebration.",
      },
      {
        question: "Are shy faces only for romance?",
        answer:
          "No. They also work for social nerves, polite embarrassment, or gentle refusals that should not sound cold.",
      },
      {
        question: "How is shy different from cute on this site?",
        answer:
          "Cute aims for adorable warmth. Shy aims for hesitation and blush. Overlap exists, but the primary intent on shy pages is bashful, not just soft-pretty.",
      },
    ],
    related: [
      "/heart-kaomoji",
      "/cute-kaomoji",
      "/happy-kaomoji",
      "/sad-kaomoji",
    ],
  },
`;

  const aboutIdx = site.indexOf('    path: "/about",');
  if (aboutIdx < 0) throw new Error("about page not found");
  // insert before the `{` that starts the about object — find preceding `  {\n`
  let insertAt = aboutIdx;
  while (insertAt > 0 && site[insertAt - 1] !== "{") insertAt--;
  insertAt -= 1; // position of `{`
  // walk back to include leading spaces/newline of the about object
  while (insertAt > 0 && (site[insertAt - 1] === " " || site[insertAt - 1] === "\n" || site[insertAt - 1] === "\r")) {
    insertAt--;
  }
  // We want to insert before `  {\n    path: "/about"`
  const aboutObjStart = site.lastIndexOf("\n  {\n", aboutIdx);
  if (aboutObjStart < 0) throw new Error("about object start not found");
  site = site.slice(0, aboutObjStart + 1) + heartShy + site.slice(aboutObjStart + 1);
  console.log("inserted heart+shy before about");
}

// Update cute related to include heart + shy
site = site.replace(
  'related: ["/happy-kaomoji", "/cat-kaomoji", "/text-faces", "/multiline-kaomoji"],\n  },\n  {\n    path: "/happy-kaomoji",',
  'related: ["/happy-kaomoji", "/cat-kaomoji", "/heart-kaomoji", "/shy-kaomoji"],\n  },\n  {\n    path: "/happy-kaomoji",',
);

fs.writeFileSync("lib/site.ts", site, "utf8");
console.log("site.ts saved, has heart", site.includes('path: "/heart-kaomoji"'), "has shy", site.includes('path: "/shy-kaomoji"'));

// --- 2) PAGINATED_SLUGS ---
let pag = fs.readFileSync("lib/category-pagination.ts", "utf8");
if (!pag.includes('"heart-kaomoji"')) {
  pag = pag.replace(
    `  "multiline-kaomoji": {
    path: "/multiline-kaomoji",
    tags: ["multi-line"],
    includeNewlines: true,
  },
};`,
    `  "multiline-kaomoji": {
    path: "/multiline-kaomoji",
    tags: ["multi-line"],
    includeNewlines: true,
  },
  "heart-kaomoji": {
    path: "/heart-kaomoji",
    tags: ["heart", "love", "kiss", "hug"],
  },
  "shy-kaomoji": {
    path: "/shy-kaomoji",
    tags: ["shy", "blush", "embarrassed"],
  },
};`,
  );
  // try alternate field name includeNewlineFaces vs includeNewlines
  if (!pag.includes('"heart-kaomoji"')) {
    pag = pag.replace(
      /("multiline-kaomoji":\s*\{[\s\S]*?\},)\n(\};)/,
      `$1\n  "heart-kaomoji": {\n    path: "/heart-kaomoji",\n    tags: ["heart", "love", "kiss", "hug"],\n  },\n  "shy-kaomoji": {\n    path: "/shy-kaomoji",\n    tags: ["shy", "blush", "embarrassed"],\n  },\n$2`,
    );
  }
  fs.writeFileSync("lib/category-pagination.ts", pag, "utf8");
  console.log("pagination updated", pag.includes('"heart-kaomoji"'));
}

// --- 3) Browse order ---
let tiles = fs.readFileSync("components/kaomoji/category-tiles.tsx", "utf8");
if (!tiles.includes("/heart-kaomoji")) {
  tiles = tiles.replace(
    `  "/angry-kaomoji",
  "/kaomoji-copy-paste",`,
    `  "/angry-kaomoji",
  "/heart-kaomoji",
  "/shy-kaomoji",
  "/kaomoji-copy-paste",`,
  );
  fs.writeFileSync("components/kaomoji/category-tiles.tsx", tiles, "utf8");
  console.log("browse order updated");
}

// --- 4) App routes ---
const pageTpl = (p) => `import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("${p}");

export const metadata = pageMetadata(page);

export default function Page() {
  return <CategoryView page={page} />;
}
`;

const pageNTpl = (slug) => `import { createPaginatedCategoryRoute } from "@/lib/paginated-category-route";

const route = createPaginatedCategoryRoute("${slug}");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
`;

for (const slug of ["heart-kaomoji", "shy-kaomoji"]) {
  write(`app/${slug}/page.tsx`, pageTpl(`/${slug}`));
  write(`app/${slug}/page/[n]/page.tsx`, pageNTpl(slug));
}

// --- 5) Redirects in next.config.ts ---
let cfg = fs.readFileSync("next.config.ts", "utf8");
if (!cfg.includes('source: "/love-kaomoji"')) {
  const block = `
      // Heart / shy aliases (love + blush are chips/tags, not doorway pages)
      { source: "/love", destination: "/heart-kaomoji/", permanent: true },
      { source: "/love/", destination: "/heart-kaomoji/", permanent: true },
      { source: "/love-kaomoji", destination: "/heart-kaomoji/", permanent: true },
      { source: "/love-kaomoji/", destination: "/heart-kaomoji/", permanent: true },
      { source: "/kiss-kaomoji", destination: "/heart-kaomoji/", permanent: true },
      { source: "/kiss-kaomoji/", destination: "/heart-kaomoji/", permanent: true },
      { source: "/hug-kaomoji", destination: "/heart-kaomoji/", permanent: true },
      { source: "/hug-kaomoji/", destination: "/heart-kaomoji/", permanent: true },
      { source: "/heart", destination: "/heart-kaomoji/", permanent: true },
      { source: "/heart/", destination: "/heart-kaomoji/", permanent: true },
      { source: "/blush", destination: "/shy-kaomoji/", permanent: true },
      { source: "/blush/", destination: "/shy-kaomoji/", permanent: true },
      { source: "/blush-kaomoji", destination: "/shy-kaomoji/", permanent: true },
      { source: "/blush-kaomoji/", destination: "/shy-kaomoji/", permanent: true },
      { source: "/shy", destination: "/shy-kaomoji/", permanent: true },
      { source: "/shy/", destination: "/shy-kaomoji/", permanent: true },
      { source: "/embarrassed-kaomoji", destination: "/shy-kaomoji/", permanent: true },
      { source: "/embarrassed-kaomoji/", destination: "/shy-kaomoji/", permanent: true },
      { source: "/heart-kaomoji/page/1", destination: "/heart-kaomoji/", permanent: true },
      { source: "/heart-kaomoji/page/1/", destination: "/heart-kaomoji/", permanent: true },
      { source: "/shy-kaomoji/page/1", destination: "/shy-kaomoji/", permanent: true },
      { source: "/shy-kaomoji/page/1/", destination: "/shy-kaomoji/", permanent: true },
`;
  // insert before closing of redirects array — before final `    ];` of redirects
  const marker = `\n      { source: "/glare-kaomoji/", destination: "/angry-kaomoji/", permanent: true },\n`;
  if (cfg.includes(marker)) {
    cfg = cfg.replace(marker, marker + block);
  } else {
    // fallback: before the closing of redirects return
    const idx = cfg.lastIndexOf("    ];\n  },\n};\n\nexport default nextConfig;");
    if (idx < 0) {
      // try other endings
      const idx2 = cfg.indexOf("\n    ];\n  },\n};");
      if (idx2 < 0) throw new Error("could not find redirects end");
      cfg = cfg.slice(0, idx2) + block + cfg.slice(idx2);
    } else {
      cfg = cfg.slice(0, idx) + block + cfg.slice(idx);
    }
  }
  fs.writeFileSync("next.config.ts", cfg, "utf8");
  console.log("redirects added", cfg.includes("/love-kaomoji"));
}

// --- 6) Sitemap priorities ---
let sm = fs.readFileSync("app/sitemap.ts", "utf8");
if (!sm.includes('case "/heart-kaomoji":')) {
  sm = sm.replace(
    `    case "/angry-kaomoji":
      return 0.75;`,
    `    case "/angry-kaomoji":
    case "/heart-kaomoji":
    case "/shy-kaomoji":
      return 0.75;`,
  );
  fs.writeFileSync("app/sitemap.ts", sm, "utf8");
  console.log("sitemap priorities updated");
}

console.log("DONE impl");
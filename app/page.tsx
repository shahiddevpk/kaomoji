import Link from "next/link";
import { catalogSize, getForPage, ITEM_LIST_LIMIT } from "@/data/index";
import { countCollection } from "@/data/collections";
import { DEVICE_GUIDES, FACE_MEANINGS } from "@/data/home-content";
import { CategoryTiles } from "@/components/kaomoji/category-tiles";
import { RandomFace } from "@/components/kaomoji/random-face";
import { SeasonalBanner } from "@/components/kaomoji/seasonal-banner";
import { FaqSection } from "@/components/kaomoji/faq-section";
import { KaomojiGrid } from "@/components/kaomoji/kaomoji-grid";
import { LearnSection } from "@/components/kaomoji/learn-section";
import { MeaningCards } from "@/components/kaomoji/meaning-cards";
import { LazyRecentlyCopied } from "@/components/kaomoji/lazy-client";
import { JsonLd } from "@/components/layout/json-ld";
import { faqJsonLd, howToJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";
import { getPage, pagesByGroup } from "@/lib/site";
import { copyAriaLabel } from "@/lib/utils";

const page = getPage("/");

export const metadata = pageMetadata(page);

const QUICK_FACES: { id: string; face: string; name: string }[] = [
  { id: "quick-shrug", face: "¯\\_(ツ)_/¯", name: "Shrug" },
  { id: "quick-lenny", face: "( ͡° ͜ʖ ͡°)", name: "Lenny face" },
  { id: "quick-flip", face: "(╯°□°)╯︵ ┻━┻", name: "Table flip" },
  { id: "quick-cute", face: "(◕‿◕✿)", name: "Cute smile" },
  { id: "quick-hug", face: "(づ｡◕‿‿◕｡)づ", name: "Hug" },
  { id: "quick-cry", face: "(╥﹏╥)", name: "Crying" },
  { id: "quick-bear", face: "ʕ•ᴥ•ʔ", name: "Bear" },
  { id: "quick-uwu", face: "(˘ω˘)", name: "UwU" },
];

const TOOLS = [
  {
    path: "/kaomoji-copy-paste",
    glyph: "(ﾉ◕ヮ◕)ﾉ",
    title: "Kaomoji copy and paste",
    blurb: "The most-used faces on one fast page.",
  },
  {
    path: "/kaomoji-generator",
    glyph: "( ´ ▽ ` )",
    title: "Kaomoji generator",
    blurb: "Build your own face — eyes, mouth, arms.",
  },
  {
    path: "/emoticons",
    glyph: ":) XD <3",
    title: "Text emoticons",
    blurb: "Keyboard faces with what each one means.",
  },
  {
    path: "/cute-symbols",
    glyph: "♡ ✿ ☆ ʚɞ",
    title: "Cute symbols",
    blurb: "Hearts, stars, bows, and dividers for bios.",
  },
  {
    path: "/emoji-combos",
    glyph: "🎀✨🍓",
    title: "Emoji combos",
    blurb: "Aesthetic sets for captions and bios.",
  },
];

function roundDown(n: number, step: number): string {
  return (Math.floor(n / step) * step).toLocaleString("en-US");
}

function HomeFacesAndSeo() {
  const faces = getForPage(page);
  const itemListSchema = itemListJsonLd(page, faces.slice(0, ITEM_LIST_LIMIT));
  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;
  const howToSchema = page.howTo?.length ? howToJsonLd(page) : null;

  return (
    <>
      {itemListSchema ? <JsonLd data={itemListSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      {howToSchema ? <JsonLd data={howToSchema} /> : null}

      <section className="mt-12" id="faces" aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="type-h2">
          Popular kaomoji to copy
        </h2>
        <p className="mt-2 max-w-2xl type-meta leading-6">
          The faces people copy most. Tap Copy, then paste anywhere.
        </p>
        <div className="mt-4">
          <KaomojiGrid items={faces} />
        </div>
      </section>

      <section className="mt-12" aria-labelledby="meanings-heading">
        <h2 id="meanings-heading" className="type-h2">
          Kaomoji meanings: how famous faces are built
        </h2>
        <p className="mt-2 max-w-2xl type-meta leading-6">
          Every kaomoji is assembled from characters that play a part — eyes,
          mouth, arms, cheeks. Learn the pieces once and any new face reads at a
          glance.
        </p>
        <MeaningCards
          items={FACE_MEANINGS.map((item) => ({ ...item, parts: item.anatomy }))}
        />
      </section>

      <section className="mt-12" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="type-h2">
          Find, copy, paste
        </h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3">
          <li className="tool-card">
            <p className="type-label">1. Find</p>
            <p className="type-meta leading-6">
              Pick a mood tile, a famous face, or search the whole library.
            </p>
          </li>
          <li className="tool-card">
            <p className="type-label">2. Copy</p>
            <p className="type-meta leading-6">
              Tap Copy once — the button flashes Copied when it works.
            </p>
          </li>
          <li className="tool-card">
            <p className="type-label">3. Paste</p>
            <p className="type-meta leading-6">
              Drop it into a message, caption, bio, or comment.
            </p>
          </li>
        </ol>
      </section>

      <section className="mt-12 max-w-3xl" aria-labelledby="devices-heading">
        <h2 id="devices-heading" className="type-h2">
          How to type kaomoji on any device
        </h2>
        <dl className="mt-4 space-y-4">
          {DEVICE_GUIDES.map((guide) => (
            <div key={guide.device} className="tool-card">
              <dt className="type-h3">{guide.device}</dt>
              <dd className="type-meta leading-6">{guide.steps}</dd>
            </div>
          ))}
        </dl>
      </section>

      <LearnSection
        heading="What is kaomoji?"
        definition={page.definition}
        learnMore={page.learnMore}
      />
      <FaqSection faqs={page.faqs} />
    </>
  );
}

export default function HomePage() {
  const faceCount = roundDown(catalogSize(), 1000);
  const categoryCount = pagesByGroup("browse").length;
  const randomPool = getForPage(page).map(({ id, face, name }) => ({ id, face, name }));
  const extrasCount =
    countCollection("emoticons") +
    countCollection("cute-symbols") +
    countCollection("emoji-combos");

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
      <section className="hero-panel" aria-labelledby="home-title">
        <p className="hero-kicker">顔文字 · kao (face) + moji (characters)</p>
        <h1 id="home-title" className="mt-3 type-h1 lcp-hero tracking-tight">
          Kaomoji <span className="hero-title-accent">Japanese Text Faces</span>
        </h1>
        <p className="mt-3 max-w-2xl type-body text-muted lcp-hero">{page.intro}</p>
        <ul className="hero-stats type-meta" aria-label="Library size">
          <li>
            <strong>{faceCount}+</strong> kaomoji
          </li>
          <li>
            <strong>{categoryCount}</strong> moods &amp; tools
          </li>
          <li>
            <strong>{extrasCount}+</strong> emoticons, symbols &amp; combos
          </li>
          <li>Free · no sign-up</li>
        </ul>
        <ul className="hero-quick" aria-label="Quick copy">
          {QUICK_FACES.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="kaomoji-recent-chip"
                aria-label={copyAriaLabel(item.face, item.name)}
                data-copy-id={item.id}
                data-copy-name={item.name}
                data-copy-face={item.face}
              >
                <span className="kaomoji-face kaomoji-recent-face">{item.face}</span>
              </button>
            </li>
          ))}
        </ul>
        <RandomFace faces={randomPool} />
      </section>

      <SeasonalBanner />

      <LazyRecentlyCopied />

      <section className="mt-10" aria-labelledby="browse-heading">
        <h2 id="browse-heading" className="type-h2">
          Browse kaomoji by mood
        </h2>
        <p className="mt-2 max-w-2xl type-meta leading-6">
          Every page is one mood or theme, so you can find the right face fast.
          Need one quickly? Try{" "}
          <Link href="/kaomoji-copy-paste/" className="link-in-prose">
            kaomoji copy and paste
          </Link>
          .
        </p>
        <CategoryTiles />
      </section>

      <section className="mt-12" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="type-h2">
          More copy and paste tools
        </h2>
        <ul className="tool-grid mt-4">
          {TOOLS.map((tool) => (
            <li key={tool.path}>
              <Link href={`${tool.path}/`} className="tool-card">
                <span className="tool-card-glyph" aria-hidden="true">
                  {tool.glyph}
                </span>
                <span className="type-h3">{tool.title}</span>
                <span className="type-meta">{tool.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <HomeFacesAndSeo />
    </div>
  );
}

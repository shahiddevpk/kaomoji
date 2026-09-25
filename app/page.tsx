import Link from "next/link";
import { getForPage, ITEM_LIST_LIMIT } from "@/data/index";
import { CategoryTiles } from "@/components/kaomoji/category-tiles";
import { FaqSection } from "@/components/kaomoji/faq-section";
import { KaomojiGrid } from "@/components/kaomoji/kaomoji-grid";
import { LearnSection } from "@/components/kaomoji/learn-section";
import { LazyRecentlyCopied } from "@/components/kaomoji/lazy-client";
import { JsonLd } from "@/components/layout/json-ld";
import { faqJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/");

export const metadata = pageMetadata(page);

function HomeFacesAndSeo() {
  const faces = getForPage(page);
  const itemListSchema = itemListJsonLd(
    page,
    faces.slice(0, ITEM_LIST_LIMIT),
  );
  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;

  return (
    <>
      {itemListSchema ? <JsonLd data={itemListSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <section className="mt-10" id="faces" aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="type-h2">
          Popular kaomoji to copy
        </h2>
        <div className="mt-4">
          <KaomojiGrid items={faces} />
        </div>
      </section>

      <section className="mt-10" aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="type-h2">
          Find, copy, paste
        </h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3">
          <li className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-sm)]">
            <p className="type-label">Find</p>
            <p className="mt-2 type-meta leading-6">
              Start from a mood, cats, Japanese emoticons, or text faces - or
              search the library.
            </p>
          </li>
          <li className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-sm)]">
            <p className="type-label">Copy</p>
            <p className="mt-2 type-meta leading-6">
              Tap Copy once — the button shows Copied when it works.
            </p>
          </li>
          <li className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-sm)]">
            <p className="type-label">Paste</p>
            <p className="mt-2 type-meta leading-6">
              Drop it into a message, a caption, or a status.
            </p>
          </li>
        </ol>
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
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
      <h1 className="type-h1 lcp-hero tracking-tight sm:text-4xl">
        {page.heading}
      </h1>
      <p className="mt-3 max-w-2xl type-body text-muted lcp-hero">{page.intro}</p>

      <LazyRecentlyCopied />

      <section className="mt-10" aria-labelledby="browse-heading">
        <h2 id="browse-heading" className="type-h2">
          Browse by intent
        </h2>
        <p className="mt-2 max-w-2xl type-meta leading-6">
          Moods and themes first, then{" "}
          <Link
            href="/kaomoji-copy-paste/"
            className="text-accent underline-offset-2 hover:underline"
          >
            kaomoji copy and paste
          </Link>
          , classic Japanese emoticons, and text faces (shrug, Lenny, and more).
        </p>
        <div className="mt-4">
          <CategoryTiles />
        </div>
      </section>

      <HomeFacesAndSeo />
    </div>
  );
}

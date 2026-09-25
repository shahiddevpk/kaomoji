import { getForPage } from "@/data/index";
import { CategoryTiles } from "@/components/kaomoji/category-tiles";
import { FaqSection } from "@/components/kaomoji/faq-section";
import { KaomojiGrid } from "@/components/kaomoji/kaomoji-grid";
import { LearnSection } from "@/components/kaomoji/learn-section";
import { RecentlyCopied } from "@/components/kaomoji/recently-copied";
import { JsonLd } from "@/components/layout/json-ld";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/");

export const metadata = pageMetadata(page);

export default function HomePage() {
  const faces = getForPage(page);
  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <h1 className="type-h1 tracking-tight sm:text-4xl">
        {page.heading}
      </h1>
      <p className="mt-3 max-w-2xl type-body text-muted">{page.intro}</p>

      <RecentlyCopied />

      <section className="mt-10" aria-labelledby="browse-heading">
        <h2 id="browse-heading" className="type-h2">
          Browse by intent
        </h2>
        <p className="mt-2 max-w-2xl type-meta leading-6">
          Moods and themes first, then copy-paste utility, classic Japanese
          emoticons, and text faces (shrug, Lenny, and more).
        </p>
        <div className="mt-4">
          <CategoryTiles />
        </div>
      </section>

      <section className="mt-10" id="faces" aria-labelledby="popular-heading">
        <h2 id="popular-heading" className="type-h2">
          Popular faces
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
            <p className="type-label">1. Find</p>
            <p className="mt-2 type-meta leading-6">
              Start from a mood, cats, Japanese emoticons, or text faces - or
              search the library.
            </p>
          </li>
          <li className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-sm)]">
            <p className="type-label">2. Copy</p>
            <p className="mt-2 type-meta leading-6">
              Tap Copy once. A Copied! note confirms it.
            </p>
          </li>
          <li className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-sm)]">
            <p className="type-label">3. Paste</p>
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
    </div>
  );
}

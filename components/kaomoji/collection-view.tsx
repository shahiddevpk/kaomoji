import Link from "next/link";
import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";
import { FaqSection } from "@/components/kaomoji/faq-section";
import { KaomojiGridCore } from "@/components/kaomoji/kaomoji-grid-core";
import { LazyRecentlyCopied } from "@/components/kaomoji/lazy-client";
import { LearnSection } from "@/components/kaomoji/learn-section";
import { JsonLd } from "@/components/layout/json-ld";
import {
  collections,
  countCollection,
  type CollectionKey,
  type CollectionSection,
} from "@/data/collections";
import { breadcrumbJsonLd, faqJsonLd, howToJsonLd, itemListJsonLd } from "@/lib/seo";
import { relatedPages, type SitePage } from "@/lib/site";
import { copyAriaLabel } from "@/lib/utils";
import { ProseLinks } from "@/components/kaomoji/prose-links";

/** Dense grid when most items are single symbols (long strings just wrap). */
function isMostlyShort(section: CollectionSection): boolean {
  const short = section.items.filter((item) => [...item.v].length <= 3).length;
  return short / section.items.length >= 0.7;
}

function itemId(key: string, section: string, index: number): string {
  return `${key}-${section}-${index}`;
}

function TableSection({
  collectionKey,
  section,
}: {
  collectionKey: string;
  section: CollectionSection;
}) {
  return (
    <div className="emoticon-table mt-4">
      <table>
        <thead>
          <tr>
            <th scope="col">Emoticon</th>
            <th scope="col">Meaning</th>
            <th scope="col">
              <span className="sr-only">Copy</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {section.items.map((item, i) => {
            const id = itemId(collectionKey, section.id, i);
            const name = item.m ?? item.v;
            return (
              <tr key={id}>
                <td>
                  <span id={`face-${id}`} className="kaomoji-face emoticon-cell">
                    {item.v}
                  </span>
                </td>
                <td className="type-meta">{item.m}</td>
                <td>
                  <button
                    type="button"
                    className="kaomoji-copy emoticon-copy"
                    aria-label={copyAriaLabel(item.v, name)}
                    data-copy-id={id}
                    data-copy-name={name}
                    data-copy-face={item.v}
                  >
                    Copy
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** Copy-paste page for a curated non-kaomoji collection (emoticons, symbols, combos). */
export function CollectionView({
  page,
  collectionKey,
}: {
  page: SitePage;
  collectionKey: CollectionKey;
}) {
  const sections = collections[collectionKey];
  const total = countCollection(collectionKey);
  const related = relatedPages(page);
  const listItems = sections
    .flatMap((s, si) =>
      s.items.map((item, i) => ({
        id: itemId(collectionKey, s.id, i),
        face: item.v,
        name: item.m ?? `${s.heading} ${si + 1}.${i + 1}`,
      })),
    )
    .slice(0, 96);
  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;
  const howToSchema = page.howTo?.length ? howToJsonLd(page) : null;

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8">
      <JsonLd data={breadcrumbJsonLd(page)} />
      <JsonLd data={itemListJsonLd(page, listItems)} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      {howToSchema ? <JsonLd data={howToSchema} /> : null}
      <Breadcrumbs page={page} />
      <h1 className="mt-4 type-h1 lcp-hero tracking-tight">{page.heading}</h1>
      <p className="mt-3 max-w-2xl type-body text-muted lcp-hero">{page.intro}</p>

      <nav aria-label="Jump to section" className="mt-5">
        <ul className="chip-row">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="mood-chip mood-chip--idle">
                {s.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <LazyRecentlyCopied />

      <p className="mt-6 type-meta">
        {total} items in {sections.length} groups — tap Copy on any one.
      </p>

      {sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="mt-8 scroll-mt-28"
          aria-labelledby={`${s.id}-heading`}
        >
          <h2 id={`${s.id}-heading`} className="type-h2">
            {s.heading}
          </h2>
          <p className="mt-2 max-w-2xl type-meta leading-6">{s.intro}</p>
          {s.layout === "table" ? (
            <TableSection collectionKey={collectionKey} section={s} />
          ) : (
            <div className="mt-4">
              <KaomojiGridCore
                compact={isMostlyShort(s)}
                items={s.items.map((item, i) => ({
                  id: itemId(collectionKey, s.id, i),
                  face: item.v,
                  name: item.m ?? `${s.heading} ${i + 1}`,
                  caption: item.m,
                  wide: [...item.v].length > 3,
                }))}
              />
            </div>
          )}
        </section>
      ))}

      {page.howTo && page.howTo.length > 0 ? (
        <section className="mt-10 max-w-2xl" aria-labelledby="how-these-work">
          <h2 id="how-these-work" className="type-h2">
            How to use them
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 type-meta leading-6">
            {page.howTo.map((step) => (
              <li key={step}>
                <ProseLinks text={step} />
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <LearnSection
        heading={`About ${page.label.toLowerCase()}`}
        definition={page.definition}
        learnMore={page.learnMore}
      />

      <FaqSection faqs={page.faqs} />

      {related.length > 0 ? (
        <section className="mt-10" aria-labelledby="related-heading">
          <h2 id="related-heading" className="type-h2">
            Related pages
          </h2>
          <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {related.map((item) => (
              <li key={item.path}>
                <Link href={`${item.path}/`} className="related-pill">
                  {item.heading}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}

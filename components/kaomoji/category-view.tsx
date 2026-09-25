import Link from "next/link";
import {
  catalogSize,
  countByCategory,
  countByTags,
  countMultilineForPage,
  crawlablePageCountForCategory,
  crawlablePageCountForTags,
  getForPage,
  getRelatedKaomoji,
  isMultilineFace,
  PAGE_GRID_LIMIT,
} from "@/data/index";
import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";
import { SubcategoryNav } from "@/components/kaomoji/subcategory-nav";
import { KaomojiGrid } from "@/components/kaomoji/kaomoji-grid";
import { CategoryFacesToolbar } from "@/components/kaomoji/category-faces-toolbar";
import { RecentlyCopied } from "@/components/kaomoji/recently-copied";
import { LearnSection } from "@/components/kaomoji/learn-section";
import { FaqSection } from "@/components/kaomoji/faq-section";
import { JsonLd } from "@/components/layout/json-ld";
import { categoryPageHref } from "@/lib/category-pagination";
import { relatedPages, type SitePage } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

function PaginationNav({
  basePath,
  prevHref,
  nextHref,
  safePage,
  crawlablePages,
}: {
  basePath: string;
  prevHref: string | null;
  nextHref: string | null;
  safePage: number;
  crawlablePages: number;
}) {
  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";
  const touch =
    "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full type-button";
  // Dominant DigiSkills-near CTA: solid primary (#F5911C) + white
  const dominantClass = `${touch} border border-primary bg-primary px-5 font-semibold text-accent-foreground transition-colors hover:border-primary-hover hover:bg-primary-hover ${focus}`;
  const disabledClass = `${touch} cursor-not-allowed border border-disabled-border bg-disabled px-5 text-accent-foreground opacity-70`;
  const pageQuietClass = `${touch} border border-border bg-card px-3 text-muted transition-colors hover:border-primary hover:bg-hover hover:text-foreground ${focus}`;
  const pageCurrentClass = `${touch} border border-primary bg-primary px-3 font-semibold text-accent-foreground`;

  const pages = Array.from({ length: crawlablePages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-between"
    >
      {prevHref ? (
        <Link href={prevHref} className={dominantClass} rel="prev">
          Previous
        </Link>
      ) : (
        <span className={disabledClass} aria-disabled="true">
          Previous
        </span>
      )}

      <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-2 p-0">
        {pages.map((n) => (
          <li key={n}>
            {n === safePage ? (
              <span className={pageCurrentClass} aria-current="page">
                {n}
              </span>
            ) : (
              <Link
                href={categoryPageHref(basePath, n)}
                className={pageQuietClass}
                aria-label={`Page ${n}`}
              >
                {n}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {nextHref ? (
        <Link href={nextHref} className={dominantClass} rel="next">
          Next
        </Link>
      ) : (
        <span className={disabledClass} aria-disabled="true">
          Next
        </span>
      )}
    </nav>
  );
}

function learnHeadingFor(pagePath: string, label: string): string {
  switch (pagePath) {
    case "/japanese-emoticons":
      return "What are Japanese emoticons?";
    case "/kaomoji-copy-paste":
      return "What is kaomoji copy and paste?";
    case "/angry-kaomoji":
      return "About angry kaomoji";
    case "/cute-kaomoji":
      return "About cute kaomoji";
    case "/multiline-kaomoji":
      return "About multiline kaomoji";
    case "/kaomoji-generator":
      return "About the kaomoji generator";
    default:
      return `About ${label.toLowerCase()} faces`;
  }
}

export function CategoryView({
  page,
  pageNumber = 1,
}: {
  page: SitePage;
  pageNumber?: number;
}) {
  const safePage = Math.max(1, Math.floor(pageNumber));
  const faces = getForPage({ ...page, page: safePage });
  const related = relatedPages(page);
  const relatedCategoryIds = related
    .map((item) => item.category)
    .filter((category): category is string => Boolean(category));
  const relatedFaces = getRelatedKaomoji(relatedCategoryIds);
  const tagOpts = { includeNewlines: page.includeNewlineFaces };
  const total =
    page.tags && page.tags.length > 0
      ? countByTags(page.tags, tagOpts)
      : page.category != null
        ? countByCategory(page.category)
        : catalogSize();
  const crawlablePages =
    page.tags && page.tags.length > 0
      ? crawlablePageCountForTags(page.tags, tagOpts)
      : page.category != null
        ? crawlablePageCountForCategory(page.category)
        : 1;
  const rangeStart =
    faces.length === 0 ? 0 : (safePage - 1) * PAGE_GRID_LIMIT + 1;
  const rangeEnd =
    faces.length === 0 ? 0 : Math.min(safePage * PAGE_GRID_LIMIT, total);
  const showPaging =
    ((page.tags && page.tags.length > 0) || page.category != null) &&
    crawlablePages > 1;
  const prevHref =
    safePage > 1 ? categoryPageHref(page.path, safePage - 1) : null;
  const nextHref =
    safePage < crawlablePages
      ? categoryPageHref(page.path, safePage + 1)
      : null;

  const multilineTotal = countMultilineForPage({
    path: page.path,
    category: page.category,
    tags: page.tags,
    includeNewlineFaces: page.includeNewlineFaces,
  });
  const isMultilineHub = page.path === "/multiline-kaomoji";
  const toolbarItems = faces.map((item) => ({
    id: item.id,
    face: item.face,
    name: item.name,
    multiline: isMultilineFace(item),
  }));

  const showEducation = safePage === 1;
  const faqSchema =
    showEducation && page.faqs && page.faqs.length > 0
      ? faqJsonLd(page.faqs)
      : null;

  const paginationProps = showPaging
    ? {
        basePath: page.path,
        prevHref,
        nextHref,
        safePage,
        crawlablePages,
      }
    : null;

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8">
      <JsonLd data={breadcrumbJsonLd(page, { pageNumber: safePage })} />
      <Breadcrumbs page={page} pageNumber={safePage} />
      <h1 className="mt-4 type-h1 tracking-tight">
        {page.heading}
        {safePage > 1 ? (
          <span className="text-muted"> - page {safePage}</span>
        ) : null}
      </h1>
      <p className="mt-3 max-w-2xl whitespace-pre-line type-body text-muted">{page.intro}</p>
      <SubcategoryNav page={page} />
      {page.howTo && page.howTo.length > 0 ? (
        <section className="mt-6 max-w-2xl" aria-labelledby="how-these-work">
          <h2 id="how-these-work" className="type-h2">
            How these faces work
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 type-meta leading-6">
            {page.howTo.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      ) : null}

      {showEducation ? (
        <LearnSection
          heading={learnHeadingFor(page.path, page.label)}
          definition={page.definition}
          learnMore={page.learnMore}
        />
      ) : null}

      <RecentlyCopied />

      <section className="mt-8" id="faces" aria-labelledby="faces-heading">
        <h2 id="faces-heading" className="type-h2">
          Faces
        </h2>
        <CategoryFacesToolbar
          items={toolbarItems}
          multilineTotal={multilineTotal}
          total={total}
          safePage={safePage}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          hideFilter={isMultilineHub}
          defaultMode={isMultilineHub ? "multiline" : "all"}
          paginationTop={
            paginationProps ? <PaginationNav {...paginationProps} /> : null
          }
          paginationBottom={
            paginationProps ? <PaginationNav {...paginationProps} /> : null
          }
        />
      </section>

      {relatedFaces.length > 0 ? (
        <section className="mt-10" aria-labelledby="related-faces-heading">
          <h2 id="related-faces-heading" className="type-h2">
            Related faces
          </h2>
          <p className="mt-2 type-meta">
            A few faces from nearby categories.
          </p>
          <div className="mt-4">
            <KaomojiGrid items={relatedFaces} />
          </div>
        </section>
      ) : null}

      <section className="mt-10" aria-labelledby="how-heading">
        <h2 id="how-heading" className="type-h2">
          How to copy
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 type-meta leading-6">
          <li>Tap Copy on a face. It goes to your clipboard.</li>
          <li>A Copied! note confirms it, and the face joins Recently copied.</li>
          <li>Paste it into chat, a caption, or a bio.</li>
        </ol>
      </section>

      {showEducation ? <FaqSection faqs={page.faqs} /> : null}

      {related.length > 0 ? (
        <section className="mt-10" aria-labelledby="related-heading">
          <h2 id="related-heading" className="type-h2">
            Related pages
          </h2>
          <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {related.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
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
import type { Metadata } from "next";
import Link from "@/components/link";
import { notFound } from "next/navigation";
import { GuideBody } from "@/components/guides/guide-body";
import { GuideBreadcrumbs } from "@/components/guides/guide-breadcrumbs";
import { GuideCardList } from "@/components/guides/guide-card-list";
import { FaqSection } from "@/components/kaomoji/faq-section";
import { JsonLd } from "@/components/layout/json-ld";
import {
  guideArticleJsonLd,
  guideBreadcrumbJsonLd,
  guideHowToJsonLd,
  guideMetadata,
} from "@/lib/guide-seo";
import { getGuide, guides, readingMinutes } from "@/lib/guides";
import { faqJsonLd } from "@/lib/seo";
import { getPage } from "@/lib/site";
import { ProseLinks } from "@/components/kaomoji/prose-links";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  return guide ? guideMetadata(guide) : {};
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  const howTo = guideHowToJsonLd(guide);
  const faqSchema = guide.faqs?.length ? faqJsonLd(guide.faqs) : null;
  const others = guides.filter((g) => g.slug !== guide.slug);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8">
      <JsonLd data={guideBreadcrumbJsonLd(guide)} />
      <JsonLd data={guideArticleJsonLd(guide)} />
      {howTo ? <JsonLd data={howTo} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}

      <GuideBreadcrumbs current={guide.title} />
      <h1 className="mt-4 type-h1 tracking-tight">{guide.title}</h1>
      <p className="mt-2 type-meta">
        Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time> ·{" "}
        {readingMinutes(guide.sections)} min read
      </p>
      <p className="mt-4 type-body text-muted">
        <ProseLinks text={guide.intro} />
      </p>

      <nav aria-labelledby="toc-heading" className="guide-toc mt-6">
        <p id="toc-heading" className="type-label text-foreground">
          In this guide
        </p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 type-meta">
          {guide.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="inline-flex min-h-9 items-center text-link underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <GuideBody sections={guide.sections} />

      <FaqSection faqs={guide.faqs} />

      <section className="mt-10" aria-labelledby="guide-related-heading">
        <h2 id="guide-related-heading" className="type-h2">
          Copy faces from this guide
        </h2>
        <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {guide.related.map((path) => (
            <li key={path}>
              <Link
                href={`${path}/`}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                {getPage(path).heading}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {others.length > 0 ? (
        <section className="mt-10" aria-labelledby="more-guides-heading">
          <h2 id="more-guides-heading" className="type-h2">
            More guides
          </h2>
          <GuideCardList items={others} />
        </section>
      ) : null}
    </article>
  );
}

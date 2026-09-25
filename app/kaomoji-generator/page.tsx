import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";
import { KaomojiGenerator } from "@/components/kaomoji/kaomoji-generator";
import { JsonLd } from "@/components/layout/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { getPage, relatedPages } from "@/lib/site";
import Link from "next/link";

const page = getPage("/kaomoji-generator");

export const metadata = pageMetadata(page);

export default function KaomojiGeneratorPage() {
  const related = relatedPages(page);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8">
      <JsonLd data={breadcrumbJsonLd(page)} />
      <Breadcrumbs page={page} />
      <h1 className="mt-4 type-h1 tracking-tight">{page.heading}</h1>
      <p className="mt-3 max-w-2xl whitespace-pre-line type-body text-muted">
        {page.intro}
      </p>
      {page.howTo && page.howTo.length > 0 ? (
        <section className="mt-6 max-w-2xl" aria-labelledby="how-generator">
          <h2 id="how-generator" className="type-h2">
            How to make a kaomoji
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 type-meta leading-6">
            {page.howTo.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      ) : null}

      <KaomojiGenerator />

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

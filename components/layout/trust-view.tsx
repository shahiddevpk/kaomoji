import type { ReactNode } from "react";
import Link from "@/components/link";
import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";
import { FaqSection } from "@/components/kaomoji/faq-section";
import { LearnSection } from "@/components/kaomoji/learn-section";
import { JsonLd } from "@/components/layout/json-ld";
import { relatedPages, type SitePage } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function TrustView({ page, children }: { page: SitePage; children: ReactNode }) {
  const related = relatedPages(page);
  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8">
      <JsonLd data={breadcrumbJsonLd(page)} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <Breadcrumbs page={page} />
      <h1 className="mt-4 type-h1 tracking-tight">{page.heading}</h1>
      <div className="trust-body trust-intro">
      <p className="mt-3">{page.intro}</p>
      <LearnSection
        heading="About Paste Kaomoji"
        definition={page.definition}
        learnMore={page.learnMore}
      />
      </div>
      <div className="trust-body mt-8 space-y-5">{children}</div>
      <FaqSection faqs={page.faqs} />
      {related.length > 0 ? (
        <ul className="mt-10 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {related.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="inline-flex min-h-11 items-center text-sm text-link underline-offset-2 transition-colors hover:text-link-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                {item.heading}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
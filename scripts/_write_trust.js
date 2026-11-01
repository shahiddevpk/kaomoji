const fs = require("fs");

const trust = `import type { ReactNode } from "react";
import Link from "next/link";
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
      <p className="mt-3 type-body text-muted">{page.intro}</p>
      <LearnSection
        heading={
          page.path === "/about" ? "What Paste Kaomoji is" : \`About \${page.label}\`
        }
        definition={page.definition}
        learnMore={page.learnMore}
      />
      <div className="mt-8 space-y-4 type-meta leading-7">{children}</div>
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
`;
fs.writeFileSync("components/layout/trust-view.tsx", trust, "utf8");
console.log("trust-view written");

const about = `import { TrustView } from "@/components/layout/trust-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/about");

export const metadata = pageMetadata(page);

export default function AboutPage() {
  return (
    <TrustView page={page}>
      <p>
        The library is organized by intent: cute, happy, cat, sad, crying, and angry
        kaomoji, plus Japanese emoticons, text faces, multiline faces, a copy-and-paste
        utility, and a light generator. Each of those is one URL. Synonyms stay on the
        same page instead of spawning lookalike routes.
      </p>
      <p>
        Browse a mood, search the catalog, and tap Copy once to paste a face into chat.
        Build a custom face on the generator when no listed face matches. This release
        does not run ads.
      </p>
      <p>
        Faces on the site are unicode text, the same kind of characters you can already
        type. Paste Kaomoji arranges them so they are easy to find.
      </p>
      <p>
        Much of the expanded face catalog comes from the open{" "}
        <a
          href="https://github.com/kaomojiya-collection/kaomoji-collection"
          className="text-accent underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          kaomoji-collection
        </a>{" "}
        project (MIT License), curated by Kaomojiya (kaomojiya.org). We dedupe faces and
        add English names, tags, and aliases for search. Paste Kaomoji is not affiliated
        with that project.
      </p>
    </TrustView>
  );
}
`;
fs.writeFileSync("app/about/page.tsx", about, "utf8");
console.log("about written");
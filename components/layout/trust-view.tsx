import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";
import { JsonLd } from "@/components/layout/json-ld";
import { relatedPages, type SitePage } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/seo";

export function TrustView({ page, children }: { page: SitePage; children: ReactNode }) {
  const related = relatedPages(page);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8">
      <JsonLd data={breadcrumbJsonLd(page)} />
      <Breadcrumbs page={page} />
      <h1 className="mt-4 type-h1 tracking-tight">{page.heading}</h1>
      <p className="mt-3 type-body text-muted">{page.intro}</p>
      <div className="mt-8 space-y-4 type-meta leading-7">{children}</div>
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
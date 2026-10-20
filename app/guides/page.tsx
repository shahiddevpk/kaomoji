import { GuideBreadcrumbs } from "@/components/guides/guide-breadcrumbs";
import { GuideCardList } from "@/components/guides/guide-card-list";
import { JsonLd } from "@/components/layout/json-ld";
import { GUIDES_INDEX, guideBreadcrumbJsonLd, guidesIndexMetadata } from "@/lib/guide-seo";
import { guides } from "@/lib/guides";

export const metadata = guidesIndexMetadata();

export default function GuidesPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8">
      <JsonLd data={guideBreadcrumbJsonLd()} />
      <GuideBreadcrumbs />
      <h1 className="mt-4 type-h1 tracking-tight">{GUIDES_INDEX.heading}</h1>
      <p className="mt-3 max-w-2xl type-body text-muted">{GUIDES_INDEX.intro}</p>
      <GuideCardList items={guides} />
    </article>
  );
}

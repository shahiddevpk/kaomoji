import type { SitePage } from "@/lib/site";

type LearnSectionProps = {
  /** Section H2, e.g. "What is kaomoji?" or a mood-specific title. */
  heading: string;
  definition?: string;
  learnMore?: string;
};

/** Renders optional definition + learnMore under a clear H2. Server-friendly. */
export function LearnSection({
  heading,
  definition,
  learnMore,
}: LearnSectionProps) {
  if (!definition && !learnMore) return null;

  const definitionParagraphs = definition
    ? definition.split(/\n\n+/).map((p) => p.trim()).filter(Boolean)
    : [];
  const learnMoreParagraphs = learnMore
    ? learnMore.split(/\n\n+/).map((p) => p.trim()).filter(Boolean)
    : [];

  return (
    <section className="mt-10 max-w-2xl" aria-labelledby="learn-heading">
      <h2 id="learn-heading" className="type-h2">
        {heading}
      </h2>
      {definitionParagraphs.map((para) => (
        <p
          key={para.slice(0, 48)}
          className="mt-3 type-body text-muted whitespace-pre-line"
        >
          {para}
        </p>
      ))}
      {learnMoreParagraphs.map((para) => (
        <p
          key={para.slice(0, 48)}
          className="mt-3 type-meta leading-7 whitespace-pre-line"
        >
          {para}
        </p>
      ))}
    </section>
  );
}

/** Convenience: pull definition/learnMore from a SitePage when present. */
export function LearnSectionFromPage({
  page,
  heading,
}: {
  page: SitePage;
  heading: string;
}) {
  return (
    <LearnSection
      heading={heading}
      definition={page.definition}
      learnMore={page.learnMore}
    />
  );
}
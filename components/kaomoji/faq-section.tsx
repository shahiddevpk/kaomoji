type FaqItem = { question: string; answer: string };

type FaqSectionProps = {
  faqs?: FaqItem[];
  heading?: string;
};

/**
 * Accessible FAQ list using native details/summary.
 * Each question is a summary (acts as the disclosure heading).
 */
export function FaqSection({
  faqs,
  heading = "Frequently asked questions",
}: FaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-10 max-w-2xl" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="type-h2">
        {heading}
      </h2>
      <ul className="mt-4 list-none space-y-3 p-0">
        {faqs.map((item) => (
          <li key={item.question}>
            <details className="faq-details group rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-sm)] open:pb-4">
              <summary className="cursor-pointer list-none type-label marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  <span className="type-h3 text-base font-semibold leading-6">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="faq-toggle mt-0.5 shrink-0 text-muted transition-[transform,color] duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 type-meta leading-7 text-muted">{item.answer}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
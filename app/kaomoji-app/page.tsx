import Link from "@/components/link";
import { PostCardList } from "@/components/blog/post-card-list";
import { GuideCardList } from "@/components/guides/guide-card-list";
import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";
import { FaqSection } from "@/components/kaomoji/faq-section";
import { KaomojiGrid } from "@/components/kaomoji/kaomoji-grid";
import { LazyRecentlyCopied } from "@/components/kaomoji/lazy-client";
import { LearnSection } from "@/components/kaomoji/learn-section";
import { JsonLd } from "@/components/layout/json-ld";
import { getForPage } from "@/data/index";
import { postsForPage } from "@/lib/blog";
import { guidesForPage } from "@/lib/guides";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  howToJsonLd,
  itemListJsonLd,
  pageMetadata,
} from "@/lib/seo";
import { getPage, relatedPages } from "@/lib/site";
import { ProseLinks } from "@/components/kaomoji/prose-links";

const page = getPage("/kaomoji-app");

export const metadata = pageMetadata(page);

const PLATFORM_WAYS = [
  {
    platform: "iPhone & iPad (iOS)",
    method: "Safari → Share → Add to Home Screen",
    cost: "Free, no App Store download",
    bestFor: "Full 24,000+ face library as a home-screen icon, plus the built-in Kana ^_^ key",
  },
  {
    platform: "Android (Chrome)",
    method: "Menu (⋮) → Add to Home screen",
    cost: "Free, no Play Store install",
    bestFor: "Instant tap-to-copy library alongside Gboard's :- ) emoticon panel",
  },
  {
    platform: "Chrome, Edge & Brave (PC / Mac)",
    method: "Bookmark or pin Paste Kaomoji as a tab",
    cost: "Free, nothing to install",
    bestFor: "One-click copy while chatting in Discord, Twitch, or Google Docs",
  },
  {
    platform: "Windows 10 & 11",
    method: "Web app + Win + . (period) shortcut",
    cost: "Built into Windows",
    bestFor: "Quick system panel for 50 basics; web app when you want rare or aesthetic faces",
  },
];

export default function KaomojiAppPage() {
  const quickFaces = getForPage({ path: "/", page: 1 }).slice(0, 36);
  const related = relatedPages(page);
  const guides = guidesForPage(page.path);
  const blogPosts = postsForPage(page.path);
  const faqSchema = page.faqs?.length ? faqJsonLd(page.faqs) : null;
  const howToSchema = page.howTo?.length ? howToJsonLd(page) : null;
  const itemListSchema = itemListJsonLd(page, quickFaces);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8">
      <JsonLd data={breadcrumbJsonLd(page)} />
      <JsonLd data={itemListSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      {howToSchema ? <JsonLd data={howToSchema} /> : null}
      <Breadcrumbs page={page} />
      <h1 className="mt-4 type-h1 tracking-tight">{page.heading}</h1>
      <p className="mt-3 max-w-2xl whitespace-pre-line type-body text-muted">
        {page.intro}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/kaomoji-copy-paste/"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary bg-primary px-5 type-button font-semibold text-accent-foreground transition-colors hover:border-primary-hover hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          Open full copy &amp; paste library
        </Link>
        <Link
          href="/kaomoji-generator/"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-5 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          Build a custom kaomoji
        </Link>
        <Link
          href="/guides/how-to-type-kaomoji/"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-5 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          Phone &amp; PC keyboard setup
        </Link>
      </div>

      <LazyRecentlyCopied />

      <section className="mt-8" id="quick-copy" aria-labelledby="quick-copy-heading">
        <h2 id="quick-copy-heading" className="type-h2">
          Quick-copy kaomoji pad
        </h2>
        <p className="mt-2 max-w-2xl type-meta leading-6">
          Tap any face below to copy it. Your recent picks stay pinned above, so the faces you use most are always one tap away.
        </p>
        <div className="mt-4">
          <KaomojiGrid items={quickFaces} />
        </div>
      </section>

      {page.howTo && page.howTo.length > 0 ? (
        <section className="mt-10 max-w-2xl" aria-labelledby="how-app">
          <h2 id="how-app" className="type-h2">
            How to add Paste Kaomoji to your phone or desktop
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

      <section className="mt-10" aria-labelledby="platforms-heading">
        <h2 id="platforms-heading" className="type-h2">
          Kaomoji app vs keyboard: best setup on each device
        </h2>
        <p className="mt-2 max-w-2xl type-meta leading-6">
          You do not need a paid keyboard app or extra permissions. Here is the simplest setup for each platform.
        </p>
        <div className="emoticon-table mt-4">
          <table>
            <thead>
              <tr>
                <th scope="col">Device</th>
                <th scope="col">Setup</th>
                <th scope="col">Cost</th>
                <th scope="col">What you get</th>
              </tr>
            </thead>
            <tbody>
              {PLATFORM_WAYS.map((row) => (
                <tr key={row.platform}>
                  <td className="font-medium text-foreground">{row.platform}</td>
                  <td className="type-meta">{row.method}</td>
                  <td className="type-meta">{row.cost}</td>
                  <td className="type-meta">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LearnSection
        heading="About the kaomoji app"
        definition={page.definition}
        learnMore={page.learnMore}
      />

      <FaqSection faqs={page.faqs} />

      {guides.length > 0 ? (
        <section className="mt-10" aria-labelledby="guides-heading">
          <h2 id="guides-heading" className="type-h2">
            Learn more
          </h2>
          <GuideCardList items={guides} />
        </section>
      ) : null}

      {blogPosts.length > 0 ? (
        <section className="mt-10" aria-labelledby="blog-heading">
          <h2 id="blog-heading" className="type-h2">
            From the blog
          </h2>
          <PostCardList items={blogPosts} />
        </section>
      ) : null}

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

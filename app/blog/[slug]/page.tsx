import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogBreadcrumbs } from "@/components/blog/blog-breadcrumbs";
import { PostCardList } from "@/components/blog/post-card-list";
import { GuideBody } from "@/components/guides/guide-body";
import { FaqSection } from "@/components/kaomoji/faq-section";
import { JsonLd } from "@/components/layout/json-ld";
import { getPost, posts } from "@/lib/blog";
import { blogBreadcrumbJsonLd, postJsonLd, postMetadata } from "@/lib/blog-seo";
import { readingMinutes } from "@/lib/guides";
import { faqJsonLd } from "@/lib/seo";
import { getPage } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? postMetadata(post) : {};
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const faqSchema = post.faqs?.length ? faqJsonLd(post.faqs) : null;
  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-8">
      <JsonLd data={blogBreadcrumbJsonLd(post)} />
      <JsonLd data={postJsonLd(post)} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}

      <BlogBreadcrumbs current={post.title} />
      <h1 className="mt-4 type-h1 tracking-tight">{post.title}</h1>
      <p className="mt-2 type-meta">
        {post.event} · Published <time dateTime={post.published}>{formatDate(post.published)}</time> ·{" "}
        {readingMinutes(post.sections)} min read
      </p>
      <p className="mt-4 type-body text-muted">{post.intro}</p>

      <nav aria-labelledby="toc-heading" className="guide-toc mt-6">
        <p id="toc-heading" className="type-label text-foreground">
          In this post
        </p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 type-meta">
          {post.sections.map((section) => (
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

      <GuideBody sections={post.sections} />

      <FaqSection faqs={post.faqs} />

      <section className="mt-10" aria-labelledby="post-related-heading">
        <h2 id="post-related-heading" className="type-h2">
          More faces for this occasion
        </h2>
        <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {post.related.map((path) => (
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
        <section className="mt-10" aria-labelledby="more-posts-heading">
          <h2 id="more-posts-heading" className="type-h2">
            More from the blog
          </h2>
          <PostCardList items={others} />
        </section>
      ) : null}
    </article>
  );
}

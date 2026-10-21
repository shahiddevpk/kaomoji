import Link from "next/link";
import { BlogBreadcrumbs } from "@/components/blog/blog-breadcrumbs";
import { PostCardList } from "@/components/blog/post-card-list";
import { JsonLd } from "@/components/layout/json-ld";
import { BLOG_INDEX, posts } from "@/lib/blog";
import { blogBreadcrumbJsonLd, blogIndexMetadata, blogListJsonLd } from "@/lib/blog-seo";

export const metadata = blogIndexMetadata();

/** Next holidays in date order; update as each one passes. */
const EVENTS: {
  date: string;
  name: string;
  facesHref: string;
  facesLabel: string;
  postHref?: string;
}[] = [
  {
    date: "Oct 31, 2026",
    name: "Halloween",
    facesHref: "/halloween-kaomoji/",
    facesLabel: "Halloween kaomoji",
    postHref: "/blog/halloween-messages-with-kaomoji/",
  },
  { date: "Nov 26, 2026", name: "Thanksgiving (US)", facesHref: "/thanksgiving-kaomoji/", facesLabel: "Thanksgiving kaomoji" },
  {
    date: "Dec 25, 2026",
    name: "Christmas",
    facesHref: "/christmas-kaomoji/",
    facesLabel: "Christmas kaomoji",
    postHref: "/blog/christmas-messages-with-kaomoji/",
  },
  {
    date: "Dec 31, 2026",
    name: "New Year's Eve",
    facesHref: "/new-year-kaomoji/",
    facesLabel: "New Year kaomoji",
    postHref: "/blog/new-years-eve-texts-with-kaomoji/",
  },
  { date: "Dec – Mar", name: "Winter season", facesHref: "/winter-kaomoji/", facesLabel: "Winter kaomoji" },
  {
    date: "Feb 14, 2027",
    name: "Valentine's Day",
    facesHref: "/valentine-kaomoji/",
    facesLabel: "Valentine's Day kaomoji",
    postHref: "/blog/valentines-day-messages-with-kaomoji/",
  },
];

export default function BlogPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8">
      <JsonLd data={blogBreadcrumbJsonLd()} />
      <JsonLd data={blogListJsonLd(posts)} />
      <BlogBreadcrumbs />
      <h1 className="mt-4 type-h1 tracking-tight">{BLOG_INDEX.heading}</h1>
      <p className="mt-3 max-w-2xl type-body text-muted">{BLOG_INDEX.intro}</p>
      <PostCardList items={posts} />

      <section className="mt-10 max-w-3xl" aria-labelledby="blog-calendar">
        <h2 id="blog-calendar" className="type-h2">
          Upcoming events calendar
        </h2>
        <p className="mt-2 type-meta leading-7">
          The next dates worth a themed message, with where to find faces and ready-made texts for
          each one.
        </p>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
          <table className="guide-table w-full text-left text-sm">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Event</th>
                <th scope="col">Faces and messages</th>
              </tr>
            </thead>
            <tbody>
              {EVENTS.map((event) => (
                <tr key={event.name}>
                  <th scope="row">{event.date}</th>
                  <td>{event.name}</td>
                  <td>
                    <Link href={event.facesHref} className="link-in-prose">
                      {event.facesLabel}
                    </Link>
                    {event.postHref ? (
                      <>
                        {" · "}
                        <Link href={event.postHref} className="link-in-prose">
                          Messages
                        </Link>
                      </>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 max-w-3xl space-y-4 type-meta leading-7" aria-labelledby="blog-about">
        <h2 id="blog-about" className="type-h2 text-foreground">
          What you will find here
        </h2>
        <p>
          The blog follows the calendar. Ahead of each holiday we publish messages you can send as
          they are, grouped by who you are writing to: friends, family, a partner, or coworkers.
          Every message has a Copy button, and every post links to the full face collection for
          that event, such as{" "}
          <Link href="/christmas-kaomoji/" className="link-in-prose">
            Christmas kaomoji
          </Link>
          ,{" "}
          <Link href="/new-year-kaomoji/" className="link-in-prose">
            New Year kaomoji
          </Link>
          , and{" "}
          <Link href="/valentine-kaomoji/" className="link-in-prose">
            Valentine&apos;s Day kaomoji
          </Link>
          .
        </p>
        <p>
          Looking for how-tos instead of seasonal ideas? The{" "}
          <Link href="/guides/" className="link-in-prose">
            kaomoji guides
          </Link>{" "}
          explain how to type, read, and make kaomoji on any device.
        </p>
      </section>
    </article>
  );
}

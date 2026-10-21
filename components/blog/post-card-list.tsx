import Link from "next/link";
import { postPath, type BlogPost } from "@/lib/blog";

/** Blog post cards (blog index, category pages, related posts). */
export function PostCardList({ items }: { items: BlogPost[] }) {
  return (
    <ul className="guide-grid mt-4">
      {items.map((post) => (
        <li key={post.slug}>
          <Link href={`${postPath(post)}/`} className="tool-card">
            <span className="tool-card-glyph" aria-hidden="true">
              {post.face}
            </span>
            <span className="type-label text-muted">{post.event}</span>
            <span className="type-h3">{post.title}</span>
            <span className="type-meta leading-6">{post.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

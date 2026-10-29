import Link from "@/components/link";
import { guidePath, type Guide } from "@/lib/guides";

/** Guide cards (index page, home "Learn" row, related reading). */
export function GuideCardList({ items }: { items: Guide[] }) {
  return (
    <ul className="guide-grid mt-4">
      {items.map((guide) => (
        <li key={guide.slug}>
          <Link href={`${guidePath(guide)}/`} className="tool-card">
            <span className="tool-card-glyph" aria-hidden="true">
              {guide.face}
            </span>
            <span className="type-h3">{guide.title}</span>
            <span className="type-meta leading-6">{guide.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

import { TrustView } from "@/components/layout/trust-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/terms");

export const metadata = pageMetadata(page);

export default function TermsPage() {
  return (
    <TrustView page={page}>
      <p className="type-meta text-muted">Effective September 25, 2026.</p>
      <h2 className="text-base font-semibold">Using the site</h2>
      <p>
        Paste Kaomoji is a free library for copying kaomoji and text faces into your own
        messages. You may use the faces in chats, posts, and bios.
      </p>
      <h2 className="text-base font-semibold">The faces</h2>
      <p>
        Kaomoji are arrangements of unicode characters. The site does not claim an exclusive
        right in those characters. The page text, layout, curation, tags, and category rules
        are the site&apos;s own presentation. Much of the expanded catalog is derived from the
        open kaomoji-collection project (MIT License); see the About page for attribution.
      </p>
      <h2 className="text-base font-semibold">Acceptable use</h2>
      <p>
        Do not misuse the site to attack the service, scrape it in a way that degrades it for
        other people, or present the grid as something it is not.
      </p>
      <h2 className="text-base font-semibold">No warranty</h2>
      <p>
        The site is provided as is, without warranties. Faces may render differently from one
        font or app to another. We may update or remove faces and pages as the library evolves.
      </p>
      <p>Questions about these terms: hello@pastekaomoji.com.</p>
    </TrustView>
  );
}

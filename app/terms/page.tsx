import Link from "next/link";
import { TrustView } from "@/components/layout/trust-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/terms");

export const metadata = pageMetadata(page);

export default function TermsPage() {
  return (
    <TrustView page={page}>
      <p className="type-meta text-muted">Effective October 21, 2026.</p>
      <h2 className="text-base font-semibold">Using the site</h2>
      <p>
        Paste Kaomoji is a free library for copying kaomoji and text faces into your own
        messages. You may use the faces in chats, posts, and bios, whether you copy them from a
        category such as{" "}
        <Link href="/cute-kaomoji/" className="link-in-prose">
          cute kaomoji
        </Link>{" "}
        or build your own with the{" "}
        <Link href="/kaomoji-generator/" className="link-in-prose">
          kaomoji generator
        </Link>
        .
      </p>
      <h2 className="text-base font-semibold">The faces</h2>
      <p>
        Kaomoji are arrangements of unicode characters. The site does not claim an exclusive
        right in those characters. The page text, layout, curation, tags, and category rules
        are the site&apos;s own presentation. Much of the expanded catalog is derived from the
        open kaomoji-collection project (MIT License); see the{" "}
        <Link href="/about/" className="link-in-prose">
          About page
        </Link>{" "}
        for attribution.
      </p>
      <h2 className="text-base font-semibold">Acceptable use</h2>
      <p>
        Do not misuse the site to attack the service, scrape it in a way that degrades it for
        other people, or present the grid as something it is not.
      </p>
      <h2 className="text-base font-semibold">Advertising</h2>
      <p>
        The site may show ads from Google AdSense. Ad partners may use cookies or similar
        technologies as described in the{" "}
        <Link href="/privacy/" className="link-in-prose">
          privacy policy
        </Link>
        . We do not sell personal information for money.
      </p>
      <h2 className="text-base font-semibold">External links</h2>
      <p>
        Some pages link to third-party sites such as Google Ads Settings or partner policy
        pages. Those sites have their own terms; we are not responsible for their content
        or practices.
      </p>
      <h2 className="text-base font-semibold">No warranty</h2>
      <p>
        The site is provided as is, without warranties. Faces may render differently from one
        font or app to another. We may update or remove faces and pages as the library evolves.
      </p>
      <h2 className="text-base font-semibold">Changes</h2>
      <p>
        We may update these terms when the library or advertising setup changes. The effective
        date at the top of this page shows when the current wording was last revised.
      </p>
      <p>
        How the site handles data is covered in the{" "}
        <Link href="/privacy/" className="link-in-prose">
          privacy policy
        </Link>
        . Questions about these terms:{" "}
        <a href="mailto:hello@pastekaomoji.com" className="link-in-prose">
          hello@pastekaomoji.com
        </a>{" "}
        or the{" "}
        <Link href="/contact/" className="link-in-prose">
          contact page
        </Link>
        .
      </p>
    </TrustView>
  );
}

import { TrustView } from "@/components/layout/trust-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/privacy");

export const metadata = pageMetadata(page);

export default function PrivacyPage() {
  return (
    <TrustView page={page}>
      <p className="type-meta text-muted">Effective September 25, 2026.</p>
      <h2 className="text-base font-semibold">What this site stores</h2>
      <p>
        Paste Kaomoji does not ask you to create an account. Most browsing content is
        rendered without accounts. Search requests are processed on the server. The site does
        not embed analytics or advertising, does not use a cookie banner for tracking, and does
        not set marketing cookies.
      </p>
      <h2 className="text-base font-semibold">Copying a face</h2>
      <p>
        One-tap copy stays in the browser and stores a short recently-copied list in
        localStorage on your device. It does not send the face to a server.
      </p>
      <h2 className="text-base font-semibold">Email</h2>
      <p>
        If you write to hello@pastekaomoji.com, the message is used to answer you. It is not
        added to a marketing list.
      </p>
      <h2 className="text-base font-semibold">Hosting</h2>
      <p>
        The domain is on Cloudflare, which may log ordinary request data such as IP address and
        user agent for security and operations. We do not add extra trackers on top of that
        hosting layer.
      </p>
    </TrustView>
  );
}

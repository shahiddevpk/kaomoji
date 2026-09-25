import { TrustView } from "@/components/layout/trust-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/privacy");

export const metadata = pageMetadata(page);

export default function PrivacyPage() {
  return (
    <TrustView page={page}>
      <h2 className="text-base font-semibold">What this release stores</h2>
      <p>
        Paste Kaomoji does not ask you to create an account. Pages are static. This release
        does not embed analytics, advertising, or a cookie banner, and the site itself does
        not set tracking cookies.
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
        The domain is on Cloudflare. A later deploy may use Cloudflare Pages or Workers, which
        can log ordinary request data such as IP address and user agent for security and
        operations. This release does not add extra trackers on top of that.
      </p>
    </TrustView>
  );
}

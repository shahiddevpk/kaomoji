import Link from "@/components/link";
import { TrustView } from "@/components/layout/trust-view";
import { isAdSenseEnabled } from "@/lib/ads";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/disclaimer");

export const metadata = pageMetadata(page);

export default function DisclaimerPage() {
  return (
    <TrustView page={page}>
      <p className="type-meta text-muted">Effective October 21, 2026.</p>
      <h2 className="text-base font-semibold">General information only</h2>
      <p>
        Paste Kaomoji is a free library of kaomoji and text faces for personal use in chats,
        posts, and bios. Face names, meanings, and the explanations in our{" "}
        <Link href="/guides/" className="link-in-prose">
          kaomoji guides
        </Link>{" "}
        are written in good faith to help you pick a face. Meanings of text faces change between
        communities and over time, so we cannot guarantee that every face reads the same way to
        everyone who sees it.
      </p>
      <h2 className="text-base font-semibold">How faces display</h2>
      <p>
        Faces are unicode text. How they look depends on the fonts in your device, browser, and
        the app you paste into. A face that looks right here may show boxes or break across lines
        elsewhere. We are not responsible for how third-party apps render copied text.
      </p>
      <h2 className="text-base font-semibold">Advertising</h2>
      {isAdSenseEnabled() ? (
        <p>
          The site is supported by ads served by Google AdSense. Ads are chosen by Google, not by
          us, and showing an ad is not an endorsement of the product or service advertised. How
          advertising cookies work and how to opt out is explained in the{" "}
          <Link href="/privacy/" className="link-in-prose">
            privacy policy
          </Link>
          .
        </p>
      ) : (
        <p>This release does not run ads.</p>
      )}
      <h2 className="text-base font-semibold">External links</h2>
      <p>
        Some pages link to other websites, such as the open-source project credited on the{" "}
        <Link href="/about/" className="link-in-prose">
          about page
        </Link>
        . We do not control those sites and are not responsible for their content or their
        privacy practices.
      </p>
      <h2 className="text-base font-semibold">Trademarks and affiliation</h2>
      <p>
        Names such as Discord, WhatsApp, iPhone, Android, Windows, and Mac are trademarks of their
        owners and are mentioned only to explain where faces can be pasted. Paste Kaomoji is an
        independent site and is not affiliated with, sponsored by, or endorsed by those companies,
        by the Unicode Consortium, or by Google.
      </p>
      <h2 className="text-base font-semibold">Questions</h2>
      <p>
        If you think something on the site is wrong or should be removed, write to us through the{" "}
        <Link href="/contact/" className="link-in-prose">
          contact page
        </Link>
        . The rules for using the site are in the{" "}
        <Link href="/terms/" className="link-in-prose">
          terms of use
        </Link>
        .
      </p>
    </TrustView>
  );
}

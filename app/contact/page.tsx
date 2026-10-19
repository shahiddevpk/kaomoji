import Link from "next/link";
import { TrustView } from "@/components/layout/trust-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/contact");

export const metadata = pageMetadata(page);

const emailLink =
  "font-medium text-link underline-offset-2 hover:text-link-hover hover:underline";

export default function ContactPage() {
  return (
    <TrustView page={page}>
      <p>
        Email{" "}
        <a
          href="mailto:hello@pastekaomoji.com"
          className={emailLink}
          aria-label="Email hello at pastekaomoji.com"
        >
          hello@pastekaomoji.com
        </a>
        . It is the only contact channel for pastekaomoji.com; there is no
        contact form, account system, or chat.
      </p>

      <h2 className="type-h2 text-foreground">What you can send</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="text-foreground">Face suggestions</strong> — a
          kaomoji, text face, or symbol you would like added. Paste the face
          and say which page it belongs on.
        </li>
        <li>
          <strong className="text-foreground">Corrections</strong> — a face in
          the wrong mood, a wrong meaning, or a typo in an explanation.
        </li>
        <li>
          <strong className="text-foreground">Display problems</strong> — a
          face that shows as boxes, breaks across lines, or copies incorrectly.
        </li>
        <li>
          <strong className="text-foreground">Rights or removal requests</strong>{" "}
          — if you believe content on the site should not be here.
        </li>
      </ul>

      <h2 className="type-h2 text-foreground">Help us fix things faster</h2>
      <p>
        Include the page link, the face itself (copy and paste it into the
        email), and for display problems your device, browser, and the app you
        pasted into. Screenshots help when a face looks wrong.
      </p>

      <p>
        How the site handles data is described in the{" "}
        <Link href="/privacy/" className={emailLink}>
          privacy policy
        </Link>
        .
      </p>
    </TrustView>
  );
}

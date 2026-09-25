import { TrustView } from "@/components/layout/trust-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/contact");

export const metadata = pageMetadata(page);

export default function ContactPage() {
  return (
    <TrustView page={page}>
      <p>
        Email{" "}
        <a
          href="mailto:hello@pastekaomoji.com"
          className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
          aria-label="Email hello at pastekaomoji.com"
        >
          hello@pastekaomoji.com
        </a>
        .
      </p>
      <p>
        Useful notes include a broken page, a face that should be grouped differently, or a
        correction or a face suggestion. The inbox is the public address for pastekaomoji.com.
      </p>
    </TrustView>
  );
}

import { TrustView } from "@/components/layout/trust-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/about");

export const metadata = pageMetadata(page);

export default function AboutPage() {
  return (
    <TrustView page={page}>
      <p>
        The library is organized by intent: cute, happy, cat, sad, and crying kaomoji, plus
        Japanese emoticons, text faces, and a copy-and-paste page. Each of those is one URL.
        Synonyms stay on the same page instead of spawning lookalike routes.
      </p>
      <p>
        Browse a mood, search the catalog, and tap Copy once to paste a face into chat.
        A face maker is later still, and this release does not run ads.
      </p>
      <p>
        Faces on the site are unicode text, the same kind of characters you can already type.
        Paste Kaomoji arranges them so they are easy to find.
      </p>
      <p>
        Much of the expanded face catalog comes from the open{" "}
        <a
          href="https://github.com/kaomojiya-collection/kaomoji-collection"
          className="text-accent underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          kaomoji-collection
        </a>{" "}
        project (MIT License), curated by Kaomojiya (kaomojiya.org). We dedupe faces and add
        English names, tags, and aliases for search. Paste Kaomoji is not affiliated with
        that project.
      </p>
    </TrustView>
  );
}

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
        Mood shelves beat one endless combo dump when you already know the vibe you need.
        You can also build a custom face with the{" "}
        <a href="/kaomoji-generator/" className="text-accent underline-offset-2 hover:underline">
          Kaomoji Generator
        </a>
        . This release does not run ads.
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
        project (MIT License), curated by Kaomojiya (kaomojiya.org). Paste Kaomoji is not
        affiliated with that project. We add value on top of the raw list: deduplicated
        faces, English names, mood and tag organization, category integrity rules so grids
        match their intent, and one-tap copy in the browser—not a bare republish of the
        source dump.
      </p>
    </TrustView>
  );
}

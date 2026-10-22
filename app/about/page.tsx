import Link from "next/link";
import { TrustView } from "@/components/layout/trust-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";
import { isAdSenseEnabled } from "@/lib/ads";

const page = getPage("/about");

export const metadata = pageMetadata(page);

export default function AboutPage() {
  return (
    <TrustView page={page}>
      <p>
        Faces are sorted by how they feel: core moods (cute, happy, cat, sad, crying,
        angry, and more), animals and reactions (heart, shy, bunny, dog, bear, smug,
        sleepy, confused, shocked), and the angrier extras (table flip, fight, pout).
        There are also pages for Japanese emoticons, text faces, a kaomoji generator, and
        a quick copy-and-paste list. Each mood gets one page, so you are not clicking
        through three near-identical lists to find the same faces.
      </p>
      <p>
        Browse a mood, search the catalog, and tap Copy once to paste a face into chat.
        When you already know the feeling you want, a page for that mood is quicker than
        scrolling one giant list. You can also build a custom face with the{" "}
        <Link href="/kaomoji-generator/" className="link-in-prose">
          Kaomoji Generator
        </Link>
        .{" "}
        {isAdSenseEnabled()
          ? "Ads from Google AdSense help keep the site free; they sit below the page content, never inside the copy grids."
          : "This release does not run ads."}
      </p>
      <p>
        Faces on the site are unicode text, the same kind of characters you can already type.
        Paste Kaomoji arranges them so they are easy to find. Start with{" "}
        <Link href="/cute-kaomoji/" className="link-in-prose">
          cute kaomoji
        </Link>
        ,{" "}
        <Link href="/happy-kaomoji/" className="link-in-prose">
          happy kaomoji
        </Link>
        , or{" "}
        <Link href="/japanese-emoticons/" className="link-in-prose">
          Japanese emoticons
        </Link>
        , and read the{" "}
        <Link href="/guides/" className="link-in-prose">
          kaomoji guides
        </Link>{" "}
        to learn how to type and read them.
      </p>
      <p>
        Much of the expanded face catalog comes from the open{" "}
        <a
          href="https://github.com/kaomojiya-collection/kaomoji-collection"
          className="link-in-prose"
          rel="noopener noreferrer"
          target="_blank"
        >
          kaomoji-collection
        </a>{" "}
        project (MIT License), curated by Kaomojiya (kaomojiya.org). Paste Kaomoji is not
        affiliated with that project. On top of the raw list, I remove duplicates, add
        English names and meanings, sort faces by mood, check that each face actually fits
        the page it is on, and add one-tap copy. It is not a straight copy of the source
        list.
      </p>
      <h2 className="type-h2 text-foreground">Who runs Paste Kaomoji</h2>
      <p>
        Hi, I&apos;m Muhammad Shahid. I build and run Paste Kaomoji as an independent project:
        I write the page explanations, the{" "}
        <Link href="/guides/" className="link-in-prose">
          guides
        </Link>
        , and the{" "}
        <Link href="/blog/" className="link-in-prose">
          seasonal blog posts
        </Link>
        , and I decide which faces belong on each page.
      </p>
      <h2 className="type-h2 text-foreground">How faces are reviewed</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong className="text-foreground">One mood per page.</strong> Each page keeps faces
          that match its mood, so laughing faces live on giggling kaomoji instead of crowding
          the happy page.
        </li>
        <li>
          <strong className="text-foreground">Family-friendly by design.</strong> Faces with
          crude, suggestive, or offensive meanings are removed from the catalog, even when they
          appear in public kaomoji lists.
        </li>
        <li>
          <strong className="text-foreground">Names and meanings in English.</strong> Japanese
          sound words and symbols are explained on each page, so you know what a face says
          before you send it.
        </li>
        <li>
          <strong className="text-foreground">Tested on real devices.</strong> Faces are checked
          for copying and display on phones and computers; the guide to{" "}
          <Link href="/guides/how-to-type-kaomoji/" className="link-in-prose">
            typing kaomoji
          </Link>{" "}
          covers fixes when something breaks.
        </li>
      </ul>
      <p>
        Spotted a face in the wrong mood or want one added? Reach us through the{" "}
        <Link href="/contact/" className="link-in-prose">
          contact page
        </Link>
        .
      </p>
    </TrustView>
  );
}

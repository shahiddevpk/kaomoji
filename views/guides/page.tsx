import Link from "@/components/link";
import { GuideBreadcrumbs } from "@/components/guides/guide-breadcrumbs";
import { GuideCardList } from "@/components/guides/guide-card-list";
import { JsonLd } from "@/components/layout/json-ld";
import { GUIDES_INDEX, guideBreadcrumbJsonLd, guidesIndexMetadata } from "@/lib/guide-seo";
import { guides } from "@/lib/guides";

export const metadata = guidesIndexMetadata();

export default function GuidesPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8">
      <JsonLd data={guideBreadcrumbJsonLd()} />
      <GuideBreadcrumbs />
      <h1 className="mt-4 type-h1 tracking-tight">{GUIDES_INDEX.heading}</h1>
      <p className="mt-3 max-w-2xl type-body text-muted">{GUIDES_INDEX.intro}</p>
      <GuideCardList items={guides} />

      <section className="mt-10 max-w-3xl space-y-4 type-meta leading-7" aria-labelledby="guides-start">
        <h2 id="guides-start" className="type-h2 text-foreground">
          Which guide should you read first?
        </h2>
        <p>
          New to text faces? Start with{" "}
          <Link href="/guides/what-is-kaomoji/" className="link-in-prose">
            what kaomoji are
          </Link>
          . It explains how Japanese text art grew out of early internet forums, why the faces are
          read upright instead of sideways, and how they differ from Western{" "}
          <Link href="/emoticons/" className="link-in-prose">
            emoticons
          </Link>{" "}
          like :) and from picture emoji.
        </p>
        <p>
          If a face confuses you, the guide to{" "}
          <Link href="/guides/how-to-read-kaomoji/" className="link-in-prose">
            reading kaomoji
          </Link>{" "}
          breaks a face into parts: the brackets are the outline of the head, the eyes carry most of
          the mood, and arms or small symbols add the action. Once you can spot those pieces, a face
          such as (╯°□°)╯︵ ┻━┻ reads as clearly as a sentence.
        </p>
        <p>
          When you want to type faces yourself instead of copying them, the guide to{" "}
          <Link href="/guides/how-to-type-kaomoji/" className="link-in-prose">
            typing kaomoji
          </Link>{" "}
          covers text replacement on iPhone and Android, the Japanese keyboard trick, and keyboard
          shortcuts on Windows and Mac, so your favorite face is only a few keystrokes away.
        </p>
        <p>
          Ready to go further? Learn to{" "}
          <Link href="/guides/how-to-make-kaomoji/" className="link-in-prose">
            make your own kaomoji
          </Link>{" "}
          from parts, keep faces intact with the{" "}
          <Link href="/guides/kaomoji-in-discord/" className="link-in-prose">
            Discord guide
          </Link>
          , check the{" "}
          <Link href="/guides/kaomoji-etiquette/" className="link-in-prose">
            etiquette guide
          </Link>{" "}
          before using faces at work, and pick a compact face with the guide to{" "}
          <Link href="/guides/kaomoji-for-bios-and-usernames/" className="link-in-prose">
            kaomoji for bios
          </Link>
          . For ready-to-send holiday messages, visit the{" "}
          <Link href="/blog/" className="link-in-prose">
            kaomoji blog
          </Link>
          .
        </p>

        <h2 className="type-h2 text-foreground">Put the guides into practice</h2>
        <p>
          Every guide links to faces you can copy right away. Good places to try what you learned
          are the{" "}
          <Link href="/cute-kaomoji/" className="link-in-prose">
            cute kaomoji
          </Link>
          ,{" "}
          <Link href="/happy-kaomoji/" className="link-in-prose">
            happy kaomoji
          </Link>
          , and{" "}
          <Link href="/sad-kaomoji/" className="link-in-prose">
            sad kaomoji
          </Link>{" "}
          collections, which show how small changes to the eyes and mouth shift the mood. Animal
          faces such as{" "}
          <Link href="/cat-kaomoji/" className="link-in-prose">
            cat kaomoji
          </Link>{" "}
          show how ears and whiskers are built from punctuation, and the{" "}
          <Link href="/table-flip-kaomoji/" className="link-in-prose">
            table flip
          </Link>{" "}
          and{" "}
          <Link href="/shrug-kaomoji/" className="link-in-prose">
            shrug
          </Link>{" "}
          pages show how arms turn a face into an action.
        </p>
        <p>
          Want something nobody else has? Use the{" "}
          <Link href="/kaomoji-generator/" className="link-in-prose">
            kaomoji generator
          </Link>{" "}
          to mix your own eyes, mouth, and arms, or browse the full{" "}
          <Link href="/kaomoji-copy-paste/" className="link-in-prose">
            kaomoji copy and paste
          </Link>{" "}
          library. Questions or a guide you would like to see? Get in touch through the{" "}
          <Link href="/contact/" className="link-in-prose">
            contact page
          </Link>
          .
        </p>
      </section>
    </article>
  );
}

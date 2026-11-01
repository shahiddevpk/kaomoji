import Link from "@/components/link";

/**
 * Hand-written, page-specific extras for the three newer hubs: ready-to-send
 * messages, a symbol key, and descriptive topic-cluster links. Static HTML only
 * (no hydration) so it adds zero client JS.
 */
type Extras = {
  messagesHeading: string;
  messages: string[];
  symbols: { s: string; m: string }[];
  cluster: { href: string; anchor: string; why: string }[];
};

const UPDATED = "November 2026";

const EXTRAS: Record<string, Extras> = {
  "/sweat-kaomoji": {
    messagesHeading: "Ready messages with a sweat drop",
    messages: [
      "Sorry, totally forgot to reply (^_^;)",
      "I may have slightly overcooked dinner (；・∀・)",
      "Deadline is tomorrow?? On it! (;^_^A",
      "That was way too close (￣▽￣;)",
      "Running 5 minutes late, save me a seat ε=ε=(;´Д`)",
    ],
    symbols: [
      { s: ";", m: "A single sweat drop on the side of the face, borrowed from manga." },
      { s: "；", m: "Full-width sweat drop. Same meaning, slightly bigger in Japanese fonts." },
      { s: "A", m: "A hand wiping the forehead, as in (;^_^A." },
      { s: "ｱｾｱｾ", m: "\"Ase ase\", the sound of panicked sweating." },
      { s: "💦", m: "Emoji splash for heavy sweat or flustered energy." },
    ],
    cluster: [
      { href: "/nervous-kaomoji/", anchor: "nervous and worried kaomoji", why: "for anxious, shaking faces before something happens" },
      { href: "/shy-kaomoji/", anchor: "shy and blushing kaomoji", why: "when the awkwardness is cute rather than stressed" },
      { href: "/sorry-kaomoji/", anchor: "apology kaomoji", why: "to pair a sweat drop with a proper sorry" },
      { href: "/confused-kaomoji/", anchor: "confused kaomoji", why: "for \"wait, what?\" moments without the sweat" },
    ],
  },
  "/aesthetic-kaomoji": {
    messagesHeading: "Ready captions and bio lines",
    messages: [
      "soft hours only ₍ᐢ. .ᐢ₎ ♡",
      "coffee, books, rain ☕︎ ꒰ ᐢ. ̫ .ᐢ ꒱",
      "₊˚⊹ new post ⊹˚₊",
      "good morning ˚ ༘ ♡ ⋆｡˚ (˶ᵔ ᵕ ᵔ˶)",
      "currently: unbothered ꒰ ˶• ༝ •˶꒱",
    ],
    symbols: [
      { s: "꒰ ꒱", m: "Rounded \"cloud\" brackets that soften a face." },
      { s: "₍ ₎", m: "Small subscript brackets for tiny, delicate faces." },
      { s: "˶ ˶", m: "Blush marks on the cheeks." },
      { s: "₊˚⊹ ⋆｡", m: "Sparkle dust used as decoration around text." },
      { s: "♡", m: "Outline heart, lighter than a filled ❤." },
    ],
    cluster: [
      { href: "/guides/kaomoji-soft-copy/", anchor: "how to write soft pastel kaomoji", why: "a step-by-step guide to the style" },
      { href: "/cute-kaomoji/", anchor: "classic cute kaomoji", why: "bright, bouncy faces without the decoration" },
      { href: "/border-kaomoji/", anchor: "kaomoji borders and dividers", why: "to frame an aesthetic bio" },
      { href: "/cute-symbols/", anchor: "cute text symbols", why: "the sparkles and hearts used above, one by one" },
    ],
  },
  "/animal-kaomoji": {
    messagesHeading: "Ready pet captions",
    messages: [
      "my cat judging me again (=^･ω･^=)",
      "walkies time! U^ｪ^U",
      "bear hug incoming ʕっ•ᴥ•ʔっ",
      "bunny mode: snack hunting (・x・)",
      "fish facts only ><(((('>",
    ],
    symbols: [
      { s: "ω", m: "Omega used as a cat or small-animal mouth." },
      { s: "ᴥ", m: "Bear snout, as in ʕ•ᴥ•ʔ." },
      { s: "ʕ ʔ", m: "Round bear ears built from IPA letters." },
      { s: "U U", m: "Floppy dog ears on each side." },
      { s: "><>", m: "A fish body facing right." },
    ],
    cluster: [
      { href: "/cat-kaomoji/", anchor: "cat kaomoji", why: "the biggest animal set" },
      { href: "/dog-kaomoji/", anchor: "dog kaomoji", why: "floppy ears and wagging tails" },
      { href: "/bear-kaomoji/", anchor: "bear kaomoji", why: "ʕ•ᴥ•ʔ and friends" },
      { href: "/bunny-kaomoji/", anchor: "bunny kaomoji", why: "long-eared rabbit faces" },
      { href: "/fish-kaomoji/", anchor: "fish kaomoji", why: "sea life in one line" },
    ],
  },
};

export function hasHubExtras(path: string) {
  return path in EXTRAS;
}

export function HubExtras({ path }: { path: string }) {
  const x = EXTRAS[path];
  if (!x) return null;
  return (
    <>
      <section className="mt-10" aria-labelledby="ready-messages-heading">
        <h2 id="ready-messages-heading" className="type-h2">{x.messagesHeading}</h2>
        <p className="mt-2 type-meta">Select a line and copy it whole, or edit the words first.</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {x.messages.map((m) => (
            <li key={m} className="rounded-xl border border-border bg-card px-4 py-3 type-body select-all">{m}</li>
          ))}
        </ul>
      </section>
      <section className="mt-10 max-w-2xl" aria-labelledby="symbol-key-heading">
        <h2 id="symbol-key-heading" className="type-h2">Symbol key</h2>
        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 type-meta leading-6">
          {x.symbols.map((s) => (
            <>
              <dt key={`t-${s.s}`} className="font-semibold text-foreground">{s.s}</dt>
              <dd key={`d-${s.s}`}>{s.m}</dd>
            </>
          ))}
        </dl>
      </section>
      <section className="mt-10 max-w-2xl" aria-labelledby="cluster-heading">
        <h2 id="cluster-heading" className="type-h2">Where to go next</h2>
        <ul className="mt-3 space-y-2 type-meta leading-6">
          {x.cluster.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className="font-medium text-primary underline underline-offset-2">{c.anchor}</Link> — {c.why}
            </li>
          ))}
        </ul>
      </section>
      <p className="mt-10 type-meta text-muted">
        Updated {UPDATED} · Faces checked by the PasteKaomoji team. <Link href="/about/" className="underline underline-offset-2">About us</Link>
      </p>
    </>
  );
}

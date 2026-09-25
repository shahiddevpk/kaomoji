import type { SearchScope } from "@/lib/search/actions";

export const siteConfig = {
  siteName: "Paste Kaomoji",
  url: "https://pastekaomoji.com",
  description:
    "Kaomoji copy and paste library by mood: cute, cat, happy, crying, angry, Japanese emoticons, and text faces. Browse grids, then one-tap copy.",
  locale: "en_US",
} as const;

export type PageGroup = "hub" | "browse" | "trust";

export type SitePage = {
  path: string;
  label: string;
  /** Visible H1 - matches primary intent, not a shared template. */
  heading: string;
  /**
   * Document title segment before `| Paste Kaomoji`.
   * Hub uses a full absolute title (includes brand) instead.
   */
  titleSegment: string;
  description: string;
  intro: string;
  group: PageGroup;
  inHeader: boolean;
  /** Category key for primary grid filter. Omitted pages show popular or full mix. */
  category?: string;
  /**
   * Tag filter (ANY match). Use instead of category for mood/tag browse pages.
   * A page uses either category or tags, not both.
   */
  tags?: string[];
  /** When true, also include faces whose decoded face contains a real newline. */
  includeNewlineFaces?: boolean;
  /** Parent browse path for nested subcategory IA (breadcrumbs + chips). */
  parentPath?: string;
  /** Optional robots override; omit for index,follow. Pagination n>=2 uses noindex in pageMetadata. */
  robots?: { index?: boolean; follow?: boolean };
  /** Short how-to / explainer bullets under the grid intro (unique per page). */
  howTo?: string[];
  related: string[];
};

export const pages: SitePage[] = [
  {
    path: "/",
    label: "Home",
    heading: "Kaomoji Copy and Paste Library",
    titleSegment: "Kaomoji Copy and Paste | Text Faces | Paste Kaomoji",
    description: siteConfig.description,
    intro:
      "Browse kaomoji and text faces by mood, then one-tap copy. Start from category tiles when you are exploring; open Kaomoji Copy and Paste when you only need a fast grab.",
    group: "hub",
    inHeader: true,
    related: [],
  },
  {
    path: "/cute-kaomoji",
    label: "Cute",
    heading: "Cute Kaomoji Copy and Paste",
    titleSegment: "Cute Kaomoji (◕‿◕)",
    description:
      "Cute kaomoji (◕‿◕) copy and paste: soft kawaii blush, tiny hugs, and gentle charm. Soft aesthetic mood with one-tap copy, separate from happy cheers.",
    intro:
      "Soft kawaii smiles, blush, and tiny hugs ready to copy and paste. Cute owns the soft aesthetic mood; cheers, waves, and big grins live on happy kaomoji so the two stay distinct.",
    group: "browse",
    inHeader: true,
    category: "cute",
    related: ["/happy-kaomoji", "/cat-kaomoji", "/text-faces", "/multiline-kaomoji"],
  },
  {
    path: "/happy-kaomoji",
    label: "Happy",
    heading: "Happy Kaomoji Copy and Paste",
    titleSegment: "Happy Kaomoji (＾▽＾)",
    description:
      "Happy kaomoji (＾▽＾) copy and paste for cheers, waves, and big grins. Upbeat faces with one-tap copy, not soft kawaii blush.",
    intro:
      "Cheers, waves, and easy grins for upbeat chat - tap to copy. Happy owns smiles-and-cheers; soft blush and kawaii affection stay on the cute page.",
    group: "browse",
    inHeader: true,
    category: "happy",
    related: ["/cute-kaomoji", "/cat-kaomoji", "/sad-kaomoji", "/angry-kaomoji"],
  },
  {
    path: "/cat-kaomoji",
    label: "Cat",
    heading: "Cat Kaomoji Copy and Paste",
    titleSegment: "Cat Kaomoji (=^･ω･^=)",
    description:
      "Cat kaomoji (=^･ω･^=) copy and paste (neko / catmoji): calm cats to excited ones. Large tap targets and instant clipboard toast.",
    intro:
      "Neko faces from calm cats to excited ones - one tap to copy. Cat kaomoji stay on their own page so they are not mixed into the general cute grid.",
    group: "browse",
    inHeader: true,
    category: "cat",
    related: ["/cute-kaomoji", "/happy-kaomoji", "/text-faces"],
  },
  {
    path: "/sad-kaomoji",
    label: "Sad",
    heading: "Sad Kaomoji Copy and Paste",
    titleSegment: "Sad Kaomoji (╥﹏╥)",
    description:
      "Sad kaomoji (╥﹏╥) copy and paste: quiet downcast eyes and soft frowns. Low-mood faces without tears; sobbing lives on the crying page.",
    intro:
      "Quiet downcast eyes and soft frowns when you want low-mood text without tears. For sobbing and tear streaks, open crying kaomoji so sad and crying stay different intents.",
    group: "browse",
    inHeader: true,
    category: "sad",
    related: ["/crying-kaomoji", "/happy-kaomoji", "/cute-kaomoji", "/angry-kaomoji"],
  },
  {
    path: "/crying-kaomoji",
    label: "Crying",
    heading: "Crying Kaomoji Copy and Paste",
    titleSegment: "Crying Kaomoji (ಥ﹏ಥ)",
    description:
      "Crying kaomoji (ಥ﹏ಥ) copy and paste: cry, tears, and sobbing faces. Cry searches land here; quiet downcast faces stay on sad.",
    intro:
      "Tears, sobs, and weeping faces for when a quiet frown is not enough - tap to copy. Cry and sob aliases share this page; quiet downcast faces stay on sad kaomoji.",
    group: "browse",
    inHeader: true,
    category: "crying",
    related: ["/sad-kaomoji", "/happy-kaomoji", "/cute-kaomoji"],
  },
  {
    path: "/angry-kaomoji",
    label: "Angry",
    heading: "Angry Kaomoji Copy and Paste",
    titleSegment: "Angry Kaomoji (╬ಠ益ಠ)",
    description:
      "Angry kaomoji (╬ಠ益ಠ) copy and paste: scowls, growls, and mad faces. Browse angry, or open table flip, fight, and pout. Rage and glare stay as tags here.",
    intro:
      "Scowls, growls, and mad faces when chat needs heat - tap Copy once and paste anywhere. This page owns the head term angry kaomoji: the full angry-tagged set ranked with popular faces first so the grid matches angry searches.\n\nTable flip, fight, and pout each keep their own flat pages when the face pools stay distinct. Rage and glare faces stay discoverable here via tags and search rather than thin duplicate URLs. Use the chips below for the shipped sub-moods, or stay on this hub for the broad angry shelf.",
    group: "browse",
    inHeader: true,
    tags: ["angry"],
    howTo: [
      "Scan the angry grid for scowls and growls that match your chat tone.",
      "Tap Copy once - the face goes to your clipboard with any spacing intact.",
      "Need a narrower mood? Use the chips for table flip, fight, rage, pout, or glare.",
    ],
    related: [
      "/table-flip-kaomoji",
      "/fight-kaomoji",
      "/pout-kaomoji",
      "/kaomoji-generator",
      "/sad-kaomoji",
      "/happy-kaomoji",
    ],
  },
  {
    path: "/table-flip-kaomoji",
    label: "Table flip",
    heading: "Table Flip Kaomoji Copy and Paste",
    titleSegment: "Table Flip Kaomoji (╯°□°)╯︵ ┻━┻",
    description:
      "Table flip kaomoji (╯°□°)╯︵ ┻━┻ copy and paste: classic flip-the-table faces. Nested under angry, owned by the table-flip keyword.",
    intro:
      "Flip-the-table faces for classic desk-flip reactions - one tap to copy. This page owns table flip kaomoji (including tableflip spelling in tags), nested in the angry mood family for discovery but indexed on its own flat URL so it does not compete with the angry parent.\n\nGrab a flip when words are not enough. For punches open fight kaomoji; for soft sulks open pout. Rage and glare faces stay on the angry hub via tags. The parent angry page keeps the broader scowls and growls.",
    group: "browse",
    inHeader: false,
    tags: ["tableflip", "table flip"],
    parentPath: "/angry-kaomoji",
    howTo: [
      "Table flip faces are the classic flip-desk reaction, not every angry scowl.",
      "Copy the flip that matches your intensity, then paste into chat or a caption.",
      "For punches or silent stares, jump to fight or glare instead.",
    ],
    related: [
      "/angry-kaomoji",
      "/fight-kaomoji",
      "/pout-kaomoji",
      "/kaomoji-generator",
    ],
  },
  {
    path: "/fight-kaomoji",
    label: "Fight",
    heading: "Fight Kaomoji Copy and Paste",
    titleSegment: "Fight Kaomoji (ง •̀_•́)ง",
    description:
      "Fight kaomoji (ง •̀_•́)ง copy and paste: punching, hitting, and sparring faces. Action heat that stays distinct from the general angry grid.",
    intro:
      "Punching, hitting, and sparring poses for fight-mode chat - tap to copy. Fight kaomoji owns punch and hit tags so action faces stay distinct from a general angry scowl grid.\n\nUse this set when you want motion and impact. Table flips stay on table flip kaomoji and soft sulks on pout. Peak fury and glare-style stares stay searchable on the angry hub. The angry parent remains home for the wider mad-face collection.",
    group: "browse",
    inHeader: false,
    tags: ["fight", "punch", "hit"],
    parentPath: "/angry-kaomoji",
    howTo: [
      "Fight faces lean into punches, hits, and sparring poses.",
      "Copy one action face when you want motion, not just a mad look.",
      "Keep full fury on rage and desk flips on table flip so each set stays clear.",
    ],
    related: [
      "/angry-kaomoji",
      "/table-flip-kaomoji",
      "/pout-kaomoji",
      "/kaomoji-generator",
    ],
  },
  {
    path: "/pout-kaomoji",
    label: "Pout",
    heading: "Pout Kaomoji Copy and Paste",
    titleSegment: "Pout Kaomoji (￣ヘ￣)",
    description:
      "Pout kaomoji (￣ヘ￣) copy and paste: hmph, sulk, and mildly annoyed faces. Soft pushback when full rage would be too much.",
    intro:
      "Hmph, sulk, and mildly annoyed faces for soft pushback - tap to copy. Pout kaomoji owns pout, hmph, and annoyed tags. Annoyed is a supporting synonym on this page, not its own URL, so we avoid doorway thin pages.\n\nChoose pout when attitude should stay light. Hard scowls and hotter rage or glare faces stay on the angry parent via tags. Related chips keep the shipped angry family easy to scan like a labeled mood shelf.",
    group: "browse",
    inHeader: false,
    tags: ["pout", "hmph", "annoyed"],
    parentPath: "/angry-kaomoji",
    howTo: [
      "Pout faces cover hmph, sulk, and mild annoyance - soft pushback.",
      "Copy a pout when you want attitude without full rage.",
      "Hard scowls stay on angry; silent stares stay on glare.",
    ],
    related: [
      "/angry-kaomoji",
      "/table-flip-kaomoji",
      "/fight-kaomoji",
      "/kaomoji-generator",
    ],
  },
  {
    path: "/kaomoji-copy-paste",
    label: "Copy and paste",
    heading: "Kaomoji Copy and Paste",
    titleSegment: "Kaomoji Copy Paste (◕‿◕)",
    description:
      "Kaomoji copy and paste (◕‿◕) utility: popular faces first, one-tap clipboard, then moods. Explicit copy task, not the discovery hub.",
    intro:
      "Explicit copy-and-paste utility for grabbing a face fast. Popular faces first, one tap to clipboard. For browsing the full library by mood, start on the home hub instead.",
    group: "browse",
    inHeader: true,
    related: ["/cute-kaomoji", "/happy-kaomoji", "/japanese-emoticons", "/text-faces"],
  },
  {
    path: "/japanese-emoticons",
    label: "Japanese",
    heading: "Japanese Emoticons Copy and Paste",
    titleSegment: "Japanese Emoticons (^_^)",
    description:
      "Japanese emoticons (^_^) copy and paste (kaomoji): classic faces from punctuation and kana. Language-first set, not ASCII shrug lists.",
    intro:
      "Classic Japanese emoticon construction from punctuation, kana, and symbols - ready to copy. This page owns the language and kaomoji concept; ASCII shrugs and Lenny faces live on text faces.",
    group: "browse",
    inHeader: true,
    category: "japanese",
    related: ["/text-faces", "/cute-kaomoji", "/kaomoji-copy-paste", "/multiline-kaomoji"],
  },
  {
    path: "/text-faces",
    label: "Text faces",
    heading: "Text Faces Copy and Paste",
    titleSegment: "Text Faces ¯\_(ツ)_/¯",
    description:
      "Text faces ¯\\_(ツ)_/¯ copy and paste: shrug, Lenny, disapproval, and more. ASCII and unicode catalog, not Japanese kana construction.",
    intro:
      "ASCII and unicode faces such as shrug, Lenny, and disapproval - one-tap copy. Their own page keeps Japanese emoticon construction separate from Western-style text faces.",
    group: "browse",
    inHeader: true,
    category: "text-faces",
    related: ["/japanese-emoticons", "/cute-kaomoji", "/kaomoji-copy-paste", "/multiline-kaomoji"],
  },
  {
    path: "/multiline-kaomoji",
    label: "Multiline",
    heading: "Multiline Kaomoji / ASCII Art Faces",
    titleSegment: "Multiline Kaomoji / ASCII Art",
    description:
      "Multiline kaomoji and ASCII art faces copy and paste: stacked multi-line faces that keep line breaks with pre-wrap. Discover them in one place.",
    intro:
      "Stacked multi-line kaomoji and ASCII art faces that keep every line break when you copy. Cards use whitespace pre-wrap so the preview matches what lands on your clipboard - made for bios, notes, and chats that allow wraps.\n\nThis browse page gathers multi-line and newline faces in one place, apart from one-line cute or Japanese sets. If you only need a single-line emoticon, use those mood pages or the generator to build a custom face.",
    group: "browse",
    inHeader: false,
    tags: ["multi-line"],
    includeNewlineFaces: true,
    howTo: [
      "Multiline faces stack across lines - the card keeps breaks with pre-wrap.",
      "Copy once to keep every line, then paste into a bio, note, or chat that allows wraps.",
      "If you only need a single-line cute or Japanese face, use those mood pages instead.",
    ],
    related: [
      "/japanese-emoticons",
      "/text-faces",
      "/cute-kaomoji",
      "/kaomoji-generator",
    ],
  },
  
  {
    path: "/kaomoji-generator",
    label: "Generator",
    heading: "Kaomoji Generator - Make a Face",
    titleSegment: "Kaomoji Generator (◕‿◕)",
    description:
      "Kaomoji generator to make a custom face: pick arms, eyes, and mouth, preview live, then one-tap copy. No signup - build and paste in your browser.",
    intro:
      "Build a custom kaomoji in your browser: pick left arm, eyes, mouth, right arm, and optional extras, then copy or randomize. No signup, no heavy libraries - a light make-kaomoji tool that works offline once the page is loaded.\n\nUse the live preview to tune the face, hit Copy for the clipboard, or Randomize for a surprise combo. When you want curated moods instead of a builder, jump to angry, cute, text faces, or multiline pages.",
    group: "browse",
    inHeader: true,
    howTo: [
      "Pick left arm, eyes, mouth, and right arm from the curated sets.",
      "Add an optional extra if you want ears, blush, or sweat marks.",
      "Copy the preview, or hit Randomize for a quick surprise face.",
    ],
    related: [
      "/angry-kaomoji",
      "/cute-kaomoji",
      "/text-faces",
      "/multiline-kaomoji",
    ],
  },
  {
    path: "/about",
    label: "About",
    heading: "About",
    titleSegment: "About",
    description:
      "About Paste Kaomoji - a kaomoji and text-face library at pastekaomoji.com.",
    intro:
      "Paste Kaomoji is a focused library for copying kaomoji and text faces. The point is find, copy, paste - without a giant emoji catalog or a wall of ads.",
    group: "trust",
    inHeader: false,
    related: ["/contact", "/privacy"],
  },
  {
    path: "/contact",
    label: "Contact",
    heading: "Contact",
    titleSegment: "Contact",
    description: "Contact Paste Kaomoji by email at hello@pastekaomoji.com.",
    intro:
      "Send corrections, face suggestions, or site questions by email. There is no account system and no contact form in this release.",
    group: "trust",
    inHeader: false,
    related: ["/about", "/privacy"],
  },
  {
    path: "/privacy",
    label: "Privacy",
    heading: "Privacy",
    titleSegment: "Privacy",
    description:
      "Privacy notes for Paste Kaomoji. This release sets no accounts, ads, or analytics cookies.",
    intro:
      "This page explains what pastekaomoji.com handles today. It is a starter policy written in plain language.",
    group: "trust",
    inHeader: false,
    related: ["/terms", "/contact"],
  },
  {
    path: "/terms",
    label: "Terms",
    heading: "Terms",
    titleSegment: "Terms",
    description:
      "Terms of use for Paste Kaomoji. Faces are unicode text; the site is a free copy-paste library.",
    intro:
      "Short terms for using pastekaomoji.com. This is starter text, not a substitute for advice from a lawyer.",
    group: "trust",
    inHeader: false,
    related: ["/privacy", "/about"],
  },
];

export function getPage(path: string): SitePage {
  const page = pages.find((item) => item.path === path);
  if (!page) {
    throw new Error(`Unknown page: ${path}`);
  }
  return page;
}

export function headerNav(): SitePage[] {
  return pages.filter((page) => page.inHeader);
}

export function pagesByGroup(group: PageGroup): SitePage[] {
  return pages.filter((page) => page.group === group);
}

/** Top-level browse pages only (excludes nested subcategory children). */
export function topLevelBrowsePages(): SitePage[] {
  return pagesByGroup("browse").filter((page) => !page.parentPath);
}

export function relatedPages(page: SitePage): SitePage[] {
  return page.related.map((path) => getPage(path));
}

/** Sibling subcategory pages that share the same parentPath (excludes self). */
export function siblingPages(page: SitePage): SitePage[] {
  if (!page.parentPath) return [];
  return pages.filter(
    (item) => item.parentPath === page.parentPath && item.path !== page.path,
  );
}

/** Child subcategory pages under a parent path. */
export function childPages(parentPath: string): SitePage[] {
  return pages.filter((item) => item.parentPath === parentPath);
}

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

/** Header search scope from the current pathname (longest path match). */
export function resolveSearchScope(pathname: string): SearchScope {
  const normalized = normalizePathname(pathname);

  const exact = pages.find((item) => item.path === normalized);
  const page =
    exact ??
    [...pages]
      .filter((item) => item.path !== "/")
      .sort((a, b) => b.path.length - a.path.length)
      .find((item) => normalized.startsWith(`${item.path}/`));

  if (!page || page.group === "trust") {
    return { path: "/" };
  }

  if (page.tags && page.tags.length > 0) {
    return {
      path: page.path,
      tags: page.tags,
      includeNewlines: page.includeNewlineFaces,
    };
  }

  if (page.category) {
    return { path: page.path, category: page.category };
  }

  return { path: page.path };
}

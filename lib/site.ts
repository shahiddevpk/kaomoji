import type { SearchScope } from "@/lib/search/actions";

export const siteConfig = {
  siteName: "Paste Kaomoji",
  url: "https://pastekaomoji.com",
  description:
    "Discover a curated kaomoji and text-face library by mood and theme. Browse category grids, then one-tap copy - exploration first.",
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
  related: string[];
};

export const pages: SitePage[] = [
  {
    path: "/",
    label: "Home",
    heading: "Kaomoji Library",
    titleSegment: "Kaomoji | Text Face Library | Paste Kaomoji",
    description: siteConfig.description,
    intro:
      "Discover and browse a curated library of kaomoji and text faces by mood or theme. Start from category tiles when you are exploring; use the copy-and-paste utility when you only need a fast grab.",
    group: "hub",
    inHeader: true,
    related: [],
  },
  {
    path: "/cute-kaomoji",
    label: "Cute",
    heading: "Cute Kaomoji",
    titleSegment: "Cute Kaomoji - Soft Kawaii Faces to Copy",
    description:
      "Cute kaomoji and soft kawaii text faces: blush, tiny hugs, and gentle charm. Aesthetic mood grid - separate from happy cheers.",
    intro:
      "Soft kawaii smiles, blush, and tiny hugs. Cute owns the soft aesthetic mood; cheers, waves, and big grins live on happy kaomoji so the two stay distinct.",
    group: "browse",
    inHeader: true,
    category: "cute",
    related: ["/happy-kaomoji", "/cat-kaomoji", "/text-faces"],
  },
  {
    path: "/happy-kaomoji",
    label: "Happy",
    heading: "Happy Kaomoji",
    titleSegment: "Happy Kaomoji - Cheers and Grins to Copy",
    description:
      "Happy kaomoji for cheers, waves, and big grins. Upbeat energy with one-tap copy - not soft kawaii blush.",
    intro:
      "Cheers, waves, and easy grins for upbeat chat. Happy owns smiles-and-cheers; soft blush and kawaii affection stay on the cute page.",
    group: "browse",
    inHeader: true,
    category: "happy",
    related: ["/cute-kaomoji", "/cat-kaomoji", "/sad-kaomoji"],
  },
  {
    path: "/cat-kaomoji",
    label: "Cat",
    heading: "Cat Kaomoji",
    titleSegment: "Cat Kaomoji to Copy",
    description:
      "Cat kaomoji and catmoji-style faces ready to tap. Large targets, instant clipboard toast.",
    intro:
      "Neko faces from content cats to excited ones. Cat kaomoji stay on their own page so they are not mixed into the general cute grid.",
    group: "browse",
    inHeader: true,
    category: "cat",
    related: ["/cute-kaomoji", "/happy-kaomoji", "/text-faces"],
  },
  {
    path: "/sad-kaomoji",
    label: "Sad",
    heading: "Sad Kaomoji",
    titleSegment: "Sad Kaomoji - Quiet Frowns to Copy",
    description:
      "Quiet sad kaomoji: downcast eyes and soft frowns for a low mood. Tears and sobbing live on the crying page.",
    intro:
      "Quiet downcast eyes and soft frowns when you want low-mood text without tears. For sobbing and tear streaks, open crying kaomoji so sad and crying stay different intents.",
    group: "browse",
    inHeader: true,
    category: "sad",
    related: ["/crying-kaomoji", "/happy-kaomoji", "/cute-kaomoji"],
  },
  {
    path: "/crying-kaomoji",
    label: "Crying",
    heading: "Crying Kaomoji",
    titleSegment: "Crying Kaomoji - Tears and Sobbing to Copy",
    description:
      "Crying kaomoji with tears, sobs, and weeping faces. Cry, tears, and sob searches land here - not on quiet sad.",
    intro:
      "Tears, sobs, and weeping faces for when a quiet frown is not enough. Cry and sob aliases share this page; quiet downcast faces stay on sad kaomoji.",
    group: "browse",
    inHeader: true,
    category: "crying",
    related: ["/sad-kaomoji", "/happy-kaomoji", "/cute-kaomoji"],
  },
  {
    path: "/kaomoji-copy-paste",
    label: "Copy and paste",
    heading: "Kaomoji Copy and Paste",
    titleSegment: "Kaomoji Copy and Paste",
    description:
      "Kaomoji copy and paste utility: popular faces first, one-tap clipboard, then moods. Explicit copy task - not the discovery hub.",
    intro:
      "Explicit copy-and-paste utility for grabbing a face fast. Popular faces first, one tap to clipboard. For browsing the full library by mood, start on the home hub instead.",
    group: "browse",
    inHeader: true,
    related: ["/cute-kaomoji", "/happy-kaomoji", "/japanese-emoticons", "/text-faces"],
  },
  {
    path: "/japanese-emoticons",
    label: "Japanese",
    heading: "Japanese Emoticons",
    titleSegment: "Japanese Emoticons - Classic Construction",
    description:
      "Japanese emoticons (kaomoji): classic faces built from punctuation and kana. Language and construction focus - not ASCII shrug lists.",
    intro:
      "Classic Japanese emoticon construction from punctuation, kana, and symbols. This page owns the language and kaomoji concept; ASCII shrugs and Lenny faces live on text faces.",
    group: "browse",
    inHeader: true,
    category: "japanese",
    related: ["/text-faces", "/cute-kaomoji", "/kaomoji-copy-paste"],
  },
  {
    path: "/text-faces",
    label: "Text faces",
    heading: "Text Faces",
    titleSegment: "Text Faces - Shrug, Lenny and More",
    description:
      "ASCII and unicode text faces: shrug, Lenny, disapproval, and more. Face catalog - not Japanese kana construction.",
    intro:
      "ASCII and unicode faces such as shrug, Lenny, and disapproval. Their own page keeps Japanese emoticon construction separate from Western-style text faces.",
    group: "browse",
    inHeader: true,
    category: "text-faces",
    related: ["/japanese-emoticons", "/cute-kaomoji", "/kaomoji-copy-paste"],
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

export function relatedPages(page: SitePage): SitePage[] {
  return page.related.map((path) => getPage(path));
}

/** Header search scope from the current pathname. */
export function resolveSearchScope(pathname: string): SearchScope {
  const exact = pages.find((item) => item.path === pathname);
  const page =
    exact ??
    pages.find(
      (item) =>
        item.path !== "/" && pathname.startsWith(`${item.path}/`),
    );

  if (!page || page.group === "trust") {
    return { path: "/" };
  }

  if (page.category) {
    return { path: page.path, category: page.category };
  }

  return { path: page.path };
}
/**
 * Single source of truth for browse IA: hub tiles, header "All categories"
 * panel, and footer all group pages the same way (each path appears once).
 */
export type NavGroup = { heading: string; paths: string[] };

/** Mood/topic groups. Each group is a multiple of 4 so hub tile rows fill. */
export const CATEGORY_GROUPS: NavGroup[] = [
  {
    heading: "Emotions",
    paths: [
      "/cute-kaomoji",
      "/happy-kaomoji",
      "/sad-kaomoji",
      "/crying-kaomoji",
      "/angry-kaomoji",
      "/shy-kaomoji",
      "/excited-kaomoji",
      "/nervous-kaomoji",
      "/shocked-kaomoji",
      "/scared-kaomoji",
      "/confused-kaomoji",
      "/smug-kaomoji",
      "/sleepy-kaomoji",
      "/thinking-kaomoji",
      "/pout-kaomoji",
      "/sick-kaomoji",
    ],
  },
  {
    heading: "Famous faces",
    paths: [
      "/lenny-face",
      "/shrug-kaomoji",
      "/table-flip-kaomoji",
      "/uwu-kaomoji",
      "/cool-kaomoji",
      "/devil-kaomoji",
      "/text-faces",
      "/japanese-emoticons",
    ],
  },
  {
    heading: "Love & manners",
    paths: [
      "/heart-kaomoji",
      "/love-kaomoji",
      "/kiss-kaomoji",
      "/hug-kaomoji",
      "/wink-kaomoji",
      "/thank-you-kaomoji",
      "/sorry-kaomoji",
      "/bowing-kaomoji",
    ],
  },
  {
    heading: "Actions",
    paths: [
      "/smile-kaomoji",
      "/giggling-kaomoji",
      "/waving-kaomoji",
      "/dance-kaomoji",
      "/running-kaomoji",
      "/fight-kaomoji",
      "/thumbs-up-kaomoji",
      "/sparkle-kaomoji",
    ],
  },
  {
    heading: "Animals, food & nature",
    paths: [
      "/cat-kaomoji",
      "/dog-kaomoji",
      "/bear-kaomoji",
      "/bunny-kaomoji",
      "/fish-kaomoji",
      "/food-kaomoji",
      "/flower-kaomoji",
      "/star-kaomoji",
    ],
  },
  {
    heading: "Holidays",
    paths: [
      "/halloween-kaomoji",
      "/thanksgiving-kaomoji",
      "/christmas-kaomoji",
      "/new-year-kaomoji",
      "/winter-kaomoji",
      "/valentine-kaomoji",
      "/birthday-kaomoji",
    ],
  },
];

/** Copy/paste hubs and utilities (not mood pages; no hub tiles). */
export const TOOLS_GROUP: NavGroup = {
  heading: "Tools & symbols",
  paths: [
    "/kaomoji-copy-paste",
    "/kaomoji-generator",
    "/kaomoji-app",
    "/border-kaomoji",
    "/roblox-kaomoji",
    "/art-kaomoji",
    "/emoticons",
    "/cute-symbols",
    "/emoji-combos",
  ],
};

export const TOOL_PATHS = TOOLS_GROUP.paths;

/**
 * Header quick-access strip, ordered by search demand. The in-season holiday
 * page is prepended at build time (see currentSeason).
 */
export const POPULAR_PATHS = [
  "/cute-kaomoji",
  "/happy-kaomoji",
  "/sad-kaomoji",
  "/crying-kaomoji",
  "/angry-kaomoji",
  "/love-kaomoji",
  "/heart-kaomoji",
  "/cat-kaomoji",
  "/bear-kaomoji",
  "/shy-kaomoji",
  "/shrug-kaomoji",
  "/lenny-face",
  "/uwu-kaomoji",
  "/kaomoji-copy-paste",
  "/japanese-emoticons",
  "/text-faces",
];

/**
 * Light orange idle + strong primary when selected
 * (uses --active / --hover / --primary from the site color theory).
 */
export function moodChipClass(active: boolean): string {
  return active
    ? "mood-chip mood-chip--active"
    : "mood-chip mood-chip--idle";
}

/** Per-mood pastel palette: warm/cool/love/nature/mystery */
const MOOD_TILE_VARIANTS: Record<string, string> = {
  // Happiness / energy / action
  "/happy-kaomoji": "mood-tile--warm",
  "/excited-kaomoji": "mood-tile--warm",
  "/giggling-kaomoji": "mood-tile--warm",
  "/smile-kaomoji": "mood-tile--warm",
  "/waving-kaomoji": "mood-tile--warm",
  "/dance-kaomoji": "mood-tile--warm",
  "/running-kaomoji": "mood-tile--warm",
  "/thumbs-up-kaomoji": "mood-tile--warm",
  // Cute / soft
  "/cute-kaomoji": "mood-tile--rose",
  "/shy-kaomoji": "mood-tile--rose",
  "/wink-kaomoji": "mood-tile--rose",
  "/bunny-kaomoji": "mood-tile--rose",
  // Love / affection
  "/heart-kaomoji": "mood-tile--love",
  "/love-kaomoji": "mood-tile--love",
  "/kiss-kaomoji": "mood-tile--love",
  "/hug-kaomoji": "mood-tile--love",
  // Sad / calm
  "/sad-kaomoji": "mood-tile--blue",
  "/crying-kaomoji": "mood-tile--blue",
  "/nervous-kaomoji": "mood-tile--blue",
  "/sleepy-kaomoji": "mood-tile--blue",
  // Anger / intensity
  "/angry-kaomoji": "mood-tile--red",
  "/table-flip-kaomoji": "mood-tile--red",
  "/fight-kaomoji": "mood-tile--red",
  "/pout-kaomoji": "mood-tile--red",
  // Nature / animals
  "/cat-kaomoji": "mood-tile--green",
  "/dog-kaomoji": "mood-tile--green",
  "/bear-kaomoji": "mood-tile--green",
  "/flower-kaomoji": "mood-tile--green",
  "/christmas-kaomoji": "mood-tile--green",
  // Star / celebration / surprise
  "/star-kaomoji": "mood-tile--amber",
  "/sparkle-kaomoji": "mood-tile--amber",
  "/birthday-kaomoji": "mood-tile--amber",
  "/shocked-kaomoji": "mood-tile--amber",
  // Mystery / thinking / spooky
  "/thinking-kaomoji": "mood-tile--purple",
  "/confused-kaomoji": "mood-tile--purple",
  "/smug-kaomoji": "mood-tile--purple",
  "/halloween-kaomoji": "mood-tile--purple",
  // Aquatic / tools / respectful
  "/fish-kaomoji": "mood-tile--teal",
  "/kaomoji-generator": "mood-tile--teal",
  "/bowing-kaomoji": "mood-tile--teal",
};

export function moodTileClass(path?: string): string {
  if (path) {
    const variant = MOOD_TILE_VARIANTS[path];
    if (variant) return `mood-tile ${variant}`;
  }
  return "mood-tile";
}

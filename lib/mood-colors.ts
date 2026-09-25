/**
 * Light orange idle + strong primary when selected
 * (uses --active / --hover / --primary from the site color theory).
 */
export function moodChipClass(_path: string, active: boolean): string {
  return active
    ? "mood-chip mood-chip--active"
    : "mood-chip mood-chip--idle";
}

export function moodTileClass(_path: string): string {
  return "mood-tile";
}

"use client";

/**
 * Favorites: starred faces kept in this browser (localStorage).
 * Star buttons are plain SSR markup with data-fav-* attributes; one
 * document-level click listener toggles them, like the copy delegation.
 */
export type FavoriteFace = { id: string; face: string; name: string };

const STORAGE_KEY = "pastekaomoji-favorites";
const MAX_FAVORITES = 48;
const EMPTY: FavoriteFace[] = [];

let cache: FavoriteFace[] = EMPTY;
let loaded = false;
let bound = false;
const listeners = new Set<() => void>();

function read(): FavoriteFace[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as FavoriteFace[];
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed
      .filter((f) => f && typeof f.id === "string" && typeof f.face === "string" && typeof f.name === "string")
      .slice(0, MAX_FAVORITES);
  } catch {
    return EMPTY;
  }
}

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  cache = read();
}

export function getFavorites(): FavoriteFace[] {
  ensureLoaded();
  return cache;
}

export function getServerFavorites(): FavoriteFace[] {
  return EMPTY;
}

export function subscribeFavorites(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Faces can appear under several ids (type groups, related grids); match on the face text. */
function isFavorite(face: string): boolean {
  return getFavorites().some((f) => f.face === face);
}

/** Reflect saved state on every star currently in the page. */
export function syncStarButtons() {
  if (typeof document === "undefined") return;
  document.querySelectorAll<HTMLElement>("[data-fav-face]").forEach((node) => {
    const face = node.getAttribute("data-fav-face") ?? "";
    const name = node.getAttribute("data-fav-name") ?? face;
    const on = isFavorite(face);
    node.setAttribute("aria-pressed", on ? "true" : "false");
    node.setAttribute("aria-label", on ? `Remove ${name} from favorites` : `Add ${name} to favorites`);
    node.textContent = on ? "★" : "☆";
  });
}

export function toggleFavorite(item: FavoriteFace) {
  ensureLoaded();
  cache = isFavorite(item.face)
    ? cache.filter((f) => f.face !== item.face)
    : [item, ...cache].slice(0, MAX_FAVORITES);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
  } catch {
    /* storage blocked: favorites last for this visit only */
  }
  for (const listener of listeners) listener();
  syncStarButtons();
}

function onClick(event: MouseEvent) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const control = target.closest("[data-fav-face]");
  if (!control) return;
  event.preventDefault();
  const face = control.getAttribute("data-fav-face");
  const id = control.getAttribute("data-fav-id");
  const name = control.getAttribute("data-fav-name");
  if (!face || !id || !name) return;
  toggleFavorite({ id, face, name });
}

export function bindFavorites() {
  if (typeof document === "undefined" || bound) return;
  bound = true;
  document.addEventListener("click", onClick);
  syncStarButtons();
}

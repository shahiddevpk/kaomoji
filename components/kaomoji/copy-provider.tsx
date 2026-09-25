"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";

export type CopiedFace = {
  id: string;
  face: string;
  name: string;
};

export type CopyFlash = {
  id: string;
  state: "copied" | "error";
  label: string;
};

type CopyState = {
  recent: CopiedFace[];
  flash: CopyFlash | null;
  copy: (item: CopiedFace) => void;
};

const STORAGE_KEY = "pastekaomoji-recent";
const MAX_RECENT = 8;
const EMPTY: CopiedFace[] = [];
const FLASH_MS = 2000;

let recentCache: CopiedFace[] = EMPTY;
let flashCache: CopyFlash | null = null;
let loaded = false;
let flashTimer: number | null = null;
let clickBound = false;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readStored(): CopiedFace[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as CopiedFace[];
    if (!Array.isArray(parsed)) return EMPTY;
    return parsed
      .filter(
        (item) =>
          item &&
          typeof item.face === "string" &&
          typeof item.id === "string" &&
          typeof item.name === "string",
      )
      .slice(0, MAX_RECENT);
  } catch {
    return EMPTY;
  }
}

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  recentCache = readStored();
}

function getRecent() {
  ensureLoaded();
  return recentCache;
}

function getFlash() {
  return flashCache;
}

function startFlash(id: string, state: "copied" | "error", label: string) {
  flashCache = { id, state, label };
  if (flashTimer) window.clearTimeout(flashTimer);
  flashTimer = window.setTimeout(() => {
    flashCache = null;
    flashTimer = null;
    emit();
  }, FLASH_MS);
}

function mirrorFlashToDom(flash: CopyFlash | null) {
  if (typeof document === "undefined") return;

  document.querySelectorAll("[data-copy-id][data-copied]").forEach((node) => {
    if (!(node instanceof HTMLElement)) return;
    const id = node.getAttribute("data-copy-id");
    if (flash && id === flash.id) return;
    if (node.children.length === 0) {
      const original =
        node.getAttribute("data-copy-label-original") ?? "Copy";
      node.textContent = original;
    }
    node.removeAttribute("data-copied");
    const aria = node.getAttribute("data-copy-aria-original");
    if (aria) node.setAttribute("aria-label", aria);
  });

  if (!flash) return;

  document
    .querySelectorAll(`[data-copy-id="${CSS.escape(flash.id)}"]`)
    .forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      if (!node.hasAttribute("data-copy-label-original")) {
        node.setAttribute(
          "data-copy-label-original",
          (node.textContent ?? "Copy").trim() || "Copy",
        );
      }
      if (!node.hasAttribute("data-copy-aria-original")) {
        const aria = node.getAttribute("aria-label");
        if (aria) node.setAttribute("data-copy-aria-original", aria);
      }
      // Plain Copy / generator buttons: swap label. Rich chips keep children.
      if (node.children.length === 0) {
        node.textContent = flash.label;
      }
      node.setAttribute("data-copied", flash.state);
      node.setAttribute("aria-live", "polite");
      node.setAttribute(
        "aria-label",
        flash.state === "copied" ? "Copied" : "Copy failed",
      );
    });
}

async function writeClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(area);
  if (!ok) throw new Error("copy failed");
}

function copyFace(item: CopiedFace, _control?: Element | null) {
  void writeClipboard(item.face).then(
    () => {
      ensureLoaded();
      recentCache = [
        item,
        ...recentCache.filter((entry) => entry.id !== item.id),
      ].slice(0, MAX_RECENT);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recentCache));
      } catch {
        /* ignore */
      }
      // Store flash first so React grids paint Copied; then notify + DOM mirror.
      startFlash(item.id, "copied", "Copied");
      emit();
      mirrorFlashToDom(flashCache);
      // Re-apply after React commit (survives RecentlyCopied remount/reconcile).
      queueMicrotask(() => mirrorFlashToDom(flashCache));
      requestAnimationFrame(() => mirrorFlashToDom(flashCache));
      window.setTimeout(() => mirrorFlashToDom(flashCache), 0);
    },
    () => {
      startFlash(item.id, "error", "Failed");
      emit();
      mirrorFlashToDom(flashCache);
      queueMicrotask(() => mirrorFlashToDom(flashCache));
      requestAnimationFrame(() => mirrorFlashToDom(flashCache));
      window.setTimeout(() => mirrorFlashToDom(flashCache), 0);
    },
  );
}

function faceFromElement(el: Element): CopiedFace | null {
  const id = el.getAttribute("data-copy-id");
  const name = el.getAttribute("data-copy-name");
  if (!id || !name) return null;
  let face = el.getAttribute("data-copy-face");
  if (face === null || face === "") {
    const card = el.closest("li, article, section, .kaomoji-card");
    const faceNode =
      (card && card.querySelector(".kaomoji-face")) ||
      el.querySelector(".kaomoji-face");
    face = faceNode?.textContent ?? null;
  }
  if (face === null || face === "") return null;
  return { id, face, name };
}

function onDocumentClick(event: MouseEvent) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const control = target.closest("[data-copy-id]");
  if (!control) return;
  const item = faceFromElement(control);
  if (!item) return;
  event.preventDefault();
  copyFace(item, control);
}

/** Bind once on the client even if a useEffect is delayed/missed. */
function bindCopyListener() {
  if (typeof document === "undefined" || clickBound) return;
  clickBound = true;
  document.addEventListener("click", onDocumentClick);
}

// Bind when this client chunk evaluates (before/without waiting on hydration).
bindCopyListener();

export function CopyProvider({ children }: { children: ReactNode }) {
  const flash = useSyncExternalStore(subscribe, getFlash, () => null);

  // Bind as early as possible on the client.
  bindCopyListener();

  useEffect(() => {
    bindCopyListener();
  }, []);

  useEffect(() => {
    mirrorFlashToDom(flash);
  }, [flash]);

  return children;
}

export function useCopy(): CopyState {
  const recent = useSyncExternalStore(subscribe, getRecent, () => EMPTY);
  const flash = useSyncExternalStore(subscribe, getFlash, () => null);
  return { recent, flash, copy: copyFace };
}
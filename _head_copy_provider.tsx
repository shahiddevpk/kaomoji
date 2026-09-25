"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";

export type CopiedFace = {
  id: string;
  face: string;
  name: string;
};

type CopyState = {
  recent: CopiedFace[];
  copy: (item: CopiedFace) => void;
};

const STORAGE_KEY = "pastekaomoji-recent";
const MAX_RECENT = 8;
const EMPTY: CopiedFace[] = [];
const FLASH_MS = 2000;

let recentCache: CopiedFace[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();
const flashTimers = new WeakMap<Element, number>();

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

/**
 * Brief per-control Copied / error feedback (replaces green toast).
 * Plain-text Copy buttons swap label; rich children (e.g. recent chips) keep DOM and use data-copied style only.
 */
function flashControl(
  control: Element,
  label: string,
  state: "copied" | "error",
) {
  if (!(control instanceof HTMLElement)) return;

  const prior = flashTimers.get(control);
  if (prior) window.clearTimeout(prior);

  const rich = control.children.length > 0;

  if (!rich && !control.hasAttribute("data-copy-label-original")) {
    control.setAttribute(
      "data-copy-label-original",
      (control.textContent ?? "Copy").trim() || "Copy",
    );
  }
  if (!control.hasAttribute("data-copy-aria-original")) {
    const aria = control.getAttribute("aria-label");
    if (aria) control.setAttribute("data-copy-aria-original", aria);
  }

  if (!rich) {
    control.textContent = label;
  }
  control.setAttribute("data-copied", state);
  control.setAttribute("aria-live", "polite");
  if (state === "copied") {
    control.setAttribute("aria-label", "Copied");
  } else {
    control.setAttribute("aria-label", "Copy failed");
  }

  const timer = window.setTimeout(() => {
    flashTimers.delete(control);
    if (!rich) {
      const original =
        control.getAttribute("data-copy-label-original") ?? "Copy";
      control.textContent = original;
    }
    control.removeAttribute("data-copied");
    const ariaOriginal = control.getAttribute("data-copy-aria-original");
    if (ariaOriginal) {
      control.setAttribute("aria-label", ariaOriginal);
    } else {
      control.removeAttribute("aria-label");
    }
  }, FLASH_MS);
  flashTimers.set(control, timer);
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

function copyFace(item: CopiedFace, control?: Element | null) {
  void writeClipboard(item.face).then(
    () => {
      ensureLoaded();
      recentCache = [
        item,
        ...recentCache.filter((entry) => entry.id !== item.id),
      ].slice(0, MAX_RECENT);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recentCache));
      emit();
      if (control) flashControl(control, "Copied", "copied");
    },
    () => {
      if (control) {
        flashControl(control, "Failed", "error");
      }
    },
  );
}

/** Resolve face payload: prefer data-copy-face, else card .kaomoji-face text. */
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

/**
 * Thin client root: one document-level click listener copies any
 * [data-copy-id] control. Face grids stay server HTML (no per-button islands).
 * Feedback is per clicked button (label + data-copied), not a page toast.
 */
export function CopyProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const control = target.closest("[data-copy-id]");
      if (!control) return;
      const item = faceFromElement(control);
      if (!item) return;
      event.preventDefault();
      copyFace(item, control);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return children;
}

export function useCopy(): CopyState {
  const recent = useSyncExternalStore(subscribe, getRecent, () => EMPTY);
  return { recent, copy: copyFace };
}

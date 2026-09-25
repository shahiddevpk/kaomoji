"use client";

import { useSyncExternalStore, type ReactNode } from "react";

export type CopiedFace = {
  id: string;
  face: string;
  name: string;
};

type CopyState = {
  recent: CopiedFace[];
  notice: string;
  copy: (item: CopiedFace) => void;
};

const STORAGE_KEY = "pastekaomoji-recent";
const MAX_RECENT = 8;
const EMPTY: CopiedFace[] = [];

let recentCache: CopiedFace[] = EMPTY;
let noticeCache = "";
let loaded = false;
let hideTimer: number | null = null;
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

function getNotice() {
  return noticeCache;
}

function showNotice(message: string) {
  noticeCache = message;
  emit();
  if (hideTimer) window.clearTimeout(hideTimer);
  hideTimer = window.setTimeout(() => {
    noticeCache = "";
    hideTimer = null;
    emit();
  }, 1800);
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

function copyFace(item: CopiedFace) {
  void writeClipboard(item.face).then(
    () => {
      ensureLoaded();
      recentCache = [
        item,
        ...recentCache.filter((entry) => entry.id !== item.id),
      ].slice(0, MAX_RECENT);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recentCache));
      showNotice("Copied!");
    },
    () => {
      showNotice("Could not copy. Select the face instead.");
    },
  );
}

export function CopyProvider({ children }: { children: ReactNode }) {
  return children;
}

export function useCopy(): CopyState {
  const recent = useSyncExternalStore(subscribe, getRecent, () => EMPTY);
  const notice = useSyncExternalStore(subscribe, getNotice, () => "");
  return { recent, notice, copy: copyFace };
}

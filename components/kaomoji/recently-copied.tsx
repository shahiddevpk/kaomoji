"use client";

import { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { useCopy } from "@/components/kaomoji/copy-provider";
import {
  bindFavorites,
  getFavorites,
  getServerFavorites,
  subscribeFavorites,
  syncStarButtons,
  toggleFavorite,
} from "@/components/kaomoji/favorites-store";
import { faceLangAttr } from "@/lib/utils";

function FaceChip({ id, face, name, label }: { id: string; face: string; name: string; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      data-copy-id={id}
      data-copy-face={face}
      data-copy-name={name}
      className="kaomoji-recent-chip"
    >
      <span className="kaomoji-face kaomoji-recent-face" lang={faceLangAttr(face)}>
        {face}
      </span>
    </button>
  );
}

/** Personal strips: Favorites (starred) and Recently copied. Client-only. */
export function RecentlyCopied() {
  const { recent } = useCopy();
  const favorites = useSyncExternalStore(subscribeFavorites, getFavorites, getServerFavorites);
  const pathname = usePathname();

  useEffect(() => {
    bindFavorites();
    syncStarButtons();
  }, [pathname]);

  if (recent.length === 0 && favorites.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col gap-5">
      {favorites.length > 0 ? (
        <section aria-label="Your favorites">
          <h2 className="type-h2">Your favorites ★</h2>
          <p className="mt-1 type-meta text-muted">
            Saved in this browser. Tap a face to copy it, or × to remove it.
          </p>
          <ul className="kaomoji-recent-list">
            {favorites.map((item) => (
              <li key={item.face} className="fav-item">
                <FaceChip id={`fav-${item.id}`} face={item.face} name={item.name} label={`Copy ${item.name}`} />
                <button
                  type="button"
                  className="fav-remove"
                  aria-label={`Remove ${item.name} from favorites`}
                  onClick={() => toggleFavorite(item)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {recent.length > 0 ? (
        <section aria-label="Recently copied">
          <h2 className="type-h2">Recently copied</h2>
          <p className="mt-1 type-meta text-muted">Tap a face to copy it again</p>
          <ul className="kaomoji-recent-list">
            {recent.map((item) => (
              <li key={item.id}>
                <FaceChip id={item.id} face={item.face} name={item.name} label={`Copy ${item.name} again`} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

"use client";

import { useState } from "react";
import { copyAriaLabel } from "@/lib/utils";

type Face = { id: string; face: string; name: string };

/**
 * "Random face" picker (like competitors' gacha). The picked face renders as a
 * normal copy chip, so the document-level copy delegation handles the click.
 */
export function RandomFace({ faces }: { faces: Face[] }) {
  const [pick, setPick] = useState<Face | null>(null);

  function roll() {
    if (faces.length === 0) return;
    let next = faces[Math.floor(Math.random() * faces.length)]!;
    if (pick && faces.length > 1) {
      while (next.id === pick.id) {
        next = faces[Math.floor(Math.random() * faces.length)]!;
      }
    }
    setPick(next);
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <button type="button" className="random-face-btn" onClick={roll}>
        🎲 {pick ? "Another random face" : "Random face"}
      </button>
      {pick ? (
        <button
          type="button"
          className="kaomoji-recent-chip"
          aria-label={copyAriaLabel(pick.face, pick.name)}
          data-copy-id={`random-${pick.id}`}
          data-copy-name={pick.name}
          data-copy-face={pick.face}
        >
          <span className="kaomoji-face kaomoji-recent-face">{pick.face}</span>
        </button>
      ) : null}
      <span className="sr-only" aria-live="polite">
        {pick ? `Random face: ${pick.name}. Press it to copy.` : ""}
      </span>
    </div>
  );
}

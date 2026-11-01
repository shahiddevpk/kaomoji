"use client";

import { Button } from "@/components/ui/button";
import { useCopy } from "@/components/kaomoji/copy-provider";
import { copyAriaLabel } from "@/lib/utils";

export function CopyButton({
  id,
  face,
  name,
  className,
}: {
  id: string;
  face: string;
  name: string;
  className?: string;
}) {
  const { copy, flash } = useCopy();
  const active = flash?.id === id ? flash : null;
  const label = active ? (active.state === "copied" ? "Copied" : "Failed") : "Copy";
  const aria =
    active?.state === "copied"
      ? "Copied"
      : active?.state === "error"
        ? "Copy failed"
        : copyAriaLabel(face, name);

  return (
    <Button
      type="button"
      aria-label={aria}
      aria-live="polite"
      className={className}
      data-copy-id={id}
      data-copy-name={name}
      data-copy-face={face}
      data-copied={active ? active.state : undefined}
      onClick={(event) => {
        // Hydrated island button: handle copy in Preact so label/state stick.
        // preventDefault skips the document delegation listener (avoids double copy).
        event.preventDefault();
        copy({ id, face, name });
      }}
    >
      {label}
    </Button>
  );
}
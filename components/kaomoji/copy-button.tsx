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
  const { flash, copy } = useCopy();
  const flashing = flash?.id === id ? flash : null;

  return (
    <Button
      type="button"
      aria-label={
        flashing
          ? flashing.state === "copied"
            ? "Copied"
            : "Copy failed"
          : copyAriaLabel(face, name)
      }
      aria-live={flashing ? "polite" : undefined}
      className={className}
      data-copy-id={id}
      data-copy-name={name}
      data-copy-face={face}
      data-copied={flashing ? flashing.state : undefined}
      onClick={(event) => {
        event.preventDefault();
        copy({ id, face, name });
      }}
    >
      {flashing ? flashing.label : "Copy"}
    </Button>
  );
}
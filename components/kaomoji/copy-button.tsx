"use client";

import { Button } from "@/components/ui/button";
import { useCopy } from "@/components/kaomoji/copy-provider";

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
  const { copy } = useCopy();

  return (
    <Button
      type="button"
      aria-label={`Copy ${name}`}
      className={className}
      onClick={() => copy({ id, face, name })}
    >
      Copy
    </Button>
  );
}
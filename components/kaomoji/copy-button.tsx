import { Button } from "@/components/ui/button";

/**
 * Server-friendly copy control. CopyProvider reads the face from the card DOM
 * (avoids duplicating face strings in data attributes + one island per card).
 */
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
  return (
    <Button
      type="button"
      aria-label={`Copy ${name}`}
      className={className}
      data-copy-id={id}
      data-copy-name={name}
    >
      Copy
    </Button>
  );
}

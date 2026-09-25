import { Button } from "@/components/ui/button";
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
  return (
    <Button
      type="button"
      aria-label={copyAriaLabel(face, name)}
      className={className}
      data-copy-id={id}
      data-copy-name={name}
      data-copy-face={face}
    >
      Copy
    </Button>
  );
}
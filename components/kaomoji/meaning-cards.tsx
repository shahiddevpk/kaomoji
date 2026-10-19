import { copyAriaLabel } from "@/lib/utils";

export type MeaningCard = {
  id: string;
  face: string;
  name: string;
  meaning: string;
  parts: string;
};

/** Face + meaning + "how it's built" cards with one-tap copy (server-rendered). */
export function MeaningCards({ items }: { items: MeaningCard[] }) {
  return (
    <ul className="meaning-grid mt-4">
      {items.map((item) => (
        <li key={item.id}>
          <article className="meaning-card">
            <p id={`face-${item.id}`} className="kaomoji-face">
              {item.face}
            </p>
            <h3 className="type-h3">{item.name}</h3>
            <p className="type-meta leading-6">
              <strong className="text-foreground">Meaning:</strong> {item.meaning}
            </p>
            <p className="type-meta leading-6">
              <strong className="text-foreground">How it&apos;s built:</strong>{" "}
              {item.parts}
            </p>
            <button
              type="button"
              className="kaomoji-copy"
              aria-label={copyAriaLabel(item.face, item.name)}
              aria-describedby={`face-${item.id}`}
              data-copy-id={item.id}
              data-copy-name={item.name}
              data-copy-face={item.face}
            >
              Copy
            </button>
          </article>
        </li>
      ))}
    </ul>
  );
}

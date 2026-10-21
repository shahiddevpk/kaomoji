import Link from "next/link";
import type { ReactNode } from "react";
import type { GuideBlock, GuideSection } from "@/lib/guides";
import { copyAriaLabel } from "@/lib/utils";

/** Renders [label](/path/) links inside guide prose; everything else is text. */
function Prose({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Link key={match.index} href={match[2]} className="link-in-prose">
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

function Block({ block, sectionId, index }: { block: GuideBlock; sectionId: string; index: number }) {
  switch (block.type) {
    case "p":
      return (
        <p className="mt-4 type-body leading-7">
          <Prose text={block.text} />
        </p>
      );
    case "steps":
      return (
        <ol className="mt-4 list-decimal space-y-2 pl-6 type-body leading-7">
          {block.items.map((item) => (
            <li key={item}>
              <Prose text={item} />
            </li>
          ))}
        </ol>
      );
    case "list":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-6 type-body leading-7">
          {block.items.map((item) => (
            <li key={item}>
              <Prose text={item} />
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <p className="guide-tip mt-4 type-body leading-7">
          <strong className="text-foreground">Tip: </strong>
          <Prose text={block.text} />
        </p>
      );
    case "table":
      return (
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
          <table className="guide-table w-full text-left text-sm">
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i} scope="col">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row">
                        {cell}
                      </th>
                    ) : (
                      <td key={i}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "messages":
      return (
        <ul className="message-list mt-4">
          {block.items.map((item, i) => {
            const id = `msg-${sectionId}-${index}-${i}`;
            return (
              <li key={id} className="message-card">
                <p className="type-label text-foreground">{item.label}</p>
                <p id={`face-${id}`} className="message-text">
                  {item.text}
                </p>
                <button
                  type="button"
                  className="kaomoji-copy"
                  aria-label={`Copy message: ${item.label}`}
                  aria-describedby={`face-${id}`}
                  data-copy-id={id}
                  data-copy-name={item.label}
                  data-copy-face={item.text}
                >
                  Copy
                </button>
              </li>
            );
          })}
        </ul>
      );
    case "faces":
      return (
        <ul className="meaning-grid mt-4">
          {block.items.map((item, i) => {
            const id = `guide-${sectionId}-${index}-${i}`;
            return (
              <li key={id}>
                <article className="meaning-card">
                  <p id={`face-${id}`} className="kaomoji-face">
                    {item.face}
                  </p>
                  <h3 className="type-h3">{item.name}</h3>
                  <p className="type-meta leading-6">{item.note}</p>
                  <button
                    type="button"
                    className="kaomoji-copy"
                    aria-label={copyAriaLabel(item.face, item.name)}
                    aria-describedby={`face-${id}`}
                    data-copy-id={id}
                    data-copy-name={item.name}
                    data-copy-face={item.face}
                  >
                    Copy
                  </button>
                </article>
              </li>
            );
          })}
        </ul>
      );
  }
}

export function GuideBody({ sections }: { sections: GuideSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-10" aria-labelledby={`${section.id}-heading`}>
          <h2 id={`${section.id}-heading`} className="type-h2">
            {section.heading}
          </h2>
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} sectionId={section.id} index={i} />
          ))}
        </section>
      ))}
    </>
  );
}

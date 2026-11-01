const fs = require("fs");
const path = require("path");
const w = (rel, s) => {
  fs.mkdirSync(path.dirname(rel), { recursive: true });
  fs.writeFileSync(rel, s.replace(/\r\n/g, "\n"), "utf8");
  console.log("W", rel);
};

// Align route files to exact symbols from cute page
const cute = fs.readFileSync("app/cute-kaomoji/page.tsx", "utf8");
console.log("CUTE TEMPLATE:\n", cute);
const getPageFn = (cute.match(/import \{ (\w+) \} from "@\/lib\/site"/) || [])[1];
const metaFn = (cute.match(/import \{ (\w+) \} from "@\/lib\/seo"/) || [])[1];
const viewFn = (cute.match(/import \{ (\w+) \} from "@\/components\/kaomoji\/category-view"/) || [])[1];
console.log({ getPageFn, metaFn, viewFn });

// Rewrite all new pages with exact symbols
for (const slug of [
  "angry-kaomoji",
  "table-flip-kaomoji",
  "fight-kaomoji",
  "rage-kaomoji",
  "pout-kaomoji",
  "glare-kaomoji",
  "multiline-kaomoji",
]) {
  w(
    `app/${slug}/page.tsx`,
    `import { ${viewFn} } from "@/components/kaomoji/category-view";
import { ${metaFn} } from "@/lib/seo";
import { ${getPageFn} } from "@/lib/site";

const page = ${getPageFn}("/${slug}");

export const metadata = ${metaFn}(page);

export default function Page() {
  return <${viewFn} page={page} />;
}
`
  );
}

// Generator component
w(
  "components/kaomoji/kaomoji-generator.tsx",
  `"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/kaomoji/copy-button";

const LEFT_ARMS = ["", "╰", "٩", "ᕙ", "ᕦ", "ヽ", "ᘳ", "＼", "づ", "╭"];
const EYES = ["◕", "•", "≧", "¬", "ಠ", "๑", "≧", "＾", "◉", "✖", "T", "μ", "★"];
const MOUTHS = ["‿", "ω", "□", "Д", "益", "▿", "ᴗ", "ㅁ", "︵", "︿", "∀", "з"];
const RIGHT_ARMS = ["", "╯", "۶", "ᕗ", "ᕤ", "ﾉ", "ᘰ", "／", "づ", "╮"];
const EXTRAS = ["", "✧", "＊", "汗", "｀", "´", "✿", "彡", "σ"];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function ChipRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="mt-4">
      <legend className="type-label text-foreground">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt, i) => {
          const shown = opt || "none";
          const active = value === opt;
          return (
            <button
              key={\`\${label}-\${i}-\${opt}\`}
              type="button"
              onClick={() => onChange(opt)}
              className={
                active
                  ? "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-primary bg-primary px-3 type-button font-semibold text-accent-foreground"
                  : "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card px-3 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              }
              aria-pressed={active}
            >
              <span className="kaomoji-face text-base">{shown}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function KaomojiGenerator() {
  const [left, setLeft] = useState("╰");
  const [eyeL, setEyeL] = useState("◕");
  const [mouth, setMouth] = useState("‿");
  const [eyeR, setEyeR] = useState("◕");
  const [right, setRight] = useState("╯");
  const [extra, setExtra] = useState("");

  const face = useMemo(() => {
    const core = \`(\${eyeL}\${mouth}\${eyeR})\`;
    return \`\${left}\${core}\${right}\${extra}\`;
  }, [left, eyeL, mouth, eyeR, right, extra]);

  function randomize() {
    setLeft(pick(LEFT_ARMS));
    setEyeL(pick(EYES));
    setMouth(pick(MOUTHS));
    setEyeR(pick(EYES));
    setRight(pick(RIGHT_ARMS));
    setExtra(Math.random() > 0.6 ? pick(EXTRAS) : "");
  }

  function reset() {
    setLeft("╰");
    setEyeL("◕");
    setMouth("‿");
    setEyeR("◕");
    setRight("╯");
    setExtra("");
  }

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-sm)] sm:p-6">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-background px-4 py-8">
        <p className="kaomoji-face text-center text-2xl sm:text-3xl" lang="ja">
          {face}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <CopyButton id="generator-preview" face={face} name="Custom kaomoji" />
          <button
            type="button"
            onClick={randomize}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-4 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            Randomize
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-4 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            Reset
          </button>
        </div>
      </div>

      <ChipRow label="Left arm" options={LEFT_ARMS} value={left} onChange={setLeft} />
      <ChipRow label="Left eye" options={EYES} value={eyeL} onChange={setEyeL} />
      <ChipRow label="Mouth" options={MOUTHS} value={mouth} onChange={setMouth} />
      <ChipRow label="Right eye" options={EYES} value={eyeR} onChange={setEyeR} />
      <ChipRow label="Right arm" options={RIGHT_ARMS} value={right} onChange={setRight} />
      <ChipRow label="Extra" options={EXTRAS} value={extra} onChange={setExtra} />
    </div>
  );
}
`
);

w(
  "app/kaomoji-generator/page.tsx",
  `import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";
import { KaomojiGenerator } from "@/components/kaomoji/kaomoji-generator";
import { JsonLd } from "@/components/layout/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { getPage, relatedPages } from "@/lib/site";
import Link from "next/link";

const page = getPage("/kaomoji-generator");

export const metadata = pageMetadata(page);

export default function KaomojiGeneratorPage() {
  const related = relatedPages(page);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-8">
      <JsonLd data={breadcrumbJsonLd(page)} />
      <Breadcrumbs page={page} />
      <h1 className="mt-4 type-h1 tracking-tight">{page.heading}</h1>
      <p className="mt-3 max-w-2xl whitespace-pre-line type-body text-muted">
        {page.intro}
      </p>
      {page.howTo && page.howTo.length > 0 ? (
        <section className="mt-6 max-w-2xl" aria-labelledby="how-generator">
          <h2 id="how-generator" className="type-h2">
            How to make a kaomoji
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 type-meta leading-6">
            {page.howTo.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      ) : null}

      <KaomojiGenerator />

      {related.length > 0 ? (
        <section className="mt-10" aria-labelledby="related-heading">
          <h2 id="related-heading" className="type-h2">
            Related pages
          </h2>
          <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {related.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                >
                  {item.heading}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
`
);

console.log("generator written");

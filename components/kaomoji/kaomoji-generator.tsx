"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/kaomoji/copy-button";
import { faceLangAttr } from "@/lib/utils";

const LEFT_ARMS = ["", "╰", "٩", "ᕙ", "ᕦ", "ヽ", "ᘳ", "＼", "づ", "╭"];
const EYES = ["◕", "•", "≧", "¬", "ಠ", "๑", "＾", "◉", "✖", "T", "μ", "★"];
const MOUTHS = ["‿", "ω", "□", "Д", "益", "▿", "ᴗ", "ㅁ", "︵", "︿", "∀", "з"];
const RIGHT_ARMS = ["", "╯", "۶", "ᕗ", "ᕤ", "ﾉ", "ᘰ", "／", "づ", "╮"];
const PRESETS: Array<{
  name: string;
  left: string;
  eyeL: string;
  mouth: string;
  eyeR: string;
  right: string;
  extra: string;
  /** Preset arms already include parentheses — skip wrapping core. */
  rawCore?: boolean;
}> = [
  { name: "Happy", left: "", eyeL: "◕", mouth: "‿", eyeR: "◕", right: "", extra: "" },
  { name: "Angry", left: "", eyeL: "ಠ", mouth: "益", eyeR: "ಠ", right: "", extra: "" },
  {
    name: "Table flip",
    left: "(╯",
    eyeL: "°",
    mouth: "□",
    eyeR: "°",
    right: ")╯",
    extra: "︵ ┻━┻",
    rawCore: true,
  },
  { name: "Shrug", left: "¯\\_", eyeL: "ツ", mouth: "", eyeR: "", right: "_/¯", extra: "" },
  { name: "Pout", left: "", eyeL: "￣", mouth: "ヘ", eyeR: "￣", right: "", extra: "" },
];

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
              key={`${label}-${i}-${opt}`}
              type="button"
              onClick={() => onChange(opt)}
              className={
                active
                  ? "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-primary bg-primary px-3 type-button font-semibold text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
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
  const [rawCore, setRawCore] = useState(false);

  const face = useMemo(() => {
    if (rawCore) {
      return `${left}${eyeL}${mouth}${eyeR}${right}${extra}`;
    }
    const core = `(${eyeL}${mouth}${eyeR})`;
    return `${left}${core}${right}${extra}`;
  }, [left, eyeL, mouth, eyeR, right, extra, rawCore]);

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
    setRawCore(false);
  }

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-sm)] sm:p-6">
      <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-primary/35 bg-active px-4 py-10 shadow-[var(--shadow-sm)] sm:px-6 sm:py-12">
        <p
          className="kaomoji-face text-center text-3xl sm:text-4xl"
          lang={faceLangAttr(face)}
        >
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

      <div className="mt-4">
        <p className="type-label text-foreground">Presets</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => {
                setLeft(preset.left);
                setEyeL(preset.eyeL);
                setMouth(preset.mouth);
                setEyeR(preset.eyeR);
                setRight(preset.right);
                setExtra(preset.extra);
                setRawCore(Boolean(preset.rawCore));
              }}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-4 type-button transition-colors hover:border-primary hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              {preset.name}
            </button>
          ))}
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

/**
 * Keyword-gap copy, round 2 (Semrush via Rankytools, US, 2026-11-15).
 * Checked against the live page copy first: music, dividers, kawaii and 狗头
 * were already covered by existing owners, so only these two remain.
 * Same rules as data/gap-copy.ts: FAQ and prose on existing pages, no new URLs.
 * Merged into `pages` at the bottom of lib/site.ts.
 */
import type { GapCopy } from "@/data/gap-copy";

export const gapCopy2: Record<string, GapCopy> = {
  "/kaomoji-copy-paste": {
    learnMore:
      "Every kaomoji is built from a small set of kaomoji symbols, which are ordinary Unicode characters. Eyes use symbols such as ◕, ˘, ≧, and °. Mouths use ω, ▽, ‿, and д. Cheeks and blushes use 〃 or ///, arms use ノ and つ, and sparkles use ✧, ♡, and ♪. Put them in brackets and you get faces like (◕‿◕), (≧▽≦), and ヽ(•‿•)ノ.\n\nMany of these symbols come from other alphabets. ω is the Greek letter omega, ಠ comes from the Kannada script, and ʘ is a phonetic letter. Japanese users found that they look like facial features, which is why they work. If you want the symbols alone, without a face, use the [cute symbols](/cute-symbols/) page. To see how the pieces fit together, read [how to read kaomoji](/guides/how-to-read-kaomoji/).",
    faqs: [
      {
        question: "What symbols are used in kaomoji?",
        answer:
          "Kaomoji use ordinary Unicode symbols: round or curved characters for eyes (◕ ˘ ≧), mouths (ω ▽ ‿), cheeks (〃), arms (ノ つ), and sparkles (✧ ♡ ♪). Many come from Greek, Japanese, and other scripts. Tap Copy on any face here and the whole string is copied, so you do not need to find each symbol yourself.",
      },
      {
        question: "How do I type kaomoji symbols on my keyboard?",
        answer:
          "Most are not on a standard keyboard. On Windows, press Win + period and open the symbols tab. On Mac, press Ctrl + Cmd + Space to open the character viewer. On a phone, the easiest way is to copy a ready-made face from this page. If you only need loose symbols such as hearts and stars, the cute symbols page has them.",
      },
      {
        question: "What are kaomojis, and where can I find a full list?",
        answer:
          "Kaomojis (also written kaomoji, since Japanese has no plural) are faces drawn with text characters, such as (^_^) or (≧▽≦). This page lists thousands you can copy in one tap, and each mood has its own page, such as happy, sad, cute, and angry. For a short starter set with meanings, read the 60 best kaomojis post on the blog.",
      },
    ],
  },

  "/sleepy-kaomoji": {
    faqs: [
      {
        question: "What are the best tired kaomoji?",
        answer:
          "Tired kaomoji use flat or half-closed eyes, a small flat or wavy mouth, and often a sweat drop or a trailing zzz. Examples are (－_－)zzZ, (´-ω-`), (=_=), and (；￣Д￣). Use one when you are drained but still awake. A face with closed eyes and zzz means asleep, so pick the half-closed ones to say you are tired but still replying. Tap Copy under any face on this page.",
      },
    ],
  },

  "/nervous-kaomoji": {
    faqs: [
      {
        question: "Which kaomoji show that I am worried or anxious?",
        answer:
          "Worried kaomoji usually combine slanted or wide eyes with a wobbly mouth and a sweat drop, such as (；一_一), (^_^;), and (´･_･`). A sweat mark means you are uneasy, a wavy mouth means you are unsure, and shaking lines show real anxiety. Use them to say you are worried without sounding upset. Tap Copy under any face on this page.",
      },
    ],
  },

  "/kaomoji-generator": {
    faqs: [
      {
        question: "Is this a kaomoji maker I can use to build my own face?",
        answer:
          "Yes. The generator works as a kaomoji maker: you pick the arms, eyes, and mouth, add an optional extra such as ears, blush, or sweat marks, and it builds a face you can copy. If you would rather learn the parts first, the how to make kaomoji guide explains which symbols to combine for each mood.",
      },
    ],
  },

  "/crying-kaomoji": {
    faqs: [
      {
        question: "What are happy crying kaomoji?",
        answer:
          "Happy crying kaomoji show tears of joy: a big smile or closed happy eyes together with tear marks, such as (T▽T), (；▽；), and (╥ω╥)♡. Use them when you are laughing so hard you cry or when something is very touching. Faces with a frown and tears mean real sadness, so pick the smiling ones for joy.",
      },
    ],
  },
};

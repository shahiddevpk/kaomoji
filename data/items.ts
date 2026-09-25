import type { Kaomoji } from "@/data/types";
import raw from "@/data/items.json";

/** Waves A+B mega import — MIT sources, NFC-deduped + EN tags/aliases. */
export const kaomoji = raw as Kaomoji[];

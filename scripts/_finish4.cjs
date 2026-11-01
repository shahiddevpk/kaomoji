const fs = require("fs");
const path = require("path");
const w = (rel, s) => {
  fs.mkdirSync(path.dirname(rel), { recursive: true });
  fs.writeFileSync(rel, s.replace(/\r\n/g, "\n"), "utf8");
  console.log("W", rel);
};

// ---- search actions: tags scope ----
w("lib/search/actions.ts", `"use server";

import type { SearchDoc } from "@/data/index";
import { searchIndexed } from "@/lib/search/index-engine";

export type SearchScope = {
  path: string;
  category?: string;
  tags?: string[];
  includeNewlines?: boolean;
};

export type SearchHit = Pick<SearchDoc, "id" | "face" | "name">;

/** Server-side face search - keeps the catalog off the client bundle. */
export async function searchFaces(
  query: string,
  scope: SearchScope,
): Promise<SearchHit[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  if (scope.tags && scope.tags.length > 0) {
    return searchIndexed(trimmed, {
      tags: scope.tags,
      includeNewlines: scope.includeNewlines,
    }).map((doc) => ({
      id: doc.id,
      face: doc.face,
      name: doc.name,
    }));
  }

  if (scope.category) {
    return searchIndexed(trimmed, { category: scope.category }).map((doc) => ({
      id: doc.id,
      face: doc.face,
      name: doc.name,
    }));
  }

  if (scope.path === "/" || scope.path === "/kaomoji-copy-paste") {
    return searchIndexed(trimmed).map((doc) => ({
      id: doc.id,
      face: doc.face,
      name: doc.name,
    }));
  }

  return [];
}
`);

// ---- patch index-engine for tags ----
let eng = fs.readFileSync("lib/search/index-engine.ts", "utf8");
if (!eng.includes("tags?: string[]")) {
  eng = eng.replace(
    "options?: { category?: string; limit?: number }",
    "options?: { category?: string; tags?: string[]; includeNewlines?: boolean; limit?: number }"
  );
  // after category filter, add tags filter
  if (eng.includes("if (category && doc.category !== category) continue;")) {
    eng = eng.replace(
      "const category = options?.category;\n",
      `const category = options?.category;
  const tags = options?.tags?.map((t) => t.toLowerCase());
  const includeNewlines = options?.includeNewlines;
`
    );
    eng = eng.replace(
      "if (category && doc.category !== category) continue;",
      `if (category && doc.category !== category) continue;
    if (tags && tags.length > 0) {
      const docTags = doc.tags ?? [];
      const tagHit = tags.some((t) => docTags.includes(t));
      const nlHit = includeNewlines && doc.face.includes("\\n");
      if (!tagHit && !nlHit) continue;
    }`
    );
    console.log("engine tags filter patched");
  } else {
    console.log("ENGINE CATEGORY FILTER NOT FOUND");
    const i = eng.indexOf("for (const i of candidates");
    console.log(eng.slice(i, i + 600));
  }
  fs.writeFileSync("lib/search/index-engine.ts", eng, "utf8");
}

// Ensure SearchDoc has tags - already should from data/index
const data = fs.readFileSync("data/index.ts", "utf8");
if (!data.includes("tags: string[]")) {
  console.log("WARNING: SearchDoc may lack tags");
}

// ---- category tiles: angry + filter children ----
let tiles = fs.readFileSync("components/kaomoji/category-tiles.tsx", "utf8");
if (!tiles.includes("/angry-kaomoji")) {
  tiles = tiles.replace(
    '"/crying-kaomoji",',
    '"/crying-kaomoji",\n  "/angry-kaomoji",'
  );
}
if (!tiles.includes("!page.parentPath")) {
  tiles = tiles.replace(
    "const browse = pagesByGroup(\"browse\");",
    "const browse = pagesByGroup(\"browse\").filter((page) => !page.parentPath);"
  );
  // also filter ordered leftover loop - BROWSE_ORDER leftover already only top-level if we filter browse
}
if (!tiles.includes("/multiline-kaomoji")) {
  tiles = tiles.replace(
    '"/text-faces",',
    '"/text-faces",\n  "/multiline-kaomoji",\n  "/kaomoji-generator",'
  );
}
fs.writeFileSync("components/kaomoji/category-tiles.tsx", tiles, "utf8");
console.log("tiles updated");

// ---- footer: top-level browse only ----
let footer = fs.readFileSync("components/layout/footer.tsx", "utf8");
if (!footer.includes("parentPath") && footer.includes('pagesByGroup("browse")')) {
  footer = footer.replace(
    'const browse = pagesByGroup("browse");',
    'const browse = pagesByGroup("browse").filter((page) => !page.parentPath);'
  );
  fs.writeFileSync("components/layout/footer.tsx", footer, "utf8");
  console.log("footer filtered");
}

console.log("search+tiles done");

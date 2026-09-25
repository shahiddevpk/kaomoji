# PasteKaomoji - Performance + SEO Crawlability Audit

**Date:** 2026-09-24 (PKT / Asia/Karachi)  
**Scope:** `D:\\kaomoji` Next.js App Router + TS + Tailwind (Next 16.3.6 / React 19.2.8)  
**Catalog:** 24,686 faces in `data/items.json` (5.77 MB) via thin `data/items.ts`  
**Constraint respected:** no doorway spam; do not ship full DB to the browser; keep existing money URL paths unless a redirect plan exists; no git actions in this audit.

---

## Executive summary (top gaps)

| Sev | Gap | Where |
|-----|-----|-------|
| **P0** | Hub money pages ship **uncapped popular grids (197 cards)** -> **~362-379 KB HTML** | `data/index.ts` `getForPage`, `app/page.tsx`, `/kaomoji-copy-paste` |
| **P0** | **~95%+ of category inventory is invisible to crawlers** (only first 96 primary faces in HTML; rest search-only) | `PAGE_GRID_LIMIT`, no pagination |
| **P1** | Server search is **O(n) over up to 24,686 docs** every query; category scope **rebuilds SearchDocs per call** (no cache) | `lib/search/index.ts`, `lib/search/actions.ts` |
| **P1** | Server SSR data chunk embeds full catalog (~**5.9 MB** `data_*.js`) - cold-start / memory weight | `data/items.ts` -> `items.json` |
| **P1** | High-intent landings missing despite tag volume: **angry (922), love (600), shy/blush (~746)** | `lib/site.ts` pages |
| **P1** | Synonym / meme gaps: **shrug / Lenny** nearly absent as tags/aliases (faces exist sparsely) | `data/items.json`, `CATEGORY_SEARCH` |
| **P1** | Home IA puts **faces below** search + tiles + chrome - weak first-paint intent | `app/page.tsx` |
| **P1** | No grid virtualization / crawlable pagination - large DOM, INP risk on copy | `kaomoji-grid.tsx` |
| **P2** | `getRelatedKaomoji(Kaomoji)` secondary-category path is dead (`multiCat === 0`) | `data/index.ts` |
| **P2** | ItemList JSON-LD `numberOfItems` = capped slice (48), no item URLs; WebSite has no SearchAction | `lib/seo.ts` |

**Good news (already fixed / solid):** client `SearchBox` does **not** receive `buildSearchDocs(catalog)`. Search uses a **server action** (`searchFaces`). No `items.json` / face IDs found in `.next/static` client chunks. Money URLs have unique primaries, canonicals, trailingSlash redirects, sitemap coverage, and are indexable.

---

## Quick measurements (run 2026-09-24)

| Metric | Value |
|--------|-------|
| `data/items.json` | **5.77 MB** (6,053,243 bytes) |
| Catalog count | **24,686** |
| `popular: true` | **197** |
| `"use client"` files | **5** - `search-box`, `copy-button`, `copy-provider`, `copied-toast`, `recently-copied` |
| Home passes `buildSearchDocs`? | **No** - only `getForPage` + `SearchBox scope={{ path }}` |
| Built HTML (SSG) | home **361.9 KB**, copy-paste **378.9 KB**, category ~**210-214 KB** |
| Built RSC payload | home **166 KB**, copy-paste **173.5 KB**, category ~**97-100 KB** |
| Client largest JS chunk | **223.8 KB** (framework); no catalog strings in static chunks |
| Server data chunk | **`data_0a7gom_._.js` ≈ 5.9 MB** (full JSON inlined for SSR/actions) |
| Fonts | Geist + Geist_Mono (Google); several `.woff2` ~5-28 KB each |
| Third-party runtime | **None** (no analytics/ads scripts in layout) |

### Line counts (source)

| File | Lines |
|------|------:|
| `app/page.tsx` | 82 |
| `components/kaomoji/category-view.tsx` | 108 |
| `components/kaomoji/search-box.tsx` | 109 |
| `lib/search/index.ts` | 63 |
| `lib/seo.ts` | 87 |
| `lib/site.ts` | 225 |
| `app/sitemap.ts` | 35 |
| `app/robots.txt` | 11 |
| `next.config.ts` | 77 |
| `data/index.ts` | 170 |
| `data/types.ts` | 11 |

### Primary category inventory vs grid

| Primary | Total | Shown (≤96) | Hidden from HTML |
|---------|------:|------------:|-----------------:|
| japanese | 6774 | 96 | 6678 |
| cute | 6422 | 96 | 6326 |
| happy | 5042 | 96 | 4946 |
| sad | 2982 | 96 | 2886 |
| text-faces | 2878 | 96 | 2782 |
| cat | 309 | 96 | 213 |
| crying | 279 | 96 | 183 |

Rough standalone estimate: **96-card grid markup ~9 KB** + **ItemList JSON-LD (48) ~4 KB**; real shipped HTML is dominated by RSC/chrome/client boundaries (~210 KB category pages).

---

## A) PERFORMANCE

### A1. Does home/category serialize full 24k SearchDocs into client JS? - **No (P2 watch)**

**Finding:** `components/kaomoji/search-box.tsx` is `"use client"` but calls `searchFaces` from `lib/search/actions.ts` (`"use server"`). Scope is only `{ path, category? }` - **not** a docs array.

```tsx
// app/page.tsx - server
<SearchBox scope={{ path: page.path }} />

// category-view.tsx - server
<SearchBox scope={{ path: page.path, category: page.category }} />
```

**Evidence:** Select-String on `app/page.tsx` / `category-view` / `search-box` for `buildSearchDocs` -> empty. Client static scan for sample face id / `buildSearchDocs` -> empty.

**Residual risk (P2):** `data/index.ts` re-exports `kaomoji` from `items`. Any future client import of `@/data/index` would drag the catalog. Prefer `export type` only on the public barrel; keep catalog behind server-only modules.

### A2. Bundle impact of `items.json` (tree-shaking / RSC)

| Surface | Impact | Sev |
|---------|--------|-----|
| Client JS | Catalog **not** present in `.next/static` (good) | - |
| Server SSR chunk | **~5.9 MB** `data_*.js` - full JSON stringified into server bundle | **P1** |
| RSC HTML | Category ~210 KB; hub ~360-380 KB (popular uncapped) | **P0** |
| Tree-shaking | JSON default import is opaque - entire file retained server-side | expected |

**Recommendation:** keep JSON server-only; consider splitting by primary category files or a compact binary/msgpack index for search; never `import` JSON from client components.

### A3. Client vs server components / `"use client"`

**Appropriate client islands (5):** search input, clipboard copy, toast, recently-copied, copy context store.

**Server:** pages, `CategoryView`, `KaomojiGrid` (server shell + client `CopyButton` children), header/footer/tiles/breadcrumbs/JsonLd.

**No unnecessary page-level `"use client"`.** `CopyProvider` wraps the whole tree in `layout.tsx` but only re-exports children + module-level store - acceptable; still a client boundary at root (P2: could move provider lower if layout chrome should stay fully server).

### A4. Search algorithm - O(n) over all docs? - **Yes (P1)**

`lib/search/index.ts` `searchDocs`:

- Tokenize query (≥2 chars)
- For **every** doc: split `doc.text` into words; score each token (exact/prefix/includes)
- Sort all scored hits; slice `limit` (48)

Complexity ≈ **O(N × T × W)** per query. Full library N=24,686.

`lib/search/actions.ts`:

- Full library: cached once in `cachedFullDocs` (good)
- **Category scope:** `buildSearchDocs(getSearchPoolForPage(scope))` on **every** call - **no cache (P1)**
- Cute scope alone ≈ 6.4k docs rebuilt + scanned per keystroke (debounced 180 ms)

**INP:** client is light (transition + server round-trip); server CPU under concurrent search is the risk.

### A5. Grid: virtualization? pagination?

- **Neither.** `KaomojiGrid` maps all items to `<ul>/<li>` cards.
- Category: hard cap `PAGE_GRID_LIMIT = 96`
- Hub / copy-paste: `getPopular()` **uncapped (197)** - **P0**
- UX copy: “use search above for the full set” - fine for users, **bad for crawlers**

### A6. Fonts, CSS, third-party

- `next/font/google`: Geist + Geist_Mono - self-hosted after build (good)
- Tailwind v4 via `@import "tailwindcss"` - CSS chunk ~20 KB
- **No** analytics/ads/tag managers - strong CWV posture
- `kaomoji-face` stacks mono + JP fallbacks - may cause late glyph swap (CLS risk on exotic faces) - **P2**

### A7. Estimated HTML size (96 cards + ItemList)

| Artifact | Size |
|----------|------|
| Built `cute-kaomoji.html` | **212.4 KB** |
| Built `index.html` | **361.9 KB** |
| Built `kaomoji-copy-paste.html` | **378.9 KB** |
| ItemList JSON-LD (48 items) alone | ~4 KB |
| Face grid markup alone (96) | ~9 KB |

### A8. CWV risks

| Metric | Risk | Why |
|--------|------|-----|
| **LCP** | Medium-High on hub | Large HTML + font; LCP likely H1 or first face row |
| **CLS** | Medium | RecentlyCopied mounts after hydration; toast; JP font fallback; min-heights help cards |
| **INP** | Medium | 96-197 buttons + server search RTT; module-level copy store is fine; no virtualization |
| **TTFB** | Medium on cold start | 5.9 MB server data chunk |

---

## B) CRAWL / INDEX

### B1. Sitemap / robots

- `app/sitemap.ts`: emits **all** `pages` from `lib/site.ts` (13 URLs) with trailing-slash absolute URLs via `absoluteUrl`. **Split not needed** at this scale.
- Money URLs present: `/`, `/kaomoji-copy-paste/`, `/japanese-emoticons/`, `/cute-kaomoji/`, `/text-faces/`, happy/sad/crying/cat.
- `lastModified` hardcoded `"2026-09-24"` - fine for now; automate on catalog rebuild later (**P2**).
- `app/robots.txt` (static; **no** `robots.ts`): Allow `/`; Disallow `/search`, query traps (`q`,`tag`,`filter`,`mood`), `/api/`; Sitemap absolute. Good crawl-trap hygiene. Note: no `/search` route exists (harmless).

### B2. Canonicals, trailingSlash, redirects

- `next.config.ts`: `trailingSlash: true`
- `canonicalPath` / `absoluteUrl` aligned
- Broad **301** alias map (cry->crying, copy-paste variants, misspellings, plurals) - good cannibalization control
- Keep money paths stable (do not rename without redirect plan)

### B3. SSR/SSG: is face content in initial HTML? - **Yes, capped**

- No `dynamic = 'force-dynamic'` / `revalidate` markers - static generation.
- Faces **are** in HTML (grid + names), so Google can index visible faces.
- **Gap:** only ≤96 (or 197 popular on hub). Remaining tens of thousands are **not** in any URL’s HTML.

### B4. Internal links

- Header: all `inHeader` browse pages (dense but crawlable)
- Footer: browse + trust
- Hub: `CategoryTiles` ordered by intent
- Category: `relatedPages` + related face grid
- Trust pages cross-link

**P2:** Hub has no in-body links to trust pages; fine.

### B5. Parameter / filter crawl traps

- Search is client + server action - **no** `?q=` URLs (good)
- robots preemptively blocks filter query patterns
- If adding pagination, prefer **path** pages (`/cute-kaomoji/page/2/`) over `?page=`, and allow them in robots

### B6. Structured data risks

| Item | Status | Sev |
|------|--------|-----|
| WebSite JSON-LD in layout | Present; no `potentialAction` SearchAction | P2 (optional; no public search URL) |
| BreadcrumbList | Valid 2-level | OK |
| ItemList | `name` = face glyph, `description` = English name; **no `url`/`item`** | P2 |
| `numberOfItems` | = `listFaces.length` (≤48), **not** category total | P2 (slightly misleading) |
| Product/Offer | Correctly avoided | OK |

---

## C) INTENT / IA

### C1. Page structure vs intent

**Category pages (`CategoryView`):** H1 -> intro -> RecentlyCopied -> Search -> **Faces** -> related faces -> how-to -> related pages. Faces are reasonably early.

**Home (`app/page.tsx`):** H1 -> intro -> RecentlyCopied -> **Search** -> **Browse tiles** -> Popular faces -> how-to steps.

**P1:** For “kaomoji copy paste” intent, **faces should appear above** long chrome. Prefer: H1/intro -> compact tiles or chips -> **Popular faces** -> search -> steps.

### C2. Missing high-intent landings (gated - do **not** auto-create all tags)

Recommend **gates** before any new money URL:

1. Search volume / clear head term (manual or GSC/Keyword tool)
2. **≥ 120 distinct faces** matching primary-or-strong-tag after curation
3. Unique primary intent not cannibalizing an existing money page
4. Unique title/H1/intro; add redirects for aliases
5. Cap total money URLs - **never** explode to hundreds of tag doorways

| Candidate | Face signal (tags/fields) | Gate note |
|-----------|---------------------------|-----------|
| **/angry-kaomoji** | tag `angry` **922** | Strong - top candidate |
| **/love-kaomoji** | tag `love` **600** (+ heart 439) | Strong; watch cute overlap |
| **/shy-kaomoji** or blush | shy **746** / blush aliases ~81 | Prefer **shy** as primary slug; blush as alias redirect |
| shrug | ~6 shrug-like faces; **0** shrug tags | **Fail gate** until curated set ≥120 or fold into text-faces with synonyms |
| Lenny | ~85 glyph-like; **0** lenny tags | Enrich synonyms on `/text-faces`; no new URL until curated |

**Do not** create pages for every tag (kiss, hug, wink, etc.) without volume + uniqueness checks.

### C3. Related kaomoji quality (`getRelatedKaomoji`)

- Category pages pass **related page category IDs** -> works (8 faces from those primaries).
- Per-item path uses `categories.slice(1)` - **dead** because **every** item has exactly **one** category (`multiCat === 0`).
- Related quality is “nearby IA categories,” not similarity/embeddings - acceptable v1; improve with `relatedIds` or shared tags later.

### C4. Search synonym coverage gaps

**Strong:** `CATEGORY_SEARCH` + `LIBRARY_SEARCH` (incl. misspellings kamoji/koamoji/…) on popular faces.

**Gaps (P1):**

- `shrug`, `lenny`, `table flip` / `fliptable` not in global synonym map
- `blush` weak vs `shy`
- Angry/love discoverable via tags in SearchDocs text **if** those tags are on items (they are) - but **no landing page** captures the SERP

---

## D) DATA MODEL

### Exists today (`data/types.ts`)

```ts
{
  id, face, name,
  categories: string[],  // effectively length-1 primaries
  tags: string[],
  aliases: string[],
  popular?: boolean
}
```

### Missing vs desired SEO / engagement attributes

| Field | Purpose | Priority |
|-------|---------|----------|
| `emotion` / `intent` | Stable taxonomy beyond free tags | P1 (data phase) |
| `meaning` / `gloss` (short) | Unique snippet potential; a11y | P2 |
| `relatedIds: string[]` | Better related rail | P2 |
| `script` / `lang` hints | JP vs ASCII text-faces | P2 |
| `source` / `license` | Trust + compliance | P2 |
| `stroke` / `complexity` | Ranking for “simple” grids | P3 |
| Multi-category **or** explicit `secondary` | Fixes related-by-item | P2 |

Tags today are rich (angry/love/shy/…) but **not** elevated to route-level taxonomy - correct until gates pass.

---

## E) RECOMMENDED PHASES

Respect: **no 535 doorway URLs**; keep existing money paths; no git in executor workstreams unless user asks.

### Phase 1 - Grid budget + crawlable category pagination *(highest leverage)*  
**Owners:** PK Arch + UI + SEO  
**Why first:** Fixes P0 HTML bloat on hub **and** P0 crawl invisibility of ~24k faces without client DB or tag doorways.

**Implement:**

1. Cap hub + `/kaomoji-copy-paste` popular grid with `PAGE_GRID_LIMIT` (or `POPULAR_GRID_LIMIT = 96`) in `getForPage`.
2. Add **path-based** pagination for category surplus, e.g. `/cute-kaomoji/page/[n]/` (SSG `generateStaticParams` for page count = ceil(total/96), cap max pages if needed).
3. Rel=prev/next + “Showing 1-96 of N” with links (not only search).
4. Include paginated URLs in `sitemap.ts` (still tiny vs doorways).
5. Reorder home: faces (capped) above long search/howto chrome.

**Success criteria:**

- Hub HTML **≤ ~220 KB** (down from ~360-380 KB)
- Category page 1 unchanged UX; pages 2..N indexable with unique canonicals
- ≥ **first 5 pages × money categories** of faces present in HTML for crawlers
- Lighthouse LCP/INP improve on hub mobile; no `items.json` in client bundles (regression check)
- Still **zero** per-face doorway URLs

### Phase 2 - Search server performance  
**Owners:** PK Arch  
- Cache `buildSearchDocs` per category key  
- Precompute inverted token -> id index at build/module load  
- Optional: search only `id/face/name` over the wire (already returns Pick)  
**Success:** p95 `searchFaces` < 20 ms in-process for full library; no per-request doc rebuild.

### Phase 3 - Gated intent landings + synonym pack  
**Owners:** SEO + Data + UI  
- Ship **angry** and **love** (if gates pass); shy if distinct from cute  
- Redirect aliases; update `related`, tiles, sitemap, redirects  
- Synonym pack: shrug/lenny/tableflip/blush -> existing pages  
**Success:** new URLs ≤ +3; each ≥120 curated faces; no cannibalization in GSC queries.

### Phase 4 - Data model enrichment  
**Owners:** Data  
- Add optional `meaning`, `relatedIds`, emotion enum; keep JSON server-only  
- Fix related rail to use tags/`relatedIds`  
**Success:** related faces non-empty quality score; types documented.

### Phase 5 - CWV polish + JSON-LD honesty  
**Owners:** UI + SEO + QA  
- Font subset / `size-adjust`; reserve RecentlyCopied space  
- ItemList `numberOfItems` = true visible or true category total (document choice); optional `url` only if face pages ever exist (they should not in v1)  
**Success:** CLS < 0.1 mobile hub; rich-results test clean.

### Phase 6 - QA regression harness  
**Owners:** QA  
- Assert: no catalog in client JS; money URLs 200 + canonical; robots; sitemap count; pagination canonicals; bundle size budgets  
**Success:** CI script fails on client catalog leak or hub HTML > budget.

---

## File -> finding map (quick)

| Path | Notes |
|------|-------|
| `data/items.json` | 5.77 MB / 24,686 - server only today |
| `data/items.ts` | Thin cast import |
| `data/index.ts` | `PAGE_GRID_LIMIT` 96; hub popular **uncapped**; `buildSearchDocs`; related secondary broken |
| `data/types.ts` | Minimal SEO fields |
| `lib/search/actions.ts` | Server search - good client isolation; category docs uncached |
| `lib/search/index.ts` | Linear scan scorer |
| `lib/site.ts` | Money IA + related graph |
| `lib/seo.ts` | Metadata + JSON-LD |
| `app/page.tsx` | Hub IA order; popular grid |
| `components/kaomoji/category-view.tsx` | Category SSR shell |
| `components/kaomoji/search-box.tsx` | Client island -> server action |
| `components/kaomoji/kaomoji-grid.tsx` | No virtualization |
| `app/sitemap.ts` / `app/robots.txt` | Solid for current URL count |
| `next.config.ts` | trailingSlash + alias redirects |

---

## Out of scope / non-goals (this audit)

- Creating hundreds of tag URLs  
- Loading full SearchDocs into the browser  
- Per-face public URLs (doorway risk)  
- git init/commit/push / CloudAgent  
- Changing existing money path strings without redirect plan  

---

*End of audit. Next implementation recommendation: **Phase 1 only** (grid caps + crawlable category pagination + hub face-first reorder).*

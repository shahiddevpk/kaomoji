# Content Uniqueness / Intent / Cannibalization / Canonical Audit — PasteKaomoji

**Product:** pastekaomoji.com · **Project:** `D:\\kaomoji`  
**Date:** 2026-09-24 (PKT / Asia/Karachi)  
**Freeze status:** **READY** (SEO + Data + Intent map merged)  
**Owners:** PK SEO (this file) · PK Data (`docs/CONTENT-UNIQUENESS-AUDIT-DATA.md` = **numbers SoT**) · New Bot (`docs/INTENT-PAGE-MAP.md` = keyword ownership map)  
**Policy (restated):** **One meaningful search intent → one strong page.** Pagination ≠ new intent. No face pages. No synonym doorways. No new routes in this audit.

| Artifact | Role |
|---|---|
| `docs/CONTENT-UNIQUENESS-AUDIT-DATA.md` | Primary counts, soft-overlap, density floors, KEEP/MERGE/FUTURE (Data) |
| `docs/INTENT-PAGE-MAP.md` | Keyword→page ownership, monetization columns, cannibalization pairs (New Bot) |
| `docs/CONTENT-UNIQUENESS-AUDIT.md` | **This freeze doc** — inventory + maps + canonical + actions |
| `docs/ADSENSE-READINESS-AUDIT.md` | Monetization layers (New Bot; lightly augmented) |
| `docs/POST-LAUNCH-GSC-CHECKLIST.md` | GSC monitoring (New Bot; lightly augmented) |

**Disclaimer:** Does **not** promise rankings, full indexation, or AdSense approval. Search Essentials + Spam Policies = Search rules; Publisher/AdSense policies = monetization rules; GSC = diagnostic only. Site **not deployed** → no live GSC data now.

**Google guidance (box, read-only — do not copy into app tree):**  
`/workspace/kaomoji-mega/GOOGLE-SEO-GUIDANCE.md` · `/workspace/kaomoji-mega/GOOGLE-ADSENSE-PUBLISHER-GUIDANCE.md`  
Key implications: **scaled content abuse** and **doorway abuse** forbid synonym/near-duplicate landings; **soft 404** risk on empty/thin 200s; **canonicalization** via redirects + `rel=canonical` + sitemap; Search compliance ≠ AdSense approval; inventory-value + **Copy clearance** for ads.

---

## A. Executive summary

| Area | Finding |
|---|---|
| Catalog (Data Wave B) | **24,686** faces · **197** popular · all in seven money primaries |
| Primaries (Data SoT) | cute **6422**, happy **5042**, cat **309**, sad **2982**, crying **279**, japanese **6774**, text-faces **2878** |
| Primary intersections | **All 0** — disjoint grids |
| Soft-overlap | Max **cat→cute 10.68%** (33); **no** pairs ≥15% or ≥200 |
| Indexable URLs | **88** = 1 hub + 8 browse page-1 + 4 trust + **75** pagination (page 2+) |
| KEEP | Seven money categories + `/kaomoji-copy-paste/` |
| MERGE | kawaii/aesthetic→cute; cry/tears/sob→crying; smiling→happy; copy-paste aliases→utility; plurals/typos→301 |
| FUTURE (tags only) | love, angry, shy, kiss, excited, shrug, dog, bunny, bear — **Not-suitable** as SitePages until gated |
| Titles / H1s (page-1) | All unique — **PASS** |
| Synonym doorways / face pages | None as 200; redirects shipped — **PASS** |

---

## B. Rule + Google policy alignment (Search)

| Rule | App practice | Google concept (guidance snapshot) |
|---|---|---|
| One intent → one page | Money SitePages only; synonyms 301 or tags | Doorway abuse |
| No scaled thin templates | No Phase 2 empty indexables; pagination cap 15 | Scaled content abuse |
| Distinct grids | `categories[0]` exclusive; primary ∩ = 0 | Helpful content + duplicate consolidation |
| Empty / stub URLs | Prefer omit route over thin 200 | Soft 404 / crawled-not-indexed |
| Search/filter params | `robots.txt` Disallow; not in sitemap | Avoid parameter junk |

Official entry points (cited via box snapshot): Search Essentials, Spam policies (doorway / scaled), consolidate duplicate URLs, Page indexing / soft 404 troubleshooting.

---

## C. Full indexable URL inventory

Canonical host: `https://pastekaomoji.com` · `trailingSlash: true` · `metadataBase` in `app/layout.tsx`.

### C1. Counts

| Class | Count | Mark | Sitemap |
|---|---:|---|---|
| Hub `/` | 1 | **Money** | Yes (1.0) |
| Browse money page-1 | 8 | **Money** | Yes (0.75–0.9) |
| Trust | 4 | Trust (indexable) | Yes (0.3) |
| Pagination page **2+** | **75** | **Pagination** | Yes (0.5) |
| **Total indexable** | **88** | | |

**Not indexable / not in sitemap:** `/search`, `?*q|tag|filter|mood=`, `/api/`, redirect-only aliases, FUTURE routes (not shipped), per-face URLs (banned), `/maker/` (not shipped).

### C2. Money + trust page-1 — title / H1 inventory

Source: `lib/site.ts` + `lib/seo.ts`. Hub = absolute title; others = `titleSegment | Paste Kaomoji`.

| URL | Type | titleSegment / absolute | H1 | Unique? |
|---|---|---|---|---|
| `/` | Hub money | Kaomoji \| Text Face Library \| Paste Kaomoji | Kaomoji Library | Yes |
| `/cute-kaomoji/` | Money | Cute Kaomoji to Copy | Cute Kaomoji | Yes |
| `/happy-kaomoji/` | Money | Happy Kaomoji to Copy | Happy Kaomoji | Yes |
| `/cat-kaomoji/` | Money | Cat Kaomoji to Copy | Cat Kaomoji | Yes |
| `/sad-kaomoji/` | Money | Sad Kaomoji to Copy | Sad Kaomoji | Yes |
| `/crying-kaomoji/` | Money | Crying Kaomoji to Copy | Crying Kaomoji | Yes |
| `/kaomoji-copy-paste/` | Utility money | Kaomoji Copy and Paste | Kaomoji Copy and Paste | Yes |
| `/japanese-emoticons/` | Money | Japanese Emoticons | Japanese Emoticons | Yes |
| `/text-faces/` | Money | Text Faces - Shrug, Lenny and More | Text Faces | Yes |
| `/about/` | Trust | About | About | Yes |
| `/contact/` | Trust | Contact | Contact | Yes |
| `/privacy/` | Trust | Privacy | Privacy | Yes |
| `/terms/` | Trust | Terms | Terms | Yes |

**PASS:** no duplicate `titleSegment` or `heading` among page-1 URLs. Intros differentiate cute↔cat, sad↔crying, japanese↔text-faces, hub↔utility.

### C3. Pagination inventory (mark: pagination)

| Category | Primary (Data) | Crawlable | Page 2+ URLs |
|---|---:|---:|---:|
| cute | 6422 | 15 | 14 |
| happy | 5042 | 15 | 14 |
| cat | 309 | 4 | 3 |
| sad | 2982 | 15 | 14 |
| crying | 279 | 3 | 2 |
| japanese | 6774 | 15 | 14 |
| text-faces | 2878 | 15 | 14 |
| **Sum page 2+** | | | **75** |

Title pattern: `{titleSegment} - page {n} | Paste Kaomoji`. Canonical: self `/…/page/n/`. `/page/1` → 301 bare. `/kaomoji-copy-paste/` not paginated.

### C4. Sitemap vs registry vs redirects

| Signal | Contents |
|---|---|
| `pages[]` | 13 (hub + 8 browse + 4 trust) |
| `sitemap.ts` | 13 + 75 pagination = **88** |
| `next.config.ts` | Cry→crying; copy-paste aliases; hub typos; plurals; singulars; page/1→bare — **not** in sitemap |
| Internal links | Tiles + `related[]` + breadcrumbs + pagination → trailing-slash canonicals |

---

## D. Keyword → page map (merged from INTENT-PAGE-MAP + Data)

Secondary/synonyms = **tags-only** (or 301) — never new landings without gated intent review. Monetization: Data density floors applied to category money pages; Intent map for hub/utility/trust/pagination.

| URL | Primary | Secondary/synonyms | Intent | Parent/child | Canonical | Indexable | Monetization | Related |
|---|---|---|---|---|---|---|---|---|
| `/` | kaomoji | misspellings→301 hub | Library discovery | Hub | self | Yes | Eligible | tiles |
| `/cute-kaomoji/` | cute kaomoji | kawaii/aesthetic **MERGE-into-tag** | Cute/kawaii browse | Child | self | Yes | **Eligible** (6422) | happy; cat; text-faces |
| `/happy-kaomoji/` | happy kaomoji | smiling→tag; excited→tag/FUTURE | Smiles/cheers | Child | self | Yes | **Eligible** (5042) | cute; cat; sad |
| `/cat-kaomoji/` | cat kaomoji | neko/catmoji tags | Cat/animal | Child | self | Yes | **Review** (309) | cute; happy; text-faces |
| `/sad-kaomoji/` | sad kaomoji | sad kamoji→301 | Quiet sad/downcast | Child | self | Yes | **Eligible** (2982) | crying; happy; cute |
| `/crying-kaomoji/` | crying kaomoji | cry/tears/sob **MERGE** | Tearful/crying | Child | self | Yes | **Review** (279) | sad; happy; cute |
| `/kaomoji-copy-paste/` | kaomoji copy and paste | word-order→301 | Utility copy task | Utility child | self | Yes | Eligible (popular strip) | cute; happy; japanese; text-faces |
| `/japanese-emoticons/` | japanese emoticons | singular→301 | Classic JP concept | Child | self | Yes | **Eligible** (6774) | text-faces; cute; copy-paste |
| `/text-faces/` | text faces | shrug/Lenny tags | ASCII/unicode faces | Child | self | Yes | **Eligible** (2878) | japanese; cute; copy-paste |
| Trust ×4 | page name | — | Trust | Child | self | Yes | Content; ads optional / Not suitable for heavy ads | see related |
| `/{slug}/page/{n}/` n≥2 | same primary | same tags | Same intent depth | Child of p1 | self `/page/n/` | Yes | **Review** | same as base |

**Indexable ≠ ad-eligible.** Search/filter = indexable No + ad Not suitable + no sitemap.

---

## E. Cluster KEEP / MERGE / FUTURE (Data SoT)

| Call | Clusters |
|---|---|
| **KEEP** | cute, happy, cat, sad, crying, japanese, text-faces, kaomoji-copy-paste |
| **MERGE-into-tag / 301** | kawaii→cute; aesthetic→cute; cry/tears/sob→crying; smiling→happy; copy-paste word-order→utility; plurals/typos→hub/singular; cute-crying hybrids→tags not URLs |
| **FUTURE (gated; tags only)** | love, angry, shy, kiss, excited (if split), shrug (if distinct), dog/bunny/bear |

**FUTURE gate:** distinct SERP intent + prefer primary ≥500 Eligible + unique intro + low soft-overlap + SEO sign-off → then SitePage + sitemap. Until then: **Not-suitable** for ads; no SitePage.

**`/kawaii-emoticons/`:** do **not** ship this phase — MERGE-into-tag on cute.

---

## F. Cannibalization candidates (INTENT pairs + Data overlap)

Actions: MERGE · 301 · DIFFERENTIATE · CANONICAL · NOINDEX · LINK. **No auto-delete.**

| Pair | Why overlap | Soft-overlap (Data) | Recommend |
|---|---|---|---|
| sad ↔ crying | Negative emotion vocab | crying→sad 2.51% (below flag) | **DIFFERENTIATE** + **LINK**; cry aliases **301**→crying |
| cute ↔ happy | Positive affect | cute→happy 1.87% | **DIFFERENTIATE** + cross-link only |
| cute ↔ cat | Cat called cute | **cat→cute 10.68%** (highest; still <15%) | **DIFFERENTIATE**; cat terms tags-only on cute |
| hub ↔ copy-paste | Broad copy surfaces | N/A (popular pools) | **DIFFERENTIATE** titles/intros + **LINK** |
| japanese ↔ mood categories | Parent concept | 0% soft | **DIFFERENTIATE**; do not canonicalize japanese→mood |
| japanese ↔ text-faces | Punctuation/unicode | 0% | **DIFFERENTIATE** (JP kana vs shrug/Lenny) |
| base ↔ `/page/n/` | Same intent by design | slice-only | **CANONICAL** self; not new intent; ads **Review** |
| FUTURE stubs as 200 | Thin scaled/doorway | — | **Omit** route (prefer) — soft-404 risk |
| Primary intersections | Grid dump risk | **all 0** | No Data-forced merge |

### Top 5 actions

1. **DIFFERENTIATE** hub vs `/kaomoji-copy-paste/` (maintain distinct H1/intro; monitor GSC).  
2. **MERGE-into-tag** kawaii→cute — no `/kawaii-emoticons/` doorway.  
3. **KEEP** sad↔crying; verify cry **301**s post-deploy.  
4. **Pagination:** self-canonical crawlable 2–15; escalate NOINDEX only if GSC soft-404/duplicate waste.  
5. **FUTURE** love/angry/shy/kiss/excited/shrug/dog/bunny/bear = **tags until gated** — no new routes.

---

## G. Canonical audit

| Check | Spec | Status |
|---|---|---|
| Self-canonical | Apex HTTPS + trailing slash | `pageMetadata` + `metadataBase` |
| Pagination canonical | Page N → `/…/page/N/` | `lib/seo.ts` pageNumber path |
| `/page/1/` | 301 → bare | next.config + runtime redirect |
| Sitemap ⊆ indexables | No aliases/search/stubs | 88 URLs |
| Redirects stack | Aliases 301 to primary | Shipped in `next.config.ts` |
| Search/filter | Not indexable | robots Disallow; no sitemap |
| Host | Apex | Enforce www/http at Cloudflare at deploy |

---

## H. Explicit bans

1. No individual face pages.  
2. No synonym doorways (cry/crying, kawaii/cute, plurals, copy-paste word-order as parallel 200s).  
3. No thin FUTURE indexables until gate.  
4. No tag/filter/query result URLs in the index.  
5. Do not copy research/Google guidance packs into the app tree as shippable content.

---

## I. Primary counts + AdSense density (Data SoT)

| Primary | Count | Crawlable | Density call |
|---|---:|---:|---|
| cute | 6422 | 15 | **Eligible** (≥500) |
| happy | 5042 | 15 | **Eligible** |
| japanese | 6774 | 15 | **Eligible** |
| sad | 2982 | 15 | **Eligible** |
| text-faces | 2878 | 15 | **Eligible** |
| cat | 309 | 4 | **Review** (200–499) |
| crying | 279 | 3 | **Review** (200–499) |
| FUTURE (no SitePage) | 0 | — | **Not-suitable** |

Cross-link: Search test vs Monetization test in `ADSENSE-READINESS-AUDIT.md` and INTENT-PAGE-MAP. Publisher inventory-value + Copy clearance (box AdSense guidance) — never promise approval.

---

## J. Soft-overlap (Data summary)

Primary ∩ = **0** all pairs. Flagged (≥15% or ≥200): **none**. Highest: cat→cute 10.68%. Full matrix: Data §5.

---

## K. Detection stub

Optional: `scripts/detect-title-h1-dups.mjs` — flag duplicate titleSegment/heading/description among page-1 URLs.  
Always: manual review template before any new indexable route (re-run Data overlap after catalog edits).

---

## L. Decision log

| Decision | Outcome |
|---|---|
| `/kawaii-emoticons/` | **Do not ship** — MERGE-into-tag cute |
| sad vs crying | **KEEP both** |
| Pagination NOINDEX | **Not** default — GSC first |
| Face pages | **Banned** |
| FUTURE landings | **Tags until gated** |

---

## M. Sources

**App:** `lib/site.ts`, `lib/seo.ts`, `lib/category-pagination.ts`, `app/sitemap.ts`, `app/robots.txt`, `next.config.ts`, `data/index.ts`.  
**Docs SoT:** `CONTENT-UNIQUENESS-AUDIT-DATA.md`, `INTENT-PAGE-MAP.md`.  
**Research (box RO):** kaomoji-handoff BUILD-BRIEF, FINAL-EXEC-SUMMARY, TECHNICAL-SEO-SPEC, 03b clusters.  
**Google (box RO):** `GOOGLE-SEO-GUIDANCE.md`, `GOOGLE-ADSENSE-PUBLISHER-GUIDANCE.md`.

---

## N. Change log

| Date (PKT) | Change |
|---|---|
| 2026-09-24 | Data skeleton |
| 2026-09-24 | **SEO freeze:** full inventory (88), INTENT map merge, Data numbers, cannibalization, canonicals, Google cites |

---

*Freeze-ready. No new routes. No git. No ranking/AdSense promises.*

# Content Uniqueness Audit — DATA draft (PK Data)

**Author:** PK Data (Grok executor)  
**Date:** 2026-09-24 (PKT)  
**Scope:** Catalog density, category/tag model, Semrush cluster → KEEP/MERGE/FUTURE map, soft-overlap cannibalization matrix, AdSense density floors.  
**Hard rules applied:** No new routes, no face pages, no synonym doorways, no git, research packs not copied into `data/`.  
**Catalog measured:** `data/items.json` Wave A+B mega import — **24,686** faces · **197** `popular: true`.

SEO merges this sibling into `CONTENT-UNIQUENESS-AUDIT.md` (titles/H1/URL inventory = SEO TODO).

---

## 1. Site keys & money pages (`lib/site.ts`)

| SitePage path | Label | `category` key | Group | Money? |
|---|---|---|---|---|
| `/` | Home | *(none — popular/full mix)* | hub | Hub |
| `/cute-kaomoji/` | Cute | `cute` | browse | **Yes** |
| `/happy-kaomoji/` | Happy | `happy` | browse | **Yes** |
| `/cat-kaomoji/` | Cat | `cat` | browse | **Yes** |
| `/sad-kaomoji/` | Sad | `sad` | browse | **Yes** |
| `/crying-kaomoji/` | Crying | `crying` | browse | **Yes** |
| `/kaomoji-copy-paste/` | Copy and paste | *(none — popular strip)* | browse | Utility (no primary bucket) |
| `/japanese-emoticons/` | Japanese | `japanese` | browse | **Yes** |
| `/text-faces/` | Text faces | `text-faces` | browse | **Yes** |
| `/about/`, `/contact/`, `/privacy/`, `/terms/` | Trust | — | trust | No |

**Money category keys (primary grid filter):** `cute`, `happy`, `cat`, `sad`, `crying`, `japanese`, `text-faces`.

**Not a SitePage today (do not invent routes):** `kawaii-emoticons`, love, angry, shrug, shy, kiss, excited, dog, bunny, bear.

---

## 2. Tags vs categories (data model)

From `data/types.ts` + `data/index.ts`:

- `categories[0]` = **primary** — drives `getByCategory(id, { primaryOnly: true })` grids, search scope, pagination, `countByCategory`.
- Later `categories[]` entries = secondary (related / cross-link). **Wave B measurement:** every face has **exactly one** category string; `anyCatCounts === primaryCounts` for all money keys (no secondary category membership yet).
- `tags[]` / `aliases[]` = chips + search text only — **not routes**.
- `CATEGORY_SEARCH` in `data/index.ts` attaches research phrases to the **primary** for search docs (e.g. cry→`crying`, kawaii→`cute`, shrug→`text-faces`) — still not doorways.

---

## 3. Primary counts table (Wave B)

| Primary key | Primary count | Any-`categories[]` count | Full ceil pages (`/96`) | Crawlable pages (cap 15) |
|---|---:|---:|---:|---:|
| `cute` | **6422** | 6422 | 67 | 15 |
| `happy` | **5042** | 5042 | 53 | 15 |
| `cat` | **309** | 309 | 4 | 4 |
| `sad` | **2982** | 2982 | 32 | 15 |
| `crying` | **279** | 279 | 3 | 3 |
| `japanese` | **6774** | 6774 | 71 | 15 |
| `text-faces` | **2878** | 2878 | 30 | 15 |
| **Σ money primaries** | **24686** | — | — | — |

`otherPrimary`: **empty** — every catalog face is bucketed into one of the seven money primaries.

Constants: `PAGE_GRID_LIMIT = 96`, `MAX_PAGINATION_PAGES = 15`, `PAGINATED_SLUGS` = seven money paths above (`lib/category-pagination.ts`).

---

## 4. AdSense density floors (Data guidance for money pages)

Thresholds for **this** audit (primary face count on the money page grid pool):

| Floor | Primary count | Meaning |
|---|---|---|
| **Eligible** | ≥ 500 | Dense enough to treat as AdSense-ready money page (content depth). |
| **Review** | 200–499 | Keep page; improve unique intro/FAQ/related before leaning on ads. |
| **Not-suitable** | < 200 **or** no `SitePage` | Thin money page **or** FUTURE cluster without a owned URL — do not treat as ad inventory; stay tags/search only. |

### Applied to measured Wave B counts

| Page / cluster | Primary count | AdSense density call |
|---|---:|---|
| `/japanese-emoticons/` (`japanese`) | 6774 | **Eligible** |
| `/cute-kaomoji/` (`cute`) | 6422 | **Eligible** |
| `/happy-kaomoji/` (`happy`) | 5042 | **Eligible** |
| `/sad-kaomoji/` (`sad`) | 2982 | **Eligible** |
| `/text-faces/` (`text-faces`) | 2878 | **Eligible** |
| `/cat-kaomoji/` (`cat`) | 309 | **Review** |
| `/crying-kaomoji/` (`crying`) | 279 | **Review** |
| `/kaomoji-copy-paste/` | n/a (popular strip, 197 popular) | Utility — not a primary bucket; ads policy = SEO/ops call |
| FUTURE candidates (love/angry/shrug/shy/…) | 0 primary / tags only | **Not-suitable** as money pages until gated launch |

---

## 5. Soft-overlap / cannibalization matrix

### 5a. Primary-bucket exclusivity

By construction `categories[0]` is exclusive. Pairwise `|A ∩ B|` on primary ID sets:

**All 21 money pairs = 0.** Primary buckets are fully disjoint. No primary-grid dump duplication across money URLs.

### 5b. Soft overlap

Share of category **A**’s primary faces that also carry **B** via `categories[]` **or** synonym tags/aliases (`cute`↔kawaii; `happy`↔smile/smiling/excited; `cat`↔neko/nyanko/catmoji/kitty/kitten; `crying`↔cry/sob/tears/tear; `text-faces`↔shrug/lenny; etc.).

Cells: `hit (pct of A)`. Diagonal = —.

| A ↓ \ B → | cute | happy | cat | sad | crying | japanese | text-faces |
|---|---|---|---|---|---|---|---|
| **cute** (6422) | — | 120 (1.87%) | 18 (0.28%) | 1 (0.02%) | 0 | 0 | 0 |
| **happy** (5042) | 1 (0.02%) | — | 0 | 0 | 0 | 0 | 0 |
| **cat** (309) | 33 (**10.68%**) | 2 (0.65%) | — | 0 | 0 | 0 | 0 |
| **sad** (2982) | 33 (1.11%) | 14 (0.47%) | 0 | — | 1 (0.03%) | 0 | 0 |
| **crying** (279) | 2 (0.72%) | 4 (1.43%) | 0 | 7 (2.51%) | — | 0 | 0 |
| **japanese** (6774) | 0 | 0 | 0 | 0 | 0 | — | 0 |
| **text-faces** (2878) | 0 | 0 | 0 | 0 | 0 | 0 | — |

**Flag threshold:** soft-overlap ≥ **15%** OR absolute ≥ **200** faces → SEO manual review.

**Flagged pairs:** **none.** Highest soft pair is **cat → cute** at 10.68% (33 faces) — below threshold; still the only pair worth a light SEO eye (related-links already point cute↔cat).

Note: soft overlap is almost entirely **tag** driven; Wave B has no secondary `categories[]` membership, so category-inclusion soft overlap is zero beyond primary.

---

## 6. Cluster map — KEEP / MERGE / FUTURE

Sources (read-only on box): `kaomoji-handoff/03b-semrush-keyword-clusters.md`, `02-semrush-keyword-overview.md`, `BUILD-BRIEF.md`, `DATA-SCHEMA-BRIEF.md`. Volumes = Semrush US as captured 2026-09-24 — do not invent.

| Cluster / seeds | Semrush anchors (vol) | Recommendation | Owner URL / home | Notes |
|---|---|---|---|---|
| cute / kawaii / aesthetic | cute kaomoji 6.6K; kawaii emoticons 4.4K; aesthetic 210 | **KEEP** money page; kawaii/aesthetic = **MERGE-into-tag** | `/cute-kaomoji/` | `CATEGORY_SEARCH.cute` already lists kawaii + aesthetic phrases. **Do not** ship `/kawaii-emoticons/` as synonym doorway unless SEO proves distinct SERP intent + unique grid. |
| happy / smiling / excited* | happy 4.4K; kaomoji happy 3.6K; smiling 720; excited 590 | **KEEP** happy; smiling **MERGE-into-tag**; excited = tag now, **FUTURE** only if distinct | `/happy-kaomoji/` | Excited stays tag until density + intent gate. |
| cat / neko | cat kaomoji 3.6K KD4 | **KEEP** | `/cat-kaomoji/` | Best volume×ease wedge; density **Review** (309). |
| sad | sad kaomoji 2.4K | **KEEP** | `/sad-kaomoji/` | Tearful faces intentionally **not** dumped here (site intro). |
| cry / crying / tears / sob | crying 2.4K; kaomoji cry 1.6K; kaomoji crying 1.3K | **KEEP** crying; cry/sob/tears **MERGE** via redirects + tags | `/crying-kaomoji/` | Redirects already: `/cry-kaomoji`, `/kaomoji-cry`, `/kaomoji-crying` → crying. Density **Review** (279). |
| japanese emoticons | japanese emoticons 8.1K | **KEEP** | `/japanese-emoticons/` | Largest primary bucket. |
| text faces / faces / shrug* | text faces 4.4K; shrug kaomoji 1.3K | **KEEP** text-faces; shrug phrase in `CATEGORY_SEARCH` | `/text-faces/` | shrug tag count in catalog = 0 exact; phrase search still attached. Dedicated `/shrug-…` = **FUTURE** only if distinct intent + density. |
| copy / paste utility | kaomoji copy and paste 8.1K; copy paste variants | **KEEP** utility (not a category bucket) | `/kaomoji-copy-paste/` | Redirects merge word-order aliases. |
| love | love kaomoji 880; kaomoji love 1.0K | **FUTURE-landing** (gated) | tags only today (600 faces tagged `love`) | Needs distinct intent + primary density before SitePage. |
| angry / mad | angry 720; mad 140 | **FUTURE-landing** (gated) | tags (`angry` 922) | Strong tag density candidate; no route yet. |
| shy | shy ~590 (gap) | **FUTURE-landing** (gated) | tags (`shy` 746) | |
| kiss | kiss ~590 | **FUTURE-landing** (gated) | tags (`kiss` 375) | |
| dog / bunny / bear | (animal seeds not fully Magic-captured) | **FUTURE-landing** (gated) | tags 111 / 52 / 34 | Too thin for money pages now. |
| cute-crying / happy-cry hybrids | long-tails ~20 | **MERGE-into-tag** | prefer `crying` or `cute` tags — **no** hybrid doorway | Same emotional SERP neighborhood as crying/cute. |
| Typos (kamoji, koamoji, …) | various | **MERGE** redirects → hub or category | `next.config.ts` already | Not intents. |

### Tag-only density snapshot (candidates, not routes)

| Tag | Faces with tag | Primary count | Call |
|---|---:|---:|---|
| angry | 922 | 0 | FUTURE (strongest tag pool) |
| shy | 746 | 0 | FUTURE |
| excited | 622 | 0 | tag→happy for now; FUTURE if split |
| love | 600 | 0 | FUTURE |
| kiss | 375 | 0 | FUTURE |
| hug | 365 | 0 | MERGE-into-tag (happy/cute) |
| cry | 260 | 0 | MERGE → crying |
| kawaii | 144 | 0 | MERGE → cute |
| dog / bunny / bear | 111 / 52 / 34 | 0 | FUTURE thin |
| shrug (exact tag) | 0 | 0 | phrase on text-faces search only |

---

## 7. Existing redirects (no new synonym doorways)

From `next.config.ts` (permanent):

- **Cry cluster → crying:** `/cry-kaomoji`, `/kaomoji-cry`, `/kaomoji-crying` (+ trailing variants).
- **Copy-paste aliases → `/kaomoji-copy-paste/`:** `/copy-and-paste-kaomoji`, `/kaomoji-copy-and-paste`.
- **Hub typos / plurals:** `/kaomoji`, `/kaomojis`, `/kamoji`, `/koamoji`, `/kaoomoji`, `/kaommoji`, `/kaamoji`, `/kaimoji` → `/`.
- **Plural category → singular money pages:** `/cute-kaomojis` → cute, etc. for happy/cat/sad/crying.
- **Alt singular:** `/japanese-emoticon` → japanese-emoticons; `/text-face` → text-faces; `/sad-kamoji` → sad-kaomoji.
- **Pagination:** `/{slug}/page/1` → bare `/{slug}/` for all seven paginated money paths.

**Do not add** love/angry/shrug/kawaii as public routes that mirror an existing money intent.

---

## 8. App route tree (money vs pagination)

```
app/
  page.tsx                          → /
  cute-kaomoji/page.tsx             → /cute-kaomoji/          (money p1)
  cute-kaomoji/page/[n]/page.tsx   → /cute-kaomoji/page/n/   (n=2..crawlable)
  happy-kaomoji/ …                  (same pattern)
  cat-kaomoji/ …
  sad-kaomoji/ …
  crying-kaomoji/ …
  japanese-emoticons/ …
  text-faces/ …
  kaomoji-copy-paste/page.tsx       → utility (no /page/[n])
  about|contact|privacy|terms/
  sitemap.ts · robots.txt
```

`PAGINATED_SLUGS` keys: `cute-kaomoji`, `happy-kaomoji`, `cat-kaomoji`, `sad-kaomoji`, `crying-kaomoji`, `japanese-emoticons`, `text-faces`.

---

## 9. Explicit Data recommendations (non-negotiable for this audit)

1. **Do NOT create individual face pages** (`/face/[id]` or similar) — one face ≠ a search intent owner.
2. **Do NOT create synonym doorways** (cry vs crying, kawaii vs cute, plural vs singular, word-order copy-paste) — redirects + tags + `CATEGORY_SEARCH` already cover them.
3. **Pagination pages 2–15 are the same intent as page 1** — crawlable depth slices (`priority` 0.5 in sitemap), **not** new intents. Cap remains `MAX_PAGINATION_PAGES = 15`; remainder is search-only inside the category.
4. **One meaningful search intent → one strong page** — FUTURE landings only when (a) Semrush/SERP intent is distinct from an existing money page, (b) primary density clears **Eligible** (≥500) or at least sustained **Review** with unique copy, (c) SEO signs off.
5. **cat** and **crying** stay KEEP money pages but AdSense = **Review** until primary density or unique supporting content improves.
6. Research packs stay on box / outside git tree — only this curated audit markdown lands under `docs/`.

---

## 10. API quick reference (`data/index.ts`)

| Export | Role |
|---|---|
| `countByCategory(id, { primaryOnly? })` | Cheap primary (default) or any-category count |
| `getByCategory` / `getForCategoryPage` | Primary grid + 1-indexed slice |
| `PAGE_GRID_LIMIT` | 96 |
| `MAX_PAGINATION_PAGES` | 15 |
| `ITEM_LIST_LIMIT` | 48 (JSON-LD) |
| `buildSearchDocs` | Tags/aliases + `CATEGORY_SEARCH[primary]` |

`PAGINATED_SLUGS` lives in `lib/category-pagination.ts` (not `data/index.ts`).

---

## 11. Blockers / open for SEO

- Soft-overlap flag list empty — no Data-forced cannibalization fix.
- `anyCatCounts === primaryCounts` — secondary categories unused; if Arch later adds multi-category, re-run soft-overlap.
- Exact tag `shrug` = 0 — confirm whether shrug faces live under `text-faces` names/aliases before any FUTURE shrug URL.
- Main audit titles/H1/URL inventory = **SEO TODO** (see skeleton if present).

---

*End Data draft. Temp compute artifacts `_overlap-*.js/json` may be deleted after SEO merge; they are not SoT.*

---

## 12. Policy alignment note (light cite — not copied into repo)

Principles referenced from box research packs `/workspace/kaomoji-mega/GOOGLE-SEO-GUIDANCE.md` and `GOOGLE-ADSENSE-PUBLISHER-GUIDANCE.md` (read-only; **not** checked into `D:\kaomoji`):

- **Doorway abuse (Search):** pages built to rank for similar query variants that funnel users through less-useful intermediates — maps to our ban on synonym doorways (cry vs crying, kawaii vs cute, plural/typo landings). Prefer one strong intent owner + redirects/tags.
- **Scaled / low-value templates (Search):** volume is fine; mass near-identical SEO landings are not. Money pages need distinct primary grids + unique intros, not keyword funnels to the same dump.
- **AdSense inventory value:** no Google-served ads on screens with low-value or auto-generated-without-curation content; Search-spam (doorway/scaled) URLs are unsafe to monetize. Density floors in §4 (Eligible / Review / Not-suitable) are Data’s curation gate before treating a URL as ad inventory — not an approval promise.

This section cites principles only; source files stay outside the git tree.

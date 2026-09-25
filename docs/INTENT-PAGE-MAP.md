# Intent → Page Map

**Site:** `https://pastekaomoji.com`  
**Reviewed:** 2026-09-24 (PKT)  
**Sources:** `lib/site.ts`, `next.config.ts`, `app/sitemap.ts`, `lib/seo.ts`, `lib/category-pagination.ts`, `data/index.ts`, `data/items.json`.

## Reading rules

- Rows marked **indexable: Yes** are the canonical URLs emitted by the sitemap. `trailingSlash: true` means the rendered canonical has a trailing slash.
- Pagination rows use an explicit `n` range: every integer in that range is an individual indexable URL (75 pagination URLs total). Page 1 is the bare category URL; `/page/1` is permanently redirected to it.
- **Secondary/synonyms are tags-only:** keep them as on-page/search vocabulary, aliases, or supporting copy. Do not create another landing URL for them without a separate intent and manual review.
- “Money” means a browse/utility landing that can satisfy a copy-paste visit. Trust pages are indexable content, but ads are optional and should not overwhelm the page.

## Indexable keyword-to-page map

| URL | Primary | Secondary/synonyms (tags-only) | Intent | Parent/child | Canonical | Indexable | Monetization | Related |
|---|---|---|---|---|---|---|---|---|
| `/` | kaomoji | kaomojis; kamoji; koamoji; kaimoji; kaamoji; text faces; copy paste | Broad library discovery and quick copy | Hub | `/` | Yes | Eligible | — |
| `/cute-kaomoji/` | cute kaomoji | kaomoji cute; kawaii; kawaii kaomoji; kawaii emoticons; aesthetic kaomoji | Browse cute/kawaii faces | Hub → browse child | self | Yes | Eligible | happy; cat; text-faces |
| `/happy-kaomoji/` | happy kaomoji | kaomoji happy; smiling kaomoji; kaomoji smiling; excited kaomoji | Browse smiles, cheers, and waves | Hub → browse child | self | Yes | Eligible | cute; cat; sad |
| `/cat-kaomoji/` | cat kaomoji | neko; nyanko; catmoji; kitty; kitten | Browse cat/animal faces | Hub → browse child | self | Yes | Eligible | cute; happy; text-faces |
| `/sad-kaomoji/` | sad kaomoji | kaomoji sad; sad kamoji; downcast; frown | Browse quiet sad/downcast faces | Hub → browse child | self | Yes | Eligible | crying; happy; cute |
| `/crying-kaomoji/` | crying kaomoji | cry kaomoji; kaomoji cry; kaomoji crying; sob; tearful | Browse crying/tearful faces | Hub → browse child | self | Yes | Eligible | sad; happy; cute |
| `/kaomoji-copy-paste/` | kaomoji copy and paste | copy and paste kaomoji; kaomoji copy paste; copy paste; one-tap copy | Utility: find and copy a face fast | Hub → utility child | self | Yes | Eligible | cute; happy; japanese-emoticons; text-faces |
| `/japanese-emoticons/` | Japanese emoticons | Japanese kaomoji; kaomoji Japanese; Japan kaomoji; punctuation; kana | Browse the classic Japanese-emoticon concept | Hub → browse child | self | Yes | Eligible | text-faces; cute; kaomoji-copy-paste |
| `/text-faces/` | text faces | kaomoji faces; kaomoji face; shrug; shrug kaomoji; Lenny; disapproval; unicode expressions | Browse ASCII/unicode faces beside kaomoji | Hub → browse child | self | Yes | Eligible | japanese-emoticons; cute; kaomoji-copy-paste |
| `/about/` | Paste Kaomoji about | kaomoji library; site information | Understand the site and its purpose | Hub → trust child | self | Yes | Eligible (content; ads optional) | contact; privacy |
| `/contact/` | Paste Kaomoji contact | corrections; face suggestions; site questions; email | Contact the publisher | Hub → trust child | self | Yes | Eligible (content; ads optional) | about; privacy |
| `/privacy/` | Paste Kaomoji privacy | privacy policy; cookies; data handling | Read privacy terms | Hub → trust child | self | Yes | Eligible (content; ads optional) | terms; contact |
| `/terms/` | Paste Kaomoji terms | terms of use; unicode text; free library | Read usage terms | Hub → trust child | self | Yes | Eligible (content; ads optional) | privacy; about |
| `/cute-kaomoji/page/{n}/` (`n=2..15`) | cute kaomoji | same tags-only set as `/cute-kaomoji/` | Same cute browse intent at crawl depth | Child of `/cute-kaomoji/`; not a new intent | self (`/page/n/`) | Yes | Review | same related set as base |
| `/happy-kaomoji/page/{n}/` (`n=2..15`) | happy kaomoji | same tags-only set as `/happy-kaomoji/` | Same happy browse intent at crawl depth | Child of `/happy-kaomoji/`; not a new intent | self (`/page/n/`) | Yes | Review | same related set as base |
| `/cat-kaomoji/page/{n}/` (`n=2..4`) | cat kaomoji | same tags-only set as `/cat-kaomoji/` | Same cat browse intent at crawl depth | Child of `/cat-kaomoji/`; not a new intent | self (`/page/n/`) | Yes | Review | same related set as base |
| `/sad-kaomoji/page/{n}/` (`n=2..15`) | sad kaomoji | same tags-only set as `/sad-kaomoji/` | Same sad browse intent at crawl depth | Child of `/sad-kaomoji/`; not a new intent | self (`/page/n/`) | Yes | Review | same related set as base |
| `/crying-kaomoji/page/{n}/` (`n=2..3`) | crying kaomoji | same tags-only set as `/crying-kaomoji/` | Same crying browse intent at crawl depth | Child of `/crying-kaomoji/`; not a new intent | self (`/page/n/`) | Yes | Review | same related set as base |
| `/japanese-emoticons/page/{n}/` (`n=2..15`) | Japanese emoticons | same tags-only set as `/japanese-emoticons/` | Same Japanese-emoticon browse intent at crawl depth | Child of `/japanese-emoticons/`; not a new intent | self (`/page/n/`) | Yes | Review | same related set as base |
| `/text-faces/page/{n}/` (`n=2..15`) | text faces | same tags-only set as `/text-faces/` | Same text-face browse intent at crawl depth | Child of `/text-faces/`; not a new intent | self (`/page/n/`) | Yes | Review | same related set as base |

### Pagination inventory and depth note

`PAGE_GRID_LIMIT` is 96. Current primary-category counts produce these total/crawlable page ranges:

| Category | Primary faces | Total pages | Sitemap/indexable page 1 | Sitemap/indexable page 2+ |
|---|---:|---:|---|---|
| cute | 6,422 | 67 / capped at 15 | `/cute-kaomoji/` | `/cute-kaomoji/page/2/` … `/page/15/` |
| happy | 5,042 | 53 / capped at 15 | `/happy-kaomoji/` | `/happy-kaomoji/page/2/` … `/page/15/` |
| cat | 309 | 4 | `/cat-kaomoji/` | `/cat-kaomoji/page/2/` … `/page/4/` |
| sad | 2,982 | 32 / capped at 15 | `/sad-kaomoji/` | `/sad-kaomoji/page/2/` … `/page/15/` |
| crying | 279 | 3 | `/crying-kaomoji/` | `/crying-kaomoji/page/2/` … `/page/3/` |
| Japanese | 6,774 | 71 / capped at 15 | `/japanese-emoticons/` | `/japanese-emoticons/page/2/` … `/page/15/` |
| text-faces | 2,878 | 30 / capped at 15 | `/text-faces/` | `/text-faces/page/2/` … `/page/15/` |

Pagination is crawl depth for the **same** category intent, not seven new intents or a license to make thin keyword variants. Each page has a self canonical and a page-number title; page 1 is the canonical bare path. The sitemap currently contains 13 base URLs plus 75 page-2+ URLs.

## Redirects and non-indexable aliases

The following are consolidation controls, not additional pages: permanent 301 redirects land on the canonical URLs and aliases must not be added to the sitemap.

- Cry family: `/cry-kaomoji`, `/kaomoji-cry`, `/kaomoji-crying` (with slash variants) → `/crying-kaomoji/`.
- Copy/paste variants: `/copy-and-paste-kaomoji`, `/kaomoji-copy-and-paste` (with slash variants) → `/kaomoji-copy-paste/`.
- Hub aliases/misspellings: `/kaomojis`, `/kaomoji`, `/kamoji`, `/koamoji`, `/kaoomoji`, `/kaommoji`, `/kaamoji`, `/kaimoji` (with slash variants) → `/`.
- Sad misspelling: `/sad-kamoji` (with slash variant) → `/sad-kaomoji/`.
- Category plurals: `/cute-kaomojis`, `/happy-kaomojis`, `/cat-kaomojis`, `/sad-kaomojis`, `/crying-kaomojis` (with slash variants) → their singular category URL.
- Alternate singulars: `/japanese-emoticon` → `/japanese-emoticons/`; `/text-face` → `/text-faces/` (with slash variants).
- `/page/1` variants for every paginated category → the bare category URL.

## Search and filter URL policy

Search is currently an in-page client interaction, not a public result URL. If query/filter URLs are introduced, they must remain **noindex,follow** and **outside the sitemap**: `/search`, and parameter forms using `q`, `tag`, `filter`, or `mood` are not landing intents. Keep the existing robots disallows and do not create tag/filter doorway pages. Cross-reference: search/filter URLs are **Search indexable: No** and **Ad eligible: Not suitable**; they are not monetization landings.

## Data set-overlap check

`data/items.json` contains 24,686 faces. Primary counts are: cute 6,422; happy 5,042; cat 309; sad 2,982; crying 279; Japanese 6,774; text-faces 2,878. The seven primary sets have **zero pairwise ID overlap** in the current data (each item has one effective primary category; `primaryOnly` and `any` counts are equal). This lowers content-level duplication risk, but does not eliminate semantic/query overlap such as cute ↔ happy or sad ↔ crying. The home and copy-paste utility pages intentionally use broader pools and therefore need differentiated copy and titles rather than another category URL.

## Potential cannibalization (manual review only)

No automatic merge is recommended. Keep one intent owner per URL and use the following actions as editorial guardrails:

| Pair | Why it may overlap | Recommended action |
|---|---|---|
| `/sad-kaomoji/` ↔ `/crying-kaomoji/` | Both target negative-emotion kaomoji; shared “sad/cry” vocabulary and related faces. | **Differentiate:** sad = quiet frowns/downcast; crying = tears/sobbing. Keep cry aliases 301 → crying; link the two pages. |
| `/cute-kaomoji/` ↔ `/happy-kaomoji/` | Smiles and positive affect can satisfy both queries; “cute” and “happy” appear in adjacent copy. | **Differentiate:** cute = kawaii/blush/soft affection; happy = cheers/waves/grins. Keep separate category filters; cross-link only. |
| `/cute-kaomoji/` ↔ `/cat-kaomoji/` | Cat faces are often called cute/kawaii; cat terms can appear in cute results. | **Differentiate:** cat/ neko is the animal intent; cute is the aesthetic/mood intent. Keep cat terms tags-only on cute. |
| `/` ↔ `/kaomoji-copy-paste/` | Both are broad kaomoji copy surfaces and both can rank for “kaomoji” and “copy paste.” | **Differentiate:** home owns broad library discovery; utility owns the explicit copy-and-paste task. Avoid duplicating H1/intro and use clear internal links. |
| `/japanese-emoticons/` ↔ all kaomoji categories | “Japanese emoticons” is the parent concept of many category faces. | **Differentiate:** Japanese page owns the classic construction/language concept; mood/animal pages own the specific use case. Do not canonicalize it to a mood page. |
| `/japanese-emoticons/` ↔ `/text-faces/` | Both can include punctuation/unicode expressions and classic emoticons. | **Differentiate:** Japanese = kana/punctuation kaomoji; text-faces = ASCII/unicode faces such as shrug/Lenny/disapproval. Keep alternate terms tags-only. |
| Any base category ↔ its `/page/n/` URLs | Same title root, H1 intent, and category pool by design. | **Keep as crawl depth:** self-canonical each valid page, unique page-number title, sitemap pages 2–15 only where data exists; never treat pagination as a new keyword intent. |

The current 301 map already handles near-duplicate slugs (`cry`, copy/paste word order, plurals, misspellings, singular aliases). Recheck title/H1/intro and actual query splits manually after launch before considering any merge, canonical change, or noindex action.

## Monetization and indexing cross-reference

- **Eligible:** `/`, the eight browse/utility money landings, and trust pages as content (ads optional on trust pages).
- **Review:** all pagination URLs; preserve usability and avoid placing ads between the first useful faces and the copy action.
- **Not suitable:** search/filter result URLs, query variants, tag-only views, and redirect aliases.
- Search indexability and ad eligibility are separate decisions: a page can be indexable without being a good ad landing, and noindex search/filter URLs must remain outside the sitemap regardless of ad policy.

## GSC status and post-launch checks

**GSC is N/A until deployment** to `pastekaomoji.com`; there is no live performance or coverage signal in this source review.

After launch, check:

1. Sitemap fetch/processing and submitted-vs-indexed counts (13 base + 75 pagination URLs).
2. URL Inspection for each base family and representative page 2/last page: HTTP status, selected canonical, robots/indexing, rendered H1/title.
3. Coverage/exclusions for redirects, duplicate Google-selected canonicals, crawled-not-indexed, and soft-404 pagination.
4. Queries/impressions/clicks by intent owner: cute, happy, cat, sad, crying, copy-paste, Japanese emoticons, and text faces; watch synonym leakage between the flagged pairs.
5. Crawl stats and logs for alias loops, `/page/1`, query traps, and out-of-range pagination.
6. Core Web Vitals and mobile usability on home, category page 1, and pagination; verify copy/search interactions still work.
7. Search appearance/rich-result validation for BreadcrumbList, WebSite, and ItemList; confirm no accidental Product/Offer markup.
8. Ad review separately: viewability, policy, layout shift, and whether ads interfere with copy intent; do not monetize search/filter result pages.

*Draft is an intent/cannibalization map, not an instruction to auto-merge pages or create new tag URLs.*

## Indexability versus ad eligibility

| URL class | Search indexable | Ad eligible | Sitemap |
|---|---|---|---|
| Base hub, browse, utility, and trust URLs | Yes | Eligible (trust ads optional) | Yes |
| Valid pagination URLs | Yes | Review | Yes |
| Search/filter paths and query variants | No (`noindex,follow`) | Not suitable | No |
| Redirect aliases and `/page/1` | No; 301 target only | Not suitable | No |

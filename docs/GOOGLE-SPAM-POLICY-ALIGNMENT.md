# Google Search spam policies — Paste Kaomoji alignment

**Purpose:** Map [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies) (and related Search Essentials rules) to how this repo is built. This is **not** a guarantee of ranking, indexation, or manual-action immunity.

**Last reviewed:** 2026-09-25 (PKT)

---

## Policy-by-policy snapshot

| Google policy | Risk for kaomoji copy sites | How this project mitigates | Do not do next |
|---------------|----------------------------|----------------------------|----------------|
| **Doorway abuse** | Many synonym URLs (cute/cry/lenny/shrug) | ~100 **same-host 301s** merge synonyms into one owner URL (`next.config.ts`); chip synonyms stay tags, not pages (`lib/site.ts` copy) | New `/cry-kaomoji`, `/lenny-face`, `/kawaii-kaomoji` as separate indexable 200s |
| **Scaled content abuse** | 24k faces → 24k URLs | **No per-face URLs**; grids capped at 96/page; crawlable pagination **≤15**; page **2+ = noindex,follow** (`lib/seo.ts`); sitemap = **page-1 only** (`app/sitemap.ts`) | Auto-generating hundreds of tag landings or city/keyword doorway pages |
| **Scraping** | MIT kaomoji-collection reuse | **Attribution + license** on `/about/`; dedupe, English names, tags, mood integrity filters (`data/`, `data/category-integrity.ts`) | Republish raw JSON with no curation or source credit |
| **Cloaking** | Different HTML for Google vs users | SSR grids match what users copy; hub vs copy-paste **rotate** popular order only (`data/index.ts` comment) | User-agent sniffing, hidden SERP-only text |
| **Sneaky redirects** | Off-domain or mobile-only spam | Middleware only normalizes `?page=` → `/page/n/` on **same host** (`middleware.ts`) | Redirect search users to ads or third-party domains |
| **Hidden text / links** | Keyword blocks in CSS | `sr-only` used for accessible labels/skip link only; nav arrows use `opacity-0` when disabled (UI, not copy) | White-on-white keyword lists, off-screen SEO paragraphs |
| **Keyword stuffing** | “copy paste kaomoji” repeated | Unique `titleSegment` / H1 / description per page (`node scripts/detect-title-h1-dups.mjs`); FAQs are human-readable | City lists, phone-number blocks, unnatural repetition in body |
| **Link spam** | Paid link schemes | No paid link programs in repo; external source link is attribution | Buy links, widget link farms, comment spam |
| **Misleading functionality** | Fake generators / fake copy | Generator builds real strings; copy uses clipboard API with success/fail states | Fake “unlimited” tools or copy buttons that do nothing |
| **Thin affiliation** | Affiliate grids | **No affiliate program** in current release | Thin merchant-description-only pages |
| **User-generated spam** | Open uploads | **No** user posts/comments/uploads | Forums without moderation |
| **Site reputation abuse** | Random third-party SEO articles | No third-party article hosting; all templates in-repo | Hosting unrelated “casino/loan” articles for domain authority |
| **Policy circumvention** | New domains/subfolders after penalty | Single brand domain; redirects consolidate, not multiply | Spin up `pastekaomoji.net` with same grids after an action |
| **Machine-generated traffic** | Scraping Google | No rank bots in codebase | Automated queries to Google Search |

---

## Helpful, reliable, people-first content (Search Essentials)

| Signal | Status |
|--------|--------|
| Clear purpose per URL (mood, format, or utility) | **Yes** — `lib/site.ts` intros, definitions, FAQs |
| Working product (copy, search, generator) | **Yes** |
| Trust pages (about, privacy, terms, contact) | **Yes** |
| Cannibalization control (one intent owner) | **Yes** — see `docs/INTENT-PAGE-MAP.md` + recent title/description split (hub vs copy-paste vs JP vs text faces) |
| Soft-404 avoidance | Empty category grids avoided via data + integrity filters; monitor GSC “Crawled – not indexed” |

---

## Operational checklist (post-deploy)

1. **Search Console** — Manual actions report empty; Security issues empty.
2. **Page indexing** — Money URLs index; pagination page 2+ may be “Excluded by noindex” (expected).
3. **After deploys** — Re-run `node scripts/detect-title-h1-dups.mjs`; spot-check canonical on hub + one category.
4. **Growth guardrails** — Improve **existing** money URLs (copy, FAQs, data quality) before adding new indexable routes.
5. **If expanding moods** — Require unique H1, intro, FAQ, and enough **distinct** grid inventory; otherwise keep as **tags/chips** only.

---

## Related official docs

- [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Search Essentials](https://developers.google.com/search/docs/essentials)
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Spam updates](https://developers.google.com/search/docs/appearance/spam-updates) (systems change; policies above are the stable rules)

---

## Related repo docs

- `docs/POST-LAUNCH-GSC-CHECKLIST.md` — monitoring
- `docs/CONTENT-UNIQUENESS-AUDIT.md` — intent + canonical freeze
- `docs/INTENT-PAGE-MAP.md` — keyword ownership

*No ranking promises.*

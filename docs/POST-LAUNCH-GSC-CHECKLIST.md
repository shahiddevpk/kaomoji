# Paste Kaomoji — Post-launch Google Search Console checklist

**Date:** 2026-09-24 (PKT / Asia/Karachi)  
**Purpose:** Monitoring and verification after launch — **not** a ranking promise, traffic forecast, or AdSense approval guarantee.  
**Scope:** https://pastekaomoji.com (see `lib/site.ts`)

---

## Principles

1. **Monitoring only** — use GSC to observe indexing, coverage, and query reality; do not treat any metric as a guarantee of growth or monetization readiness.  
2. **Essentials / Spam = rules** — follow Google Search Essentials and Spam policies as constraints on what you ship (doorways, thin scaled pages, cloaking, scraped content without value, deceptive redirects). This checklist does **not** certify compliance.  
3. **No promises** — indexing ≠ ranking; ranking ≠ clicks; clicks ≠ AdSense eligibility. Outcomes depend on Google systems and user behavior outside this repo.

---

## 0) One-time property setup (verify once)

| Step | Action | Done? |
|------|--------|-------|
| 1 | Add URL-prefix or Domain property for `pastekaomoji.com` in Search Console | ☐ |
| 2 | Complete ownership verification (DNS / HTML file / meta — prefer DNS at Cloudflare if that is where the domain lives) | ☐ |
| 3 | Confirm preferred host (www vs apex) matches live redirects and `siteConfig.url` (`https://pastekaomoji.com`) | ☐ |
| 4 | Submit sitemap: `https://pastekaomoji.com/sitemap.xml` (generated from `app/sitemap.ts`) | ☐ |
| 5 | Confirm `robots.txt` is reachable and matches `app/robots.txt` (Allow `/`; Disallow query search patterns + `/api/`) | ☐ |

---

## 1) First 7–14 days — crawl & index health

Check on a fixed cadence (e.g. twice in week 1, then weekly). Record date + notes; do not “fix” by mass URL spam.

| Check | Where in GSC | What “healthy” looks like (observation, not a target) | Escalate if… |
|-------|--------------|------------------------------------------------------|--------------|
| Sitemap processed | Sitemaps | Sitemap fetched without recurring parse errors; submitted URL count roughly matches money URLs + crawlable `/page/n` | Persistent “couldn’t fetch” / parse errors |
| Indexing → Pages | Page indexing | Primary money URLs (`/`, categories page 1, `/kaomoji-copy-paste/`) move toward “Indexed” over time | Large share of money URLs stuck “Discovered / not indexed” for weeks with no crawl |
| Why pages aren’t indexed | Page indexing reasons | Reasons make sense (e.g. not found, redirect, excluded by robots) | Soft-404 / crawled-not-indexed on thin pagination or duplicate aliases you thought were redirected |
| HTTPS / experience | Experience (as available) | No sitewide HTTPS or mobile usability blockers reported | Sitewide mobile or HTTPS failures |
| Core Web Vitals (when data exists) | Experience → CWV | Use as a diagnostic signal only | Sudden regression after shipping ads or huge grids |

**Money URL spot-checks (URL Inspection):**

- `/`  
- `/kaomoji-copy-paste/`  
- `/cute-kaomoji/`, `/happy-kaomoji/`, `/cat-kaomoji/`, `/sad-kaomoji/`, `/crying-kaomoji/`  
- `/japanese-emoticons/`, `/text-faces/`  
- One pagination sample per large category (e.g. `/cute-kaomoji/page/2/`)  
- Trust: `/about/`, `/privacy/` (should be indexable but low priority)

For each: request indexing **sparingly** and only after a real content/tech fix — not as a daily habit.

---

## 2) Redirect & thin-URL hygiene (rules-aligned)

These are **shipping rules** aligned with avoiding doorway / duplicate thin URLs — not GSC score boosters.

| Rule | Verify |
|------|--------|
| Synonym merges stay permanent redirects | `/cry-kaomoji` → `/crying-kaomoji/`; copy-paste aliases → `/kaomoji-copy-paste/`; misspellings → hub (see `next.config.ts`) |
| No `/page/1/` indexed | `/…/page/1/` → bare category (already redirected) |
| No monetized or indexable `?q=` search URLs | `robots.txt` disallows query patterns; do not add a public `/search` indexable results page |
| Pagination depth stays capped | Crawlable pages ≤ `MAX_PAGINATION_PAGES` (15); do not expand solely for impressions |
| One primary intent per money URL | Keep unique H1/intro in `lib/site.ts`; do not clone near-duplicate category URLs |

If GSC reports duplicates or “Alternate page with proper canonical,” confirm `pageMetadata` canonicals still match the intended owner URL.

---

## 3) Ongoing monitoring cadence

| Cadence | Actions |
|---------|---------|
| Weekly | Page indexing delta; sitemap status; spot-check 2–3 money URLs in Inspection |
| Weekly (after traffic exists) | Performance → Queries / Pages: note which money URLs get impressions; do not chase vanity queries with new thin pages |
| After each meaningful deploy | Re-check robots + sitemap; inspect 1 hub + 1 category + 1 pagination URL |
| Before enabling ads | Re-read `docs/ADSENSE-READINESS-AUDIT.md`; GSC health is an input, **not** approval |

---

## 4) Performance report — how to read without overclaiming

| Signal | Use it for | Do not use it for |
|--------|------------|-------------------|
| Impressions | “Is Google showing this URL at all?” | Promising growth |
| Clicks / CTR | Diagnosing title/description mismatch | Guaranteeing revenue |
| Average position | Rough SERP context (noisy) | Exact rank tracking or contracts |
| Page with impressions but no clicks | Review title/meta quality | Automatically spawning more URLs |

Export CSV occasionally for your own notes; keep PII out of shared docs.

---

## 5) Manual actions & spam reports

| Event | Response |
|-------|----------|
| Manual action appears | Stop shipping risky URL patterns; fix the cited issue; request review only after a real fix |
| Security issues | Treat as incident; do not ignore for SEO vanity |
| Sudden indexed-URL collapse | Check deploy, robots, canonicals, server errors — not “more sitemap pings” |

Remember: **Spam policies are rules.** Avoid scaled thin pages, scraped libraries without added value, cloaking, sneaky redirects, and doorway-style keyword URLs. This site’s design (merged synonyms, capped pagination, curated categories) is meant to stay on the right side of those rules — keep it that way.

---

## 6) Explicit non-goals (no promises)

- This checklist does **not** promise indexation of all 24k faces or all pagination depths.  
- This checklist does **not** promise rankings for “kaomoji,” “cute kaomoji,” or any query.  
- This checklist does **not** promise AdSense approval or ad revenue.  
- Passing every checkbox does **not** equal “SEO done.”

---

## Related docs

- `docs/ADSENSE-READINESS-AUDIT.md` — monetization readiness (ads currently absent)  
- `docs/PERF-SEO-AUDIT.md` — performance / crawlability engineering audit  
- `app/sitemap.ts`, `app/robots.txt`, `lib/site.ts`, `next.config.ts`

---

## PK SEO freeze augmentation (2026-09-24 PKT)

**Additive only — does not replace New Bot checklist above.**

### Pre-deploy reality
- Site **not deployed** to pastekaomoji.com yet → **no live GSC data** now. Use this checklist after launch only.
- Expected sitemap size to verify: **88** indexable URLs (13 base + 75 pagination page 2+) per `docs/CONTENT-UNIQUENESS-AUDIT.md` / `INTENT-PAGE-MAP.md`.

### Rules vs diagnostics
- **Search Essentials + Spam Policies = the rules** (doorway abuse, scaled content abuse, soft-404 risk on empty/thin 200s). Cite box RO `/workspace/kaomoji-mega/GOOGLE-SEO-GUIDANCE.md`.
- **GSC = diagnostic only** (Page indexing, soft 404, Crawl Stats, query↔page). Not a separate policy rulebook and **not** an AdSense approval signal.
- Watch synonym leakage on flagged pairs: sad↔crying, cute↔happy, cute↔cat, hub↔copy-paste, japanese↔text-faces (see uniqueness + intent maps).

### Related freeze docs
- `docs/CONTENT-UNIQUENESS-AUDIT.md` (freeze-ready uniqueness / cannibalization / canonical)
- `docs/CONTENT-UNIQUENESS-AUDIT-DATA.md` (Data numbers SoT)
- `docs/INTENT-PAGE-MAP.md` (keyword ownership + monetization columns)
- `docs/ADSENSE-READINESS-AUDIT.md` (ads layers; indexable ≠ ad-eligible)

*No ranking or indexation promises.*
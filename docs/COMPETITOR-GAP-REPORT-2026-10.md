# Competitor Gap Report & Win Plan — 2026-10-19

Inputs: GSC last 7 days, Semrush US keyword export (2,000 rows), live US SERP checks, competitor page reviews, and a prose-word audit of every sitemap URL on a production build.

## 1. Where we stand (GSC, last 7 days)

| Signal | Reading | Meaning |
|---|---|---|
| Halloween cluster | ~470 impressions, 12 clicks, position 6–7 | Our only page-1 cluster. Seasonal peak is Oct 24–31. |
| Near page 1 | bowing 8.7, pout 8.7–10, kaomoji sakura 9.0 | Title and content tweaks can push these into the top 5. |
| Head terms | kaomoji 38, kaomoji copy and paste 47, Japanese emoticons 55–85 | Normal for a young domain; needs authority, not more pages. |
| "Japanese emoji" variants | ~10 queries, positions 55–86 | No title used the phrase before this update. |

## 2. Competitor landscape (US SERPs)

| Competitor | Strength | Weakness we exploit |
|---|---|---|
| gyanmirai.com/tools/kaomoji | 34.5k faces, 53 moods, anatomy section, ~180 faces per small mood | Heavy cross-promo (JLPT courses, WhatsApp groups); generic per-page prose |
| kaomojis.jp | Claims 56k faces, 300+ categories, gacha and history UX | Many thin near-duplicate categories (Peek/Peeking, Thinking/Thoughtful) |
| kaomojisymbols.com, emojicombos.com | Rank above us for Halloween; split faces by type (ghost, zombie, bat) | Older design, thin explanations |
| cute-kaomoji.com, japaneseemoticons.me/.org | Long-standing category pages | Small sets per page, dated UX |
| coddy.tech | Meaning tables, 10 languages | 403s bots on some pages; small library |
| Chrome Web Store extensions | Dominate lenny face, cute symbols and uwu SERPs | No real content: easy to outrank with a quality page |

## 3. Fixed in this pass

| Gap | Before | After |
|---|---|---|
| Halloween page leads with generic shocked faces (ﾟДﾟ) | Bounce risk on our best query | Spooky-glyph ranking, 40 curated faces, 351 total, 8 "by type" sections (ghost, pumpkin, bat, zombie, devil, skull, vampire/witch, spider/candy) |
| Halloween title and copy | "Halloween Kaomoji ヾ(⌐■_■)ノ♪", ~280 words | "Halloween Kaomoji 🎃 350+ Spooky Text Faces to Copy and Paste", ~500 words, 6 FAQs |
| Bear page | 8 faces (competitor: 179) | 145 faces (bear-shape glyph tagging) |
| Table Flip page | 22 faces | 68 faces (+26 curated variants; rifle art excluded) |
| Hug page | 67 faces (heart-only rule applied by mistake) | 194 faces (own arms-based rule) |
| Near-page-1 titles | Pout, Flower, Bowing, Japanese emoticons | Now include pouting / sakura / thank you & sorry / Japanese emoji |
| Seasonal internal links | None | Home banner links Halloween (Oct) and Christmas (Dec 1–25) |

## 4. Remaining gaps, ranked by impact

1. **Christmas before Dec 1** (seasonal, US). Repeat the Halloween playbook: curated faces, type groups (Santa, tree, snow, gifts, reindeer), stronger title. Add **Thanksgiving kaomoji** (US, Nov 27) as a new page.
2. **Thin mood pages (276–330 words)**: christmas, confused, dance, birthday, shocked, sleepy, smug, thinking, crying, hug. Add 4–6 "face → meaning → parts" cards per page (the home page anatomy block, made page-specific), plus 1–2 unique FAQs. Target 500+ words of unique prose.
3. **Type groups on big pages**: cat (paws, sleeping, angry), bear, heart, crying, angry, happy. Competitors sort by type; users search "cat paw kaomoji" or "sleeping cat kaomoji".
4. **Missing intents competitors own**: sorry/apology (gyanmirai: 255 faces), thank you, sick, scared, dead inside, cool/sunglasses, devil, music/singing, sneaky, magic. Tag data for these is noisy (the "sick" tag holds wind symbols), so build each with glyph rules plus curated faces, as done for lenny, bear and table flip. Never ship a page from a raw tag.
5. **UX features competitors have**: favorites (star a face, kept in the browser), a random face button, "load more" on tag pages (keep /page/n links for crawl), and face counts on tiles.
6. **Authority** (main blocker for head terms): Chrome extension SERPs show demand. Ship a lightweight "Paste Kaomoji" Chrome extension that links back, plus Pinterest boards for symbols and emoji combos. Avoid link schemes (Google spam policy).
7. **Trust pages**: Contact is 51 words. Add who runs the site, response time, and what to send (corrections, face suggestions).
8. **Brand assets**: favicon.ico, apple-touch-icon.png and og.png are still the old orange.
9. **Home title overlap**: home title contains "Kaomoji Copy and Paste" (the primary of /kaomoji-copy-paste/). Check GSC page-level queries before changing.

## 5. How we win

- **Quality over count.** kaomojis.jp has 300+ categories, many of them thin. One strong page per real intent, with type groups and meanings, beats near-duplicates and stays safe under the helpful-content and scaled-content policies.
- **Seasonal sprints.** Halloween proved seasonal queries rank fast on a young domain. Ship each holiday page 4–6 weeks before its peak: Thanksgiving and Christmas now, then Valentine's Day (mid-January) and Easter.
- **Own the gaps Chrome extensions hold** (lenny, shrug, uwu, cute symbols, emoji combos): those SERPs have no real content competitor.
- **Teach, don't just list.** Meaning and anatomy content is what competitors' generic pages lack, and it answers the "what does X mean" queries in the keyword export.

## 6. Status update — 2026-10-19

| Gap | Status |
|---|---|
| Orphan / weak internal links | Done. Related links are now reciprocal; every content page has at least 4 in-content inbound links (was 1). All 59 sitemap URLs reachable from home. |
| Christmas before Dec 1 | Done. 190 faces, 6 type groups (Santa, tree, snow, gift, reindeer, greetings), new title and copy, pagination. |
| Thanksgiving (US) | Done. New `/thanksgiving-kaomoji/` (39 faces, type groups); home banner shows it in November. |
| Thin mood pages | Done. "Popular faces and what they mean" cards on 36 pages; thinnest content page 276 → 367 words. |
| Type groups on big pages | Done. Cat, bear, heart, crying, angry, happy, cute, sad (plus Halloween, Christmas, Thanksgiving, Sorry, Thank You). |
| Missing intents | Done: `/sorry-kaomoji/` (148), `/thank-you-kaomoji/` (171), `/cool-kaomoji/` (50). Bowing now owns only the bow/dogeza gesture. Deferred: sick (4 real faces), scared (noisy glyphs, overlaps Shocked), devil (Ψ also used as a fork; Halloween has a devil group). |
| UX | Done: face counts on home tiles, random face button. Deferred: favorites (Recently copied covers most of the need). |
| Contact page | Done (51 → 157 words). |
| Brand images | Done: favicon, apple-touch-icon, og.png in the violet theme. |
| Authority / Chrome extension | Not code in this repo — needs a decision. |
| Home title overlap | Still open — check GSC page-level queries first. |

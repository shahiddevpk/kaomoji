# Paste Kaomoji

Phase 1 skeleton for [pastekaomoji.com](https://pastekaomoji.com): a kaomoji and Japanese emoticon copy-paste library. The domain is on Cloudflare. This release is the App Router app, the information architecture, and the pages that will hold the library. It is not the full catalog.

## Phase 1 (this repo)

- Next.js App Router, TypeScript, ESLint, Tailwind
- Server-rendered layout: header, primary nav, footer
- One indexable page per intent already chosen for launch (no extra doorway URLs)
- Shared site config and metadata helpers (`lib/site.ts`, `lib/seo.ts`)
- `app/robots.txt` and `app/sitemap.ts` covering those routes
- A tiny sample grid so pages are not empty, plus a disabled Copy button
- Trust pages: about, contact, privacy, terms

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm run start
```

`npm run build` must pass before a deploy. The production server defaults to port 3000.

## Routes

| Path | Role |
| --- | --- |
| `/` | Hub |
| `/cute-kaomoji` | Cute |
| `/happy-kaomoji` | Happy |
| `/cat-kaomoji` | Cat |
| `/sad-kaomoji` | Sad |
| `/crying-kaomoji` | Crying (also the home for “cry kaomoji”; no second URL) |
| `/kaomoji-copy-paste` | Copy-and-paste utility |
| `/japanese-emoticons` | Japanese emoticons |
| `/text-faces` | Text faces |
| `/about` | About |
| `/contact` | Contact (`hello@pastekaomoji.com`) |
| `/privacy` | Privacy |
| `/terms` | Terms |

`/robots.txt` and `/sitemap.xml` are generated with the app. Canonical URLs use `https://pastekaomoji.com`.

## Layout of the code

- `app/` — routes, root layout, `robots.txt`, `sitemap.ts`
- `components/ui/` — button primitive
- `components/layout/` — header, footer, trust page shell
- `components/kaomoji/` — grid, category page, copy stub
- `data/` — `Kaomoji` type and the sample set
- `lib/site.ts` — `siteName`, `url`, page registry
- `lib/seo.ts` — titles, canonicals, Open Graph, breadcrumb JSON-LD
- `content/` — reserved for later editorial; no posts yet

## Phase 2 should add

- A curated dataset (hundreds, not a scraped dump) using the `Kaomoji` shape: `id`, `face`, `name`, `categories`, `tags`, `aliases`, `popular`
- Distinct faces per category page, not the same grid repeated
- Client search or mood filter over name, tags, aliases, and categories
- One-tap copy, a visible “Copied” toast, and a Recently Copied strip
- `ItemList` JSON-LD only after a page has its real list
- New category URLs only when the set is actually different: kawaii emoticons, shy, kiss, love, angry, excited, dog, bunny, bear, shrug, faces
- Canonicals or redirects for synonyms (`cry` → `/crying-kaomoji`, copy-paste word order → `/kaomoji-copy-paste`). Do not publish thin duplicates

Still later, not Phase 2: the face maker, favourites, AdSense, and a blog.

## Deploy

Not wired in this phase. The intended target is Cloudflare Pages or Workers, since the domain is already on Cloudflare. Point `hello@pastekaomoji.com` at a real inbox before launch.

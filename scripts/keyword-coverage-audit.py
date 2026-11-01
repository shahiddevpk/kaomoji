#!/usr/bin/env python3
"""Compare Semrush kaomoji keywords (vol>=70) against site pages + redirects."""
from __future__ import annotations

import csv
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KEYWORD_SOURCES = [
    Path(r"C:\Users\muham\Downloads\keywordmagic_kaomoji_us_pages-1-12_2026-10-24.csv"),
    Path(r"C:\Users\muham\Downloads\keywordmagic_pumpkin_us_pages-1-20_2026-10-24.csv"),
    Path(r"C:\Users\muham\Downloads\keywordmagic_emoji_us_pages-21-35_2026-10-24.csv"),
    Path(r"C:\Users\muham\Downloads\kaomoji_keywords_vol70plus_sorted.csv"),
]
MERGED_KEYWORDS_CSV = ROOT / "docs" / "kaomoji-keywords-vol70plus-merged.csv"
SITE_TS = ROOT / "lib" / "site.ts"
NEXT_CONFIG = ROOT / "next.config.ts"
OUT_NOT_COVERED = ROOT / "docs" / "kaomoji-keywords-not-covered.csv"
MIN_VOLUME = 70


def _volume(row: dict) -> int:
    try:
        return int(float(row.get("Volume") or 0))
    except ValueError:
        return 0


def _difficulty(row: dict) -> float:
    d = (row.get("Difficulty") or "").strip()
    if not d:
        return 999.0
    try:
        return float(d)
    except ValueError:
        return 999.0


def _has_kaomoji(keyword: str) -> bool:
    return bool(re.search(r"kaomoji", keyword or "", re.I))


def load_keywords() -> list[dict]:
    by_kw: dict[str, dict] = {}
    for path in KEYWORD_SOURCES:
        if not path.exists():
            continue
        with path.open(newline="", encoding="utf-8-sig") as f:
            for row in csv.DictReader(f):
                kw = (row.get("Keyword") or "").strip()
                if not kw or not _has_kaomoji(kw):
                    continue
                if _volume(row) < MIN_VOLUME:
                    continue
                key = kw.lower()
                if key not in by_kw or _volume(row) > _volume(by_kw[key]):
                    by_kw[key] = row

    merged = sorted(
        by_kw.values(),
        key=lambda r: (-_volume(r), _difficulty(r), (r.get("Keyword") or "").lower()),
    )
    MERGED_KEYWORDS_CSV.parent.mkdir(parents=True, exist_ok=True)
    if merged:
        fieldnames = list(merged[0].keys())
        with MERGED_KEYWORDS_CSV.open("w", newline="", encoding="utf-8") as f:
            w = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
            w.writeheader()
            w.writerows(merged)
    return merged


def parse_pages(site_text: str) -> list[dict]:
    pages = []
    # Split on path entries at object level (browse/hub pages)
    for m in re.finditer(
        r'path:\s*"([^"]+)"[\s\S]*?heading:\s*"([^"]+)"[\s\S]*?titleSegment:\s*"([^"]+)"',
        site_text,
    ):
        path, heading, title = m.group(1), m.group(2), m.group(3)
        if path.startswith("/") and path.count("/") <= 2:
            pages.append({"path": path.rstrip("/") + "/", "heading": heading, "title": title})
    return pages


def parse_redirects(config_text: str) -> dict[str, str]:
    redirects: dict[str, str] = {}
    for m in re.finditer(
        r'source:\s*"([^"]+)"[\s\S]*?destination:\s*"([^"]+)"',
        config_text,
    ):
        src, dest = m.group(1), m.group(2)
        if ":n" in src or ":path" in src:
            continue
        src = src.rstrip("/") or "/"
        dest = dest if dest.endswith("/") else dest + "/"
        key = src if src.startswith("/") else "/" + src
        redirects[key] = dest
        redirects[key + "/"] = dest
    return redirects


def slug_from_keyword(kw: str) -> list[str]:
    kw = kw.lower().strip()
    tokens = [t for t in re.split(r"\s+", kw) if t not in ("kaomoji", "kaomojis", "kaomojii")]
    slugs: list[str] = []
    if not tokens:
        slugs.extend(["/", "/kaomoji-copy-paste/"])
        return slugs
    base = "-".join(tokens)
    slugs.append(f"/{base}-kaomoji/")
    slugs.append(f"/kaomoji-{base}/")
    if len(tokens) == 2:
        rev = "-".join(reversed(tokens))
        slugs.append(f"/{rev}-kaomoji/")
        slugs.append(f"/kaomoji-{rev}/")
    # singularize last token heuristic (sparkles -> sparkle)
    if tokens[-1].endswith("s") and len(tokens[-1]) > 3:
        sing = tokens[:-1] + [tokens[-1].rstrip("s")]
        slugs.append(f"/{'-'.join(sing)}-kaomoji/")
    return slugs


def resolve_url(slug: str, redirects: dict[str, str]) -> str | None:
    s = slug.rstrip("/") + "/"
    if s in redirects:
        return redirects[s]
    plain = s.rstrip("/")
    if plain in redirects:
        return redirects[plain]
    # check if path exists as page (no redirect needed)
    return s


def heading_matches(keyword: str, heading: str, title: str) -> str:
    k = keyword.lower()
    h = heading.lower()
    t = title.lower()
    if h == k or h.replace(" kaomoji", "") + " kaomoji" == k:
        return "primary_heading"
    if k in h and "kaomoji" in h:
        return "heading_partial"
    if k in t:
        return "title"
    # mood word only
    tokens = [x for x in k.split() if x not in ("kaomoji", "kaomojis")]
    if tokens and tokens[0] in h:
        return "mood_in_heading"
    return ""


def site_mention_count(keyword: str, site_text: str) -> int:
    return len(re.findall(re.escape(keyword), site_text, re.I))


def classify(keyword: str, pages: list[dict], redirects: dict[str, str], site_text: str) -> tuple[str, str, str]:
    """Returns (status, canonical_url, reason). status: full | low | none"""
    k = keyword.lower().strip()
    slugs = slug_from_keyword(k)
    canonical = None
    via = None

    page_paths = {p["path"] for p in pages}

    for slug in slugs:
        norm = slug if slug.endswith("/") else slug + "/"
        dest = resolve_url(norm, redirects)
        if dest and dest in page_paths:
            canonical = dest
            via = f"slug {norm}"
            break
        if norm in page_paths:
            canonical = norm
            via = f"direct {norm}"
            break
        if dest == "/" and k in ("kaomoji", "kaomojis", "kaomojii"):
            canonical = "/"
            via = "hub"
            break

    # Special phrase redirects / known aliases not in slug builder
    alias_map = {
        "kaomoji": "/",
        "kaomojis": "/",
        "kaomoji copy and paste": "/kaomoji-copy-paste/",
        "kaomoji copy paste": "/kaomoji-copy-paste/",
        "copy and paste kaomoji": "/kaomoji-copy-paste/",
        "copy paste kaomoji": "/kaomoji-copy-paste/",
        "cute kaomoji": "/cute-kaomoji/",
        "kaomoji cute": "/cute-kaomoji/",
        "cute kaomojis": "/cute-kaomoji/",
        "happy kaomoji": "/happy-kaomoji/",
        "kaomoji happy": "/happy-kaomoji/",
        "kaomoji cat": "/cat-kaomoji/",
        "kaomoji faces": "/japanese-emoticons/",
        "kaomoji face": "/japanese-emoticons/",
        "japanese kaomoji": "/japanese-emoticons/",
        "kaomoji japanese": "/japanese-emoticons/",
        "kaomojis copy and paste": "/kaomoji-copy-paste/",
        "smile kaomoji": "/smile-kaomoji/",
        "smiling kaomoji": "/smile-kaomoji/",
        "kaomoji smile": "/smile-kaomoji/",
        "excited kaomoji": "/excited-kaomoji/",
        "kawaii kaomoji": "/cute-kaomoji/",
        "thumbs up kaomoji": "/thumbs-up-kaomoji/",
        "cute kaomoji copy and paste": "/cute-kaomoji/",
        "kaomoji symbols": "/cute-symbols/",
        "kaomoji keyboard": "/guides/how-to-type-kaomoji/",
        "aesthetic kaomoji": "/cute-kaomoji/",
        "christmas kaomoji": "/christmas-kaomoji/",
        "kaomoji table flip": "/table-flip-kaomoji/",
        "table flip kaomoji": "/table-flip-kaomoji/",
        "lenny kaomoji": "/lenny-face/",
        "shrug kaomoji": "/shrug-kaomoji/",
        "uwu kaomoji": "/uwu-kaomoji/",
        "text faces kaomoji": "/text-faces/",
        "ascii kaomoji": "/text-faces/",
        "multi line kaomoji": "/art-kaomoji/",
        "multiline kaomoji": "/art-kaomoji/",
        "kaomoji art": "/art-kaomoji/",
        "kaomoji borders": "/border-kaomoji/",
        "border kaomoji": "/border-kaomoji/",
        "kaomoji border": "/border-kaomoji/",
        "kaomoji dividers": "/border-kaomoji/",
        "divider kaomoji": "/border-kaomoji/",
        "kaomoji divider": "/border-kaomoji/",
        "roblox kaomoji": "/roblox-kaomoji/",
        "kaomoji for roblox": "/roblox-kaomoji/",
        "kaomoji tattoo": "/guides/kaomoji-tattoo-ideas/",
        "kaomoji font": "/guides/kaomoji-font-and-display/",
        "kaomoji soft copy": "/guides/kaomoji-soft-copy/",
        "porter robinson kaomoji": "/guides/porter-robinson-kaomoji/",
        "kaomoji porter robinson": "/guides/porter-robinson-kaomoji/",
        "kaomoji app": "/kaomoji-app/",
        "kaomoji smiling": "/smile-kaomoji/",
        "keyboard kaomoji": "/guides/how-to-type-kaomoji/",
        "kaomoji faces copy and paste": "/kaomoji-copy-paste/",
        "kaomoji japanese emoticons": "/japanese-emoticons/",
        "japanese emoticons kaomoji": "/japanese-emoticons/",
        "japan kaomoji": "/japanese-emoticons/",
        "list of kaomoji": "/kaomoji-copy-paste/",
        "kaomoji list": "/kaomoji-copy-paste/",
        "funny kaomoji": "/giggling-kaomoji/",
        "kaomoji funny": "/giggling-kaomoji/",
        "kaomoji symbol": "/cute-symbols/",
        "symbols kaomoji": "/cute-symbols/",
        "kaomoji emoji": "/emoji-combos/",
        "kaomoji emojis": "/emoji-combos/",
        "kaomojio": "/",
        "how to type kaomoji": "/guides/how-to-type-kaomoji/",
        "cry kaomoji": "/crying-kaomoji/",
        "kaomoji cry": "/crying-kaomoji/",
        "kaomoji crying": "/crying-kaomoji/",
        "blush kaomoji": "/shy-kaomoji/",
        "blushing kaomoji": "/shy-kaomoji/",
        "puppy kaomoji": "/dog-kaomoji/",
        "kaomoji puppy": "/dog-kaomoji/",
        "rabbit kaomoji": "/bunny-kaomoji/",
        "kaomoji rabbit": "/bunny-kaomoji/",
        "sleep kaomoji": "/sleepy-kaomoji/",
        "sleeping kaomoji": "/sleepy-kaomoji/",
        "tired kaomoji": "/sleepy-kaomoji/",
        "shock kaomoji": "/shocked-kaomoji/",
        "kaomoji shock": "/shocked-kaomoji/",
        "kaomoji shocked": "/shocked-kaomoji/",
        "surprised kaomoji": "/shocked-kaomoji/",
        "winking kaomoji": "/wink-kaomoji/",
        "annoyed kaomoji": "/pout-kaomoji/",
        "evil kaomoji": "/devil-kaomoji/",
        "cat kaomojis": "/cat-kaomoji/",
        "sad kaomojis": "/sad-kaomoji/",
        "kaomojis sparkles": "/sparkle-kaomoji/",
        "sparkles kaomoji": "/sparkle-kaomoji/",
        "laugh kaomoji": "/giggling-kaomoji/",
        "kaomoji laugh": "/giggling-kaomoji/",
        "kaomoji laughing": "/giggling-kaomoji/",
        "laughing kaomoji": "/giggling-kaomoji/",
        "kissing kaomoji": "/kiss-kaomoji/",
        "hugging kaomoji": "/hug-kaomoji/",
        "dancing kaomoji": "/dance-kaomoji/",
        "waving kaomoji": "/waving-kaomoji/",
        "kaomoji waving": "/waving-kaomoji/",
        "kaomoji wave": "/waving-kaomoji/",
        "bowing kaomoji": "/bowing-kaomoji/",
        "kaomoji bowing": "/bowing-kaomoji/",
        "kaomoji angry": "/angry-kaomoji/",
        "mad kaomoji": "/angry-kaomoji/",
        "kaomoji aesthetic": "/cute-kaomoji/",
        "worried kaomoji": "/nervous-kaomoji/",
        "kaomoji nervous": "/nervous-kaomoji/",
        "sweat kaomoji": "/nervous-kaomoji/",
        "sweating kaomoji": "/nervous-kaomoji/",
        "kaomoji sweat": "/nervous-kaomoji/",
        "kaomoji sweating": "/nervous-kaomoji/",
        "kaomoji meaning": "/guides/what-is-kaomoji/",
        "what is kaomoji": "/guides/what-is-kaomoji/",
        "what is a kaomoji": "/guides/what-is-kaomoji/",
        "kaomoji keyboard android": "/guides/how-to-type-kaomoji/",
        "kaomoji keyboard iphone": "/guides/how-to-type-kaomoji/",
        "kaomoji keyboard app": "/guides/how-to-type-kaomoji/",
        "cat kaomoji copy and paste": "/cat-kaomoji/",
        "happy kaomoji copy and paste": "/happy-kaomoji/",
        "cute cat kaomoji": "/cat-kaomoji/",
        "cute kaomoji faces": "/cute-kaomoji/",
        "kaomoji emoticons": "/japanese-emoticons/",
        "kaomoji copy": "/kaomoji-copy-paste/",
        "embarrassed kaomoji": "/shy-kaomoji/",
        "cutecore kaomojis": "/cute-kaomoji/",
        "kaomoji kawaii": "/cute-kaomoji/",
        "cats kaomoji": "/cat-kaomoji/",
        "eating kaomoji": "/food-kaomoji/",
        "kaomojii": "/",
        "kaomoji maker": "/kaomoji-generator/",
        "kaomojis happy": "/happy-kaomoji/",
        "happy cry kaomoji": "/crying-kaomoji/",
        "happy crying kaomoji": "/crying-kaomoji/",
        "in love kaomoji": "/love-kaomoji/",
        "yay kaomoji": "/happy-kaomoji/",
        "mischievous kaomoji": "/smug-kaomoji/",
        "kitty kaomoji": "/cat-kaomoji/",
        "stars kaomoji": "/star-kaomoji/",
        "sparkle ribbon kaomoji": "/sparkle-kaomoji/",
        "star kaomoji copy and paste": "/star-kaomoji/",
        "kaomoji heart": "/heart-kaomoji/",
        "kaomoji love": "/love-kaomoji/",
        "kaomoji sparkles": "/sparkle-kaomoji/",
        "kaomoji sad": "/sad-kaomoji/",
        "kaomoji star": "/star-kaomoji/",
        "kaomoji hug": "/hug-kaomoji/",
        "kaomoji blush": "/shy-kaomoji/",
        "kaomoji dog": "/dog-kaomoji/",
        "kaomoji music": "/dance-kaomoji/",
        "music kaomoji": "/dance-kaomoji/",
        "kaomoji wink": "/wink-kaomoji/",
        "kaomoji animals": "/cat-kaomoji/",
        "animal kaomoji": "/bear-kaomoji/",
        "gothic kaomoji": "/devil-kaomoji/",
        "goth kaomoji": "/devil-kaomoji/",
        "devil kaomoji": "/devil-kaomoji/",
        "cake kaomoji": "/birthday-kaomoji/",
        "birthday kaomoji": "/birthday-kaomoji/",
        "sun kaomoji": "/happy-kaomoji/",
        "fox kaomoji": "/cat-kaomoji/",
        "bat kaomoji": "/halloween-kaomoji/",
        "halloween kaomoji": "/halloween-kaomoji/",
        "zombie kaomoji": "/halloween-kaomoji/",
        "dead kaomoji": "/sick-kaomoji/",
        "silly kaomoji": "/smug-kaomoji/",
        "tongue out kaomoji": "/uwu-kaomoji/",
        "how to make kaomoji": "/kaomoji-generator/",
        "dog kaomojis": "/dog-kaomoji/",
        "狗头 kaomoji": "/dog-kaomoji/",
    }
    if k in alias_map:
        canonical = alias_map[k]
        via = "alias_map"

    page = next((p for p in pages if p["path"] == canonical), None) if canonical else None

    if not canonical:
        mentions = site_mention_count(keyword, site_text)
        if mentions >= 3:
            return "low", "", f"copy_only_{mentions}_mentions"
        if mentions >= 1:
            return "low", "", f"copy_only_{mentions}_mentions"
        return "none", "", "no_page_no_redirect"

    match = ""
    if page:
        match = heading_matches(k, page["heading"], page["title"])

    # Full: exact dedicated URL slug OR primary heading equals keyword pattern
    slug_exact = any(
        s.rstrip("/") + "/" == canonical
        for s in slugs
        if s.rstrip("/") + "/" in page_paths or resolve_url(s, redirects) == canonical
    )
    tokens = [x for x in k.split() if x not in ("kaomoji", "kaomojis", "kaomojii")]
    expected_slug = f"/{'-'.join(tokens)}-kaomoji/" if tokens else "/"
    exact_slug_match = canonical == expected_slug or canonical == f"/kaomoji-{'-'.join(tokens)}/"

    if exact_slug_match and match in ("primary_heading", "heading_partial", "title", "mood_in_heading"):
        return "full", canonical, via or match

    if match == "primary_heading" and tokens and tokens[0] in page["heading"].lower():
        # e.g. star kaomoji on /star-kaomoji/
        if canonical.endswith(f"{tokens[0]}-kaomoji/") or canonical.endswith(f"{tokens[-1]}-kaomoji/"):
            return "full", canonical, via or match

    # Reversed kaomoji X -> /x-kaomoji/ is still full if page exists
    if len(tokens) == 2 and canonical == f"/{tokens[1]}-kaomoji/" and k.startswith("kaomoji "):
        return "full", canonical, "reversed_order_ok"

    if via == "alias_map" and canonical:
        if k in ("kaomoji", "kaomojis", "kaomojii", "kaomojio"):
            return "full", canonical, "hub_primary"
        if exact_slug_match:
            return "full", canonical, via
        if canonical.startswith("/guides/"):
            return "full", canonical, via
        if canonical in page_paths:
            return "full", canonical, via
        return "low", canonical, via

    if page and match:
        return "low", canonical, f"{via or ''}_{match}".strip("_")

    return "low", canonical, via or "weak_match"


def main() -> None:
    site_text = SITE_TS.read_text(encoding="utf-8")
    config_text = NEXT_CONFIG.read_text(encoding="utf-8")
    pages = parse_pages(site_text)
    redirects = parse_redirects(config_text)
    keywords = load_keywords()

    not_covered: list[dict] = []
    low_covered: list[dict] = []
    full: list[dict] = []

    for row in keywords:
        kw = row["Keyword"]
        status, url, reason = classify(kw, pages, redirects, site_text)
        enriched = {**row, "CoverageStatus": status, "MatchedURL": url, "CoverageReason": reason}
        if status == "none":
            not_covered.append(enriched)
        elif status == "low":
            low_covered.append(enriched)
        else:
            full.append(enriched)

    # Refine: re-classify "none" with grep across whole project
    proj_text_parts = []
    for rel in [
        "lib/site.ts",
        "lib/guides.ts",
        "lib/blog.ts",
        "next.config.ts",
        "data/home-content.ts",
        "components/kaomoji/category-tiles.tsx",
        "extension/README.md",
    ]:
        p = ROOT / rel
        if p.exists():
            proj_text_parts.append(p.read_text(encoding="utf-8", errors="ignore"))
    proj_blob = "\n".join(proj_text_parts)

    guide_low_keywords = {
        "kaomoji keyboard android": ("/guides/how-to-type-kaomoji/", "guide_android_section"),
        "kaomoji keyboard iphone": ("/guides/how-to-type-kaomoji/", "guide_iphone_section"),
        "kaomoji keyboard app": ("/guides/how-to-type-kaomoji/", "guide_no_app_copy_paste"),
        "keyboard kaomoji": ("/guides/how-to-type-kaomoji/", "guide_keyboard_phrase"),
        "how to make kaomoji": ("/kaomoji-generator/", "generator_page"),
        "how to type kaomoji": ("/guides/how-to-type-kaomoji/", "guide_title_match"),
    }

    still_none = []
    for row in not_covered:
        kw = row["Keyword"]
        k = kw.lower()
        if k in guide_low_keywords:
            url, reason = guide_low_keywords[k]
            row["CoverageStatus"] = "low"
            row["CoverageReason"] = reason
            row["MatchedURL"] = url
            low_covered.append(row)
            continue
        if k == "kaomoji app" and "/kaomoji-app/" in proj_blob:
            row["CoverageStatus"] = "full"
            row["CoverageReason"] = "kaomoji_app_landing"
            row["MatchedURL"] = "/kaomoji-app/"
            full.append(row)
            continue
        if k == "cutecore kaomojis" and re.search(r"cute|kawaii|aesthetic", proj_blob, re.I):
            row["CoverageStatus"] = "low"
            row["CoverageReason"] = "cute_kawaii_partial_not_cutecore"
            row["MatchedURL"] = "/cute-kaomoji/"
            low_covered.append(row)
            continue
        if re.search(re.escape(kw), proj_blob, re.I):
            row["CoverageStatus"] = "low"
            row["CoverageReason"] = "project_mention_no_landing"
            row["MatchedURL"] = ""
            low_covered.append(row)
        else:
            still_none.append(row)
    not_covered = still_none

    # Manual override pass for obvious dedicated pages missed by parser
    path_by_mood = {p["path"]: p for p in pages}
    for row in keywords:
        kw = row["Keyword"].lower()
        tokens = [t for t in kw.split() if t not in ("kaomoji", "kaomojis", "kaomojii")]
        if not tokens:
            continue
        pth = f"/{tokens[0]}-kaomoji/"
        if pth in path_by_mood and row["Keyword"] in [r["Keyword"] for r in not_covered]:
            # move from not covered if first token matches existing page
            for i, r in enumerate(not_covered):
                if r["Keyword"] == row["Keyword"]:
                    not_covered.pop(i)
                    low_covered.append(
                        {
                            **row,
                            "CoverageStatus": "low",
                            "MatchedURL": pth,
                            "CoverageReason": "related_page_not_exact_intent",
                        }
                    )
                    break

    fieldnames = list(keywords[0].keys()) + ["CoverageStatus", "MatchedURL", "CoverageReason"]
    OUT_NOT_COVERED.parent.mkdir(parents=True, exist_ok=True)
    with OUT_NOT_COVERED.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        w.writeheader()
        for r in sorted(not_covered, key=lambda x: (-int(x.get("Volume") or 0), x["Keyword"])):
            w.writerow(r)

    low_sorted = sorted(low_covered, key=lambda x: (-int(x.get("Volume") or 0), x["Keyword"]))

    print(f"Merged keyword list: {MERGED_KEYWORDS_CSV}")
    print(f"Total keywords: {len(keywords)}")
    print(f"Full: {len(full)}")
    print(f"Low: {len(low_sorted)}")
    print(f"Not covered: {len(not_covered)}")
    print(f"Wrote: {OUT_NOT_COVERED}")
    print("\n--- NOT COVERED ---")
    for r in not_covered:
        print(f"{r['Volume']:>5}  {r['Keyword']}")
    print("\n--- LOW (all) ---")
    for r in low_sorted:
        print(f"{r['Volume']:>5}  {r['Keyword']}  -> {r.get('MatchedURL','')}  ({r.get('CoverageReason','')})")


if __name__ == "__main__":
    main()

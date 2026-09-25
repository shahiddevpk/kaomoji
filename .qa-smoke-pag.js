const { chromium } = require("playwright");

function contrast(fg, bg) {
  const parse = (c) => {
    if (c.startsWith("#")) {
      let h = c.slice(1);
      if (h.length === 3) h = h.split("").map((x) => x + x).join("");
      const n = parseInt(h, 16);
      return [n >> 16 & 255, n >> 8 & 255, n & 255];
    }
    return (c.match(/\d+/g) || []).slice(0, 3).map(Number);
  };
  const lum = (c) => {
    const [r, g, b] = parse(c).map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const a = lum(fg), b = lum(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}
function hex(rgb) {
  const m = rgb && rgb.match(/\d+/g);
  return m ? "#" + m.slice(0, 3).map((n) => (+n).toString(16).padStart(2, "0")).join("") : null;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const out = { base: process.env.PW_BASE, fail: [], pages: {} };

  async function probe(path, w) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto(process.env.PW_BASE + path, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(700);
    const d = await page.evaluate(() => {
      const t = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
      const body = getComputedStyle(document.body);
      const vis = (el) => {
        if (!el) return false;
        const s = getComputedStyle(el), r = el.getBoundingClientRect();
        return s.display !== "none" && s.visibility !== "hidden" && r.width > 0 && r.height > 0;
      };
      const nav =
        [...document.querySelectorAll("nav")].find((n) => /previous|next/i.test(n.textContent || "")) ||
        document.querySelector("nav[aria-label*=agination i]");
      const links = [...(nav ? nav.querySelectorAll("a,button,span") : [])];
      const byText = (re) => links.find((el) => re.test((el.textContent || "").replace(/\s+/g, " ").trim()));
      const prev = byText(/previous|prev/i);
      const next = byText(/^next$/i) || byText(/\bnext\b/i);
      const current = (nav && nav.querySelector("[aria-current=page]")) ||
        links.find((el) => el.getAttribute("aria-current") === "page");
      const styleOf = (el) => {
        if (!el) return null;
        const s = getComputedStyle(el), r = el.getBoundingClientRect();
        return {
          text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40),
          tag: el.tagName,
          bg: s.backgroundColor,
          fg: s.color,
          fw: s.fontWeight,
          fs: s.fontSize,
          h: Math.round(r.height),
          cls: el.className.toString().slice(0, 140),
          vis: vis(el),
        };
      };
      const cta = [...document.querySelectorAll("a")].find((a) => /copy a face/i.test(a.textContent || ""));
      const header = document.querySelector("header");
      const menu = [...document.querySelectorAll("header button")].find((b) => /menu/i.test(b.textContent || ""));
      const logo = header && header.querySelector("a[href='/']");
      const search = header && header.querySelector("input[type=search]");
      const order = [logo, search, cta, menu]
        .filter(vis)
        .sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left)
        .map((el) => (el === logo ? "logo" : el === search ? "search" : el === cta ? "cta" : "menu"));
      return {
        tokens: {
          bg: t("--background"),
          primary: t("--primary"),
          muted: t("--muted"),
          border: t("--border"),
          secondary: t("--secondary"),
        },
        bodyBg: body.backgroundColor,
        bodyFg: body.color,
        mutedSample: (() => {
          const m = document.querySelector(".type-meta");
          return m ? getComputedStyle(m).color : null;
        })(),
        navFound: !!nav,
        prev: styleOf(prev),
        next: styleOf(next),
        current: styleOf(current),
        copyCount: [...document.querySelectorAll("a")].filter((a) => /copy a face/i.test(a.textContent || "")).length,
        order,
        hScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        match640: matchMedia("(min-width: 640px)").matches,
      };
    });
    await page.close();
    const bodyR = contrast(d.bodyFg, d.bodyBg);
    const mutedR = d.mutedSample ? contrast(d.mutedSample, d.bodyBg) : null;
    const isOrange = (s) => s && hex(s.bg) === "#f5911c";
    const whiteOn = (s) => s && hex(s.fg) === "#ffffff";
    const orangeContrast = d.next && isOrange(d.next) ? contrast(d.next.fg, d.next.bg) : null;
    return {
      path, w, d, bodyR, mutedR,
      nextOrange: isOrange(d.next), nextWhite: whiteOn(d.next),
      prevOrange: isOrange(d.prev), prevWhite: whiteOn(d.prev),
      curOrange: isOrange(d.current), curWhite: whiteOn(d.current),
      orangeContrast,
    };
  }

  for (const w of [375, 768, 1280]) {
    const p1 = await probe("/cute-kaomoji/", w);
    const p2 = await probe("/cute-kaomoji/page/2/", w);
    out.pages[w] = { p1, p2 };
    if ((p1.d.tokens.bg || "").toLowerCase() !== "#ffffff") out.fail.push(w + ":bg");
    if (p1.bodyR < 4.5) out.fail.push(w + ":body " + p1.bodyR.toFixed(2));
    if (p1.mutedR != null && p1.mutedR < 4.5) out.fail.push(w + ":muted " + p1.mutedR.toFixed(2));
    if (p1.d.hScroll || p2.d.hScroll) out.fail.push(w + ":hscroll");
    if (!p1.nextOrange || !p1.nextWhite) out.fail.push(w + ":p1-next-not-orange");
    if (p1.prevOrange) out.fail.push(w + ":p1-prev-should-be-quiet");
    if ((p1.d.next && p1.d.next.h) < 44) out.fail.push(w + ":p1-next-touch");
    if (!p2.prevOrange || !p2.prevWhite) out.fail.push(w + ":p2-prev-not-orange");
    if (!p2.curOrange || !p2.curWhite) out.fail.push(w + ":p2-current-not-orange");
    if ((p2.d.prev && p2.d.prev.h) < 44 || (p2.d.current && p2.d.current.h) < 44) out.fail.push(w + ":p2-touch");
    if (p1.orangeContrast != null && p1.orangeContrast < 3) out.fail.push(w + ":orange-contrast " + p1.orangeContrast.toFixed(2));
    if (w < 640 && p1.d.copyCount !== 0) out.fail.push(w + ":cta-leak");
    if (w >= 640 && p1.d.copyCount !== 1) out.fail.push(w + ":cta-missing count=" + p1.d.copyCount + " match=" + p1.d.match640);
  }

  out.pass = out.fail.length === 0;
  const compact = {};
  for (const w of Object.keys(out.pages)) {
    const { p1, p2 } = out.pages[w];
    compact[w] = {
      bg: p1.d.tokens.bg,
      bodyR: +p1.bodyR.toFixed(2),
      mutedR: p1.mutedR != null ? +p1.mutedR.toFixed(2) : null,
      orangeContrast: p1.orangeContrast != null ? +p1.orangeContrast.toFixed(2) : null,
      p1: {
        next: p1.d.next && { bg: hex(p1.d.next.bg), fg: hex(p1.d.next.fg), h: p1.d.next.h, fw: p1.d.next.fw },
        prev: p1.d.prev && { bg: hex(p1.d.prev.bg), fg: hex(p1.d.prev.fg), h: p1.d.prev.h },
      },
      p2: {
        prev: p2.d.prev && { bg: hex(p2.d.prev.bg), fg: hex(p2.d.prev.fg), h: p2.d.prev.h },
        cur: p2.d.current && { bg: hex(p2.d.current.bg), fg: hex(p2.d.current.fg), h: p2.d.current.h, text: p2.d.current.text },
        next: p2.d.next && { bg: hex(p2.d.next.bg), fg: hex(p2.d.next.fg), h: p2.d.next.h },
      },
      copyCount: p1.d.copyCount,
      order: p1.d.order,
      hScroll: p1.d.hScroll || p2.d.hScroll,
    };
  }
  console.log(JSON.stringify({ pass: out.pass, fail: out.fail, base: out.base, compact }, null, 2));
  await browser.close();
  process.exit(out.pass ? 0 : 2);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

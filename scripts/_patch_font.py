from pathlib import Path
p = Path("app/layout.tsx")
t = p.read_text(encoding="utf-8")
old = '''const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});'''
new = '''const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  // optional: if late, keep fallback forever so LCP text is not font-blocked.
  display: "optional",
  preload: true,
});'''
if old not in t:
    raise SystemExit("geistSans block not found")
p.write_text(t.replace(old, new), encoding="utf-8")
print("layout updated")

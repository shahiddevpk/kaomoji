from pathlib import Path
p = Path("app/page.tsx")
t = p.read_text(encoding="utf-8")
t2 = t.replace('import { connection } from "next/server";\n', "")
t2 = t2.replace("  await connection();\n", "")
# keep Suspense; faces stay sync SC so build can static-pre-render full HTML
t2 = t2.replace(
    "/** Streams after hero shell so intro can paint while faces still land in the same HTML. */\nasync function HomeFacesAndSeo() {",
    "/** Below-hero block (Suspense-friendly). Sync data so build still emits full face HTML. */\nfunction HomeFacesAndSeo() {",
)
if t2 == t:
    raise SystemExit("no changes applied")
p.write_text(t2, encoding="utf-8")
print("removed connection(); HomeFacesAndSeo is sync")

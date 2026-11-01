import sitemap from "@/views/sitemap";
export function GET() {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const body = sitemap()
    .map((e) => {
      const lm = e.lastModified ? `<lastmod>${new Date(e.lastModified).toISOString()}</lastmod>` : "";
      const cf = e.changeFrequency ? `<changefreq>${e.changeFrequency}</changefreq>` : "";
      const pr = e.priority != null ? `<priority>${e.priority}</priority>` : "";
      return `<url><loc>${esc(e.url)}</loc>${lm}${cf}${pr}</url>`;
    })
    .join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

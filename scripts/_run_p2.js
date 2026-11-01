const fs = require("fs");
const path = require("path");

function write(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, "utf8");
  console.log("wrote", p);
}

function esc(str) {
  return String(str)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}
function emitStr(s) {
  return '"' + esc(s) + '"';
}
function emitPage(p, indent) {
  indent = indent || "  ";
  const i = indent, i2 = indent + "  ", i3 = indent + "    ", i4 = indent + "      ";
  let out = i + "{\n";
  out += i2 + "path: " + emitStr(p.path) + ",\n";
  out += i2 + "label: " + emitStr(p.label) + ",\n";
  out += i2 + "heading: " + emitStr(p.heading) + ",\n";
  out += i2 + "titleSegment: " + emitStr(p.titleSegment) + ",\n";
  out += i2 + "description:\n" + i3 + emitStr(p.description) + ",\n";
  out += i2 + "intro:\n" + i3 + emitStr(p.intro) + ",\n";
  out += i2 + "group: " + emitStr(p.group) + ",\n";
  out += i2 + "inHeader: " + (p.inHeader ? "true" : "false") + ",\n";
  out += i2 + "tags: [" + p.tags.map(emitStr).join(", ") + "],\n";
  out += i2 + "howTo: [\n";
  for (const step of p.howTo) out += i3 + emitStr(step) + ",\n";
  out += i2 + "],\n";
  out += i2 + "definition:\n" + i3 + emitStr(p.definition) + ",\n";
  out += i2 + "faqs: [\n";
  for (const faq of p.faqs) {
    out += i3 + "{\n";
    out += i4 + "question: " + emitStr(faq.question) + ",\n";
    out += i4 + "answer:\n" + i4 + "  " + emitStr(faq.answer) + ",\n";
    out += i3 + "},\n";
  }
  out += i2 + "],\n";
  out += i2 + "related: [\n";
  for (const r of p.related) out += i3 + emitStr(r) + ",\n";
  out += i2 + "],\n";
  out += i + "},\n";
  return out;
}

const SLUG_TAGS = {
  "bunny-kaomoji": ["bunny", "rabbit"],
  "dog-kaomoji": ["dog", "puppy"],
  "shocked-kaomoji": ["shocked", "surprised"],
  "smug-kaomoji": ["smug"],
  "sleepy-kaomoji": ["sleepy", "tired"],
  "confused-kaomoji": ["confused"],
  "bear-kaomoji": ["bear"],
};

const PAGE_FILE = (slug) =>
  'import { CategoryView } from "@/components/kaomoji/category-view";\n' +
  'import { pageMetadata } from "@/lib/seo";\n' +
  'import { getPage } from "@/lib/site";\n\n' +
  'const page = getPage("/' + slug + '");\n\n' +
  "export const metadata = pageMetadata(page);\n\n" +
  "export default function Page() {\n" +
  "  return <CategoryView page={page} />;\n" +
  "}\n";

const PAG_FILE = (slug) =>
  'import { createPaginatedCategoryRoute } from "@/lib/paginated-category-route";\n\n' +
  'const route = createPaginatedCategoryRoute("' + slug + '");\n\n' +
  "export const generateStaticParams = route.generateStaticParams;\n" +
  "export const generateMetadata = route.generateMetadata;\n" +
  "export default route.Page;\n";

function main() {
  const root = process.cwd();
  const P2_PAGES = JSON.parse(
    fs.readFileSync(path.join(root, "scripts/_p2_pages.json"), "utf8"),
  );

  let site = fs.readFileSync(path.join(root, "lib/site.ts"), "utf8");
  const missing = P2_PAGES.filter((p) => !site.includes('path: "' + p.path + '"'));
  if (missing.length) {
    const aboutNeedle = '    path: "/about",';
    const aboutIdx = site.indexOf(aboutNeedle);
    if (aboutIdx < 0) throw new Error("about not found");
    let insertAt = aboutIdx;
    while (insertAt > 0 && site[insertAt] !== "{") insertAt--;
    while (insertAt > 0 && site[insertAt - 1] !== "\n") insertAt--;
    const block = missing.map((p) => emitPage(p)).join("");
    site = site.slice(0, insertAt) + block + site.slice(insertAt);
    fs.writeFileSync(path.join(root, "lib/site.ts"), site, "utf8");
    console.log("inserted", missing.length, "SitePage entries");
  } else {
    console.log("all SitePages already present");
  }

  site = fs.readFileSync(path.join(root, "lib/site.ts"), "utf8");
  const catOld = 'related: ["/cute-kaomoji", "/happy-kaomoji", "/text-faces"],';
  const catNew =
    'related: ["/cute-kaomoji", "/bunny-kaomoji", "/dog-kaomoji", "/bear-kaomoji"],';
  if (site.includes(catOld)) {
    site = site.replace(catOld, catNew);
    fs.writeFileSync(path.join(root, "lib/site.ts"), site, "utf8");
    console.log("updated cat related");
  } else {
    console.log("cat related skip");
  }

  let pag = fs.readFileSync(path.join(root, "lib/category-pagination.ts"), "utf8");
  const shyBlockEnd =
    '  "shy-kaomoji": {\n' +
    '    path: "/shy-kaomoji",\n' +
    '    tags: ["shy", "blush", "embarrassed"],\n' +
    "  },\n};";
  if (!pag.includes('"bunny-kaomoji"')) {
    let extra = "";
    for (const [slug, tags] of Object.entries(SLUG_TAGS)) {
      extra +=
        '  "' +
        slug +
        '": {\n    path: "/' +
        slug +
        '",\n    tags: [' +
        tags.map((t) => '"' + t + '"').join(", ") +
        "],\n  },\n";
    }
    if (!pag.includes(shyBlockEnd)) throw new Error("shy PAGINATED_SLUGS block not found");
    pag = pag.replace(
      shyBlockEnd,
      '  "shy-kaomoji": {\n' +
        '    path: "/shy-kaomoji",\n' +
        '    tags: ["shy", "blush", "embarrassed"],\n' +
        "  },\n" +
        extra +
        "};",
    );
    fs.writeFileSync(path.join(root, "lib/category-pagination.ts"), pag, "utf8");
    console.log("updated PAGINATED_SLUGS");
  } else {
    console.log("PAGINATED_SLUGS already has bunny");
  }

  for (const slug of Object.keys(SLUG_TAGS)) {
    write(path.join(root, "app/" + slug + "/page.tsx"), PAGE_FILE(slug));
    write(path.join(root, "app/" + slug + "/page/[n]/page.tsx"), PAG_FILE(slug));
  }

  let sm = fs.readFileSync(path.join(root, "app/sitemap.ts"), "utf8");
  const heartCase =
    '    case "/heart-kaomoji":\n    case "/shy-kaomoji":\n      return 0.75;';
  const heartCaseNew =
    '    case "/heart-kaomoji":\n    case "/shy-kaomoji":\n' +
    '    case "/bunny-kaomoji":\n    case "/dog-kaomoji":\n' +
    '    case "/shocked-kaomoji":\n    case "/smug-kaomoji":\n' +
    '    case "/sleepy-kaomoji":\n    case "/confused-kaomoji":\n' +
    '    case "/bear-kaomoji":\n      return 0.75;';
  if (!sm.includes('case "/bunny-kaomoji"')) {
    if (!sm.includes(heartCase)) throw new Error("sitemap heart/shy case missing");
    sm = sm.replace(heartCase, heartCaseNew);
    fs.writeFileSync(path.join(root, "app/sitemap.ts"), sm, "utf8");
    console.log("updated sitemap");
  } else console.log("sitemap ok");

  let nc = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");
  if (!nc.includes('source: "/rabbit-kaomoji"')) {
    const redirectBlock =
      '\n      // P2 animal + mood aliases (chip synonyms stay tags, not doorway pages)\n' +
      [
        ["/bunny", "/bunny-kaomoji/"],
        ["/bunny/", "/bunny-kaomoji/"],
        ["/rabbit", "/bunny-kaomoji/"],
        ["/rabbit/", "/bunny-kaomoji/"],
        ["/rabbit-kaomoji", "/bunny-kaomoji/"],
        ["/rabbit-kaomoji/", "/bunny-kaomoji/"],
        ["/dog", "/dog-kaomoji/"],
        ["/dog/", "/dog-kaomoji/"],
        ["/puppy", "/dog-kaomoji/"],
        ["/puppy/", "/dog-kaomoji/"],
        ["/puppy-kaomoji", "/dog-kaomoji/"],
        ["/puppy-kaomoji/", "/dog-kaomoji/"],
        ["/shocked", "/shocked-kaomoji/"],
        ["/shocked/", "/shocked-kaomoji/"],
        ["/surprised", "/shocked-kaomoji/"],
        ["/surprised/", "/shocked-kaomoji/"],
        ["/surprised-kaomoji", "/shocked-kaomoji/"],
        ["/surprised-kaomoji/", "/shocked-kaomoji/"],
        ["/smug", "/smug-kaomoji/"],
        ["/smug/", "/smug-kaomoji/"],
        ["/sleepy", "/sleepy-kaomoji/"],
        ["/sleepy/", "/sleepy-kaomoji/"],
        ["/tired", "/sleepy-kaomoji/"],
        ["/tired/", "/sleepy-kaomoji/"],
        ["/tired-kaomoji", "/sleepy-kaomoji/"],
        ["/tired-kaomoji/", "/sleepy-kaomoji/"],
        ["/confused", "/confused-kaomoji/"],
        ["/confused/", "/confused-kaomoji/"],
        ["/bear", "/bear-kaomoji/"],
        ["/bear/", "/bear-kaomoji/"],
        ["/bunny-kaomoji/page/1", "/bunny-kaomoji/"],
        ["/bunny-kaomoji/page/1/", "/bunny-kaomoji/"],
        ["/dog-kaomoji/page/1", "/dog-kaomoji/"],
        ["/dog-kaomoji/page/1/", "/dog-kaomoji/"],
        ["/shocked-kaomoji/page/1", "/shocked-kaomoji/"],
        ["/shocked-kaomoji/page/1/", "/shocked-kaomoji/"],
        ["/smug-kaomoji/page/1", "/smug-kaomoji/"],
        ["/smug-kaomoji/page/1/", "/smug-kaomoji/"],
        ["/sleepy-kaomoji/page/1", "/sleepy-kaomoji/"],
        ["/sleepy-kaomoji/page/1/", "/sleepy-kaomoji/"],
        ["/confused-kaomoji/page/1", "/confused-kaomoji/"],
        ["/confused-kaomoji/page/1/", "/confused-kaomoji/"],
        ["/bear-kaomoji/page/1", "/bear-kaomoji/"],
        ["/bear-kaomoji/page/1/", "/bear-kaomoji/"],
      ]
        .map(
          ([s, d]) =>
            '      { source: "' + s + '", destination: "' + d + '", permanent: true },',
        )
        .join("\n") +
      "\n";
    const anchor =
      '      { source: "/shy-kaomoji/page/1/", destination: "/shy-kaomoji/", permanent: true },';
    if (!nc.includes(anchor)) throw new Error("shy page/1 redirect anchor missing");
    nc = nc.replace(anchor, anchor + "\n" + redirectBlock);
    fs.writeFileSync(path.join(root, "next.config.ts"), nc, "utf8");
    console.log("added P2 redirects");
  } else console.log("redirects already present");

  console.log("DONE");
}

main();

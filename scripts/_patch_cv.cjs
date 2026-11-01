const fs = require("fs");
let cv = fs.readFileSync("components/kaomoji/category-view.tsx", "utf8");
if (cv.charCodeAt(0) === 0xfeff) cv = cv.slice(1);

// Fix imports for tag counts + subcategory nav
if (!cv.includes("countByTags")) {
  cv = cv.replace(
    `import {
  catalogSize,
  countByCategory,
  crawlablePageCountForCategory,
  getForPage,
  getRelatedKaomoji,
  PAGE_GRID_LIMIT,
} from "@/data/index";`,
    `import {
  catalogSize,
  countByCategory,
  countByTags,
  crawlablePageCountForCategory,
  crawlablePageCountForTags,
  getForPage,
  getRelatedKaomoji,
  PAGE_GRID_LIMIT,
} from "@/data/index";`
  );
}
if (!cv.includes("SubcategoryNav")) {
  cv = cv.replace(
    `import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";`,
    `import { Breadcrumbs } from "@/components/kaomoji/breadcrumbs";\nimport { SubcategoryNav } from "@/components/kaomoji/subcategory-nav";`
  );
}

// Replace total/crawlable/showPaging block
const oldBlock = `  const total =
    page.category != null ? countByCategory(page.category) : catalogSize();
  const crawlablePages =
    page.category != null ? crawlablePageCountForCategory(page.category) : 1;
  const rangeStart =
    faces.length === 0 ? 0 : (safePage - 1) * PAGE_GRID_LIMIT + 1;
  const rangeEnd =
    faces.length === 0 ? 0 : Math.min(safePage * PAGE_GRID_LIMIT, total);
  const showPaging = page.category != null && crawlablePages > 1;`;

const newBlock = `  const tagOpts = { includeNewlines: page.includeNewlineFaces };
  const total =
    page.tags && page.tags.length > 0
      ? countByTags(page.tags, tagOpts)
      : page.category != null
        ? countByCategory(page.category)
        : catalogSize();
  const crawlablePages =
    page.tags && page.tags.length > 0
      ? crawlablePageCountForTags(page.tags, tagOpts)
      : page.category != null
        ? crawlablePageCountForCategory(page.category)
        : 1;
  const rangeStart =
    faces.length === 0 ? 0 : (safePage - 1) * PAGE_GRID_LIMIT + 1;
  const rangeEnd =
    faces.length === 0 ? 0 : Math.min(safePage * PAGE_GRID_LIMIT, total);
  const showPaging =
    ((page.tags && page.tags.length > 0) || page.category != null) &&
    crawlablePages > 1;`;

if (cv.includes(oldBlock)) {
  cv = cv.replace(oldBlock, newBlock);
  console.log("patched totals");
} else {
  // try alternate naming from live file
  const alt = `  const total =
    page.category != null ? countByCategory(page.category) : catalogSize();
  const crawlablePages =
    page.category != null ? crawlablePageCountForCategory(page.category) : 1;`;
  if (cv.includes(alt)) {
    cv = cv.replace(alt, newBlock.split("\n").slice(0, -3).join("\n") + "\n");
    // still need showPaging
    cv = cv.replace(
      /const showPaging = page\.category != null && crawlablePages > 1;/,
      `const showPaging =
    ((page.tags && page.tags.length > 0) || page.category != null) &&
    crawlablePages > 1;`
    );
    console.log("patched totals alt");
  } else {
    console.log("TOTALS BLOCK NOT FOUND");
    const i = cv.indexOf("const total");
    console.log(cv.slice(i, i + 450));
  }
}

// Insert SubcategoryNav + howTo after intro paragraph
if (!cv.includes("<SubcategoryNav")) {
  cv = cv.replace(
    `{page.intro}</p>`,
    `{page.intro}</p>
      <SubcategoryNav page={page} />
      {page.howTo && page.howTo.length > 0 ? (
        <section className="mt-6 max-w-2xl" aria-labelledby="how-these-work">
          <h2 id="how-these-work" className="type-h2">
            How these faces work
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 type-meta leading-6">
            {page.howTo.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      ) : null}`
  );
  console.log("inserted nav+howto");
}

fs.writeFileSync("components/kaomoji/category-view.tsx", cv, "utf8");
console.log("category-view saved");

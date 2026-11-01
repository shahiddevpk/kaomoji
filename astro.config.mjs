// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const r = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  site: "https://pastekaomoji.com",
  trailingSlash: "always",
  output: "static",
  build: { format: "directory", inlineStylesheets: "always" },
  compressHTML: true,
  // compat: existing components import from "react"; preact/compat serves them.
  integrations: [preact({ compat: true })],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        { find: /^@\//, replacement: r("./") },
        { find: /^next\/link$/, replacement: r("./shims/next-link.tsx") },
        { find: /^next\/navigation$/, replacement: r("./shims/next-navigation.ts") },
        { find: /^next\/dynamic$/, replacement: r("./shims/next-dynamic.tsx") },
        { find: /^next$/, replacement: r("./shims/next.ts") },
      ],
    },
  },
});

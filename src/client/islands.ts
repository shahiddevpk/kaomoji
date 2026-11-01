import { h, hydrate, type ComponentType } from "preact";
import { InIsland } from "@/lib/island";
import "@/components/kaomoji/copy-provider";

// Only modules that define islands; each loads as its own chunk.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loaders: Record<string, () => Promise<Record<string, any>>> = {
  "ads/footer-ad": () => import("@/components/ads/footer-ad"),
  "kaomoji/kaomoji-generator": () => import("@/components/kaomoji/kaomoji-generator"),
  "kaomoji/random-face": () => import("@/components/kaomoji/random-face"),
  "kaomoji/recently-copied": () => import("@/components/kaomoji/recently-copied"),
  "kaomoji/search-box": () => import("@/components/kaomoji/search-box"),
  "kaomoji/search-kaomoji-grid": () => import("@/components/kaomoji/search-kaomoji-grid"),
  "kaomoji/subcategory-nav": () => import("@/components/kaomoji/subcategory-nav"),
  "layout/category-menu": () => import("@/components/layout/category-menu"),
  "layout/header-nav": () => import("@/components/layout/header-nav"),
  "layout/site-header": () => import("@/components/layout/site-header"),
};

function boot() {
  document.querySelectorAll<HTMLElement>("pk-island[data-id]").forEach((el) => {
    if (el.closest("pk-island") !== el) return;
    const [file, name] = el.dataset.id!.split("#");
    const load = loaders[file];
    if (!load) return;
    const props = JSON.parse(el.dataset.props || "{}");
    void load().then((mod) => {
      const C = mod[`${name}__impl`] as ComponentType;
      if (C) hydrate(h(InIsland.Provider, { value: true }, h(C, props)), el);
    });
  });
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();

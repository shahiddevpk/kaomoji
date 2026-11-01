import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/cat-kaomoji");

export const metadata = pageMetadata(page);

export default function CatKaomojiPage() {
  return <CategoryView page={page} />;
}

import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/new-year-kaomoji");

export const metadata = pageMetadata(page);

export default function NewYearKaomojiPage() {
  return <CategoryView page={page} />;
}

import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/sad-kaomoji");

export const metadata = pageMetadata(page);

export default function SadKaomojiPage() {
  return <CategoryView page={page} />;
}

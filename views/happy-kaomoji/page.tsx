import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/happy-kaomoji");

export const metadata = pageMetadata(page);

export default function HappyKaomojiPage() {
  return <CategoryView page={page} />;
}

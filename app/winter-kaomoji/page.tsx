import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/winter-kaomoji");

export const metadata = pageMetadata(page);

export default function WinterKaomojiPage() {
  return <CategoryView page={page} />;
}

import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/kaomoji-copy-paste");

export const metadata = pageMetadata(page);

export default function KaomojiCopyPastePage() {
  return <CategoryView page={page} />;
}

import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/dog-kaomoji");

export const metadata = pageMetadata(page);

export default function Page() {
  return <CategoryView page={page} />;
}

import { CategoryView } from "@/components/kaomoji/category-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/text-faces");

export const metadata = pageMetadata(page);

export default function TextFacesPage() {
  return <CategoryView page={page} />;
}

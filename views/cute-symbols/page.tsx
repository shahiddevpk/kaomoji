import { CollectionView } from "@/components/kaomoji/collection-view";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/cute-symbols");

export const metadata = pageMetadata(page);

export default function Page() {
  return <CollectionView page={page} collectionKey="cute-symbols" />;
}

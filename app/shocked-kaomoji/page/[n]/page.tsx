import { createPaginatedCategoryRoute } from "@/lib/paginated-category-route";

const route = createPaginatedCategoryRoute("shocked-kaomoji");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;

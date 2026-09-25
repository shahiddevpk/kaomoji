import { createPaginatedCategoryRoute } from "@/lib/paginated-category-route";

const route = createPaginatedCategoryRoute("bunny-kaomoji");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;

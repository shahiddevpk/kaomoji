import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { CategoryView } from "@/components/kaomoji/category-view";
import {
  buildPageStaticParams,
  crawlablePageCountForCategory,
  parsePageParam,
  type PaginatedSlug,
  PAGINATED_SLUGS,
} from "@/lib/category-pagination";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

export function createPaginatedCategoryRoute(slug: PaginatedSlug) {
  const meta = PAGINATED_SLUGS[slug];
  const page = getPage(meta.path);

  function generateStaticParams() {
    return buildPageStaticParams(meta.categoryId);
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ n: string }>;
  }): Promise<Metadata> {
    const { n } = await params;
    const num = parsePageParam(n);
    if (num == null || num < 1) {
      return pageMetadata(page);
    }
    return pageMetadata(page, { pageNumber: num });
  }

  async function Page({ params }: { params: Promise<{ n: string }> }) {
    const { n } = await params;
    const num = parsePageParam(n);
    if (num == null) notFound();
    if (num === 1) redirect(`${meta.path}/`);
    const totalPages = crawlablePageCountForCategory(meta.categoryId);
    if (num > totalPages) notFound();
    return <CategoryView page={page} pageNumber={num} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
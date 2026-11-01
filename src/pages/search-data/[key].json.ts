import type { APIRoute, GetStaticPaths } from "astro";
import { buildShard, shardScopes } from "@/lib/search/shards";

export const getStaticPaths: GetStaticPaths = () =>
  shardScopes().map((s) => ({ params: { key: s.key }, props: { category: s.category, tags: s.tags } }));

export const GET: APIRoute = ({ props }) =>
  new Response(JSON.stringify(buildShard(props as { category?: string; tags?: string[] })), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

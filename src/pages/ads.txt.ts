import type { APIRoute, GetStaticPaths } from "astro";
import { adsTxtBody, isAdSenseEnabled } from "@/lib/ads";
// Only emitted once a real publisher ID is set in lib/ads.ts (404 otherwise, as before).
export const GET: APIRoute = () => new Response(adsTxtBody(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
export const prerender = true;
export const getStaticPaths: GetStaticPaths = () => (isAdSenseEnabled() ? [{ params: {} }] : []);

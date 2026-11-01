/**
 * Cloudflare Pages middleware (port of the old Next proxy.ts):
 * - www.pastekaomoji.com -> apex (308)
 * - ?page=N -> /…/page/N/ (page=1 -> bare URL) so query aliases are not indexable.
 */
const APEX_HOST = "pastekaomoji.com";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequest = async (ctx: any): Promise<Response> => {
  const url = new URL(ctx.request.url);
  if (url.hostname === `www.${APEX_HOST}`) {
    url.hostname = APEX_HOST;
    url.protocol = "https:";
    return Response.redirect(url.toString(), 308);
  }
  const pageRaw = url.searchParams.get("page");
  if (pageRaw == null || pageRaw === "" || /\.[a-z0-9]+$/i.test(url.pathname)) return ctx.next();
  const pageNum = Number.parseInt(pageRaw, 10);
  if (!Number.isFinite(pageNum) || String(pageNum) !== pageRaw.trim() || pageNum < 1) return ctx.next();
  url.searchParams.delete("page");
  let trimmed = url.pathname.replace(/\/+$/, "");
  trimmed = trimmed.replace(/\/page\/\d+$/, "");
  url.pathname = pageNum === 1 ? (trimmed === "" ? "/" : `${trimmed}/`) : `${trimmed}/page/${pageNum}/`;
  return Response.redirect(url.toString(), 308);
};

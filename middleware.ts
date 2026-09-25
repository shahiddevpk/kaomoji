import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Soft-duplicate guard: ?page=N must not stay as an indexable alias of page 1.
 * Permanent redirect to the path pagination routes (/…/page/N/), page=1 → bare URL.
 */
export function middleware(request: NextRequest) {
  const pageRaw = request.nextUrl.searchParams.get("page");
  if (pageRaw == null || pageRaw === "") {
    return NextResponse.next();
  }

  const pageNum = Number.parseInt(pageRaw, 10);
  if (!Number.isFinite(pageNum) || String(pageNum) !== pageRaw.trim() || pageNum < 1) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.searchParams.delete("page");

  let pathname = url.pathname;
  // Normalize: strip trailing slash for rebuild (site uses trailingSlash).
  const trimmed = pathname.replace(/\/+$/, "") || "";

    // Already on /page/N — honor ?page= by rebuilding the path (and drop the query).
  if (/\/page\/\d+$/.test(trimmed)) {
    const base = trimmed.replace(/\/page\/\d+$/, "");
    if (pageNum === 1) {
      url.pathname = base === "" ? "/" : `${base}/`;
    } else {
      url.pathname = `${base}/page/${pageNum}/`;
    }
    return NextResponse.redirect(url, 308);
  }

  if (pageNum === 1) {
    url.pathname = trimmed === "" ? "/" : `${trimmed}/`;
  } else {
    url.pathname = `${trimmed}/page/${pageNum}/`;
  }

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    /*
     * All app routes except Next internals and static assets.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

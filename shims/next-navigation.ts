let serverPath = "/";
/** Called by the Astro layout before rendering each page (SSG renders serially). */
export function setServerPathname(p: string) { serverPath = p; }
export function usePathname(): string {
  if (typeof window !== "undefined") return window.location.pathname;
  return serverPath;
}
export class NotFoundError extends Error {}
export function notFound(): never { throw new NotFoundError("not found"); }
export function redirect(to: string): never { throw new Error(`redirect to ${to}`); }

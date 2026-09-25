import Link from "next/link";
import { cn } from "@/lib/utils";

/** Brand mark: soft orange tile with a tiny kaomoji face (site primary #C2410C). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="#C2410C" />
      <rect x="4" y="4" width="32" height="32" rx="9" fill="#FFF7ED" />
      <circle cx="14.5" cy="17" r="2.25" fill="#C2410C" />
      <circle cx="25.5" cy="17" r="2.25" fill="#C2410C" />
      <path
        d="M14 24.5c1.6 2.2 4 3.3 6 3.3s4.4-1.1 6-3.3"
        stroke="#C2410C"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="10.5" cy="21.5" r="1.35" fill="#FDBA74" />
      <circle cx="29.5" cy="21.5" r="1.35" fill="#FDBA74" />
    </svg>
  );
}

/** Mobile: icon only — leaves room for search + Menu. Name is on the link aria-label. */
export function LogoCompact({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <LogoMark className="h-8 w-8" />
    </span>
  );
}

/** Desktop / tablet: mark + full wordmark, sized for the sticky header row. */
export function LogoFull({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex max-w-[11.5rem] items-center gap-2", className)}>
      <LogoMark className="h-8 w-8" />
      <span className="truncate text-base font-semibold leading-tight tracking-tight text-foreground">
        Paste Kaomoji
      </span>
    </span>
  );
}

export function SiteLogoLink({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Paste Kaomoji home"
      title="Paste Kaomoji"
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-auto sm:justify-start sm:px-0.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
        className,
      )}
    >
      <span className="sm:hidden">
        <LogoCompact />
      </span>
      <span className="hidden sm:inline-flex">
        <LogoFull />
      </span>
    </Link>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-base leading-7 text-muted">
        That address is not part of Paste Kaomoji.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 items-center text-accent underline-offset-2 hover:underline"
      >
        Back to the homepage
      </Link>
    </div>
  );
}

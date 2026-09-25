# Google Search Console setup

## Current state
A **temporary** verification code is wired in pp/layout.tsx via metadata.verification.google and .env.local:

`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=pKmJ9xQ2vL7nR4tY8wA1bC5dE6fG0hI3jK`

This is a placeholder only. Google will **not** verify with it.

## When you have the real code
1. Open [Google Search Console](https://search.google.com/search-console)
2. Add property `https://pastekaomoji.com` (URL-prefix) — only after DNS/HTTPS works
3. Choose **HTML tag** verification
4. Copy the `content="..."` value only
5. Put it in `.env.local`:
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=YOUR_REAL_CODE`
6. Redeploy / restart `next dev`
7. Click Verify in GSC
8. Submit `https://pastekaomoji.com/sitemap.xml`

## Do not
- Verify on `*.vercel.app` as the long-term property
- Leave the temporary code after you get a real one

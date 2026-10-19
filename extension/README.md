# Paste Kaomoji — Chrome extension

A small Manifest V3 popup: pick a mood, click a face to copy it. Each mood links to its full page on pastekaomoji.com (UTM-tagged, so visits show up in analytics as `chrome-extension / popup`).

Why it exists: Chrome Web Store listings rank on page 1 for "lenny face", "cute symbols", and "uwu face". A listing of our own is a legitimate, editorially reviewed link and a traffic channel back to the site.

No permissions are requested; copying uses `navigator.clipboard` from the click.

## Try it locally

1. Open `chrome://extensions` and switch on **Developer mode**.
2. Click **Load unpacked** and pick this `extension/` folder.
3. Click the Paste Kaomoji icon in the toolbar.

## Publish

1. Zip the contents of this folder (`manifest.json` at the zip root).
2. Sign in to the Chrome Web Store Developer Dashboard (one-time $5 registration) and upload the zip.
3. Listing:
   - **Category:** Productivity (or Social & Communication)
   - **Short description:** Copy kaomoji, Lenny face, shrug and cute text faces in one click.
   - **Website:** https://pastekaomoji.com/
   - **Screenshots:** 1280×800 PNGs of the popup over a chat app.
   - **Privacy:** no data collected; no permissions.
4. Verify the site in Search Console with the same Google account to show it as the official site.

Bump `version` in `manifest.json` for every update.

# CatchCat / Pawdex HTML Prototype

Chinese development prototype for a cat-collection risk-capture game.

Current published version: `v8 P0`

## What is included

- Static HTML/CSS/JS prototype.
- Local PNG cat art assets for five rarities.
- Economy loop: cat food, risk tiers, rare+ refunds, daily legendary bonus.
- FOMO loop: legendary hour, weekly limited slot, 24h revenge chase, weekly leaderboard.
- v7 layout: phone-app-only shell, in-app leaderboard page, shutter capture button, hidden developer panel.
- v8 P0: neutral mode wording via i18n, browser camera capture, photo card art, share image export, X/Facebook/Threads/native share actions.

## Supabase Auth

The auth UI is wired for Supabase but stays in local guest mode until config is provided before `app.js`:

```html
<script>
  window.PAWDEX_SUPABASE = {
    url: "https://YOUR_PROJECT.supabase.co",
    anonKey: "YOUR_SUPABASE_ANON_KEY"
  };
</script>
```

If Google login is enabled for an iOS build, Apple login also needs to be enabled in Supabase.

## Run locally

Open `index.html`, or run:

```bash
python3 -m http.server 8771
```

Then visit `http://127.0.0.1:8771`.

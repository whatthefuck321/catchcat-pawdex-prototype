# CatchCat / Pawdex HTML Prototype

Chinese development prototype for a cat-collection risk-capture game.

Current published version: `v13 breed API adapter prototype`

## What is included

- Static HTML/CSS/JS prototype.
- Local PNG cat art assets for five rarities.
- Economy loop: cat food, risk tiers, rare+ refunds, daily legendary bonus.
- FOMO loop: legendary hour, weekly limited slot, 24h revenge chase, weekly leaderboard.
- v7 layout: phone-app-only shell, in-app leaderboard page, shutter capture button, hidden developer panel.
- v8 P0: neutral mode wording via i18n, browser camera capture, photo card art, share image export, X/Facebook/Threads/native share actions.
- v9 game feel: treat meter and floating economy deltas, rarity reel during capture, field particles, premium result reveals, stronger card material.
- v10 anime/location: browser geolocation cat-spot prototype, nearby habitat UI, anime speed lines and cut-in motion language.
- v11 cat spot POI: location text now has gameplay meaning. Convenience stores, stations, parks, and rooftops act as supply/spawn/habitat spots; active spots can grant a small cat-food supply with cooldown.
- v12 wow reveal: staged card-back reveal, stronger rarity ceremony, and a local prototype breed-ID result on each captured card.
- v13 breed API adapter: optional frontend adapter plus Supabase Edge Function sample for Gemini-based breed ID. If no API URL is configured, the app falls back to the local prototype breed result.

## Breed ID note

The static GitHub Pages build must not call Gemini directly because browser-side API keys would be exposed. This repo includes a Supabase Edge Function sample at `supabase/functions/identify-breed/index.ts`; deploy that function, keep `GEMINI_API_KEY` as a Supabase secret, then point the frontend at the function URL.

Frontend config example:

```html
<script>
  window.PAWDEX_BREED_API = {
    url: "https://YOUR_PROJECT.supabase.co/functions/v1/identify-breed",
    token: "YOUR_SUPABASE_ANON_KEY",
    timeoutMs: 3600
  };
</script>
```

Supabase deploy sketch:

```bash
supabase secrets set GEMINI_API_KEY=YOUR_GEMINI_API_KEY
supabase functions deploy identify-breed
```

Without `window.PAWDEX_BREED_API.url`, the app uses the local prototype breed result.

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

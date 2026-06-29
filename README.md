# CatchCat / Pawdex HTML Prototype

Chinese development prototype for a cat-collection risk-capture game.

Current published version: `v15 true cat card prototype`

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
- v14 founder reserve: configurable Founder payment links remain available as a landing-page reserve path. The static prototype opens real configured checkout URLs only; it does not fake payment confirmation.
- v15 true cat card: capture now requires a real camera frame or uploaded cat photo before rolling. System cat illustrations are no longer used as captured card art; they remain only as idle/demo placeholders. Founder checkout is kept as a landing-page reserve, not the main GTM path.
- v15 photo safety: card, near-miss, field, and share images now have explicit broken-image fallback handling so bad URLs or failed assets do not render as black/empty blocks.

## v15 Approval Route

The approved product route is no longer "HTML page first, charge first." The HTML build is a demo and landing page. The main validation target is:

1. Real cat photo appears inside the generated card.
2. iOS beta distribution via TestFlight becomes the primary competitive window.
3. Share cards use the real cat card plus a download/invite CTA.
4. Founder checkout opens only after real capture/share traction is proven.

## Founder Reserve / Payment Links

The static GitHub Pages build can open checkout links without adding server cost. Configure payment URLs before `app.js`:

```html
<script>
  window.PAWDEX_PAYMENT_LINKS = {
    early: "https://buy.stripe.com/YOUR_EARLY_LINK",
    founder: "https://buy.stripe.com/YOUR_FOUNDER_LINK",
    sponsor: "https://buy.stripe.com/YOUR_SPONSOR_LINK"
  };
</script>
```

Without `window.PAWDEX_PAYMENT_LINKS`, the Founder Reserve deliberately shows a missing-link dialog instead of opening a fake checkout. Real paid entitlement still needs server-side confirmation later, for example Stripe webhook -> Supabase profile flag. This remains a reserve path after traction, not the current main line.

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

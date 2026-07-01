# CatchCat / Pawdex HTML Prototype

Chinese development prototype for a cat-collection risk-capture game.

Current published version: `v34 growth economy loop prototype`

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
- v16 game-site shell: the first screen now presents PAWDEX as a cat-hunting game with a bold game hero, gameplay CTA, visible phone prototype, and a compact game-loop section instead of opening directly as a dense card/prototype surface.
- v17 field game HUD: capture view now has a radar-style nearby cat-spot map, player/POI markers, encounter ring, stronger shutter pulse, canvas street-map background, dynamic location copy, and small vibration feedback during capture.
- v18 card reveal ceremony: successful captures now get rarity-specific anime opening copy, summon rings, a charging gate, stronger card-back flip timing, legendary gold burst styling, and near-miss failure warning feedback.
- v19 share trophy: story exports now read like game loot posts, with a rarity signal header, trophy stamp, cost/reward/rarity stat strip, stronger card sweep, QR-style CTA, and a distinct near-miss poster state.
- v20 game mission: the hero and in-phone capture view now lead with a task chain: locate a nearby cat spot, shoot/upload a real cat, choose risk, then reveal and share. The capture dock uses a live mission HUD instead of another explanatory card.
- v21 street map: the phone app now leads with a playable night-walk street map. Map nodes are real buttons: tapping encounter, rare, and supply spots changes the active cat point, distance, habitat, scene art, and supply reward state before capture.
- v22 immersive HUD: the landing copy, map nodes, quest panel, capture dock, and bottom navigation are flattened into an app-first HUD. The first viewport now reads as a running mobile game screen instead of a card-based pitch page.
- v23 anime city HUD: real-world district references were replaced with fictional anime-city locations such as 星灯旧街, 云桥天台, 雨廊公园, and 月台灯巷, while the visual skin adds stronger manga speed-line motion and purple/gold city glow.
- v24 anime encounter: the cat art now lives inside the playable street scene, with layered anime skyline/bridge/street art, idle cat motion, capture burst lines, near-miss escape motion, and a less map-card-like phone view.
- v25 capture cut-in: pressing the shutter now runs a full capture prelude with speed lines, a cat-shadow dash, rarity-colored seal card flip, lock ring, and staged status copy before the result modal appears.
- v26 demo capture verification: `?demo=1` unlocks a local generated demo cat photo, and `?demo=1&autoplay=1` automatically starts one capture so the full cut-in, rolling state, result modal, and share-card path can be browser-tested without camera or file-upload tooling. Normal URLs still require a real camera/uploaded cat photo.
- v27 field live anime HUD: the catch screen is pushed further away from cards with a full-screen FIELD LIVE scene, manga edge masks, GPS-style location rail, poster-like cat readout, tactical risk controls, and a floating mobile nav treatment.
- v28 app theater route lock: the outer marketing/game-loop panels are hidden so the phone app owns the first screen, while tapping cat spots now triggers route-scan animation, an AREA LOCK HUD, spot-themed scene tint, and stronger phone-device chrome.
- v29 in-app city menus: dex, supply/economy, ranking, and share views now live as game subpages inside the phone shell. The supply page exposes live cat-food, share-refund, daily reset, and first-legendary state instead of leaving economy as an external explanation block.
- v30 game menu rails: the dex page becomes a horizontal collection rail, the supply page gets actionable share-refund and field-run buttons, paid supply packs are compressed into shop rows, and the rank page now shows a live season progress bar.
- v31 installable shell: the GitHub Pages build now includes a Web App Manifest, service worker cache, iOS/Android home-screen icons, and an in-app install prompt. This supports a phone home-screen app test without Apple signing or app-store distribution.
- v32 functional daily loop: the supply page now has claimable daily missions tied to today's capture, Rare+ card, and share-save actions. Mission rewards persist locally, reset by local date, and feed back into the cat-food economy. The service worker cache was also bumped and JS/CSS now carry v32 cache-busting URLs so feature updates do not get stuck behind the old app shell. The install prompt is hidden by default for this function pass and can be shown with `?install=1`.
- v33 functional season loop: the weekly rank page now has a local Monday-to-Monday season window, live player score, season countdown, and claimable weekly rewards for Rare+ and legendary collection targets. Reward claims persist locally by season and feed cat food back into the economy.
- v34 growth economy loop: the share page now generates a stable invite code, copies referral/story URLs, opens referral landing state from `?ref=`, tracks local share/invite/checkout intent signals, and the supply page exposes Pro pass plus a capped week-one pool concept without faking payment confirmation or cross-device rewards.

## Installable phone test

This is not a signed native iOS/Android package. It is an installable PWA shell for tomorrow's phone test:

1. Open the GitHub Pages link on the phone.
2. iPhone: use Safari, tap Share, then Add to Home Screen.
3. Android/Chrome: use the install prompt or browser menu -> Install app.
4. Open PAWDEX from the home-screen icon and test camera/upload/capture/share.

Native TestFlight or store distribution still needs the real mobile toolchain, signing, and account setup.

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
    pro: "https://buy.stripe.com/YOUR_PRO_LINK",
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

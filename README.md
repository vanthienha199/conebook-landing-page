# Conebook, a landing page demo

A fast, hand-designed landing page for Conebook, a fictional logbook app for pottery studios. It is a static Astro site with self-hosted fonts, no UI framework and only a few lines of JavaScript, so it scores in the high 90s on mobile Lighthouse. The waitlist forms post to Netlify Forms with inline validation, a honeypot for bots, and a no-JavaScript fallback to `/thanks/`.

Run it with `npm install && npm run dev`, and build with `npm run build` (output in `dist/`). It deploys two ways: GitHub Actions publishes it to GitHub Pages on every push (`.github/workflows/pages.yml`), or point Netlify at this folder with build command `npm run build` and publish directory `dist`, and form submissions appear under Forms in the Netlify dashboard.

Conebook is not a real product. This site was built by Ha Le as a website demo, and the brand, copy and data on it are invented.

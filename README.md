# Conebook, a landing page demo

**Live:** https://vanthienha199.github.io/conebook-landing-page/

A fast, hand-designed landing page for Conebook, a fictional logbook app for pottery studios. It is a static Astro site with self-hosted fonts, no UI framework and only a few lines of JavaScript, and it scores 100 in all four Lighthouse categories on mobile (`docs/lighthouse-mobile-report.html`, run against the live URL). The two waitlist forms validate inline, use a honeypot for bots, post to Netlify Forms when deployed on Netlify, and fall back to a plain POST to `/thanks/` without JavaScript.

Run it with `npm install && npm run dev`, and build with `npm run build` (output in `dist/`). It deploys two ways: GitHub Actions publishes it to GitHub Pages on every push (`.github/workflows/pages.yml`, with `BASE_PATH` set for the project subpath), or point Netlify at this folder with `netlify.toml` and form entries appear under Forms in the Netlify dashboard. On any other static host, set `PUBLIC_FORM_ENDPOINT` to a form backend URL at build time.

Conebook is not a real product. This site was built by Ha Le as a website demo, and the brand, copy and data on it are invented.

![Gallery hero](docs/hero.png)
![Desktop](docs/desktop.png)
![Mobile](docs/mobile.png)
![Lighthouse](docs/lighthouse-scores.png)

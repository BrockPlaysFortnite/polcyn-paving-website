# Polcyn's Paving Co. Website

Astro + Tailwind v4 site for Polcyn's Paving Co.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the built site |

## TODOs before launch

Search the project for `TODO` comments to find every spot the friend still needs to fill in. Highlights:

1. **Years in business** + **CSLB license number** — `src/components/TrustBadges.astro`, `src/components/Footer.astro`, `src/layouts/BaseLayout.astro`
2. **Google Analytics 4 measurement ID** — `src/layouts/BaseLayout.astro`
3. **Contact form endpoint** — `src/components/QuoteForm.astro` (currently `mailto:` fallback; swap in a Formspree / Web3Forms / Netlify Forms endpoint when ready)
4. **Social handles** — `src/data/services.ts`
5. **Logo files** — `public/images/logo.png`, `public/images/favicon.png`
6. **Hero / portfolio photos** — currently a CSS gradient
7. **Real domain** — `astro.config.mjs` site URL
8. **Owner story + about copy** — `src/pages/index.astro` "Who We Are" section

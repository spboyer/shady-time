# Project Context

- **Owner:** Shayne Boyer (spboyer@live.com)
- **Project:** Shady Time Podcast website — Danish minimalist design, episodes with YouTube embeds, guest profiles, contact page
- **Stack:** Vite, React 18+, Tailwind CSS 3+, React Router v6, Static JSON, Azure Static Web Apps
- **Created:** 2026-02-08

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
- **2026-02-08 — Issue #1 scaffold complete.** Vite 7.3 + React 19 + React Router + Tailwind CSS v4 + Vitest 4 + RTL + jest-dom + jsdom. Tailwind v4 uses `@tailwindcss/postcss` (not `tailwindcss` directly as PostCSS plugin) and `@import 'tailwindcss'` instead of `@tailwind` directives. No `tailwind.config.js` needed in v4. `vitest` requires `globals: true` in config for `@testing-library/jest-dom` setup file to work. Build outputs to `dist/`. Dev server on port 5173. One smoke test passing.

📌 Team update (2026-02-08): Phase 1 design review decisions merged — data formats, color usage, test infra, component contracts, semantic HTML — decided by Fenster (facilitating Hockney, McManus, Keaton)

- **2026-02-08 — Issues #2–#5 complete.** Tailwind v4 theme tokens configured via `@theme` block in `src/index.css` — colors (orange, black, grey, medium-grey, soft-grey) and Inter font family. No `tailwind.config.js` needed. Inter loaded from Google Fonts CDN in `index.html`. Seed data: 5 episodes in `src/data/episodes.json` (ep-004 has empty `guestIds`; ep-001 title is ~100 chars), 4 guests in `src/data/guests.json` (guest-001 has sparse social). Placeholder SVGs in `public/images/episodes/` and `public/images/guests/`. React Router: `BrowserRouter` wraps `<App>` in `main.jsx`; `App.jsx` defines all routes plus `ScrollToTop` component. Stub pages in `src/pages/`. NotFound on catch-all `*`. Duration format is `"MM:SS"` / `"H:MM:SS"` strings. YouTube URLs use `/embed/` format with real video IDs.

📌 Team update (2026-02-08): Phase 1 test conventions established — test file locations, router wrapping, semantic assertions, default exports required — decided by Keaton
📌 Team update (2026-02-08): Inline SVG social icons in Footer, no icon library — decided by McManus
📌 Team update (2026-02-08): All work must use feature branches + PRs, no direct commits to main — decided by Shayne Boyer
📌 Team update (2026-02-08): Each phase requires all tests passing and all PRs merged before advancing — decided by Shayne Boyer

- **2026-02-08 — Issues #20, #21, #23 complete (Phase 4).** Created `staticwebapp.config.json` with navigation fallback to `/index.html` excluding `/images/*.{png,jpg,gif,svg}` and `/assets/*` for Azure SWA SPA routing. Verified existing placeholder SVGs (5 episodes at 640×360, 4 guests at 400×400) are reasonable and match all seed data entries — no changes needed. Created `README.md` with tech stack, setup/build/test instructions, project structure, and deployment info. PR #28.

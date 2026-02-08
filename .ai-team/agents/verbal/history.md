# Project Context

- **Owner:** Shayne Boyer (spboyer@live.com)
- **Project:** Shady Time Podcast website — Danish minimalist design, episodes with YouTube embeds, guest profiles, contact page
- **Stack:** Vite, React 18+, Tailwind CSS v4, React Router v6, Static JSON, Azure Static Web Apps
- **Created:** 2026-02-08

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

### 2026-02-08: Playwright E2E infrastructure established
- Playwright configured with Chromium-only for speed; webServer auto-starts `npm run dev` on port 5173.
- 49 E2E tests across 4 spec files: homepage, episodes, guests-contact, error-and-responsive.
- Screenshots saved to `e2e/screenshots/` (gitignored) — generated on every run, not committed.
- Mobile hamburger menu uses `aria-label="Toggle navigation menu"` for reliable targeting.
- Episode cards are `<Link>` components (full card is clickable), not individual anchor tags within cards.
- Contact form uses `mailto:` action with browser-native `required` validation — no JS validation to test.
- NotFound page renders a simple `<h1>Page Not Found</h1>`. Episode/guest not-found are inline in their detail pages.
- Responsive screenshot suite covers all 7 routes × 3 viewports (375px, 768px, 1280px) = 21 screenshots.

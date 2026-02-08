# Project Context

- **Owner:** Shayne Boyer (spboyer@live.com)
- **Project:** Shady Time Podcast website — Danish minimalist design, episodes with YouTube embeds, guest profiles, contact page
- **Stack:** Vite, React 18+, Tailwind CSS 3+, React Router v6, Static JSON, Azure Static Web Apps
- **Created:** 2026-02-08

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
- 2026-02-08: Facilitated Phase 1 Design Review. 10 decisions made covering data contracts (duration format, guestIds→Guest.id, slug for routing), orange accent-only rule, test infra in scaffold (Vitest+RTL+vitest-axe), placeholder images with seed data, scroll-to-top + 404 route in router, semantic HTML landmarks. All participants aligned — no disagreements. Key risk mitigated: broken images from seed data referencing missing files. Deferred: TypeScript, stress-testing edge cases.

📌 Team update (2026-02-08): BrowserRouter in main.jsx, not App.jsx — tests can use MemoryRouter without nesting — decided by Hockney
📌 Team update (2026-02-08): Phase 1 test conventions established — test file locations, router wrapping, semantic assertions, default exports required — decided by Keaton
📌 Team update (2026-02-08): Inline SVG social icons in Footer, no icon library — decided by McManus
📌 Team update (2026-02-08): All work must use feature branches + PRs, no direct commits to main — decided by Shayne Boyer

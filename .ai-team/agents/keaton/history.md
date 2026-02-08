# Project Context

- **Owner:** Shayne Boyer (spboyer@live.com)
- **Project:** Shady Time Podcast website — Danish minimalist design, episodes with YouTube embeds, guest profiles, contact page
- **Stack:** Vite, React 18+, Tailwind CSS 3+, React Router v6, Static JSON, Azure Static Web Apps
- **Created:** 2026-02-08

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

📌 Team update (2026-02-08): Phase 1 design review decisions merged — data formats, color usage, test infra, component contracts, semantic HTML — decided by Fenster (facilitating Hockney, McManus, Keaton)
📌 Team update (2026-02-08): Tailwind CSS v4 configuration documented — PostCSS plugin, CSS imports, no config file needed — decided by Hockney
📌 Keaton (2026-02-08): Wrote proactive Phase 1 test files for Header, Footer, Layout, NotFound — 16 test cases total covering semantic landmarks, nav links, social links, copyright year, children rendering, 404 messaging. Tests fail on import until components land — this is expected. Test infra (Vitest + RTL + jsdom) confirmed working via App.test.jsx smoke test. vitest-axe available but not used yet (waiting for component implementations for meaningful a11y audits).

📌 Team update (2026-02-08): BrowserRouter in main.jsx, not App.jsx — tests can use MemoryRouter without nesting — decided by Hockney
📌 Team update (2026-02-08): Inline SVG social icons in Footer, no icon library — decided by McManus
📌 Team update (2026-02-08): All work must use feature branches + PRs, no direct commits to main — decided by Shayne Boyer
📌 Keaton (2026-02-08): Wrote proactive Phase 2 test files — EpisodeCard (7), YouTubeEmbed (6), Home (7), Episodes (4), EpisodeDetail (5) — 29 test cases total. Uses MemoryRouter per team convention. Tests fail on main until McManus's Phase 2 components merge (PR #26). Verified all 47 tests pass (29 new + 18 existing) when run against McManus's component branch. Key patterns: MemoryRouter with initialEntries for route params, queryAllByText for multi-match scenarios, getByRole for semantic assertions.

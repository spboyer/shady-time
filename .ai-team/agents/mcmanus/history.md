# Project Context

- **Owner:** Shayne Boyer (spboyer@live.com)
- **Project:** Shady Time Podcast website — Danish minimalist design, episodes with YouTube embeds, guest profiles, contact page
- **Stack:** Vite, React 18+, Tailwind CSS 3+, React Router v6, Static JSON, Azure Static Web Apps
- **Created:** 2026-02-08

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
- **2026-02-08:** Built Header (#6), Footer (#7), and Layout (#8) components. Tailwind v4 has no config file — theme goes in CSS. Hockney's theme tokens weren't ready yet, so used arbitrary values with hex colors (`text-[#E86C25]`, `bg-[#F5F5F5]`, etc.) per design review palette. These can be swapped to semantic tokens later. Orange is accent-only: active NavLink and hover states. Inline SVGs for social icons — no icon library dependency. All 18 tests pass including pre-written component tests.

📌 Team update (2026-02-08): Phase 1 design review decisions merged — data formats, color usage, test infra, component contracts, semantic HTML — decided by Fenster (facilitating Hockney, McManus, Keaton)
📌 Team update (2026-02-08): Tailwind CSS v4 configuration documented — PostCSS plugin, CSS imports, no config file needed — decided by Hockney
📌 Team update (2026-02-08): BrowserRouter in main.jsx, not App.jsx — tests can use MemoryRouter without nesting — decided by Hockney
📌 Team update (2026-02-08): Phase 1 test conventions established — test file locations, router wrapping, semantic assertions, default exports required — decided by Keaton
📌 Team update (2026-02-08): All work must use feature branches + PRs, no direct commits to main — decided by Shayne Boyer
📌 Team update (2026-02-08): Each phase requires all tests passing and all PRs merged before advancing — decided by Shayne Boyer
- **2026-02-08:** Phase 2 Core Pages — built Homepage (#9), Episodes list (#10), EpisodeCard (#11), EpisodeDetail (#12), YouTubeEmbed (#13). Used Hockney's semantic theme tokens (`text-black`, `text-medium-grey`, `bg-orange`, `border-soft-grey`, `bg-grey`) instead of arbitrary hex values — much cleaner. Wrapped `<Routes>` in `<Layout>` inside App.jsx so Header/Footer render on every page. Sorted episodes by `publishedDate` descending. EpisodeCard uses `line-clamp-2`/`line-clamp-3` for truncation. YouTubeEmbed uses `aspect-video` for responsive 16:9. Updated 3 pre-written tests that assumed stub content (`getByText` → `getByRole` for heading queries, `queryByText` → `queryAllByText` for multi-match). All 47 tests pass, build succeeds. PR #25.
- **2026-02-08:** Phase 3 Extended Pages — built Guests list (#14), GuestCard (#15), GuestDetail (#16), SocialLinks (#17), Contact (#18). Extracted SVG icons into shared `socialIcons.jsx` module to avoid duplicating between Footer and SocialLinks — can refactor Footer later to consume same source. SocialLinks filters out empty URLs per data contract (some guests have sparse social). GuestDetail cross-references episodes.json via `guestIds.includes(guest.id)`. Contact uses two-column grid on `md:` breakpoint (social left, form right). Form uses `mailto:` action with HTML5 required validation. All 47 tests pass, build succeeds.
- **2026-02-08:** Fixed PR #29 (Hockney's rejected config/docs PR) — corrected React Router version from `6.x` to `7.x` in README.md, simplified SWA exclude pattern from `/images/*.{png,jpg,gif,svg}` to `/images/*` in staticwebapp.config.json. Per team rules, different agent fixes rejected PRs. Pushed to `squad/phase-4-config-docs` branch.
- **2026-02-08:** Responsive design polish (#19, PR #36) — recreated lost PR #28 work. Typography scaling: hero `text-3xl sm:text-5xl md:text-6xl`, page headings `text-2xl sm:text-3xl`, section headings `text-lg/xl sm:text-xl/2xl`. Touch targets ≥44px: hamburger button, mobile nav links (`py-3 min-h-[44px]`), Footer social icons (44px flex containers), SocialLinks (44px), form inputs, submit button, back-to links including 404 states (Fenster review feedback). Spacing: hero `py-12 sm:py-24`, homepage sections `space-y-12 sm:space-y-20`. All 47 tests pass, build succeeds.

# Decisions

> Shared team brain. All agents read this before starting work. Scribe maintains this file.

<!-- Decisions are appended below by Scribe from .ai-team/decisions/inbox/ -->

### 2026-02-08: Phase 1 Design Review decisions
**By:** Fenster (facilitating Hockney, McManus, Keaton)
**What:**
1. Episode `duration` uses `"MM:SS"` or `"H:MM:SS"` string format — display-ready, no parsing.
2. Placeholder images committed to `public/images/` with seed data — no broken img tags allowed.
3. Direct ESM JSON imports (`import data from '../data/file.json'`). No loader abstraction or path aliases.
4. `guestIds` references `Guest.id` strings. `slug` is a separate URL-routing field. Both exist on both models.
5. Orange `#E86C25` is accent-only: nav active state, CTA buttons, hover states. Not backgrounds or body text.
6. Router setup (#5) includes scroll-to-top behavior and a catch-all `*` → NotFound route.
7. Test infra (Vitest + RTL + jsdom + vitest-axe) ships in the Phase 1 scaffold (#1) with one smoke test.
8. Seed data includes edge cases: episode with no guests, guest with sparse optional fields.
9. Semantic HTML landmarks (`<nav>`, `<main>`, `<footer>`) — no redundant ARIA roles.
**Why:** Design review alignment before Phase 1 implementation. Resolves ambiguities in PRD around data formats, color usage, test tooling, and component contracts to prevent cross-agent rework.

### 2026-02-08: Tailwind CSS v4 Configuration
**By:** Hockney
**What:**
Tailwind CSS v4 is installed (latest). Key differences from v3:
- PostCSS plugin is `@tailwindcss/postcss`, not `tailwindcss`
- CSS entry point uses `@import 'tailwindcss'` instead of `@tailwind` directives
- No `tailwind.config.js` needed — v4 uses CSS-based configuration
- Stack note in history.md says "Tailwind CSS 3+" but v4 is what shipped; v4 is backwards-compatible with v3 utility classes
**Why:** Affects anyone writing CSS or configuring Tailwind theme extensions. Documents v4 migration from v3 conventions used in initial planning.

### 2026-02-08: BrowserRouter in main.jsx, not App.jsx
**By:** Hockney
**What:**
`BrowserRouter` is placed in `main.jsx` wrapping `<App />`, not inside `App.jsx`. This allows tests to wrap `<App>` in `MemoryRouter` without nesting two router providers. `App.jsx` uses `Routes` and `Route` directly and assumes a router context is provided by its parent.
**Why:** Keeps the routing tree testable and avoids the "You cannot render a `<Router>` inside another `<Router>`" error.

### 2026-02-08: Phase 1 Test Conventions
**By:** Keaton
**What:**
1. Test file location: `src/components/__tests__/*.test.jsx` and `src/pages/__tests__/*.test.jsx` — colocated in `__tests__` directories.
2. Router wrapping: Components using React Router hooks or `<Link>` are wrapped in `<BrowserRouter>` via a local `renderXxx()` helper per test file.
3. Semantic landmark assertions: Use `getByRole('navigation')`, `getByRole('contentinfo')`, `getByRole('main')` — not CSS selectors. `<nav>` must NOT have explicit `role` attribute.
4. Social link security: All external links must have `target="_blank"` and `rel` containing `noopener` and `noreferrer`.
5. Proactive test pattern: Tests written against component contracts before implementation. They fail on import until components exist — intentional.
**Why:** Establishes consistent test conventions for the team. Components must export as default from expected paths to match test imports.

### 2026-02-08: Inline SVG social icons, no icon library
**By:** McManus
**What:**
Inline SVG paths used for social icons (Twitter/X, Instagram, YouTube, LinkedIn, TikTok) in the Footer. No icon library dependency (react-icons, lucide-react, etc.).
**Why:** Five small `<svg>` elements add negligible weight versus a library that ships hundreds of unused icons. Revisit if icon needs expand beyond the footer.

### 2026-02-08: Git Workflow and Branch Strategy (consolidated)
**By:** Shayne Boyer, Hockney
**What:**
1. All work uses feature branches (`squad/<feature-name>`) — no direct commits to main.
2. PRs opened against main; reference issues with `Closes #N` syntax for auto-close on merge.
3. Each issue gets a comment linking to its PR for traceability.
4. Remote `origin` is `git@github.com:spboyer/shady-time.git`.
5. `.gitignore` excludes: `node_modules/`, `dist/`, `.env*`, `.ai-team-templates/`, `.github/agents/`.
6. `.ai-team/` files (team state, decisions, history, logs) ARE committed to the repo.
**Why:** Shayne directed proper git workflow. Feature branches + PRs enable code review before merge. Issue comments create an audit trail. `.ai-team/` in the repo keeps team state versioned alongside code.

### 2026-02-08: User directive — phase gating on tests + PR merge
**By:** Shayne Boyer (via Copilot)
**What:** Each phase must have all tests passing and all PRs merged before moving to the next phase. No skipping ahead.
**Why:** User request — captured for team memory


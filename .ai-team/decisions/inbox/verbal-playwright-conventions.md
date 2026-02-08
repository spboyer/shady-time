# Decision: Playwright E2E test conventions

**By:** Verbal
**Date:** 2026-02-08

## What
1. Playwright runs Chromium-only for speed. Firefox/WebKit can be added later by extending `projects` in `playwright.config.js`.
2. E2E tests live in `e2e/` directory (separate from unit tests in `src/`).
3. Screenshots are generated to `e2e/screenshots/` on every run and gitignored — they are evidence artifacts, not committed assets.
4. Explicit `page.screenshot({ path })` calls with descriptive filenames, not relying on Playwright's automatic screenshot config.
5. `npm run test:e2e` for headless runs; `npm run test:e2e:ui` for interactive Playwright UI mode.

## Why
Keeps E2E tests isolated from unit tests, provides visual evidence of every page at every breakpoint, and stays fast by targeting one browser. Descriptive screenshot filenames make CI artifacts immediately useful without cross-referencing test names.

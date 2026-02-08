# Design Review — 2026-02-08
**Facilitator:** Fenster
**Participants:** Hockney, McManus, Keaton
**Context:** Phase 1 Foundation kickoff — 8 issues

## Decisions

1. **Duration format**: Use `"MM:SS"` or `"H:MM:SS"` string in episode data. Display-ready, no parsing needed.
2. **Placeholder images**: Hockney commits simple placeholder images to `public/images/{episodes,guests}/` with seed data. No broken `<img>` tags.
3. **Import convention**: Direct ESM import (`import episodes from '../data/episodes.json'`). No loader abstraction, no `@/` path alias in Phase 1.
4. **Cross-references**: `guestIds` array in episodes references `Guest.id` strings. `slug` is a separate field used for URL routing. Both models have both fields per PRD.
5. **Orange (#E86C25) usage**: Primary accent only — nav active state, CTA buttons, hover states. Not for backgrounds or body text. Restrained per Danish minimalism.
6. **Scroll-to-top**: McManus adds scroll-to-top behavior in Router setup (#5).
7. **404 catch-all route**: Add a `*` route with a simple NotFound stub in #5.
8. **Test infra in Phase 1**: Vitest + React Testing Library + jsdom + vitest-axe added in scaffold (#1). One smoke test to prove the pipeline works.
9. **Seed data edge cases**: Include at least one episode with empty `guestIds` and one guest with minimal optional fields (missing some social links).
10. **Semantic HTML landmarks**: Use `<nav>`, `<main>`, `<footer>` semantic elements directly. No redundant `role` attributes.

## Action Items

| Owner | Action |
|-------|--------|
| Hockney | Add placeholder images to `public/images/{episodes,guests}/` when creating seed data (#3, #4) |
| Hockney | Include edge case records in seed data: episode with no guests, guest with sparse social links (#3, #4) |
| Hockney | Add Vitest + RTL + jsdom + vitest-axe to scaffold devDependencies with a working `vitest.config.js` (#1) |
| McManus | Use orange `#E86C25` as accent only: nav active state, CTA buttons, hover states (#6, #7) |
| McManus | Add scroll-to-top wrapper in Router setup (#5) |
| McManus | Add catch-all `*` → NotFound route (#5) |
| McManus | Use semantic HTML elements (`<nav>`, `<main>`, `<footer>`) — no redundant ARIA roles (#6, #7, #8) |
| Keaton | Write a11y contract tests for Header/Footer/Layout verifying landmark elements after components land |
| Keaton | Validate seed data edge cases render without breaking after McManus delivers components |

## Notes

**Risks raised:**
- Hockney flagged that `youtubeUrl` may need to be nullable for unpublished episodes. **Resolution:** Keep it required in Phase 1 seed data (all seed episodes are "published"). Revisit if/when CMS integration is in scope.
- McManus flagged orange usage ambiguity. **Resolved:** Accent-only rule documented above.
- Keaton pushed hard for axe-core in Phase 1. **Agreed.** 5-minute setup cost vs. retrofitting a11y across 3 components is an easy call.

**Concerns noted but deferred:**
- TypeScript interfaces for data models — not adding TS in Phase 1 (plain JSX per PRD). Hockney can add JSDoc `@typedef` comments if useful, but not required.
- Keaton requested max-length title edge case in seed data. Hockney will add one title at ~100 chars; we'll defer true stress testing to a later phase.

**No disagreements.** All participants aligned quickly on contracts and conventions.

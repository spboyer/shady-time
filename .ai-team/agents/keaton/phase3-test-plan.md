# Phase 3 Test Plan — Guests, Social Links, Contact

## Component Test Cases

### GuestCard (`src/components/__tests__/GuestCard.test.jsx`)
> McManus writes these with implementation. Keaton supplements if gaps exist.

- [ ] Renders guest name and title
- [ ] Renders guest photo with alt text = guest name
- [ ] Links to `/guests/:slug` detail page
- [ ] Renders only non-empty social links (skip empty strings)
- [ ] Social links have `target="_blank"` and `rel="noopener noreferrer"`
- [ ] Edge: guest-001 (sparse social — only twitter + linkedin) renders exactly 2 icons
- [ ] Edge: guest-002 (all 5 social links) renders exactly 5 icons

### SocialLinks (`src/components/__tests__/SocialLinks.test.jsx`)
> McManus writes if extracted as component. Otherwise Keaton adds supplementary.

- [ ] Renders nothing when all social values are empty strings
- [ ] Renders only links with truthy URLs
- [ ] Each link has accessible label (aria-label or visually-hidden text, e.g. "Twitter")
- [ ] Icons are decorative (SVG has `aria-hidden="true"`)
- [ ] Links open in new tab with noopener/noreferrer

### GuestDetail (`src/pages/__tests__/GuestDetail.test.jsx`)
> McManus writes these. Keaton supplements.

- [ ] Renders guest name, title, bio, photo
- [ ] Renders social links for the guest
- [ ] Lists episodes featuring this guest (cross-reference `guestIds`)
- [ ] Episode links navigate to `/episodes/:slug`
- [ ] Edge: guest-001 appears in ep-001 and ep-005 — shows 2 episodes
- [ ] Edge: handles route param `:slug` via MemoryRouter `initialEntries`
- [ ] 404/not-found state for invalid guest slug

### Guests list page (`src/pages/__tests__/Guests.test.jsx`)
> McManus writes these. Keaton supplements.

- [ ] Renders all 4 guest cards
- [ ] Page has heading (h1) "Guests" or similar
- [ ] Each card links to correct guest detail route
- [ ] Page has `<main>` landmark (via Layout)

### Contact page (`src/pages/__tests__/Contact.test.jsx`)
> McManus writes these. Keaton supplements.

- [ ] Renders contact form with name, email, message fields
- [ ] All inputs have associated `<label>` elements (explicit or implicit)
- [ ] Submit button exists and is type="submit"
- [ ] Required fields show validation on empty submit
- [ ] Email field validates email format (type="email")
- [ ] Success state shown after valid submission
- [ ] Edge: extra-long message text doesn't break layout (visual, skip for now)

---

## Edge Cases Checklist

- [ ] Guest with sparse social (guest-001: only twitter + linkedin) — no empty icon slots
- [ ] Guest with all social links (guest-002: 5/5) — all render
- [ ] Episode with no guests (ep-004) — guest detail pages shouldn't reference it spuriously
- [ ] Episode cross-ref: guest-001 appears in ep-001 + ep-005
- [ ] Multi-guest episode: ep-002 has guest-002 + guest-003
- [ ] Contact form: empty submit triggers validation, not a submission
- [ ] Contact form: whitespace-only name/email rejected
- [ ] Invalid guest slug → not-found state

---

## Accessibility Checks

- [ ] Guests page: `<main>` landmark present
- [ ] GuestDetail: `<main>` landmark, `<h1>` for guest name
- [ ] Social links: each has `aria-label` (e.g. "Alex Rivera on Twitter")
- [ ] Social link SVGs: `aria-hidden="true"` (decorative)
- [ ] Contact form: all inputs have visible `<label>` elements
- [ ] Contact form: error messages associated via `aria-describedby` or `aria-live`
- [ ] Guest photo: `<img>` has meaningful `alt` (guest name)
- [ ] External links: `rel="noopener noreferrer"` on all social links

---

## Ownership: McManus vs Keaton

| File | Primary Author | Keaton Supplements |
|---|---|---|
| `GuestCard.test.jsx` | McManus | Social link edge cases, a11y |
| `SocialLinks.test.jsx` | McManus (if component exists) | Full file if not created |
| `GuestDetail.test.jsx` | McManus | Episode cross-ref, 404 slug |
| `Guests.test.jsx` | McManus | Guest count, card links |
| `Contact.test.jsx` | McManus | Form validation edge cases |

**Convention:** Keaton's supplementary tests go in `*.supplemental.test.jsx` files to avoid merge conflicts.

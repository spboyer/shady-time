### Phase 2 Test Conventions
**By:** Keaton
**What:**
1. Route-dependent tests use `MemoryRouter` (not `BrowserRouter`) with `initialEntries` for parameterized routes like `/episodes/:slug`.
2. When a query may match multiple DOM elements (e.g., `/about/i` matching both a heading and body text), use `getByRole('heading', { name: ... })` or `queryAllByText()` — never `getByText()` with ambiguous patterns.
3. Proactive tests for components that import other not-yet-implemented components will fail at import time — this is expected and intentional.
**Why:** Avoids "found multiple elements" errors in RTL. MemoryRouter with initialEntries is the cleanest pattern for testing route-param-dependent pages without URL manipulation.

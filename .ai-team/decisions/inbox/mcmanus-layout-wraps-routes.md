### Layout wraps Routes in App.jsx
**By:** McManus
**What:**
`<Layout>` (Header + main + Footer) now wraps `<Routes>` inside `App.jsx`, so all pages automatically get the site chrome. Individual page components render only their own content — no Layout import needed per page.
**Why:** Avoids repeating Layout in every page component and ensures consistent Header/Footer on all routes including NotFound.

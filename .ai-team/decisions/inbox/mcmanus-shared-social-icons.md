### Shared SVG icons module for social platforms
**By:** McManus
**What:**
Social platform SVG icons are now exported from `src/components/socialIcons.jsx` as a `socialIcons` object keyed by platform name (twitter, instagram, linkedin, youtube, tiktok). The `SocialLinks` component consumes this module. The Footer still has its own inline copy — a future cleanup could refactor Footer to use `socialIcons` too.
**Why:** Avoids duplicating SVG paths across components. Keeps a single source of truth for icon markup that can be shared by SocialLinks, Footer, or any future component needing platform icons.

# Product Requirements Document — Shady Time Podcast

## Overview

**Shady Time** is a podcast website built with a Scandinavian/Danish minimalist design aesthetic. The site serves as the primary web presence for the podcast, featuring episode listings with embedded YouTube video playback, guest profiles, and social media connectivity.

## Goals

1. Provide a polished, professional web presence for the Shady Time podcast
2. Allow listeners to browse and watch episodes directly on the site via YouTube embeds
3. Showcase guest information with detailed profiles
4. Connect audiences to the podcast's social media channels
5. Run locally for development and deploy to Azure Static Web Apps for production

## Target Audience

- Existing podcast listeners looking for episode archives and show notes
- New listeners discovering the podcast through web search or social media
- Potential guests exploring past episodes and guest profiles

---

## Design Direction

### Aesthetic

**Danish minimalism** — inspired by Scandinavian design principles:

- Generous whitespace and breathing room between elements
- Clean, modern sans-serif typography (Inter font family)
- Restrained use of color with purposeful accent placement
- Grid-based layouts with consistent spacing
- Card-based UI patterns for browsable content

### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary accent | Orange | `#E86C25` |
| Text / Headings | Black | `#1A1A1A` |
| Background (alt) | Light Grey | `#F5F5F5` |
| Secondary text | Medium Grey | `#6B7280` |
| Borders / Dividers | Soft Grey | `#E5E7EB` |
| Canvas | White | `#FFFFFF` |

### Typography

- **Headings**: Inter, 700 weight
- **Body**: Inter, 400 weight
- **Scale**: Modular type scale with clear hierarchy (h1 → body)

---

## Pages & Features

### 1. Homepage

The landing page establishes the podcast brand and directs visitors to content.

**Sections:**
- **Hero**: Podcast name, tagline, call-to-action button ("Listen Now" → latest episode)
- **Featured Episode**: Card highlighting the most recent episode with thumbnail, title, and play link
- **About**: Brief paragraph about the podcast's mission and hosts
- **Quick Navigation**: Visual links to Episodes, Guests, and Contact pages

### 2. Episodes

#### Episode List Page (`/episodes`)
- Responsive grid of episode cards
- Each card displays: thumbnail, episode number, title, publish date, short description
- Cards link to episode detail pages
- Sorted by publish date (newest first)

#### Episode Detail Page (`/episodes/:slug`)
- Full episode title and metadata (date, duration, episode number)
- **YouTube video embed** — responsive 16:9 iframe player
- Show notes (full text)
- Guest information section with links to guest profiles
- "Back to Episodes" navigation

### 3. Guests

#### Guest List Page (`/guests`)
- Grid of guest profile cards
- Each card displays: photo, name, title/role
- Cards link to guest detail pages

#### Guest Detail Page (`/guests/:slug`)
- Large profile photo
- Full name, title/role
- Bio text
- Social media links (contextual — only shows platforms the guest has)
- List of episodes the guest appeared on, with links

### 4. Contact Page (`/contact`)

- **Social Media Links**: Prominent grid of social platform links with icons
  - Twitter/X
  - Instagram
  - YouTube
  - LinkedIn
  - TikTok
- **Contact Form**: Simple name/email/message form (mailto action, no backend)

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Build tool | Vite | Fast HMR, modern defaults, zero-config |
| Framework | React 18+ | Component model, ecosystem, team familiarity |
| Styling | Tailwind CSS 3+ | Utility-first, design token support, small bundle |
| Routing | React Router v6 | Standard React SPA routing |
| Data | Static JSON files | Simple, no backend needed, easy to update |
| Deployment | Azure Static Web Apps | Free tier, CI/CD, global CDN |
| Dev server | Vite dev server | `npm run dev` for local testing |

---

## Data Models

### Episode

```json
{
  "id": "ep-001",
  "title": "Episode Title",
  "slug": "episode-title",
  "episodeNumber": 1,
  "description": "Short description for cards and meta",
  "showNotes": "Full show notes content",
  "publishedDate": "2026-01-15",
  "youtubeUrl": "https://www.youtube.com/embed/VIDEO_ID",
  "thumbnail": "/images/episodes/ep-001.jpg",
  "guestIds": ["guest-001"],
  "duration": "45:30"
}
```

### Guest

```json
{
  "id": "guest-001",
  "name": "Guest Name",
  "slug": "guest-name",
  "title": "Job Title / Role",
  "bio": "Full bio text describing the guest",
  "photo": "/images/guests/guest-001.jpg",
  "social": {
    "twitter": "https://twitter.com/handle",
    "instagram": "https://instagram.com/handle",
    "linkedin": "https://linkedin.com/in/handle",
    "youtube": "https://youtube.com/@handle",
    "tiktok": "https://tiktok.com/@handle"
  }
}
```

---

## Project Structure

```
shady-time/
├── docs/
│   └── PRD.md
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── staticwebapp.config.json
├── public/
│   └── images/
│       ├── episodes/
│       └── guests/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Layout.jsx
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── EpisodeCard.jsx
    │   ├── GuestCard.jsx
    │   ├── YouTubeEmbed.jsx
    │   └── SocialLinks.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Episodes.jsx
    │   ├── EpisodeDetail.jsx
    │   ├── Guests.jsx
    │   ├── GuestDetail.jsx
    │   └── Contact.jsx
    └── data/
        ├── episodes.json
        └── guests.json
```

---

## Routing

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with hero and featured episode |
| `/episodes` | Episodes | Grid listing of all episodes |
| `/episodes/:slug` | EpisodeDetail | Single episode with YouTube embed |
| `/guests` | Guests | Grid listing of all guests |
| `/guests/:slug` | GuestDetail | Single guest profile |
| `/contact` | Contact | Social links and contact form |

---

## Non-Functional Requirements

- **Performance**: Lighthouse score ≥ 90 on all metrics
- **Accessibility**: WCAG 2.1 AA compliance (semantic HTML, alt text, keyboard navigation)
- **Responsive**: Mobile-first, breakpoints at sm (640px), md (768px), lg (1024px)
- **Browser support**: Latest 2 versions of Chrome, Firefox, Safari, Edge
- **SEO**: Proper meta tags, semantic headings, descriptive page titles

---

## Deployment

### Local Development
```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

### Azure Static Web Apps
- SPA fallback routing via `staticwebapp.config.json`
- Build output directory: `dist`
- Build command: `npm run build`

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif}", "/assets/*"]
  }
}
```

---

## Future Considerations (Out of Scope)

- RSS feed integration for automatic episode ingestion
- CMS integration (e.g., headless CMS) for content management
- Search functionality across episodes and guests
- Newsletter signup integration
- Analytics dashboard
- Audio-only player for podcast MP3s

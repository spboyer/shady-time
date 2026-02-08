# Shady Time Podcast

A podcast website built with Scandinavian/Danish minimalist design. Features episode listings with embedded YouTube playback, guest profiles, and social media connectivity.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Vite](https://vite.dev) | 7.x | Build tool and dev server |
| [React](https://react.dev) | 19.x | UI framework |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first CSS |
| [React Router](https://reactrouter.com) | 7.x | Client-side routing |
| [Vitest](https://vitest.dev) | 4.x | Test runner |
| [Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static) | — | Hosting and deployment |

## Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org))
- **npm** (included with Node.js)

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Test

```bash
npm test
```

## Project Structure

```
├── public/
│   └── images/
│       ├── episodes/       # Episode thumbnail SVGs
│       └── guests/         # Guest photo SVGs
├── src/
│   ├── components/         # Reusable UI components
│   │   └── __tests__/      # Component tests
│   ├── data/               # Static JSON seed data
│   │   ├── episodes.json
│   │   └── guests.json
│   ├── pages/              # Route page components
│   │   └── __tests__/      # Page tests
│   ├── App.jsx             # Route definitions
│   ├── index.css           # Tailwind + theme tokens
│   └── main.jsx            # Entry point with BrowserRouter
├── docs/
│   └── PRD.md              # Product Requirements Document
├── staticwebapp.config.json # Azure SWA routing config
├── vite.config.js
└── vitest.config.js
```

## Deployment

This project deploys to [Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static). The `staticwebapp.config.json` configures navigation fallback for client-side routing — all requests that don't match static assets are rewritten to `/index.html`.

## Documentation

- [Product Requirements Document](docs/PRD.md)

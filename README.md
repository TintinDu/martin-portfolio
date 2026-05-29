# martin-portfolio

Personal portfolio website for Martin Dubois Cousiño — full-stack developer.

**[→ Live demo](https://martin-portfolio.vercel.app)** · [GitHub](https://github.com/TintinDu/martin-portfolio) · [LinkedIn](https://www.linkedin.com/in/martin-dubois-cousino-80196218a) · martindubois1602@gmail.com

Inspired by the UI of Persona 3 (JRPG): skewed clip-path panels, cyan/red palette, keyboard-driven navigation, and animated page transitions.

## Stack

- React 19 + TypeScript + Vite 8
- Framer Motion — page transitions
- CSS Modules — scoped styles, no CSS-in-JS
- React Router v7 — client-side routing with lazy-loaded pages

## Pages

| Route | Description |
|---|---|
| `/` | Main menu — keyboard navigation (↑ ↓ ↵) |
| `/about` | Background & journey — character selection style |
| `/skills` | Tech stack — RPG ranked card list |
| `/projects` | Side projects with GitHub links |
| `/socials` | GitHub & LinkedIn |

## Running locally

Requires Node 22+ (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

## Architecture

```
src/
├── constants/   # Design tokens (colors, timings, z-index) + route paths
├── data/        # All content as typed TS config files
├── hooks/       # useKeyboardNav, useMountDelay
├── components/  # Shared UI: PageScreen, PageTransition, SkewBar, RedStripe, KeyHint
├── pages/       # One folder per route, each ~100 lines max
└── types/       # Shared TypeScript interfaces
```

Key decisions:
- CSS custom properties defined in `index.html` to guarantee load order before CSS Modules
- All page data lives in `src/data/` — zero hardcoded content in components
- Keyboard navigation centralized in `useKeyboardNav` with `preventDefault()` on arrow keys
- Routes lazy-loaded with `React.lazy` + `Suspense`

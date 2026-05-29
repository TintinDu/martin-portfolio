import type { Project } from '../types';

export const PROJECTS: readonly Project[] = [
  {
    id: 'portfolio',
    title: 'PORTFOLIO — PERSONA 3 UI',
    description:
      'This site. A Persona 3 JRPG-inspired portfolio built with React 19, TypeScript, Framer Motion, and CSS Modules. Keyboard-driven navigation, skewed clip-path panels, and full page transitions.',
    tags: ['React 19', 'TypeScript', 'Framer Motion', 'CSS Modules', 'Vite'],
    githubUrl: 'https://github.com/TintinDu/martin-portfolio',
    year: 2025,
    status: 'live',
  },
  {
    id: 'music',
    title: 'MUSIC — WHAT I LISTEN TO',
    description:
      'Personal music dashboard. Top artists and tracks from stats.fm, covers I can play with Spotify embed and YouTube links. Early 2000s gaming aesthetic.',
    tags: ['React 19', 'TypeScript', 'TanStack Query', 'stats.fm API', 'Vite'],
    githubUrl: 'https://github.com/TintinDu/martin-precheur-music',
    liveUrl: 'https://martin-precheur-music.vercel.app',
    year: 2025,
    status: 'live',
  },
] as const;

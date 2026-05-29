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
] as const;

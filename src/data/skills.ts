import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'frontend',
    badge: 'I',
    title: 'FRONTEND',
    subtitle: 'React · TypeScript · UI',
    items: [
      { index: '01', title: 'React 18/19', level: 'Expert' },
      { index: '02', title: 'TypeScript', level: 'Expert' },
      { index: '03', title: 'Framer Motion', level: 'Advanced' },
      { index: '04', title: 'CSS Modules / Tailwind', level: 'Advanced' },
      { index: '05', title: 'Vite / React Router', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    badge: 'II',
    title: 'BACKEND',
    subtitle: 'NestJS · Node · APIs',
    items: [
      { index: '01', title: 'NestJS', level: 'Advanced' },
      { index: '02', title: 'Node.js', level: 'Advanced' },
      { index: '03', title: 'REST & GraphQL', level: 'Advanced' },
      { index: '04', title: 'Temporal Workflows', level: 'Intermediate' },
      { index: '05', title: 'RabbitMQ / Event-driven', level: 'Intermediate' },
    ],
  },
  {
    id: 'data',
    badge: 'III',
    title: 'DATA',
    subtitle: 'MongoDB · PostgreSQL',
    items: [
      { index: '01', title: 'MongoDB / Mongoose', level: 'Advanced' },
      { index: '02', title: 'PostgreSQL', level: 'Intermediate' },
      { index: '03', title: 'Prisma ORM', level: 'Intermediate' },
    ],
  },
  {
    id: 'craft',
    badge: 'IV',
    title: 'CRAFT',
    subtitle: 'Review · Onboarding · Quality',
    items: [
      { index: '01', title: '3+ years production CDI', level: 'Expert' },
      { index: '02', title: '600+ MRs authored', level: 'Expert' },
      { index: '03', title: '1 900+ code reviews', level: 'Expert' },
      { index: '04', title: 'Onboarding lead', level: 'Advanced' },
    ],
  },
] as const;

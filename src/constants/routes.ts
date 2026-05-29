export const ROUTES = {
  menu: '/',
  about: '/about',
  skills: '/skills',
  projects: '/projects',
  socials: '/socials',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

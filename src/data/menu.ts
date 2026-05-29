import type { MenuItem } from '../types';
import { ROUTES } from '../constants/routes';

export const MENU_ITEMS: readonly MenuItem[] = [
  {
    id: 'about',
    label: 'ABOUT ME',
    route: ROUTES.about,
    fontSize: 82,
    offsetX: 0,
    offsetY: 0,
    skewX: -6,
    skewY: 0,
  },
  {
    id: 'skills',
    label: 'SKILLS',
    route: ROUTES.skills,
    fontSize: 68,
    offsetX: 22,
    offsetY: 0,
    skewX: -6,
    skewY: 0,
  },
  {
    id: 'projects',
    label: 'SIDE PROJECTS',
    route: ROUTES.projects,
    fontSize: 54,
    offsetX: 10,
    offsetY: 0,
    skewX: -6,
    skewY: 0,
  },
  {
    id: 'socials',
    label: 'SOCIALS',
    route: ROUTES.socials,
    fontSize: 76,
    offsetX: 16,
    offsetY: 0,
    skewX: -6,
    skewY: 0,
  },
] as const;

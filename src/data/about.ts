import type { AboutSection } from '../types';

export const ABOUT_SECTIONS: readonly AboutSection[] = [
  {
    id: 'journey',
    label: 'MY JOURNEY',
    roleTag: 'DEV',
    charIndex: 0,
    content: [
      'Started as a full-stack apprentice in October 2022',
      'Permanent contract (CDI) since October 2024',
      'Joined team CELESTE in February 2025',
      '3+ years building production TypeScript at scale',
    ],
    caption: 'Full-stack developer — PropTech SaaS',
  },
  {
    id: 'craft',
    label: 'MY CRAFT',
    roleTag: 'LEAD',
    charIndex: 1,
    content: [
      'Onboarding lead — I ramp up every new teammate',
      '1 900+ code reviews over my career',
      'TypeScript discipline: no any, typed errors, clean APIs',
      'Deep focus on architecture and long-term maintainability',
    ],
    caption: 'Code quality is a team sport',
  },
  {
    id: 'offscreen',
    label: 'OFF SCREEN',
    roleTag: 'DEV',
    charIndex: 2,
    content: [
      'Music production with Ableton Live',
      'Gaming — hence this portfolio\'s aesthetic',
      'Always learning: new stacks, new challenges, new ideas',
    ],
    caption: 'There is life outside the IDE',
  },
] as const;

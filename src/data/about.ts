import type { AboutSection } from '../types';

export const ABOUT_SECTIONS: readonly AboutSection[] = [
  {
    id: 'journey',
    label: 'MY JOURNEY',
    roleTag: 'DEV',
    charIndex: 0,
    content: [
      'Le Wagon Paris — full-stack bootcamp, early 2022',
      'OpenClassrooms React front-end apprenticeship — Oct 2022 to Oct 2024',
      'Permanent contract (CDI) since October 2024',
      'Core team then team CELESTE — PropTech SaaS at scale',
    ],
    caption: 'Full-stack developer — PropTech SaaS',
  },
  {
    id: 'craft',
    label: 'MY CRAFT',
    roleTag: 'LEAD',
    charIndex: 1,
    content: [
      'Onboarding lead — every new dev joins through me',
      'Obsessed with code quality: typed errors, clean APIs, no shortcuts',
      'Deep focus on architecture and long-term maintainability',
      'Strong code review culture — I give as much as I receive',
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

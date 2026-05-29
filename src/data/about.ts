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
      'Core team then team CELESTE since February 2025',
    ],
    caption: 'Full-stack developer, 3+ years in production',
  },
  {
    id: 'craft',
    label: 'MY CRAFT',
    roleTag: 'LEAD',
    charIndex: 1,
    content: [
      'Onboarding lead for about a year — ramped up new teammates',
      'Strong code review culture — I give as much as I receive',
      'Contributor to cross-team infra: Review Apps (EC2/AWS) & CI/CD pipeline',
      'Obsessed with code quality: typed errors, clean APIs, no shortcuts',
    ],
    caption: 'Code quality is a team sport',
  },
  {
    id: 'offscreen',
    label: 'OFF SCREEN',
    roleTag: 'DEV',
    charIndex: 2,
    content: [
      'Gym — clears the head better than anything else',
      'Music production with Ableton Live',
      'Gaming — hence this portfolio\'s aesthetic',
    ],
    caption: 'There is life outside the IDE',
  },
] as const;

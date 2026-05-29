import type { SocialLink } from '../types';

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GITHUB',
    handle: '@martindubois1602',
    url: 'https://github.com/martindubois1602',
    description: 'Open source & side projects',
    iconKey: 'github',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    handle: 'martin-dubois-cousino',
    url: 'https://www.linkedin.com/in/martin-dubois-cousino',
    description: 'Professional profile',
    iconKey: 'linkedin',
  },
] as const;

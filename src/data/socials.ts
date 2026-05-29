import type { SocialLink } from '../types';

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GITHUB',
    handle: '@TintinDu',
    url: 'https://github.com/TintinDu',
    description: 'Open source & side projects',
    iconKey: 'github',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    handle: 'martin-dubois-cousino',
    url: 'https://www.linkedin.com/in/martin-dubois-cousino-80196218a',
    description: 'Professional profile',
    iconKey: 'linkedin',
  },
  {
    id: 'email',
    label: 'EMAIL',
    handle: 'martindubois1602@gmail.com',
    url: 'mailto:martindubois1602@gmail.com',
    description: 'Drop me a message',
    iconKey: 'email',
  },
] as const;

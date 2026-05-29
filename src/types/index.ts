import type { AppRoute } from '../constants/routes';

export interface MenuItem {
  readonly id: string;
  readonly label: string;
  readonly route: AppRoute;
  readonly external?: string;
  readonly fontSize: number;
  readonly offsetX: number;
  readonly offsetY: number;
  readonly skewX: number;
  readonly skewY: number;
}

export interface SkillCategory {
  readonly id: string;
  readonly badge: string;
  readonly title: string;
  readonly subtitle: string;
  readonly items: readonly SkillItem[];
}

export interface SkillItem {
  readonly index: string;
  readonly title: string;
  readonly level: 'Expert' | 'Advanced' | 'Intermediate' | 'Learning';
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly year: number;
  readonly status: 'live' | 'wip' | 'archived';
}

export interface SocialLink {
  readonly id: string;
  readonly label: string;
  readonly handle: string;
  readonly url: string;
  readonly description: string;
  readonly iconKey: string;
}

export interface AboutSection {
  readonly id: string;
  readonly label: string;
  readonly roleTag: string;
  readonly content: readonly string[];
  readonly caption: string;
  readonly charIndex: number;
  readonly portraitIndex: 0 | 1 | 2;
}

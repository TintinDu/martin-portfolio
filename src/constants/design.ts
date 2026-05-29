export const COLORS = {
  cyan: '#3ce2ff',
  red: '#c4001a',
  redBright: '#ff2a2a',
  redGlow: 'rgba(196, 0, 26, 0.18)',
  pinkGlow: 'rgba(255, 100, 180, 0.35)',
  dark: '#000',
  panel: '#0a0a0e',
  white: '#fff',
} as const;

export const TIMING = {
  mountDelay: 60,
  menuMountDelay: 900,
  barSlideIn: 550,
  staggerStep: 80,
  revealDelay: 180,
} as const;

export const EASING = {
  spring: [0.22, 1, 0.36, 1] as [number, number, number, number],
  sharp: [0.76, 0, 0.24, 1] as [number, number, number, number],
  out: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
} as const;

export const TRANSITION = {
  duration: 0.45,
  stagger: 0.06,
} as const;

export const Z = {
  bgVideo: 0,
  bgOverlay: 1,
  panels: 6,
  nav: 10,
  overlay: 12,
  portrait: 13,
  footer: 14,
  transition: 999,
} as const;

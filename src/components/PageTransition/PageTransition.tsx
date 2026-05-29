import { DefaultTransition } from './transitions/DefaultTransition';
import { AboutTransition } from './transitions/AboutTransition';
import { SkillsTransition } from './transitions/SkillsTransition';
import { SocialsTransition } from './transitions/SocialsTransition';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

export type TransitionVariant = 'default' | 'about' | 'skills' | 'socials' | 'projects';

interface PageTransitionProps {
  children: ReactNode;
  variant?: TransitionVariant;
}

function TransitionOverlay({ variant }: { variant: TransitionVariant }): React.JSX.Element | null {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  switch (variant) {
    case 'about': return <AboutTransition />;
    case 'skills': return <SkillsTransition />;
    case 'socials': return <SocialsTransition />;
    default: return <DefaultTransition />;
  }
}

export function PageTransition({ children, variant = 'default' }: PageTransitionProps): React.JSX.Element {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <TransitionOverlay variant={variant} />
      {children}
    </div>
  );
}

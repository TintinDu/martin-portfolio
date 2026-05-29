import { motion } from 'framer-motion';
import { EASING, TRANSITION } from '../../constants/design';
import { DefaultTransition } from './transitions/DefaultTransition';
import { AboutTransition } from './transitions/AboutTransition';
import { SkillsTransition } from './transitions/SkillsTransition';
import { SocialsTransition } from './transitions/SocialsTransition';
import type { ReactNode } from 'react';

export type TransitionVariant = 'default' | 'about' | 'skills' | 'socials' | 'projects';

interface PageTransitionProps {
  children: ReactNode;
  variant?: TransitionVariant;
}

const variantMap: Record<TransitionVariant, React.JSX.Element> = {
  default: <DefaultTransition />,
  about: <AboutTransition />,
  skills: <SkillsTransition />,
  socials: <SocialsTransition />,
  projects: <DefaultTransition />,
};

export function PageTransition({ children, variant = 'default' }: PageTransitionProps): React.JSX.Element {
  return (
    <>
      {variantMap[variant]}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: TRANSITION.duration, ease: EASING.spring }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </>
  );
}

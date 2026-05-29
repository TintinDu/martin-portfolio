import { motion } from 'framer-motion';
import { EASING, TRANSITION } from '../../../constants/design';

const cards = [
  { color: '#c4001a', height: '28%', top: '0%', delay: 0 },
  { color: '#000', height: '28%', top: '24%', delay: 0.06 },
  { color: '#0a0a0e', height: '28%', top: '48%', delay: 0.12 },
  { color: '#3ce2ff', height: '28%', top: '72%', delay: 0.18 },
];

export function SkillsTransition(): React.JSX.Element {
  return (
    <>
      {cards.map((c, i) => (
        <motion.div
          key={i}
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: c.top,
            height: c.height,
            background: c.color,
            zIndex: 999 - i,
            transformOrigin: 'right',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: TRANSITION.duration * 2,
            delay: c.delay,
            ease: EASING.sharp,
            times: [0, 0.4, 0.6, 1],
          }}
        />
      ))}
    </>
  );
}

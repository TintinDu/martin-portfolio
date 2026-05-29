import { motion } from 'framer-motion';
import { EASING, TRANSITION } from '../../../constants/design';

const panels = [
  { color: '#060d1f', skew: '-8deg', delay: 0 },
  { color: '#0b1a3b', skew: '0deg', delay: 0.07 },
  { color: '#3ce2ff', skew: '5deg', delay: 0.14 },
];

export function AboutTransition(): React.JSX.Element {
  return (
    <>
      {panels.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: 'fixed',
            inset: 0,
            background: p.color,
            zIndex: 999 - i,
            transformOrigin: 'left',
            skewY: p.skew,
          }}
          initial={{ x: '-105%' }}
          animate={{ x: ['-105%', '0%', '0%', '105%'] }}
          transition={{
            duration: TRANSITION.duration * 2.2,
            delay: p.delay,
            ease: EASING.sharp,
            times: [0, 0.38, 0.62, 1],
          }}
        />
      ))}
    </>
  );
}

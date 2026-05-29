import { motion } from 'framer-motion';
import { EASING, TRANSITION } from '../../../constants/design';

const stripes = [
  { color: '#3ce2ff', left: '0%', width: '34%', delay: 0 },
  { color: '#c4001a', left: '33%', width: '34%', delay: 0.07 },
  { color: '#000', left: '66%', width: '34%', delay: 0.14 },
];

export function SocialsTransition(): React.JSX.Element {
  return (
    <>
      {stripes.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: s.left,
            width: s.width,
            background: s.color,
            zIndex: 999 - i,
            transformOrigin: 'top',
            skewX: '-4deg',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 1, 0] }}
          transition={{
            duration: TRANSITION.duration * 2,
            delay: s.delay,
            ease: EASING.sharp,
            times: [0, 0.4, 0.6, 1],
          }}
        />
      ))}
    </>
  );
}

import { motion } from 'framer-motion';
import { EASING, TRANSITION } from '../../../constants/design';

const blocks = [
  { color: '#c4001a', delay: 0 },
  { color: '#000', delay: 0.06 },
  { color: '#3ce2ff', delay: 0.12 },
];

export function DefaultTransition(): React.JSX.Element {
  return (
    <>
      {blocks.map((b, i) => (
        <motion.div
          key={i}
          style={{
            position: 'fixed',
            inset: 0,
            background: b.color,
            zIndex: 999 - i,
            transformOrigin: 'left',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: TRANSITION.duration * 2,
            delay: b.delay,
            ease: EASING.sharp,
            times: [0, 0.4, 0.6, 1],
          }}
        />
      ))}
    </>
  );
}

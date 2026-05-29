import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageScreen } from '../../components/PageScreen/PageScreen';
import { PageTransition } from '../../components/PageTransition/PageTransition';
import { RedStripe } from '../../components/RedStripe/RedStripe';
import { KeyHint } from '../../components/KeyHint/KeyHint';
import { MenuRow } from './MenuRow';
import { MENU_ITEMS } from '../../data/menu';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import { useMountDelay } from '../../hooks/useMountDelay';
import { TIMING } from '../../constants/design';
import bgVideo from '../../assets/bg-video.mp4';
import styles from './Menu.module.css';

const KEY_HINTS = [
  { keys: ['↑', '↓'], label: 'Select' },
  { keys: ['↵'], label: 'Confirm' },
];

export default function Menu(): React.JSX.Element {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const mounted = useMountDelay(TIMING.menuMountDelay);

  const handleConfirm = useCallback((): void => {
    const item = MENU_ITEMS[active];
    if (!item) return;
    if (item.external) {
      try {
        window.open(item.external, '_blank', 'noopener,noreferrer');
      } catch {
        /* silent fail */
      }
    } else {
      void navigate(item.route);
    }
  }, [active, navigate]);

  useKeyboardNav({
    length: MENU_ITEMS.length,
    active,
    onActivate: setActive,
    onConfirm: handleConfirm,
  });

  return (
    <PageTransition variant="default">
      <PageScreen videoSrc={bgVideo} className={styles.screen}>
        <div
          className={styles.nameTag}
          aria-hidden="true"
        >
          <span>martin</span>
          <span>dubois</span>
          <span>cousiño</span>
        </div>

        <nav
          className={`${styles.nav} ${mounted ? styles.navVisible : styles.navHidden}`}
          aria-label="Main navigation"
        >
          {MENU_ITEMS.map((item, i) => (
            <MenuRow
              key={item.id}
              item={item}
              active={i === active}
              onClick={() => {
                setActive(i);
                handleConfirm();
              }}
              onHover={() => setActive(i)}
            />
          ))}
        </nav>

        <RedStripe />
        <KeyHint hints={KEY_HINTS} />

        <div className={styles.infoLine} aria-hidden="true">
          Full-stack developer since 2022 · TypeScript · React · NestJS
        </div>
      </PageScreen>
    </PageTransition>
  );
}

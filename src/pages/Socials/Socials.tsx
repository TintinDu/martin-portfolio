import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageScreen } from '../../components/PageScreen/PageScreen';
import { PageTransition } from '../../components/PageTransition/PageTransition';

import { KeyHint } from '../../components/KeyHint/KeyHint';
import { SocialBar } from './SocialBar';
import { SocialInfoRows } from './SocialInfoRows';
import { SOCIAL_LINKS } from '../../data/socials';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import { ROUTES } from '../../constants/routes';
import bgVideo from '../../assets/bg-video.mp4';
import styles from './Socials.module.css';

const KEY_HINTS = [
  { keys: ['↑', '↓'], label: 'Select' },
  { keys: ['↵'], label: 'Open' },
  { keys: ['←'], label: 'Back' },
];

export default function Socials(): React.JSX.Element {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleConfirm = useCallback((): void => {
    const link = SOCIAL_LINKS[active];
    if (!link) return;
    try {
      if (link.url.startsWith('mailto:')) {
        window.location.href = link.url;
      } else {
        window.open(link.url, '_blank', 'noopener,noreferrer');
      }
    } catch {
      /* silent fail */
    }
  }, [active]);

  const handleBack = useCallback((): void => {
    void navigate(ROUTES.menu);
  }, [navigate]);

  useKeyboardNav({
    length: SOCIAL_LINKS.length,
    active,
    onActivate: setActive,
    onConfirm: handleConfirm,
    onBack: handleBack,
  });

  const activeLink = SOCIAL_LINKS[active];

  return (
    <PageTransition variant="socials">
      <PageScreen videoSrc={bgVideo} className={styles.screen}>
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.pageTitle} aria-label="Section: Socials">Socials</div>
            {SOCIAL_LINKS.map((link, i) => (
              <SocialBar
                key={link.id}
                link={link}
                active={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          <div className={styles.right}>
            {activeLink && (
              <SocialInfoRows key={activeLink.id} link={activeLink} />
            )}
          </div>
        </div>

        <KeyHint hints={KEY_HINTS} />
      </PageScreen>
    </PageTransition>
  );
}

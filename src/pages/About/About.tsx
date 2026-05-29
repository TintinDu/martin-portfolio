import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageScreen } from '../../components/PageScreen/PageScreen';
import { PageTransition } from '../../components/PageTransition/PageTransition';
import { RedStripe } from '../../components/RedStripe/RedStripe';
import { KeyHint } from '../../components/KeyHint/KeyHint';
import { AboutBar } from './AboutBar';
import { AboutRevealPanel } from './AboutRevealPanel';
import { ABOUT_SECTIONS } from '../../data/about';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import { ROUTES } from '../../constants/routes';
import bgVideo from '../../assets/bg-video.mp4';
import char1 from '../../assets/char1.png';
import char2 from '../../assets/char2.png';
import char3 from '../../assets/char3.png';
import styles from './About.module.css';

const CHAR_IMAGES = [char1, char2, char3] as const;

const KEY_HINTS = [
  { keys: ['↑', '↓'], label: 'Select' },
  { keys: ['↵'], label: 'Open' },
  { keys: ['←'], label: 'Back' },
];

export default function About(): React.JSX.Element {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = useCallback((): void => {
    setRevealed(true);
  }, []);

  const handleBack = useCallback((): void => {
    if (revealed) {
      setRevealed(false);
    } else {
      void navigate(ROUTES.menu);
    }
  }, [revealed, navigate]);

  const handleActivate = useCallback((i: number): void => {
    setActive(i);
    setRevealed(false);
  }, []);

  useKeyboardNav({
    length: ABOUT_SECTIONS.length,
    active,
    onActivate: handleActivate,
    onConfirm: handleConfirm,
    onBack: handleBack,
    disabled: revealed,
  });

  useKeyboardNav({
    length: 1,
    active: 0,
    onActivate: () => void 0,
    onBack: handleBack,
    disabled: !revealed,
  });

  const activeSection = ABOUT_SECTIONS[active];

  return (
    <PageTransition variant="about">
      <PageScreen videoSrc={bgVideo} className={styles.screen}>
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.pageTitle} aria-label="Section: About Me">About Me</div>
            {ABOUT_SECTIONS.map((section, i) => (
              <AboutBar
                key={section.id}
                section={section}
                active={i === active}
                imageSrc={CHAR_IMAGES[section.charIndex]}
                onClick={() => {
                  setActive(i);
                  setRevealed(true);
                }}
              />
            ))}
          </div>

          <div className={styles.right}>
            {revealed && activeSection ? (
              <AboutRevealPanel section={activeSection} />
            ) : (
              <div className={styles.emptyRight} aria-hidden="true">
                Select a section
              </div>
            )}
          </div>
        </div>

        <RedStripe />
        <KeyHint hints={KEY_HINTS} />
      </PageScreen>
    </PageTransition>
  );
}

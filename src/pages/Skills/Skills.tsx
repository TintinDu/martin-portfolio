import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageScreen } from '../../components/PageScreen/PageScreen';
import { PageTransition } from '../../components/PageTransition/PageTransition';
import { RedStripe } from '../../components/RedStripe/RedStripe';
import { KeyHint } from '../../components/KeyHint/KeyHint';
import { SkillCard } from './SkillCard';
import { SkillDetailPanel } from './SkillDetailPanel';
import { SKILL_CATEGORIES } from '../../data/skills';
import { useKeyboardNav } from '../../hooks/useKeyboardNav';
import { ROUTES } from '../../constants/routes';
import bgVideo from '../../assets/bg-video.mp4';
import styles from './Skills.module.css';

const KEY_HINTS = [
  { keys: ['↑', '↓'], label: 'Select' },
  { keys: ['←'], label: 'Back' },
];

export default function Skills(): React.JSX.Element {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleBack = useCallback((): void => {
    void navigate(ROUTES.menu);
  }, [navigate]);

  useKeyboardNav({
    length: SKILL_CATEGORIES.length,
    active,
    onActivate: setActive,
    onBack: handleBack,
  });

  const activeCategory = SKILL_CATEGORIES[active];

  return (
    <PageTransition variant="skills">
      <PageScreen videoSrc={bgVideo} className={styles.screen}>
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.pageTitle} aria-label="Section: Skills">Skills</div>
            {SKILL_CATEGORIES.map((cat, i) => (
              <SkillCard
                key={cat.id}
                category={cat}
                active={i === active}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          <div className={styles.right}>
            {activeCategory && (
              <SkillDetailPanel key={activeCategory.id} category={activeCategory} />
            )}
          </div>
        </div>

        <RedStripe />
        <KeyHint hints={KEY_HINTS} />
      </PageScreen>
    </PageTransition>
  );
}

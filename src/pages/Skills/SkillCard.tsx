import type { SkillCategory } from '../../types';
import styles from './SkillCard.module.css';

interface SkillCardProps {
  category: SkillCategory;
  active: boolean;
  onClick: () => void;
}

export function SkillCard({ category, active, onClick }: SkillCardProps): React.JSX.Element {
  return (
    <div
      className={styles.card}
      data-active={active}
      role="button"
      tabIndex={0}
      aria-label={category.title}
      aria-selected={active}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <div className={styles.badge} aria-hidden="true">{category.badge}</div>
      <div className={styles.body}>
        <div className={styles.title}>{category.title}</div>
        <div className={styles.subtitle}>{category.subtitle}</div>
      </div>
      <div className={styles.indicator} aria-hidden="true" />
    </div>
  );
}

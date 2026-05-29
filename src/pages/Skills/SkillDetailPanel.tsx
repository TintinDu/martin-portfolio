import type { SkillCategory } from '../../types';
import styles from './SkillDetailPanel.module.css';

interface SkillDetailPanelProps {
  category: SkillCategory;
}

export function SkillDetailPanel({ category }: SkillDetailPanelProps): React.JSX.Element {
  return (
    <div className={styles.panel} role="region" aria-label={`Skills: ${category.title}`}>
      <div className={styles.header}>
        <div className={styles.categoryTitle}>{category.title}</div>
        <div className={styles.categorySubtitle}>{category.subtitle}</div>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      <ul className={styles.items}>
        {category.items.map((item) => (
          <li key={item.index} className={styles.item}>
            <span className={styles.itemIndex} aria-hidden="true">{item.index}</span>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.levelBadge} data-level={item.level} aria-label={`Level: ${item.level}`}>
              {item.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

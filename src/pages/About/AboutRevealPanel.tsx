import type { AboutSection } from '../../types';
import styles from './AboutRevealPanel.module.css';

interface AboutRevealPanelProps {
  section: AboutSection;
}

export function AboutRevealPanel({ section }: AboutRevealPanelProps): React.JSX.Element {
  return (
    <div className={styles.panel} role="region" aria-label={`Details: ${section.label}`}>
      <div className={styles.sectionTitle}>{section.label}</div>
      <div className={styles.accentLine} aria-hidden="true" />
      <ul className={styles.items} aria-label="Details">
        {section.content.map((line) => (
          <li key={line} className={styles.item}>
            <div className={styles.bullet} aria-hidden="true" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className={styles.backHint} aria-hidden="true">← esc to go back</div>
    </div>
  );
}

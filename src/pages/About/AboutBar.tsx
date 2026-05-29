import type { AboutSection } from '../../types';
import styles from './AboutBar.module.css';

interface AboutBarProps {
  section: AboutSection;
  active: boolean;
  imageSrc?: string;
  onClick: () => void;
}

export function AboutBar({ section, active, imageSrc, onClick }: AboutBarProps): React.JSX.Element {
  return (
    <div
      className={styles.bar}
      data-active={active}
      role="button"
      tabIndex={0}
      aria-label={section.label}
      aria-expanded={active}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <div className={styles.roleTag}>{section.roleTag}</div>

      <div className={styles.portrait}>
        {imageSrc ? (
          <img src={imageSrc} alt={`${section.label} illustration`} />
        ) : (
          <div className={styles.portraitPlaceholder} aria-hidden="true">
            {section.charIndex + 1}
          </div>
        )}
      </div>

      <div className={styles.inner}>
        <div className={styles.label}>{section.label}</div>
        <div className={styles.caption}>{section.caption}</div>
      </div>

      <div className={styles.indicator} aria-hidden="true" />
    </div>
  );
}

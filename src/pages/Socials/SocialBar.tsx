import type { SocialLink } from '../../types';
import styles from './SocialBar.module.css';

interface SocialBarProps {
  link: SocialLink;
  active: boolean;
  onClick: () => void;
}

export function SocialBar({ link, active, onClick }: SocialBarProps): React.JSX.Element {
  return (
    <div
      className={styles.bar}
      data-active={active}
      role="button"
      tabIndex={0}
      aria-label={`${link.label}: ${link.handle}`}
      aria-selected={active}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <div className={styles.accent} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.label}>{link.label}</div>
        <div className={styles.handle}>{link.handle}</div>
      </div>
    </div>
  );
}

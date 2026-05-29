import type { SocialLink } from '../../types';
import styles from './SocialInfoRows.module.css';

interface SocialInfoRowsProps {
  link: SocialLink;
}

function openLink(url: string): void {
  try {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  } catch {
    /* silent fail */
  }
}

export function SocialInfoRows({ link }: SocialInfoRowsProps): React.JSX.Element {
  return (
    <div className={styles.panel} role="region" aria-label={`${link.label} details`}>
      <div className={styles.title}>{link.label}</div>
      <div className={styles.description}>{link.description}</div>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.handle}>{link.handle}</div>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.openLink}
        onClick={(e) => {
          e.preventDefault();
          openLink(link.url);
        }}
      >
        Open {link.label} ↗
      </a>
    </div>
  );
}

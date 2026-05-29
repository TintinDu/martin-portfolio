import type { ReactNode } from 'react';
import styles from './PageScreen.module.css';

interface PageScreenProps {
  children: ReactNode;
  videoSrc?: string;
  className?: string;
}

export function PageScreen({ children, videoSrc, className }: PageScreenProps): React.JSX.Element {
  return (
    <div className={`${styles.root}${className ? ` ${className}` : ''}`}>
      {videoSrc && (
        <video
          className={styles.video}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          onError={(e) => {
            (e.currentTarget as HTMLVideoElement).style.display = 'none';
          }}
        />
      )}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

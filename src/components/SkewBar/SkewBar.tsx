import type { ReactNode } from 'react';
import styles from './SkewBar.module.css';

interface SkewBarProps {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function SkewBar({ active = false, onClick, children, className }: SkewBarProps): React.JSX.Element {
  return (
    <div
      className={`${styles.root}${className ? ` ${className}` : ''}`}
      data-active={active}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter') onClick(); } : undefined}
    >
      <div className={styles.layerRed} aria-hidden="true" />
      <div className={styles.layerDark}>
        <div className={styles.layerFill} aria-hidden="true" />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

import type { MenuItem } from '../../types';
import styles from './MenuRow.module.css';

interface MenuRowProps {
  item: MenuItem;
  active: boolean;
  index: number;
  totalItems: number;
  onClick: () => void;
}

export function MenuRow({ item, active, onClick }: Omit<MenuRowProps, 'index' | 'totalItems'>): React.JSX.Element {
  return (
    <div
      className={styles.row}
      data-active={active}
      role="button"
      tabIndex={0}
      aria-label={item.label}
      aria-current={active ? 'true' : undefined}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
      style={{
        transform: `translateX(${item.offsetX}px) skewX(${item.skewX}deg)`,
        marginBottom: active ? '12px' : '4px',
      }}
    >
      <div className={styles.glowBar} aria-hidden="true" />
      <div className={styles.triangle} aria-hidden="true" />
      <span
        className={styles.label}
        style={{ fontSize: `${item.fontSize}px` }}
      >
        {item.label}
      </span>
    </div>
  );
}

import type { MenuItem } from '../../types';
import styles from './MenuRow.module.css';

interface MenuRowProps {
  item: MenuItem;
  active: boolean;
  index: number;
  totalItems: number;
  onClick: () => void;
}

export function MenuRow({ item, active, index, totalItems, onClick }: MenuRowProps): React.JSX.Element {
  const dist = Math.abs(index - (active === true ? index : index));
  const scale = active ? 1.06 : Math.max(0.72, 1 - dist * 0.08);

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
        transform: `
          translateX(${item.offsetX}px)
          translateY(${item.offsetY}px)
          skewX(${item.skewX}deg)
          skewY(${item.skewY}deg)
          scale(${scale})
        `,
        marginBottom: active
          ? `${8 + totalItems * 2}px`
          : `${4}px`,
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

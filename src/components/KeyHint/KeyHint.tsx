import styles from './KeyHint.module.css';

interface Hint {
  keys: string[];
  label: string;
}

interface KeyHintProps {
  hints: Hint[];
}

export function KeyHint({ hints }: KeyHintProps): React.JSX.Element {
  return (
    <div className={styles.root} aria-hidden="true">
      {hints.map((hint) => (
        <div key={hint.label} className={styles.hint}>
          {hint.keys.map((k) => (
            <span key={k} className={styles.key}>{k}</span>
          ))}
          <span>{hint.label}</span>
        </div>
      ))}
    </div>
  );
}

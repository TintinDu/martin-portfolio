import styles from './RedStripe.module.css';

export function RedStripe(): React.JSX.Element {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.stripe} />
      <div className={styles.stripe} />
    </div>
  );
}

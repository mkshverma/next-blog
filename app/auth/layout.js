import styles from './style.module.css'
export default function AuthLayout({ children }) {
  return (
    <div className={styles.auth}>
        {children}
    </div>
  );
}

import styles from "./Button.module.css";

export default function Button({ children }) {
  return (
    <a href="#">
      <button className={styles.button}>{children}</button>
    </a>
  );
}

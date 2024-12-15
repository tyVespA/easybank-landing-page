import Image from "next/image";
import styles from "./PointerCard.module.css";

export default function PointerCard({ iconName, title, children }) {
  return (
    <div className={styles.container}>
      <Image src={iconName} alt="decorative icon" width={100} height={100} />
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

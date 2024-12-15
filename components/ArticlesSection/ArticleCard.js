import Image from "next/image";
import styles from "./ArticleCard.module.css";

export default function ArticleCard({
  imageName,
  alt,
  author,
  title,
  children,
}) {
  return (
    <div className={styles.cardContainer}>
      <a href="#">
        <Image src={imageName} alt={alt} width={320} height={240} />
      </a>
      <div className={styles.textSection}>
        <p className={styles.author}>By {author}</p>
        <a href="#">
          <h5 className={styles.title}>{title}</h5>
        </a>
        <p className={styles.text}>{children}</p>
      </div>
    </div>
  );
}

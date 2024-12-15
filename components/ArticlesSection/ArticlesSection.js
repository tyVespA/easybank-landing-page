import styles from "./ArticlesSection.module.css";
import ArticleCard from "./ArticleCard";

import currency from "../../public/images/image-currency.jpg";
import restaurant from "../../public/images/image-restaurant.jpg";
import plane from "../../public/images/image-plane.jpg";
import confetti from "../../public/images/image-confetti.jpg";

export default function ArticlesSection() {
  return (
    <section className={styles.articlesSection}>
      <div className="container">
        <h2>Latest Articles</h2>
        <div className={styles.articlesContainer}>
          <ArticleCard
            imageName={currency}
            alt={"money"}
            author={"Claire Robinson"}
            title={"Receive money in any currency with no fees"}
          >
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </ArticleCard>
        </div>
      </div>
    </section>
  );
}

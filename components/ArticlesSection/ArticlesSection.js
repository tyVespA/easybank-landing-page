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
          <ArticleCard
            imageName={restaurant}
            alt={"restaurant"}
            author={"Wilson Hutton"}
            title={"Treat yourself without worrying about money"}
          >
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </ArticleCard>
          <ArticleCard
            imageName={plane}
            alt={"plane"}
            author={"Wilson Hutton"}
            title={"Take your Easybank card wherever you go"}
          >
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </ArticleCard>
          <ArticleCard
            imageName={confetti}
            alt={"confetti"}
            author={"Claire Robinson"}
            title={"Our invite-only Beta accounts are now live!"}
          >
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </ArticleCard>
        </div>
      </div>
    </section>
  );
}

import styles from "./Hero.module.css";
import Image from "next/image";
import Button from "./Button";
import mockup from "../public/images/image-mockups.png";
import bgDesktop from "../public/images/bg-intro-desktop.svg";
import bgMobile from "../public/images/bg-intro-mobile.svg";

export default function Hero() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`${styles.container} container`}>
          <div className={styles.textSection}>
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button>Request Invite</Button>
          </div>
          <div className={styles.imageSection}>
            <Image
              src={mockup}
              alt="phones mockup"
              className={styles.mockupImg}
            />
            <Image
              src={bgDesktop}
              alt="background"
              className={styles.bgDesktop}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

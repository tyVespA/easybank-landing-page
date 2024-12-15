import styles from "./WhySection.module.css";
import PointerCard from "./PointerCard";

import iconOnline from "../../public/images/icon-online.svg";
import iconBudgeting from "../../public/images/icon-budgeting.svg";
import iconOnboarding from "../../public/images/icon-onboarding.svg";
import iconApi from "../../public/images/icon-api.svg";

export default function WhySection() {
  return (
    <section className={styles.whySectionContainer}>
      <div className="container">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className={styles.cardsContainer}>
          <PointerCard iconName={iconOnline} title={"Online Banking"}>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </PointerCard>
          <PointerCard iconName={iconBudgeting} title={"Simple Budgeting"}>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </PointerCard>
          <PointerCard iconName={iconOnboarding} title={"Fast Onboarding"}>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </PointerCard>
          <PointerCard iconName={iconApi} title={"Open API"}>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </PointerCard>
        </div>
      </div>
    </section>
  );
}

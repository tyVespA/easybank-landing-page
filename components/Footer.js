import styles from "./Footer.module.css";
import Image from "next/image";
import Button from "./Button";

import logo from "../public/images/logo.svg";
import icon_facebook from "../public/images/icon-facebook.svg";
import icon_youtube from "../public/images/icon-youtube.svg";
import icon_twitter from "../public/images/icon-twitter.svg";
import icon_pinterest from "../public/images/icon-pinterest.svg";
import icon_instagram from "../public/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.columnOne}>
          <a href="#">
            <Image src={logo} alt="logo" />
          </a>
          <div className={styles.socialsContainer}>
            <a href="#">
              <Image src={icon_facebook} alt="facebook icon" />
            </a>
            <a href="#">
              <Image src={icon_youtube} alt="youtube icon" />
            </a>
            <a href="#">
              <Image src={icon_twitter} alt="twitter icon" />
            </a>
            <a href="#">
              <Image src={icon_pinterest} alt="pinterest icon" />
            </a>
            <a href="#">
              <Image src={icon_instagram} alt="instagram icon" />
            </a>
          </div>
        </div>

        <div className={styles.columnTwo}>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.columnThree}>
          <Button>Request Invite</Button>
          <p>copyright</p>
        </div>
      </div>
    </footer>
  );
}

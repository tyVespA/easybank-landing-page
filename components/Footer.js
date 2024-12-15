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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
              </svg>
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
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul className={styles.ulColumnTwo}>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className={styles.columnThree}>
          <Button>Request Invite</Button>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

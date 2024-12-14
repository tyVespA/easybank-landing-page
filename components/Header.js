import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import Button from "./Button";

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className={`${styles.header} container`}>
        <a href="#">
          <Image src={logo} alt="company's logo" />
        </a>
        <nav>
          <ol>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Careers</li>
            </a>
          </ol>
        </nav>
        <Button>Request Invite</Button>
      </header>
    </div>
  );
}

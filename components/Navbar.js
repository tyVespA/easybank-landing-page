import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "../public/images/logo.svg";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Image src={logo} alt="company's logo" />
      </div>
      <nav>
        <ol>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ol>
      </nav>
      <button>Request Invite</button>
    </div>
  );
}

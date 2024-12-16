"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../public/images/logo.svg";
import icon_hamburger from "../public/images/icon-hamburger.svg";
import icon_close from "../public/images/icon-close.svg";
import Button from "./Button";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);
  return (
    <div className={styles.headerWrapper}>
      <div
        className={`${styles.backdrop} ${
          visible ? styles.backdrop_visible : styles.backdrop_hidden
        }`}
      ></div>
      <header className={`${styles.header} container`}>
        <a href="#">
          <Image src={logo} alt="company's logo" />
        </a>
        <nav className={`${visible ? styles.opened : styles.closed}`}>
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
        <button
          className={`${styles.icon_hamburger} ${
            visible ? styles.hidden : styles.visible
          }`}
          onClick={() => {
            setVisible(true), console.log(visible);
          }}
        >
          <Image src={icon_hamburger} alt="hamburger icon" />
        </button>
        <button
          className={`${styles.icon_close} ${
            visible ? styles.visible : styles.hidden
          }`}
          onClick={() => {
            setVisible(false), console.log(visible);
          }}
        >
          <Image src={icon_close} alt="close icon" />
        </button>
      </header>
    </div>
  );
}

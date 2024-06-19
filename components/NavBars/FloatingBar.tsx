import React from "react";
import styles from "./FloatingBar.module.css";
import Link from "next/link";
import ArrowUp from "../Icons/ArrowUp";

const FloatingBar = () => {
  return (
    <div className={styles.floatingBarContainer}>
      <nav className={styles.navContainer}>
        <div className={styles.linkContainerArrow}>
          <Link href="/">
            <ArrowUp />
          </Link>
        </div>
        <div className={styles.LinkContainer}>
          <Link href="/">Work</Link>
        </div>
        <div className={styles.LinkContainer}>
          <Link href="/">About</Link>
        </div>
        <div className={styles.LinkContainer}>
          <Link href="/">services</Link>
        </div>
        <div className={styles.LinkContainerTwo}>
          <Link href="/">Let's Work</Link>
        </div>
      </nav>
    </div>
  );
};

export default FloatingBar;

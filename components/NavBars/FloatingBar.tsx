import React from "react";
import styles from "./FloatingBar.module.css";
import Link from "next/link";
import ArrowUp from "../Icons/ArrowUp";

interface FloatingBarProps {
  animate: boolean;
}

const FloatingBar: React.FC<FloatingBarProps> = ({ animate }) => {
  const containerStyle = {
    opacity: animate ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <div className={styles.floatingBarContainer} style={containerStyle}>
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

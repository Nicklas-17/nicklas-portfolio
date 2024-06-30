import React from "react";
import styles from "./NavBar.module.css";
import Hamburger from "../Icons/Hamburger";

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <p className={styles.LogoText}>NICKLAS KRAGBÉ</p>
      <Hamburger />
    </div>
  );
};

export default NavBar;

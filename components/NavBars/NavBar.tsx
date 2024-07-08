import React from "react";
import styles from "./NavBar.module.css";
import Hamburger from "../Icons/Hamburger";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navWrapper}>
      <p className={styles.LogoText}>NICKLAS KRAGBÉ</p>
      <Hamburger onClick={toggleMenu} isOpen={menuOpen} />
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              onClick={toggleMenu}
            />
            <motion.div
              className={styles.flyOutMenu}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 0, y: -100 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.navWrapper}>
                <p className={styles.LogoText}>NICKLAS KRAGBÉ</p>
                <Hamburger onClick={toggleMenu} isOpen={menuOpen} />
              </div>
              <div className={styles.FlyOutNavContainer}>
                <nav className={styles.navContainer}>
                  <div className={styles.LinkContainer}>
                    <Link href="/#ActiveProjects" onClick={toggleMenu}>
                      Work
                    </Link>
                  </div>
                  <div className={styles.LinkContainer}>
                    <Link href="/#About" onClick={toggleMenu}>
                      About
                    </Link>
                  </div>
                  <div className={styles.LinkContainer}>
                    <Link href="/" onClick={toggleMenu}>
                      services
                    </Link>
                  </div>
                  <div className={styles.LinkContainer}>
                    <Link href="/#Footer" onClick={toggleMenu}>
                      Contact
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;

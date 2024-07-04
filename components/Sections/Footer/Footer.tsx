import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styles from "./Footer.module.css";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeInUTC = (date: any) => {
    const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
    return format(utcDate, "HH:mm 'UTC+0'");
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.topCardContainer}>
            <p>Interested in working together?</p>
            <p>Let's have a chat:</p>
            <p>nick.97k@gmail.com</p>
          </div>
          <div className={styles.BotCardContainer}>Hello</div>
        </div>
      </div>
      <div className={styles.footerBottomRow}>
        <div className={styles.botLeftContainer}>
          <div className={styles.copyrightContainer}>
            <p className={styles.containerTitle}>Version</p>
            <p className={styles.containerInfo}>2024 © Nicklas.</p>
          </div>
          <div className={styles.localTimeContainer}>
            <p className={styles.containerTitle}>Local Time</p>
            <p>{formatTimeInUTC(time)}</p>
          </div>
        </div>
        <div className={styles.botRightContainer}>
          <div className={styles.socialsContainer}>
            <p className={styles.containerTitle}>Socials</p>
            <div className={styles.socialsWrapper}>
              <p>Linkedin</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

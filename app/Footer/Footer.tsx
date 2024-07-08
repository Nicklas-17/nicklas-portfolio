import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import styles from "./Footer.module.css";
import Image from "next/image";
import Ghanaicon from "@/components/Icons/Ghanaicon";
import GlobeIcon from "@/components/Icons/GlobeIcon";
import Link from "next/link";

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
    <section className={styles.sectionContainer} id="Footer">
      <div className={styles.footerTopRow}>
        <div className={styles.botLeftContainer}>
          <div className={styles.copyrightContainer}>
            <p className={styles.TopcontainerTitle}>
              Product Designer & Developer
            </p>
          </div>
          <div className={styles.localTimeContainer}>
            <p className={styles.TopcontainerTitle}>Open to work.</p>
          </div>
        </div>
        <div className={styles.botRightContainer}>
          <div className={styles.socialsContainer}>
            <p className={styles.TopcontainerTitleTwo}>
              Currently in <Ghanaicon /> working <GlobeIcon />
            </p>
          </div>
        </div>
      </div>
      <div className={styles.TopcontainerTitle}>
        <div className={styles.cardContainer}>
          <div className={styles.topCardContainer}>
            <p>Interested in working together?</p>
            <p>Let's have a chat:</p>
            <Link href="mailto:nick.97k@gmail.com">
              <p>nicklas.kragbe@gmail.com</p>
            </Link>
          </div>
          <div className={styles.BotCardContainer}></div>
        </div>
      </div>
      <div className={styles.footerBottomRow}>
        <div className={styles.botLeftContainer}>
          <div className={styles.copyrightContainer}>
            <p className={styles.containerTitle}>Version 1.0</p>
            <p className={styles.containerInfo}>©2024 - All rights reserved.</p>
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
              <Link href="https://www.linkedin.com/in/nicklas-kragbé-b420a617a/">
                <p>Linkedin</p>
              </Link>
              <Link href="https://github.com/Nicklas-17">
                <p>Github</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

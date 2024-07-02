"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Sections/Header/Header";
import FloatingBar from "@/components/NavBars/FloatingBar";
import ActiveProjects from "@/components/Sections/ActiveProjects/ActiveProjects";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <ActiveProjects />
      <FloatingBar animate={scrollPosition > 100} />
    </main>
  );
}

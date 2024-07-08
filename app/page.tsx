"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/Header/Header";
import FloatingBar from "@/components/NavBars/FloatingBar";
import ActiveProjects from "./ActiveProjects/ActiveProjects";
import { useState, useEffect } from "react";
import AboutOne from "@/app/SectionIntro/AboutOne";
import Footer from "@/app/Footer/Footer";
import ProjectsList from "@/components/ProjectGallery/ProjectsList";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <ActiveProjects />
        <AboutOne />
        <ProjectsList />
        <Footer />
        <FloatingBar animate={scrollPosition > 100} />
      </main>
    </>
  );
}

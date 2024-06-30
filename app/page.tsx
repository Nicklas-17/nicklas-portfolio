import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Sections/Header/Header";
import FloatingBar from "@/components/NavBars/FloatingBar";
import ActiveProjects from "@/components/Sections/ActiveProjects/ActiveProjects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ActiveProjects />
      <FloatingBar />
    </main>
  );
}

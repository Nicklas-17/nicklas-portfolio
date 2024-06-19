import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Sections/Header/Header";
import FloatingBar from "@/components/NavBars/FloatingBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <FloatingBar />
    </main>
  );
}

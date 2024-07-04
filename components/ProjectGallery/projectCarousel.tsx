import Link from "next/link";
import styles from "./projectCarousel.module.css";
import Image from "next/image";

export default function ProjectCarousel() {
  return (
    <div className={styles.projectCarouselContainer}>
      <Link
        className={styles.linkStyle}
        href={"https://www.basecampinitiative.com"}
      >
        <div className={styles.projectPreview}>
          <Image
            src="/images/BaseCamphero.png"
            height={350}
            width={350}
            alt="BaseCamp"
          />
        </div>
        <div className={styles.titleContainer}>
          <h3>BaseCamp Initiative</h3>
          <p>Community hub Website </p>
        </div>
      </Link>
    </div>
  );
}

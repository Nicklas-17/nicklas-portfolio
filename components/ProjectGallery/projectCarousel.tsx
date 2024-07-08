import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./projectCarousel.module.css";
import Image from "next/image";

const selectedProjectsGallery = [
  {
    id: 1,
    image: "/images/BaseCampMockup.png",
  },
  {
    id: 2,
    image: "/images/BaseCampMockupTwo.png",
  },
];

export default function ProjectCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === selectedProjectsGallery.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className={styles.projectCarouselContainer} ref={carouselRef}>
      <Link
        className={styles.linkStyle}
        href={"https://www.basecampinitiative.com"}
      >
        <div className={styles.projectPreview}>
          <motion.div
            key={selectedProjectsGallery[currentImageIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={selectedProjectsGallery[currentImageIndex].image}
              height={350}
              width={600}
              alt="BaseCamp"
            />
          </motion.div>
        </div>
        <div className={styles.titleContainer}>
          <h3>BaseCamp Initiative</h3>
          <p>Community hub Website</p>
        </div>
      </Link>
    </div>
  );
}

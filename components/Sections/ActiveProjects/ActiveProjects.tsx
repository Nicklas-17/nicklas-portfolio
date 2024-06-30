"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./ActiveProjects.module.css";
import Image from "next/image";
å;

const ActiveProjectsGallery = [
  {
    id: 1,
    image: "/images/SignUpScreen.png",
  },
  {
    id: 2,
    image: "/images/VerifyScreen.png",
  },
  {
    id: 3,
    image: "/images/ContactFormScreen.png",
  },
  {
    id: 4,
    image: "/images/ContactFormScreenTwo.png",
  },
  {
    id: 5,
    image: "/images/ApplianceInfoScreen.png",
  },
  {
    id: 6,
    image: "/images/CalendarScreen.png",
  },
];

const ActiveProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVisible) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) =>
          prevImage === ActiveProjectsGallery.length - 1 ? 0 : prevImage + 1
        );
      }, 3000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={style.sectionContainer}>
      <div className={style.leftContainer}>
        <div className={style.simulatorWrapper}>
          {isVisible && (
            <motion.div
              key={ActiveProjectsGallery[currentImage].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={style.FeaturedImageWrapper}
            >
              <Image
                src={ActiveProjectsGallery[currentImage].image}
                alt={`Project ${ActiveProjectsGallery[currentImage].id}`}
                objectFit="cover"
                // width={750}
                // height={750}
                fill
              />
            </motion.div>
          )}
        </div>
      </div>
      <div className={style.rightContainer}>
        <div className={style.TextHeaderWrapper}>
          <h2>Most recently,</h2>
        </div>
        <p className={style.TextParagraphWrapper}>
          I collaborated with the team at BUILD, to develop a stellar and
          cross-platform mobile app for WeConvert.
        </p>
      </div>
    </section>
  );
};

export default ActiveProjects;

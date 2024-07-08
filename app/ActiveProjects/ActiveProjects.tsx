"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./ActiveProjects.module.css";
import Image from "next/image";

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

const tags = [
  {
    tagTitle: "#Mobile App development",
    tagClass: style.MobileTag,
  },
  {
    tagTitle: "#UX",
    tagClass: style.UXTag,
  },
  {
    tagTitle: "#UI",
    tagClass: style.UITag,
  },
  {
    tagTitle: "#API Design",
    tagClass: style.APITag,
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

    const currentSection = sectionRef.current;

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
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
    <section
      ref={sectionRef}
      className={style.sectionContainer}
      id="ActiveProjects"
    >
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
        <div className={style.rightContainerWrapper}>
          <div className={style.sectionTitleContainer}>
            <h1>work.</h1>
            <p>01</p>
          </div>
          <div className={style.TextHeaderWrapper}>
            <h2>At the moment,</h2>
          </div>
          <p className={style.TextParagraphWrapper}>
            I'm deeply involved in crafting user-centric web applications at
            BUILD. My main focus is on developing top-notch web and mobile
            applications. Currently, I'm working on a cross-platform mobile app
            for WeConvert, a solar startup company. <br /> <br /> In my role as
            a Front-End Developer, I'm dedicated to designing robust front-end
            software architecture. I make sure to implement best practices in
            API structure, state management, and codebase maintainability. To
            achieve this, I utilize modern frameworks like Zustand, React
            Native, TypeScript, and Rive, ensuring type safety, scalability, and
            performance. Additionally, I'm an active participant in Agile
            development sprints, contributing to daily stand-ups, sprint
            planning, and retrospectives to keep everything aligned with our
            project milestones and deliverables.
          </p>
          <div className={style.tagsContainer}>
            {tags.map((tag, index) => (
              <div className={tag.tagClass} key={index}>
                <p>{tag.tagTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveProjects;

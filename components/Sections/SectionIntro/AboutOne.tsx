import React from "react";
import styles from "./AboutOne.module.css";
import ReactIcon from "@/components/Icons/ReactIcon";
import Image from "next/image";
import { ReactNode } from "react";
import TypescriptIcon from "@/components/Icons/TypescriptIcon";
import JavascriptIcon from "@/components/Icons/JavascriptIcon";
import NextjsIcon from "@/components/Icons/NextjsIcon";
import FramerIcon from "@/components/Icons/FramerIcon";
import FigmaIcon from "@/components/Icons/FigmaIcon";
import Coil from "@/components/Icons/Coil";
import Lightbulb from "@/components/Icons/Lightbulb";
import ProductDesign from "@/components/Icons/ProductDesign";
import AgileIcon from "@/components/Icons/AgileIcon";
import UserIcon from "@/components/Icons/UserCentricIcon";
import CollabIcon from "@/components/Icons/CollabIcon";

interface Skill {
  name: string;
  yearsOfExperience: string;
  startYear: string;
  icon: ReactNode;
  separatorClass?: string;
}

const skills: Skill[] = [
  {
    name: "React & React Native",
    yearsOfExperience: "1 year",
    startYear: "2023",
    icon: <Image src="/atom.png" width={24} height={24} alt="reactIcon" />,
    separatorClass: styles.SeparatorOne,
  },

  {
    name: "Typescript",
    yearsOfExperience: "1 year",
    startYear: "2023",
    icon: <TypescriptIcon />,
    separatorClass: styles.SeparatorOne,
  },
  {
    name: "Next-JS",
    yearsOfExperience: "1 year",
    startYear: "2023",
    icon: <NextjsIcon />,
    separatorClass: styles.whiteSeparator,
  },
  {
    name: "Figma",
    yearsOfExperience: "1 year",
    startYear: "2023",
    icon: <FigmaIcon />,
    separatorClass: styles.FigmaSeparator,
  },
  {
    name: "Framer",
    yearsOfExperience: "1 year",
    startYear: "2023",
    icon: <FramerIcon />,
    separatorClass: styles.FramerSeparator,
  },
];

const softSkills: Skill[] = [
  {
    name: "Product Design",
    yearsOfExperience: "4 years",
    startYear: "2019",
    icon: <ProductDesign />,
    separatorClass: styles.ProductSeparator,
  },
  {
    name: "Agile Methodologies",
    yearsOfExperience: "1 year",
    startYear: "2023",
    icon: <AgileIcon />,
    separatorClass: styles.AgileSeparator,
  },
  {
    name: "User Centric ",
    yearsOfExperience: "2 year",
    startYear: "2023",
    icon: <UserIcon />,
    separatorClass: styles.UserCentricSeparator,
  },
  {
    name: "Cross-Functional Collaboration",
    yearsOfExperience: "6 year",
    startYear: "2023",
    icon: <CollabIcon />,
    separatorClass: styles.CollabSeparator,
  },
];

const AboutOne = () => {
  return (
    <div className={styles.aboutOneSectionContainer}>
      <div className={styles.sectionHeaderTextContainer}>
        <h2 className={styles.sectionHeaderText}>
          What do I bring to the table?
        </h2>
        <p>
          I spent 2016 and 2017 in Berlin as a full-time employee at IBM iX as
          Advance Art Director. The project I spent the most time on is the new
          airbus.com. Airbus is a massive company with a broad portfolio. Most
          departments had their separate web presentations and visual standards.
          The challenge was to put them all under one domain so that navigation{" "}
          <br />
          is easy and everything is visually consistent.
        </p>
      </div>
      <div className={styles.skillsSectionContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.technicalSkillsCard}>
            <div className={styles.cardHeaderContainer}>
              <div className={styles.cardHeaderTextContainer}>
                <h3>Technical</h3>
                <p>Engineering & Design</p>
              </div>
              <Coil />
            </div>
            <div className={styles.skillsListContainer}>
              {skills.map((skill, index) => (
                <div className={styles.skillWrapper} key={index}>
                  <div className={styles.yearsOfExpContainer}>
                    <h5>{skill.yearsOfExperience}</h5>
                    <p>Since {skill.startYear}</p>
                  </div>
                  <div className={skill.separatorClass}></div>
                  <div className={styles.skillTag}>
                    <p>{skill.name}</p>
                    {skill.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.technicalSkillsCard}>
            <div className={styles.cardHeaderContainer}>
              <div className={styles.cardHeaderTextContainer}>
                <h3>Strategy</h3>
                <p>Soft Skills & Offerings</p>
              </div>
              <div>
                <Lightbulb />
              </div>
            </div>
            <div className={styles.skillsListContainer}>
              {softSkills.map((skill, index) => (
                <div className={styles.skillWrapper} key={index}>
                  <div className={styles.yearsOfExpContainer}>
                    <h5>{skill.yearsOfExperience}</h5>
                    <p>Since {skill.startYear}</p>
                  </div>
                  <div className={skill.separatorClass}></div>
                  <div className={styles.skillTag}>
                    <p>{skill.name}</p>
                    {skill.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;

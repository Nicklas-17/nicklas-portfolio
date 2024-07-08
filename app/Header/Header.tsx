"use client";

import React from "react";
import style from "./Header.module.css";
import NavBar from "@/components/NavBars/NavBar";
import Modal from "@/components/Modal/Modal";
import { GalleryState, ModalState } from "@/types";
import { useState } from "react";

const Header = () => {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  const profilePictures: GalleryState[] = [
    {
      source: "/images/GreenPosterNick.png",
    },
  ];

  const handleMouseEnter = () => {
    setModal((prevState) => ({ ...prevState, active: true }));
  };

  const handleMouseLeave = () => {
    setModal((prevState) => ({ ...prevState, active: false }));
  };

  return (
    <section className={style.sectionContainer}>
      <NavBar />
      <div className={style.headerContentWrapper}>
        <h1
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={style.headerH1}
        >
          Hello, I'm Nicklas.
        </h1>
        <p
          className={style.headerParagraph}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          I <span className={style.SpanText}>design</span> and
          <span className={style.SpanText}> develop</span> solutions that
          empower brands to stand out in a -
          <span className={style.SpanText}> crowded digital landscape</span>
        </p>
        <Modal modal={modal} Items={profilePictures} />
      </div>
    </section>
  );
};

export default Header;

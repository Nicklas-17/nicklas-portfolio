import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <section className={style.sectionContainer}>
      <div className={style.headerContentWrapper}>
        <h1 className={style.headerH1}>Hello there, I'm Nicklas.</h1>
        <p className={style.headerParagraph}>
          I <span className={style.SpanText}>design</span> and
          <span className={style.SpanText}> develop</span> solutions that
          empower brands to stand out in a -
          <span className={style.SpanText}> crowded digital landscape</span>
        </p>
      </div>
    </section>
  );
};

export default Header;

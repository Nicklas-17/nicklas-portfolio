import React from "react";
import { HamburgerProps } from "@/types";

const Hamburger: React.FC<HamburgerProps> = ({ onClick, isOpen }) => {
  return (
    <div style={{ width: "2.7vw", height: "2.7vw" }} onClick={onClick}>
      {isOpen ? (
        <svg width="100%" height="100%" viewBox="0 0 72 72" id="emoji">
          <g id="color" />
          <g id="hair" />
          <g id="skin" />
          <g id="skin-shadow" />
          <g id="line">
            <line
              x1="16"
              x2="56"
              y1="16"
              y2="56"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              x1="56"
              x2="16"
              y1="16"
              y2="56"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
        </svg>
      ) : (
        <svg width="100%" height="100%" viewBox="0 0 72 72" id="emoji">
          <g id="color" />
          <g id="hair" />
          <g id="skin" />
          <g id="skin-shadow" />
          <g id="line">
            <line
              x1="16"
              x2="56"
              y1="26"
              y2="26"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              x1="16"
              x2="56"
              y1="36"
              y2="36"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              x1="16"
              x2="56"
              y1="46"
              y2="46"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Hamburger;

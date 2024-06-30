import React from "react";

const Hamburger = () => {
  return (
    <div style={{ width: "2.7vw", height: "2.7vw" }}>
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            x1="16"
            x2="56"
            y1="36"
            y2="36"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            x1="16"
            x2="56"
            y1="46"
            y2="46"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </g>
      </svg>
    </div>
  );
};

export default Hamburger;

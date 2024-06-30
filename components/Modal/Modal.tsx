import React, { useEffect, useRef } from "react";
import Styles from "./Modal.module.css";
import { ModalProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "100%",
    y: "-60%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal: React.FC<ModalProps> = ({ modal, Items }) => {
  const { active, index } = modal;
  const container = useRef(null);

  useEffect(() => {
    const MoveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.1,
      ease: "power3",
    });
    const MoveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.1,
      ease: "power3",
    });
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      MoveContainerX(clientX), MoveContainerY(clientY);
    });
  }, []);

  return (
    <motion.div
      variants={scaleAnimation}
      initial={"initial"}
      animate={active ? "enter" : "closed"}
      className={Styles.modalContainer}
    >
      <div className={Styles.modalSlider} style={{ top: index * -100 + "%" }}>
        {Items.map((item, index) => {
          const { color } = item;
          return (
            <div
              className={Styles.Modal}
              style={{ backgroundColor: color }}
              key={index}
            >
              <Image src={item.source} fill objectFit="cover" alt="image" />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Modal;

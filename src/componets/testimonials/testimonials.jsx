import React, { useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSeletected] = useState(0);
  const tLenght = testimonialsData.length;
  return (
    <div className="testimonials">
      <motion.div 
           key={selected}
           initial ={{opacity:0, x:100}}
           animate ={{opacity:1 , x:0}}
           exit={{opacity:0,x:-100}}
           transition={transition}  
      className="left-t">
        <span>Testimonails</span>
        <span className="stroke-text">What they</span>
        <span >say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </motion.div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img 
        key={selected}
        initial ={{opacity:0, x:100}}
        animate ={{opacity:1 , x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}  
        src={testimonialsData[selected].image} alt="" />
        <div className="arrow">
          <img
            onClick={() => {
              selected === 0
                ? setSeletected(tLenght - 1)
                : setSeletected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLenght - 1
                ? setSeletected(0)
                : setSeletected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

"use client";

import React, {useEffect} from "react";
import style from "./Typewriter.module.css";
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const TypewriterEffect = () => {
  useEffect(() => {
    const texts = [
      "Full Stack Developer",
      "Frontend Developer",
      "Web Developer",
      "Software Engineer",
    ];
    const typewriterElement = document.querySelector(".typewriter-text");

    let currentIndex = 0;

    const typeAnimation = () => {
      const text = texts[currentIndex];

      gsap.to(typewriterElement, {
        duration: 2,
        text: {value: text, delimiter: ""},
        onComplete: () => {
          gsap.to(typewriterElement, {
            duration: 1.5,
            text: {value: "", delimiter: ""},
            onComplete: () => {
              currentIndex = (currentIndex + 1) % texts.length;
              typeAnimation();
            },
          });
        },
      });
    };

    typeAnimation();
  }, []);

  return (
    <div className={`${style.typewriterContainer} typewriter-container`}>
      <span className={`${style.typewriterText} typewriter-text`}></span>
    </div>
  );
};

export default TypewriterEffect;

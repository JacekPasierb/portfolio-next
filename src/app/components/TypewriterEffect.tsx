"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Rejestracja TextPlugin
gsap.registerPlugin(TextPlugin);

const TypewriterEffect = () => {
  useEffect(() => {
    const texts = ["Full Stack Developer", "Frontend Developer", "Web Developer", "Software Engineer"];
    const typewriterElement = document.querySelector(".typewriter-text");

    let currentIndex = 0; // Indeks aktualnie wyświetlanego tekstu

    const typeAnimation = () => {
      const text = texts[currentIndex]; // Pobranie aktualnego tekstu

      gsap.to(typewriterElement, {
        duration: 2,
        text: { value: text, delimiter: "" }, // Animacja pisania tekstu
        onComplete: () => {
          gsap.to(typewriterElement, {
            duration: 1.5,
            text: { value: "", delimiter: "" }, // Animacja usuwania tekstu
            onComplete: () => {
              currentIndex = (currentIndex + 1) % texts.length; // Zmiana tekstu (przełączanie między tekstami)
              typeAnimation(); // Ponowne wywołanie animacji
            },
          });
        },
      });
    };

    typeAnimation(); // Uruchomienie animacji po załadowaniu komponentu
  }, []);

  return (
    <div className="typewriter-container">
      <span className="typewriter-text"></span>
    </div>
  );
};

export default TypewriterEffect;

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import TypewriterEffect from "./components/TypewriterEffect";
import {useEffect} from "react";
import {gsap} from "gsap";
import SocialLinks from "./ui/SocialLinks";

export default function Home() {
  useEffect(() => {
    const avatarContainer = document.querySelector(".avatar-container");

    if (avatarContainer) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left; // Pozycja kursora w osi X względem kontenera
        const y = e.clientY - rect.top; // Pozycja kursora w osi Y względem kontenera

        // Obliczanie kątów obrotu
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Zwiększenie kąta rotacji, aby efekt był bardziej widoczny
        const rotateX = ((y - centerY) / centerY) * -30; // Kąt obrotu w osi X
        const rotateY = ((x - centerX) / centerX) * 30; // Kąt obrotu w osi Y

        gsap.to(avatarContainer, {
          rotationX: rotateX, // Obrót wokół osi X
          rotationY: rotateY, // Obrót wokół osi Y
          duration: 0.3, // Czas trwania animacji
          ease: "power3.out", // Łagodna animacja
        });
      };

      const handleMouseLeave = () => {
        // Przywracanie początkowego ustawienia po opuszczeniu kontenera
        gsap.to(avatarContainer, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      avatarContainer.addEventListener(
        "mousemove",
        handleMouseMove as EventListener
      );
      avatarContainer.addEventListener(
        "mouseleave",
        handleMouseLeave as EventListener
      );

      return () => {
        avatarContainer.removeEventListener(
          "mousemove",
          handleMouseMove as EventListener
        );
        avatarContainer.removeEventListener(
          "mouseleave",
          handleMouseLeave as EventListener
        );
      };
    }
  }, []);

  return (
    <main>
      <section className="home-section">
        <div className="container home-content">
          <div className="row">
            <div className="home-header col-12 col-md-7">
              <h2 className="heading py-4">
                Witaj !
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>
              <h1 className="heading-name">
                Nazywam się{" "}
                <strong className="text-highlight">Jacek Pasierb</strong>
              </h1>

              <TypewriterEffect />
            </div>
            <div className="col-12 col-md-5">
              <Image
                src="/hero.png"
                width={450}
                height={450}
                className="  image-hero"
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-about-section">
        <div className="container">
          <div className="row">
            <div className=" home-about-description col-md-8">
              <h2>
                Pozwól, <span className="text-highlight"> że się </span>
                przedstawię
              </h2>
              <div className="home-about-body">
                <p>
                  Fascynuje mnie programowanie, a szczególnie budowanie
                  nowoczesnych aplikacji webowych.
                </p>
                <p>
                  Moja praca to połączenie kreatywnego tworzenia interaktywnych
                  interfejsów użytkownika z solidnym backendem, który zapewnia
                  pełną funkcjonalność aplikacji.
                </p>
                <p>
                  Specjalizuję się w
                  <i>
                    <span className="text-highlight">
                      <i
                        className="bi bi-braces"
                        style={{marginInline: "8px"}}
                      ></i>{" "}
                      React i Next.js{" "}
                    </span>
                  </i>
                  , dzięki którym tworzę dynamiczne i responsywne aplikacje
                  webowe, zapewniające doskonałe wrażenia użytkownika.
                </p>
                <p>
                  Z kolei na backendzie wykorzystuję
                  <i>
                    <span className="text-highlight">
                      <i
                        className="bi bi-box"
                        style={{marginInline: "8px"}}
                      ></i>
                      Node.js oraz Express
                    </span>
                  </i>
                  , które pozwalają mi budować szybkie i skalowalne API.
                </p>
                <p>
                  Mam doświadczenie w pracy z bazami danych
                  <i>
                    <span className="text-highlight">
                      <i
                        className="bi bi-database"
                        style={{marginInline: "8px"}}
                      ></i>
                      MongoDB i PostgreSQL
                    </span>
                  </i>
                  , co pozwala mi tworzyć kompleksowe rozwiązania pełnego stosu
                  technologi.
                </p>
                <p>
                  Jestem pełnym entuzjazmu
                  <i>
                    <span className="text-highlight">
                      <i
                        className="bi bi-code-slash"
                        style={{marginInline: "8px"}}
                      ></i>
                      Full Stack Developerem
                    </span>
                  </i>
                  , który ceni sobie zarówno estetykę frontendowych interfejsów,
                  jak i efektywność oraz niezawodność backendu.
                </p>
              </div>
            </div>
            <div className="myAvatar col-md-4 text-center">
              <div className="avatar-container">
                {" "}
                <Image
                  src="/avatar.svg"
                  width={217}
                  height={237}
                  alt="avatar"
                  className="avatar"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="home-about-social text-center">
              <h2>Znajdź mnie w sieci</h2>
              <p>
                Chętnie nawiąże <span className="text-highlight">kontakt</span>{" "}
                - napisz do mnie!
              </p>
              <ul className="home-about-social-links d-flex justify-content-center">
                <SocialLinks/>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

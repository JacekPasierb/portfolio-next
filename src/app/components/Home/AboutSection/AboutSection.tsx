"use client";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import SocialBox from "../../SocialBox/SocialBox";
import style from "./AboutSection.module.css";
import Image from "next/image";
import gsap from "gsap";
import {useEffect} from "react";

interface AboutSectionProps {
  avatarRef: React.RefObject<HTMLDivElement | null>;
}

export default function AboutSection({avatarRef}: AboutSectionProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        `.${style.socialLinks}`,
        {opacity: 0, x: -1550},
        {
          opacity: 1,
          x: 10,
          duration: 1,
          scrollTrigger: {
            trigger: `.${style.socialLinks}`,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className={style.aboutSection}>
      <div className="container">
        <div className="row">
          <div className={`${style.aboutDescription} col-md-8`}>
            <h2>
              Pozwól, <span className="text-highlight">że się</span> przedstawię
            </h2>
            <div className={style.aboutBody}>
              <p>
                Fascynuje mnie programowanie, a szczególnie budowanie
                nowoczesnych aplikacji webowych.
              </p>
              <p>
                Moja praca to połączenie kreatywnego tworzenia interaktywnych
                interfejsów użytkownika z solidnym backendem.
              </p>
              <p>
                Specjalizuję się w{" "}
                <i>
                  <span className="text-highlight">React i Next.js</span>
                </i>
                , dzięki którym tworzę dynamiczne aplikacje.
              </p>
              <p>
                Na backendzie wykorzystuję{" "}
                <i>
                  <span className="text-highlight">Node.js oraz Express</span>
                </i>
                , a także bazy danych{" "}
                <i>
                  <span className="text-highlight">MongoDB i PostgreSQL</span>
                </i>
                .
              </p>
            </div>
          </div>
          <div className={`${style.avatarWrapper} col-md-4 text-center`}>
            <div ref={avatarRef} className={`${style.avatarContainer}`}>
              <Image
                src="/avatar.svg"
                width={217}
                height={237}
                alt="avatar"
                className={style.avatarImage}
                priority
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`${style.socialLinks} text-center`}>
            <h2>Znajdź mnie w sieci</h2>
            <p>
              Chętnie nawiążę <span className="text-highlight">kontakt</span> -
              <a href="mailto: jack_byk@o2.pl"> napisz do mnie!</a>
              <span className={style.socialMail}> jack_byk@o2.pl</span>
            </p>
            <SocialBox />
          </div>
        </div>
      </div>
    </section>
  );
}

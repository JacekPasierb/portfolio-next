import React from "react";
import style from "./about.module.css";
import Image from "next/image";
import SkillsList from "../../ui/SkillsList";
import ToolsList from "../../ui/ToolsList";
import {fetchGithubContributions} from "../../serviceAPI/github";
import CalendarWrapper from "../../components/CalendarWrapper";

const Page = async () => {
  const {data, totalContributions, activeDays} =
    await fetchGithubContributions();
  return (
    <main>
      <div className="container">
        <section className={`${style.aboutSection} row`}>
          <div className={`${style.cardView} col-12 col-md-7`}>
            <h2>
              O <span className="text-highlight">Mnie</span>
            </h2>
            <div className="card-body">
              <p>
                Cześć wszystkim, nazywam się{" "}
                <span className="text-highlight">Jacek Pasierb</span> i mieszkam
                w województwie <span className="text-highlight">Lubelskim</span>
                . Obecnie pracuje jako Górnik, a programowaniem zajmuje się po
                godzinach od ponad dwóch lat.
              </p>
              <p>
                Ukończyłem roczny kurs w firmie GO-IT przygotowujący do pracy na
                stanowisko Full Stack Developer potwierdzony certyfikatem.
                Każdego dnia pogłębiam swoją wiedzę, stworzyłem wiele projektów
                potwierdzających moje umiejętności.
              </p>
              <p>Nie samą pracą człowiek żyje, czasem lubię!</p>
              <ul>
                <li>
                  <i className="bi bi-arrow-right-square-fill"></i> Poczytać
                  Książkę
                </li>
                <li>
                  <i className="bi bi-arrow-right-square-fill"></i> Podróżować
                </li>
                <li>
                  <i className="bi bi-arrow-right-square-fill"></i> Pograć W
                  Gierki
                </li>
                <li>
                  <i className="bi bi-arrow-right-square-fill"></i> Obejrzeć
                  Film
                </li>
              </ul>
              <h4 className="text-muted">
                &apos;Możesz robić to co lubisz!&apos;{" "}
                <span>- Jacek Pasierb</span>
              </h4>
            </div>
          </div>
          <div className={`${style.cardImage} col-12 col-md-5`}>
            <Image
              src="/hero-about.png"
              width={1000}
              height={689}
              className={style.imageHeroAbout}
              alt="hero-about"
            />
          </div>
        </section>
        <section className={`${style.skillsSection} row`}>
          <h2 className={style.projectHeading}>
            Profesjonalne{" "}
            <strong className="text-highlight">Umiejętności</strong>
          </h2>

          <SkillsList />
        </section>
        <section className={`${style.toolsSection} row`}>
          <h2 className={style.projectHeading}>
            <strong className="text-highlight"> Używane </strong>Narzędzia
          </h2>

          <ToolsList />
        </section>
        <section className={`${style.codeSection} row`}>
          <h2 className={style.projectHeading}>
            Dni Spedzone Na
            <strong className="text-highlight"> Kodowaniu ( 2024 ) </strong>
          </h2>
          <div
            className="activity-calendar-container py-3"
            style={{overflow: "hidden", width: "100%"}}
          >
                        <CalendarWrapper data={data} totalContributions={totalContributions} activeDays={activeDays} />

          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;

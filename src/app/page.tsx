import Image from "next/image";
import styles from "./page.module.css";
import TypewriterEffect from "./components/TypewriterEffect";

export default function Home() {
  return (
    <main>
      <section className="home-section">
        <div className="container home-content">
          <div className="row">
            <div className="home-header col-12 col-md-7">
              <h2 className="heading py-4">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>
              <h1 className="heading-name">
                I'm <strong className="text-highlight">Jacek Pasierb</strong>
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
          <div>
            <div className=" col-md-8">
              <h2>
                Pozwól, <span className="text-highlight"> że się </span>
                przedstawię
              </h2>
              <div className="home-about-description">
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
            <div className="myAvatar col-md-4"></div>
          </div>
          <div className="social"></div>
        </div>
      </section>
    </main>
  );
}

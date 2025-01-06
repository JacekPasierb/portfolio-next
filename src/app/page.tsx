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
                I'm <strong className="main-name">Jacek Pasierb</strong>
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
      <section className="home-about-section"></section>
    </main>
  );
}

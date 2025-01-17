import TypewriterEffect from "../../TypewriterEffect/TypewriterEffect";
import style from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <section className={style.homeSection}>
      <div className={`container ${style.content}`}>
        <div className="row">
          <div className={`${style.header} col-12 col-md-7`}>
            <h2 className="py-4">
              Witaj!
              <span className={style.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h2>
            <h1>
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
              className={style.heroImage}
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

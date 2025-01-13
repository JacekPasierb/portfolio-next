"use client";
import React from "react";
import style from "./certificates.module.css";
import {certificates} from "../../data/certyficatesList";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <div className="container">
        <section className={`${style.certificatesSection} text-center`}>
          <h2 className={style.projectHeading}>Certyfikaty</h2>
          <p>
            Oto <span className="text-highlight">certyfikaty, </span>które
            zdobyłem podczas mojej ścieżki zawodowej i edukacyjnej.
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {certificates.map(({title, image, description}) => (
              <div className="col py-4" key={title}>
                <div className={`card h-100 ${style.card}`}>
                  <Image
                    src={image}
                    className={`card-img-top ${style.cardImg}`}
                    width={600}
                    height={400}
                    alt={description}
                  />
                  <div className={`card-body ${style.cardBody}`}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;

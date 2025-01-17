import React from "react";
import style from "./resume.module.css";

import Image from "next/image";
import Button from "../../ui/Buttons";

const page = () => {
  const images = [
    {src: "/cv-images/cv_page_1.png", alt: "CV - Strona 1"},
    {src: "/cv-images/cv_page_2.png", alt: "CV - Strona 2"},
    {src: "/cv-images/cv_page_3.png", alt: "CV - Strona 3"},
  ];

  return (
    <main>
      <div className="container">
        <section className={`${style.resumeSection}`}>
          <Button
            title={"Pobierz CV"}
            icon={<i className="bi bi-download me-2"></i>}
            link="/PASIERB_CV.pdf"
          />
          <div className={style.resume}>
            {images.map((image, index) => (
              <div key={index} className={`${style.imageWrapper} mb-4`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={794}
                  height={1123}
                  className="img-fluid"
                  style={{width: "100%", height: "auto"}}
                  priority
                />
              </div>
            ))}
          </div>
          <Button
            title={"Pobierz CV"}
            icon={<i className="bi bi-download me-2"></i>}
            link="/PASIERB_CV.pdf"
          />
        </section>
      </div>
    </main>
  );
};

export default page;

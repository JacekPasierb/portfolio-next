import React from "react";
import style from "./resume.module.css";

import PdfViewer from "../../components/PdfViewer";
import DownloadCV from "../../ui/DownloadCV";
import Image from "next/image";

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
          <DownloadCV />
          <div className={style.resume}>
            {/* <PdfViewer /> */}
            {/* Wyświetlanie stron CV */}

            {images.map((image, index) => (
              <div key={index} className=" mb-4">
                <div className="w-100 resume-img">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={794} // Szerokość obrazu (piksele)
                    height={1123} // Wysokość obrazu (piksele)
                    className="img-fluid"
                    style={{width: "100%", height: "auto"}} // Ustawienie szerokości na 100% kontenera
                  />
                </div>
              </div>
            ))}
          </div>
          <DownloadCV />
        </section>
      </div>
    </main>
  );
};

export default page;

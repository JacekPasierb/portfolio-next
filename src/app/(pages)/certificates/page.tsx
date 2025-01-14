"use client";
import React, {useState} from "react";
import style from "./certificates.module.css";
import {certificates} from "../../data/certyficatesList";
import Image from "next/image";
import {Certificate} from "../../types/certificate";
import ModalCertificate from "../../components/ModalCertificate";

const Page = () => {
  const [show, setShow] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert);
    setCurrentPage(0);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setSelectedCert(null);
  };

  return (
    <main>
      <div className="container">
        <section className={`${style.certificatesSection} text-center`}>
          <h2 className={style.projectHeading}>Certyfikaty</h2>
          <p>
            Oto <span className="text-highlight">certyfikaty, </span>które
            zdobyłem podczas mojej ścieżki zawodowej i edukacyjnej.
          </p>
          <div className="row row-cols-1 row-cols-lg-3 g-4">
            {certificates.map((cert) => (
              <div className={`col py-4`} key={cert.title}>
                <div className={`card h-100 ${style.card}`}>
                  <Image
                    src={cert.image}
                    className={`card-img-top ${style.cardImg}`}
                    width={600}
                    height={400}
                    alt={cert.description}
                    onClick={() => openModal(cert)}
                    style={{cursor: "pointer"}}
                  />
                  <div className={`card-body ${style.cardBody}`}>
                    <h5 className="card-title">{cert.title}</h5>
                    <p className="card-text">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedCert && (
        <ModalCertificate
          show={show}
          closeModal={closeModal}
          selectedCert={selectedCert}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  );
};

export default Page;

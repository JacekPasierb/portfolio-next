"use client";
import React, {useState} from "react";
import style from "./certificates.module.css";
import {certificates} from "../../data/certyficatesList";
import {Certificate} from "../../types/certificate";
import ModalCertificate from "../../components/ModalCertificate";
import Card from "../../ui/Card/Card";

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
          <div className="row row-cols-1 row-cols-lg-3 g-5">
            {certificates.map((cert) => (
              <Card data={cert} openModal={openModal} key={cert.title}/>
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

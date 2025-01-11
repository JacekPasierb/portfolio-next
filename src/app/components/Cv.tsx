import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import styles from "./CV.module.css"; // Stylizacja CV

const CV = () => {
  const cvRef = useRef(null);

  // Funkcja do eksportowania CV jako PDF
  const downloadPDF = async () => {
    const element = cvRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const pdf = new jsPDF("portrait", "pt", "a4");
    const imgData = canvas.toDataURL("image/png");

    // Dodaj obraz do PDF
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = canvas.height * (pdfWidth / canvas.width);
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Pobierz plik
    pdf.save("Jacek_Pasierb_CV.pdf");
  };

  return (
    <div className="container">
      {/* Przycisk do pobrania */}
      <button onClick={downloadPDF} className={styles.downloadButton}>
        Pobierz CV
      </button>

      {/* Sekcja CV */}
      <div ref={cvRef} className={styles.cvContainer}>
        <h1>Jacek Pasierb</h1>
        <p>Full Stack Developer</p>
        <section>
          <h2>O mnie</h2>
          <p>
            Cześć, jestem Jacek Pasierb, Górnik i programista pasjonujący się
            technologią.
          </p>
        </section>
        <section>
          <h2>Umiejętności</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js</li>
            <li>Node.js, MongoDB</li>
          </ul>
        </section>
        <section>
          <h2>Doświadczenie</h2>
          <p>Górnik z doświadczeniem w projektach programistycznych.</p>
        </section>
        <section>
          <h2>Edukacja</h2>
          <p>Kurs Full Stack Developer w GO-IT.</p>
        </section>
      </div>
    </div>
  );
};

export default CV;

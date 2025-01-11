import React from "react";
import style from "./resume.module.css";

import PdfViewer from "../../components/PdfViewer";
import DownloadCV from "../../ui/DownloadCV";

const page = () => {
  return (
    <main>
      <div className="container">
        <section className={`${style.resumeSection}`}>
          <div className="resume">
            <DownloadCV />
            <PdfViewer />
            <DownloadCV />
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;

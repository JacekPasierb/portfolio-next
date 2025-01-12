"use client";
import React from "react";

const DownloadCV = () => {
  return (
    <div className="button">
      <a href="/PASIERB_CV.pdf" download>
        <button className="btn ">
          <i className="bi bi-download me-2"></i>
          Pobierz CV
        </button>
      </a>
    </div>
  );
};

export default DownloadCV;

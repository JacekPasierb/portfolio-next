'use client';
import React from 'react';

const DownloadCV = () => {
  return (
    <div>
      <a href="/PASIERB_CV.pdf" download>
        <button className="btn btn-primary">
          Pobierz moje CV
        </button>
      </a>
    </div>
  );
};

export default DownloadCV;

'use client'
// components/PdfViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = () => {
  return (
    <div style={{ width: '100%', height: '800px' }}>
      {/* Używamy Worker do obsługi worker.js, który przetwarza plik PDF */}
      <Worker workerUrl="/pdfj-worker/pdf.worker.min.js">
        <Viewer fileUrl="/PASIERB_CV.pdf" />
      </Worker>
    </div>
  );
};

export default PdfViewer;

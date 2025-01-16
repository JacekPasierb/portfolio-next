import Image from "next/image";
import React from "react";
import style from "../(pages)/certificates/certificates.module.css";
import Button from "../ui/Buttons";
import {ModalCertificateProps} from "../types/modalCertificate";


const ModalCertificate: React.FC<ModalCertificateProps> = ({
  show,
  closeModal,
  selectedCert,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex={-1}
      role="dialog"
      onClick={closeModal}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{selectedCert.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <Image
              src={
                selectedCert.pages
                  ? selectedCert.pages[currentPage]
                  : selectedCert.image
              }
              alt={`${selectedCert.title} - Strona ${currentPage + 1}`}
              width={800}
              height={600}
              className={style.imageCertLg}
            />
          </div>
          {selectedCert.pages && selectedCert.pages.length > 1 && (
            <div className="modal-footer justify-content-between">
              <Button
                title="Poprzednia"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(currentPage - 1)}
              />

              <span className="text-highlight">
                Strona {currentPage + 1} z {selectedCert.pages.length}
              </span>
              <Button
                title="Następna"
                disabled={currentPage === selectedCert.pages.length - 1}
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCertificate;

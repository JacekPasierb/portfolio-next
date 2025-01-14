export interface ModalCertificateProps {
    show: boolean; 
    closeModal: () => void; 
    selectedCert: Certificate | null; 
    currentPage: number; 
    setCurrentPage: (page: number) => void;
  }
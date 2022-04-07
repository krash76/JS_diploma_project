import { openModal } from "./modalFunc";
import { closeModal } from "./modalFunc";

export const certificateModal = () => {
  const modal = document.querySelector(".certificate-zoom-modal");
  const certificates = document.querySelectorAll(".sertificate-document");
  const modalCloseBtn = document.querySelector(".certificate__close");
  

  certificates.forEach((cert) => {
    cert.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modal);
     });
  });
  
  modalCloseBtn.addEventListener("click", () => {
    closeModal(modal);
  });
  
};

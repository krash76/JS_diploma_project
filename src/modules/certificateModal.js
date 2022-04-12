import { openModal } from "./modalFunc";
import { closeModal } from "./modalFunc";

export const certificateModal = () => {
  const modal = document.querySelector(".certificate-zoom-modal");
  const certificates = document.querySelectorAll(".sertificate-document");
  const modalCloseBtn = document.querySelector(".certificate__close");
  const modalImg = document.querySelector(".modal-img");
  

  certificates.forEach((cert) => {
    if (window.screen.width < 768 ) {
      cert.querySelector("img").setAttribute("style", "margin-bottom: 5px");
    };
    cert.addEventListener("click", (e) => {
      e.preventDefault();
      let imgSrc = e.target.closest("a").getAttribute("href");
      modalImg.src = imgSrc;
      openModal(modal);
     });
  });
  
  modalCloseBtn.addEventListener("click", () => {
    closeModal(modal);
  });
};

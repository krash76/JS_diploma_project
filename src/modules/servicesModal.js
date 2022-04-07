import { openModal } from "./modalFunc";
import { closeModal } from "./modalFunc";


export const servicesModal = () => {
  const modal = document.querySelector(".services-modal");
  const serviceBtns = document.querySelectorAll(".service-button");
  const modalOverlay = document.querySelector(".overlay");
  const modalCloseBtn = document.querySelector(".services-modal__close");

  serviceBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modal, modalOverlay);
     });
  });
  
  modalCloseBtn.addEventListener("click", () => {
    closeModal(modal, modalOverlay);
  });
};


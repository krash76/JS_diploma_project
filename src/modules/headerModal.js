import { openModal } from "./modalFunc";
import { closeModal } from "./modalFunc";

export const headerModal = () => {
  const modal = document.querySelector(".header-modal");
  const callBtn = document.querySelector(".button");
  const modalOverlay = document.querySelector(".overlay");
  const modalCloseBtn = document.querySelector(".header-modal__close");

  callBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(modal, modalOverlay)
  });
    
  modalCloseBtn.addEventListener("click", () => {
    closeModal(modal, modalOverlay)
  })
};


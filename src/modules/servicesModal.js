import { openModal } from "./modalFunc";
import { closeModal } from "./modalFunc";


export const servicesModal = () => {
  const modal = document.querySelector(".services-modal");
  const serviceBtns = document.querySelectorAll(".service-button");
  const modalCloseBtn = document.querySelector(".services-modal__close");
  let subject;

  serviceBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modal);
      subject = btn.querySelector("a").getAttribute("data-subject");
      let modalSubject = modal.querySelector('input[name="subject"]');
      modalSubject.value = subject;
    });
  });
  
  modalCloseBtn.addEventListener("click", () => {
    closeModal(modal);
  });
};


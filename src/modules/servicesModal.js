export const servicesModal = () => {
  const modal = document.querySelector(".services-modal");
  const serviceBtns = document.querySelectorAll(".service-button");
  const modalOverlay = document.querySelector(".overlay");
  const modalCloseBtn = document.querySelector(".services-modal__close");

  serviceBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
      modalOverlay.style.display = "block";
    });
  });
  
  modalCloseBtn.addEventListener("click", () => {
      modal.style.display = "none";
      modalOverlay.style.display = "none";
  });
};


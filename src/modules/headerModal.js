export const headerModal = () => {
  const modal = document.querySelector(".header-modal");
  const callBtn = document.querySelector(".button");
  const modalOverlay = document.querySelector(".overlay");
  const modalCloseBtn = document.querySelector(".header-modal__close");

  callBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
    modalOverlay.style.display = "block";
  });
    
  modalCloseBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  })
};


const modalOverlay = document.querySelector(".overlay");

export const openModal = (modalEl) => {
  modalEl.style.display = "block";
  modalOverlay.style.display = "block";
}

export const closeModal = (modalEl) => {
  modalEl.style.display = "none";
  modalOverlay.style.display = "none";
}
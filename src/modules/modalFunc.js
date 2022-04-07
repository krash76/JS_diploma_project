
export const openModal = (modalEl, overlayEl) => {
  
  modalEl.style.display = "block";
  overlayEl.style.display = "block";
}

export const closeModal = (modalEl, overlayEl) => {
  modalEl.style.display = "none";
  overlayEl.style.display = "none";
}
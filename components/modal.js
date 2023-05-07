let modalOverlay = document.getElementById('modal-overlay');
document.querySelector(".open").addEventListener('click', openModal);
document.querySelector(".close").addEventListener('click', closeModal)

export function openModal() {
  modalOverlay.style.display = 'block';
}
export function closeModal() {
  modalOverlay.style.display = 'none';
}
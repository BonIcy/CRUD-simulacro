import { deletePet } from "./getPet.js";
let eliminarDe = document.querySelector('.lista');
eliminarDe.addEventListener('click', confirmDelete)
export function confirmDelete(e) {
    if(e.target.classList.contains(`delete`)){
      let petID = parseInt(e.target.dataset.pet);
      let confirmar = confirm(`¿Deseas eliminar a la mascota?`);
      if (confirmar) {
              deletePet(petID);
            }
    }
}
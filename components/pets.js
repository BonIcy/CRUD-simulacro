import { getPets } from "../js/getPet.js";
import { validate, validatePet } from "../js/newPet.js";
import { confirmDelete } from "../js/deletePet.js";

export function pet() {

  document.addEventListener("DOMContentLoaded", loadPets);
  async function loadPets() {
    let pets = await getPets();

    let contenido = document.querySelector(".tbody");
    pets.forEach((pet) => {
        let { nombre, tipo, color, id } = pet;
      let card = document.createElement("tr");
      card.innerHTML = `
      <th scope="row">${nombre}</th>
      <td style="">${tipo}</td>
      <td style="">${color}</td>
      <td style=""><button type="button" data-pet="${id}" class="delete">Fuera</button></td>
      `;
      contenido.appendChild(card);
    });
  }
  validate
  validatePet
  confirmDelete
}
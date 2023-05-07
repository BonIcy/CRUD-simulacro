import { newPet } from "./getPet.js";
let formulario = document.querySelector("#agregarM");
formulario.addEventListener("submit", validatePet);

export function validatePet(e) {
    e.preventDefault();
    let nombre = document.querySelector("#nameM").value;
    let color = document.querySelector("#colorM").value;
    let tipo = document.querySelector("#tipoM").value;
    let pet={nombre, color, tipo};
    if (validate(pet)){
        alert("Todos los campos son obligatorios");
        return;
    }
    newPet(pet);
};
export function validate(obj){
    return !Object.values(obj).every(element => element!=="")
};
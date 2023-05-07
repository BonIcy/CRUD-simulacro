import { getToys } from "../js/getToys.js"; 

export function toys(){
  document.addEventListener("DOMContentLoaded",loadToys)

  async function loadToys(){
    let toys = await getToys();
    let contenido = document.querySelector(".tbody");

    toys.forEach((pet)=>{
      let {id, nombre, dirigido, precio} = pet;
      let column = document.createElement(`tr`);
      column.innerHTML =`
      <th scope="row" style="border: 2px solid">${id}</th>
      <td style="border: 1px solid">${nombre}</td>
      <td style="border: 1px solid;">${dirigido}</td>
      <td style="border: 1px solid;">${precio}</td>
      <td style="border: 1px solid;display: flex;">
        <form class="compraCantidadForm">
          <input type="number" min="1" placeholder="Cantidad" value="" class="cantidadInput" style="width: 3rem">
          <input type="submit" value="Hecho">
        </form>
      </td>`
      contenido.appendChild(column);
//esto es para postear lo comprado en la factura del json, no pude modular srry, me siento re desordenado con esto aqui :,(
     // Agregar evento de escucha al formulario
    let compraCantidadForm = column.querySelector('.compraCantidadForm');
    compraCantidadForm.addEventListener('submit', async (event) => {
    // Evitar que el formulario se envíe y se refresque la página
    event.preventDefault();

    // Obtener la cantidad ingresada por el usuario
    let cantidadInput = compraCantidadForm.querySelector('.cantidadInput');
    let cantidad = parseInt(cantidadInput.value);

    // Obtener el resto de los datos de la fila
    let id = parseFloat(column.querySelector('th').textContent);
    let nombre = column.querySelectorAll('td')[0].textContent;
    let dirigido = column.querySelectorAll('td')[1].textContent;
    let precio = parseFloat(column.querySelectorAll('td')[2].textContent);

    // Crear un objeto con las propiedades compra y cantidad
    let factura = {
        compra: { id, nombre, dirigido, precio },
        cantidad
    };
    console.log(factura);

    try {
        let response = await fetch('http://localhost:4202/Factura', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(factura)
        });

        if (response.ok) {
        alert('Factura creada en el servidor');
        } else {
        alert('Error al crear la factura en el servidor');
        }
    } catch (error) {
        console.error(error);
    }
    });
    });
  }
}

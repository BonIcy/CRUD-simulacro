import { getFactura } from "../js/getFactura.js";
export function factura(){
    document.addEventListener("DOMContentLoaded", loadFactura);
    async function loadFactura(){
        let facturas = await getFactura();
        let contenido= document.querySelector(".tbody");
        //ponemos el total en 0 para agregarle segun cada pago
        let total = 0;
        facturas.forEach((factura)=>{
            let {compra, cantidad, id} = factura
            let suma = cantidad*compra.precio
            let tr = document.createElement("tr");
            total += suma;
            tr.innerHTML = `
            <th scope="row">${id}</th>
            <td>${compra.nombre}</td>
            <td>${compra.precio}</td>
            <td>${cantidad}</td>
            <td>${suma}</td>
            `
            contenido.appendChild(tr);
        });
       
        let totalElement = document.querySelector(".total");
        totalElement.textContent = total;
    }
}
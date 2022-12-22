
import {cards, filtradoPorBusqueda} from '../../module/funciones.js'

const div3 = document.getElementById('divrow2');
const search = document.getElementById('search')

let datos;
let jugueteria;

fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(result => result.json())
  .then(capturarDatos =>{
    datos = capturarDatos;
    jugueteria = datos.filter( card => card.categoria === "jugueteria")
    cards(div3,jugueteria);
} ).catch( error => {
  console.log("error");
});

search.addEventListener('input', () => {
let filtradoPorBusquedas = filtradoPorBusqueda (jugueteria,search.value)
cards(div3,filtradoPorBusquedas)
})
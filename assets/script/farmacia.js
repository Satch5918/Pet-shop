import {cards, inputscheck, filtradoPorCategoria, filtradoPorBusqueda, filtrados } from '../../module/funciones.js'
const div2 = document.getElementById('divrow1');
const divcheck = document.getElementById('checkboxs');
const seccioncheck = document.getElementById('seccion1');
const search = document.getElementById('search')

let datos;
let categorias;
let uncoming;

fetch('https://amazing-events.onrender.com/api/events')
  .then(result => result.json())
  .then(capturarDatos =>{
    datos = capturarDatos.events;
    uncoming = datos.filter( card => card.date >= capturarDatos.currentDate)
    categorias = uncoming.map(elemento => elemento.category)
    let mySet = new Set(categorias);
    categorias = Array.from(mySet);
    cards(div2,uncoming);
}).catch( error => {
  console.log("error:",error);
});

seccioncheck.addEventListener('change', (e) =>{
  let filtradoPorBusquedas = filtrados (categorias,uncoming,search)
  cards(div2,filtradoPorBusquedas)
})

search.addEventListener('input', () => {
let filtradoPorBusquedas = filtrados (categorias,uncoming,search)
cards(div2,filtradoPorBusquedas)
})
import {cards, inputscheck, filtradoPorCategoria, filtradoPorBusqueda, filtrados } from '../../module/funciones.js'

const div3 = document.getElementById('divrow2');
const divcheck = document.getElementById('checkboxs');
const seccioncheck = document.getElementById('seccion1');
const search = document.getElementById('search')

let datos;
let categorias;
let past;

fetch('https://amazing-events.onrender.com/api/events')
  .then(result => result.json())
  .then(capturarDatos =>{
    datos = capturarDatos.events;
    past = datos.filter( card => card.date < capturarDatos.currentDate)
    categorias = past.map(elemento => elemento.category)
    let mySet = new Set(categorias);
    categorias = Array.from(mySet);
    cards(div3,past);
} ).catch( error => {
  console.log("error");
});

seccioncheck.addEventListener('change', (e) =>{
  let filtradoPorBusquedas = filtrados (categorias,past,search)
  cards(div3,filtradoPorBusquedas)
})

search.addEventListener('input', () => {
let filtradoPorBusquedas = filtrados (categorias,past,search)
cards(div3,filtradoPorBusquedas)
})
import {cards, filtradoPorBusqueda} from '../../module/funciones.js'
const div2 = document.getElementById('divrow1');
const search = document.getElementById('search')


let datos;
let farmacia;

fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(result => result.json())
  .then(capturarDatos =>{
    datos = capturarDatos;
    farmacia = datos.filter( card => card.categoria === "farmacia" )
    cards(div2,farmacia);
}).catch( error => {
  console.log("error:",error);
});


search.addEventListener('input', () => {
  let filtradoPorBusquedas = filtradoPorBusqueda(farmacia,search.value)
  cards(div2,filtradoPorBusquedas)
})

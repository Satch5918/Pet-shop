import {CardDetails} from '../../module/funciones.js'
let datos;
let finded;
let idUrl;
const contenedor = document.getElementById('contenedor')

fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(result => result.json())
  .then(capturarDatos =>{
    datos = capturarDatos
    idUrl = new URLSearchParams(location.search).get('id')
    finded = datos.find(item => item._id == idUrl)
    CardDetails(contenedor,finded)
  }).catch( error => {
    console.log("error:",error);
});

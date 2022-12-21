import {CardDetails} from '../../module/funciones.js'
let datos;
let finded;
let idUrl;
const contenedor = document.getElementById('contenedor')

fetch('https://amazing-events.onrender.com/api/events')
  .then(result => result.json())
  .then(capturarDatos =>{
    datos = capturarDatos.events
    idUrl = new URLSearchParams(location.search).get('id')
    finded = datos.find(item => item._id == idUrl)
    CardDetails(contenedor,finded)
  }).catch( error => {
    console.log("error:",error);
});

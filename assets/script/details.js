import {CardDetails} from '../../module/funciones.js'

let datos;
let finded;
let idUrl;
let carrito = []
const contenedor = document.getElementById('contenedor')

fetch('https://mindhub-xj03.onrender.com/api/petshop')
.then(result => result.json())
.then(capturarDatos =>{
  datos = capturarDatos
  datos = capturarDatos;
  idUrl = new URLSearchParams(location.search).get('id')
  finded = datos.find(item => item._id == idUrl)
  CardDetails(contenedor,finded)
}).catch( error => {
  console.log("error:",error);
});
const boton = document.getElementById('añadirCarro')

boton.addEventListener('click', (e)=>{
  e.preventDefault();
  let jsonArray=JSON.stringify(e);
  agregarAlCarrito(datos)
  save(jsonArray);
  alert("Su articulo fue añadido correctamente")
})


const agregarAlCarrito = (prodID) =>{
  const k = datos.find((prod)=>prod.id===prodID._id)
  carrito.push(k)
  console.log(carrito)
  save(carrito)
}

function save(carrito){
  localStorage.setItem("carrito", [])
}
function get(carrito) {
  return localStorage.getItem('carrito');
}

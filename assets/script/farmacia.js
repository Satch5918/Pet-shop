const div2 = document.getElementById('divrow1');
const search = document.getElementById('search')
let boton;


function getLocalStorage(){
  let setAsString = localStorage.getItem('keyCarrito');
  let setAsArray = JSON.parse(setAsString);
  return setAsArray
}

let datos;
let farmacia;

fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(result => result.json())
  .then(capturarDatos =>{
    datos = capturarDatos;
  
    boton = document.getElementById('myButton')
    farmacia = datos.filter( card => card.categoria === "farmacia" )

    cards(div2,farmacia);
}).catch( error => {
  console.log("error:",error);
});

search.addEventListener('input', () => {
let filtradoPorBusquedas = filtradoPorBusqueda(farmacia,search.value)
cards(div2,filtradoPorBusquedas)
})

function cards (div,objdato) {
  let stringcard = "";
  objdato.forEach(card => {     
      stringcard += `<div class="card col-3" id="card-3">
      <a href="./detalles.html?id=${card._id} " class="imgancor"><img class="cardimg" src=${card.imagen} alt="${card.producto}"></a>
          <div class="card-body cartas">
              <h5 class="card-title">${card.producto}</h5>
          </div>
          ${card.disponibles < 5 ? ` <div class="ultimas" ><p class="card-link textocard"> Ultimas ${card.disponibles} unidades!</p></div>` : ` <div><p class="card-link textocard"> Stock: ${card.disponibles} U</p></div>`}
          <div class="card-body bodycard">
              <p class="card-link textocard">Price: $ ${card.precio}</p>
              </div>
              <div>
              <button onclick="addCarrito('${card._id}')" id="${card._id}" class="btn btn-dark butonCards">Añadir al Carrito</button>
              </div>
          </div>`; 
        
  });
div.innerHTML = stringcard;
}

function filtradoPorBusqueda(nombres, searchsvalue){
  return nombres.filter(nombre => nombre.producto.toLowerCase().includes(searchsvalue.toLowerCase())) 
}
let recuperarLocalStorage = getLocalStorage();
let carrito = recuperarLocalStorage||[];
console.log(carrito);

function addCarrito(producto) {
  let objeto = datos.find(dato => dato._id === producto);
  let yaExiste = carrito.find(item => item._id === producto);
  if (!yaExiste) {
    carrito.push(objeto);
    localStyoragwe(carrito)
  }
  console.log(carrito);
}

function localStyoragwe(item){
let keyArray = Array.from(item)
keyArray = JSON.stringify(keyArray);
localStorage.setItem('keyCarrito', keyArray);
}



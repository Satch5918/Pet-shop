const div3 = document.getElementById('divrow2');
const search = document.getElementById('search')

let datos;
let jugueteria;
let setAsArray;
let localreturn;

//function getLocalStorage(){
 // let setAsString = localStorage.getItem('keyCarrito');
  //let setAsArray = JSON.parse(setAsString);
  //localreturn =  setAsArray;
  //console.log(localreturn);
  //return localreturn
//}

//getLocalStorage() 

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

function cards (div,objdato) {
  let stringcard = "";
  objdato.forEach(card => { 
    if(card.disponibles >= 5 || card.disponibles === 0){
      stringcard += `<div class="card col-3" id="card-3">
      <a href="./detalles.html?id=${card._id} " class="imgancor"><img class="cardimg" src=${card.imagen} alt="${card.producto}"></a>
          <div class="card-body cartas">
              <h5 class="card-title">${card.producto}</h5>
          </div>
          <div><p class="card-link textocard"> Stock: ${card.disponibles} U</p></div>
          <div class="card-body bodycard">
              <p class="card-link textocard">Price: $ ${card.precio}</p>
              </div>
              <div>
              <button onclick="addCarrito('${card._id}')" id="${card._id}" class="btn btn-dark butonCards">Añadir al Carrito</button>
              </div>
          </div>`; } 
          else{
            stringcard += `<div class="card col-3 " id="card-3">
            <a href="./detalles.html?id=${card._id} " class="imgancor"><img class="cardimg" src=${card.imagen} alt="${card.producto}"></a>
                <div class="card-body cartas">
                    <h5 class="card-title">${card.producto}</h5>
                </div>
                <div class="ultimas" ><p class="card-link textocard"> Ultimas ${card.disponibles} unidades!</p></div>
                <div class="card-body bodycard">
                    <p class="card-link textocard">Price: $ ${card.precio}</p>
                    </div>
                    <div>
                    <button onclick="addCarrito('${card._id}')" id="${card._id}" class="btn btn-dark butonCards">Añadir al Carrito</button>
                    </div>
                </div>`;

          }  
  });
div.innerHTML = stringcard;
}


function filtradoPorBusqueda(nombres, searchsvalue){
  return nombres.filter(nombre => nombre.producto.toLowerCase().includes(searchsvalue.toLowerCase())) 
}

/* 
function addCarrito(producto) {
  console.log(producto);
  let resultado = producto.map(element => element._id);
  let rta;
  rta = resultado.find(elem => elem === element._id);
  console.log(rta); 
} */

let carrito = [];

function addCarrito(producto) {


if(localStorage.getItem('keyCarrito')){
  
    let carro = JSON.parse(localStorage.getItem('keyCarrito'));
  carro.push(datos.find(dato => dato._id === producto));
  
  localStorage.setItem('keyCarrito', JSON.stringify(carro));

}else{
  let objeto = [];
  objeto.push(datos.find(dato => dato._id === producto));
  localStorage.setItem('keyCarrito', JSON.stringify(objeto));
 
} 
}

let carrito = document.getElementById('tbodyCarrito')
let fragment = document.createDocumentFragment();
let finalizarCompra = document.getElementById('finalizarCompra')
let datos;

let setAsString = [];
let setAsArray = [];
let incrementButton; 
let decrementButton;

fetch('https://mindhub-xj03.onrender.com/api/petshop')
    .then(result => result.json())
    .then(capturarDatos =>{
    datos = capturarDatos;
    setAsString = localStorage.getItem('keyCarrito');
    setAsArray = JSON.parse(setAsString);

renderCarrito(carrito,setAsArray,fragment)

    
}).catch( error => {
    console.log("error:",error);
});

let cant;

function renderCarrito(contain,events,fragment) {    
 cant = document.getElementById('value')
    events.forEach(producto => { 
        let div = document.createElement('tr');
        div.innerHTML = `
        <td>#</td>
    <td>${producto.producto}</td>
    <td>${producto.precio}</td>
    <td>
        <button id="decrement"> - </button>
        <input class="inputcarrito" type="text" id="value" value="1" min="1">        
        <button id="increment"> + </button>
    </td>
    <td>${producto.precio}</td>
    <td><button>Eliminar</button></td>
        `;
        fragment.appendChild(div)    
    });
    contain.appendChild(fragment);
}

finalizarCompra.addEventListener('click', () =>{
  if(setAsString != null ){
    localStorage.clear();
    alert("Su compra se realizo con exito!!!")
    location.reload();
}
})
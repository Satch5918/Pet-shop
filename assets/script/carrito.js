let carrito = document.getElementById('tbodyCarrito')
let fragment = document.createDocumentFragment();
let datos;



let incrementButton; 
let decrementButton;


fetch('https://mindhub-xj03.onrender.com/api/petshop')
  .then(result => result.json())
  .then(capturarDatos =>{
    datos = capturarDatos;
    renderCarrito(carrito,datos,fragment)
}).catch( error => {
  console.log("error:",error);
});



 function renderCarrito(contain,events,fragment) {    
    events.forEach(producto => { 
        let div = document.createElement('tr');
        div.innerHTML = `
        <td>1</td>
    <td>${producto.producto}</td>
    <td>${producto.precio}</td>
    <td>
        <button id="decrement">-</button>
        <input class="inputcarrito" type="text" id="value" value="1" min="1">        
        <button id="increment">+</button>
    </td>
    <td>${producto.precio}</td>
    <td><button>Eliminar</button></td>
        `;
        fragment.appendChild(div)    
    });
    contain.appendChild(fragment);
}
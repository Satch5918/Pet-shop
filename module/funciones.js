export function cards (div,objdato) {
    let stringcard = "";
    objdato.forEach(card => { 
        stringcard += `<div class="card col-3">
        <img class="cardimg" src=${card.imagen} alt="${card.producto}">
            <div class="card-body cartas">
                <h5 class="card-title">${card.producto}</h5>
            </div>
            <div> <p class="card-link textocard">stock: ${card.disponibles} U</p></div>
            <div class="card-body bodycard">
                <p class="card-link textocard">Price: $ ${card.precio}</p>
                <a href="./carrito.html?id=${card._id} " class="card-link button">Details</a>
                </div>
            </div>`;    
    });
div.innerHTML = stringcard;
}
 

export function filtradoPorBusqueda(nombres, searchsvalue){
    return nombres.filter(nombre => nombre.producto.toLowerCase().includes(searchsvalue.toLowerCase())) 
}


export function CardDetails(contain,datosCard){
  contain.innerHTML = `<div id="divdetals1">
  
  <img id="imgdetail" src=${datosCard.imagen} alt="">
  </div>

  <div id="divdetals2">
  <h3>${datosCard.producto}</h3>
  <h4>Stock: ${datosCard.disponibles} U </h4>
  <p class="pdetails" >${datosCard.descripcion}</p>
  <p class="priceDetails">Precio: $${datosCard.precio}</p>
  <div class="btn-group ">
    <a href="#" class="btn btn-dark butonDetails" aria-current="page">Comprar</a>
    <a href="./index.html" class="btn btn-dark butonDetails">Agregar al carrito</a>
  </div>
  </div>`  
}

export function cards (div,objdato) {
    let stringcard = "";
    objdato.forEach(card => { 
        stringcard += `<div class="card col-3">
            <img class="cardimg" src=${card.image} alt="${card.name}">
            <div class="card-body cartas">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text textocard">${card.description}</p>
            </div>
            <div class="card-body bodycard">
                <p class="card-link textocard">Price: $ ${card.price}</p>
                <a href="./carrito.html?id=${card._id} " class="card-link button">Details</a>
                </div>
            </div>`;    
    });
div.innerHTML = stringcard;
}

export function inputscheck(inputs, contenedorInput){
    let checkboxes = '';
      inputs.forEach(category => {
      checkboxes += `<label class="form-check-label boxcheck">${category}<input class="form-check-input" type="checkbox" value="${category}">
      </label>`  
    })
    contenedorInput.innerHTML += checkboxes;
}

export function filtradoPorCategoria(datos,selectedCategories){
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
    selectedCategories = Array.from(checkbox).map(element =>  element.value)  
    const algo = selectedCategories.map(element =>  datos.filter(event => {
      return event.category === element
    })).flat();
  
    if (!selectedCategories.length){
      return datos
    }
    else {
      return algo
    }  
}

export function filtradoPorBusqueda(nombres, searchsvalue){
    return nombres.filter(nombre => nombre.name.toLowerCase().includes(searchsvalue.toLowerCase())) 
}

export function filtrados (categorias,datos,search){
    let filtradoPorCategorias = filtradoPorCategoria(datos,categorias)
    let filtradoPorBusquedas = filtradoPorBusqueda(filtradoPorCategorias,search.value)
    
    return filtradoPorBusquedas;
}

export function CardDetails(contain,datosCard){
  contain.innerHTML = `<div id="divdetals1">
  <img id="imgdetail" src=${datosCard.image} alt="">
  </div>
  <div id="divdetals2">
  <h3>${datosCard.name}</h3>
  <h4>${datosCard.category}</h4>
  <p class="pdetails" >${datosCard.description}</p>
  <p>Place: ${datosCard.place} </p>
  <p>Price: $${datosCard.price}</p>
  <div class="btn-group ">
    <a href="#" class="btn btn-primary active butonDetails" aria-current="page">Buy</a>
    <a href="./index.html" class="btn btn-primary butonDetails">Back</a>
  </div>
  </div>`  
}

export function stats (contain,events,asistEstimate,fragment) {    
  events.forEach(stats => { 
      let div = document.createElement('tr');
      div.innerHTML = `
      <td>${stats.category}</td>
      <td>$ ${(stats[asistEstimate] * stats.price).toLocaleString()} </td>
      <td>${((stats[asistEstimate] *100) / stats.capacity).toFixed(2)} %</td>
      `;
      fragment.appendChild(div)    
  });
contain.appendChild(fragment);
}

export function mayorCapacidad(events,contain) {
  const resultados = events.map(element => element.capacity);
  let max = Math.max(...resultados);
  let eventoConMayorCapacidad = events.find( elemtn => elemtn.capacity === max );
  contain.innerHTML = `${eventoConMayorCapacidad.name} &nbsp&nbsp Capacity: ${eventoConMayorCapacidad.capacity.toLocaleString()}`;
}

export function getMaxPercentage(array,contain) {
 let arraymin = array.map(elemnt => ({nombre: elemnt.name,
porcent: ((elemnt.assistance * 100) / elemnt.capacity)}) ).sort((a,b) =>
b.porcent - a.porcent
)[0]
contain.innerHTML = `<tr>
<td>${arraymin.nombre}  ${arraymin.porcent.toFixed(2)} %</td>
` 
} 

export function getMinPercentage(array, contain) {
let arraymin = array.map(elemnt => ({nombre: elemnt.name,
porcent: ((elemnt.assistance * 100) / elemnt.capacity)}) ).sort((a,b) =>
b.porcent - a.porcent
)[array.length - 1]
contain.innerHTML = `<tr>
<td>${arraymin.nombre}  ${arraymin.porcent.toFixed(2)} %</td>` 
}


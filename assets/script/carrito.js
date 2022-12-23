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



 function renderCarrito(contain,events,fragment) {    
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
     <button class="border-0 bg-transparent">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#4f706f"
        class="bi bi-trash delete" style="z-index: 2;" viewBox="0 0 16 16">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd"
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
     </button>
         `;
         fragment.appendChild(div)    
     });
     contain.appendChild(fragment);
 }

//  finalizarCompra.addEventListener('click', (e) =>{
//    if(setAsString != null ){
//      localStorage.clear();
//      alert("Su compra se realizo con exito!!!")
//      location.reload();
//  }
//  })


 document.getElementById('clear-cart').addEventListener("click", () => {
    localStorage.clear()
    total.textContent = 0
    let table = document.querySelector('.table')
    table.classList.add('d-flex')
    table.classList.add('justify-content-center')
    table.innerHTML = `<h1>Vaciaste el Carrito, Volve Pronto!</h1>`
    })




    carrito.addEventListener('click', deleteProduct);
        function deleteProduct(e) {
            if (e.target.classList.contains('delete')) {
                Swal.fire({
                    title: 'Está seguro?',
                    text: "Se eliminará permanentemente",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#576F72',
                    cancelButtonColor: '#B2675E',
                    confirmButtonText: 'Sí, borralo!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        let tr = e.target.closest("tr")
                        let value = tr.children[0].id
                        carrito.removeChild(tr)
                        localStorage.setItem('card', JSON.stringify(medsStorage.filter(el => el.id != value)))
                        localStorage.setItem('card', JSON.stringify(toysStorage.filter(el => el.id != value)))
                        Swal.fire(
                            'Eliminado!',
                            'El producto ya no está en el carrito',
                            'success'
                        )
                    }
                })
               
            }
        }

let templateHTML=""
function contactForm(){
      templateHTML+=`
      <div class="d-flex flex-wrap justify-content-around align-items-center flex-xl-row gap-4 p-4" id="container.contact">
        <div class="container-form col-10 col-md-5 col-lg-5">
            <form id="form" action="" method="get">
                <h2>CONTACTO</h2>
                <fieldset>
                    <label class="form-label" for="form4Example1">Nombre y Apellido: </label>
                    <input type="text" id="form4Example1" class="form-control" placeholder="Ingrese su Nombre y Apellido"/>
                </fieldset>
                <fieldset>
                    <label class="form-label" for="form4Example2">Teléfono: </label>
                    <input type="tel" id="form4Example2" class="form-control" placeholder="Ingrese su Teléfono"/>
                </fieldset>
                <fieldset>
                    <h5>¿Que mascota tienes?</h5>
                    <select id="mascota">
                        <option value="info" selected>Selecciona tu mascota</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                        <option value="hamster">Hámsters</option>
                        <option value="otro" >Otro...</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Comentarios</legend>
                    <textarea name="comentarios" id="comentarios" maxlength="500"></textarea>
                </fieldset>

                <fieldset class="button-send d-flex justify-content-center">
                    <input type="submit" id="submit-btn" onclick="mialerta();" value="ENVIAR"/>
                </fieldset>
            </form>
            <script>
                function mialerta() {  
                    alert("Tus datos se enviaron con Exito! A la brevedad nos podremos en Contacto!");
                } 
            </script>
        </div>
        <div class="ubication d-flex flex-column align-items-center">
          <h2>UBICACIÓN</h2>
          <p>Nos encontramos en Río de Janeiro 300 (Caballito)📍</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3283.698031802572!2d-58.4304098!3d-34.6117966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca429815227f%3A0x5d302e497c2cda87!2sR%C3%ADo%20de%20Janeiro%20300%2C%20C1405CCB%20CABA!5e0!3m2!1ses-419!2sar!4v1660106463368!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
      `
      document.querySelector("#form-ubication").innerHTML=templateHTML
}
contactForm()

let form = document.getElementById("form");

form.addEventListener ("submit", (e)  => infoSend(e));

function infoSend(send){
      send.preventDefault();
      Swal.fire(
            '¡Listo! Recibimos tu consulta ',
            'Nos pondremos en contacto a la brevedad',
            'success'
          )
}
function saludar() {
   let salida = document.getElementById("salida_boton");
   salida.innerText = "Hola desde la función saludar()";
}

let otro_boton = document.getElementById("otro_boton");
otro_boton.addEventListener("click", 
   function() {
      let salida = document.getElementById("salida_otro");
      salida.innerText = "Otro saludo 😎";
   }
);

otro_boton.addEventListener("mouseenter", 
   function() {
      this.innerText = "😎😎😎";
   }
);

otro_boton.addEventListener("mouseleave", 
   function() {
      this.innerText = "😢😢😢";
   }
);

let nombre = document.getElementById("nombre");
let salida_teclado = document.getElementById("salida_teclado");

nombre.addEventListener("keydown",
   function(event) {
      salida_teclado.innerHTML = `Se presionó <kbd>${event.key}</kbd>`;
   }
);

nombre.addEventListener("keyup",
   function(event) {
      salida_teclado.innerHTML = `Se liberó <kbd>${event.key}</kbd>`;
   }
);

let miForm = document.getElementById("miForm");

miForm.addEventListener("submit",
   function(event) {
      event.preventDefault();
      //alert("Se inentó procesar el formulario");
      let aTxt = document.getElementById("a");
      let bTxt = document.getElementById("b");
      //console.log(`Valores ingresados: ${aTxt.value} y ${bTxt.value}`);
      let salida = document.getElementById("salida_suma");
      salida.innerText = parseInt(aTxt.value) + parseInt(bTxt.value); 
   }
);


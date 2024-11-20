let contenidoNombre = document.getElementById("pais-nombre");
let contenidoCapital = document.getElementById("pais-capital");
let contenidoHabitantes = document.getElementById("pais-habitantes");
let contenidoIdioma = document.getElementById("pais-idioma");
let contenidoImagen = document.getElementById("pais-imagen");
let cajaBusqueda = document.getElementById("caja-busqueda");
let botonBusqueda = document.getElementById("boton-busqueda");
let nombre = document.getElementById("nombre");
let capital = document.getElementById("capital");
let habitantes = document.getElementById("habitantes");
let idiomas = document.getElementById("idiomas");
let modal = document.getElementById("modal");
let contenidoModal = document.getElementById("contenido-modal");

function fetchPais(paisBuscar) {
   let paisAPI = "https://restcountries.com/v3.1/name/" + paisBuscar;
   fetch(paisAPI)
      .then((response) => response.json())
      .then((pais) => {
         limpiarElementos();
         contenidoNombre.innerText = pais[0].translations.spa.common;
         contenidoCapital.innerText = pais[0].capital[0];
         contenidoHabitantes.innerText = pais[0].population;

         let idiomas = Object.values(pais[0].languages);
         for (let i = 0; i < idiomas.length; i++) {
            const idioma_arr = idiomas[i];
            let item = document.createElement("li");
            item.innerText = idioma_arr;
            contenidoIdioma.appendChild(item);
         }

         contenidoImagen.setAttribute("src", pais[0].flags.png);
         contenidoImagen.setAttribute("alt", pais[0].flags.alt);
      })
      .catch((error) => globalThis.alert("Error al buscar el país: " + error));
}

function fetchNombrePais(paisBuscar) {
   let paisAPI = "https://restcountries.com/v3.1/name/" + paisBuscar;
   fetch(paisAPI)
      .then((response) => response.json())
      .then((pais) => {
         buscarPais();
         cerrarModal();

         let t1 = document.createElement("h3");
         let t2 = document.createElement("h3");
         let t3 = document.createElement("h3");
         let t4 = document.createElement("h3");
         let p1 = document.createElement("p");
         let p2 = document.createElement("p");
         let l1 = document.createElement("ul");
         let l2 = document.createElement("ul");

         contenidoModal.appendChild(t1);
         contenidoModal.appendChild(p1);
         contenidoModal.appendChild(t2);
         contenidoModal.appendChild(p2);
         contenidoModal.appendChild(t3);
         contenidoModal.appendChild(l1);
         contenidoModal.appendChild(t4);
         contenidoModal.appendChild(l2);

         t1.innerText = "Nombre";
         p1.innerText = pais[0].translations.spa.common;
         t2.innerText = "Nombre oficial";
         p2.innerText = pais[0].translations.spa.official;
         t3.innerText = "Nombres nativos";

         let nombresNativos = pais[0].name.nativeName;
         for (let i in nombresNativos) {
            let li = document.createElement("li");
            li.innerText = nombresNativos[i].official;
            l1.appendChild(li);
         }

         t4.innerText = "Nombres regionales";
         for (let i in nombresNativos) {
            let li = document.createElement("li");
            li.innerText = nombresNativos[i].common;
            l2.appendChild(li);
         }
      })
      .catch((error) => globalThis.alert("Error al buscar el país: " + error));
}

function fetchCapitalPais(paisBuscar) {
   let paisAPI = "https://restcountries.com/v3.1/name/" + paisBuscar;
   fetch(paisAPI)
      .then((response) => response.json())
      .then((pais) => {
         buscarPais();
         cerrarModal();

         let t1 = document.createElement("h3");
         let t2 = document.createElement("h3");
         let t3 = document.createElement("h3");
         let t4 = document.createElement("h3");
         let t5 = document.createElement("h3");
         let p1 = document.createElement("p");
         let p2 = document.createElement("p");
         let p3 = document.createElement("p");
         let p4 = document.createElement("p");
         let l1 = document.createElement("ul");

         contenidoModal.appendChild(t1);
         contenidoModal.appendChild(p1);
         contenidoModal.appendChild(t5);
         contenidoModal.appendChild(l1);
         contenidoModal.appendChild(t2);
         contenidoModal.appendChild(p2);
         contenidoModal.appendChild(t3);
         contenidoModal.appendChild(p3);
         contenidoModal.appendChild(t4);
         contenidoModal.appendChild(p4);

         t1.innerText = "Capital";
         p1.innerText = pais[0].capital;
         t2.innerText = "Región";
         p2.innerText = pais[0].region;
         t3.innerText = "Subregión";
         p3.innerText = pais[0].subregion;
         t4.innerText = "Independiente";
         if (pais[0].independent) {
            p4.innerText = "Sí";
         } else {
            p4.innerText = "No";
         }
         t5.innerText = "Nombre de dominio";
         for (let i in pais[0].tld) {
            let li = document.createElement("li");
            li.innerText = pais[0].tld[i];
            l1.appendChild(li);
         }
      })
      .catch((error) => globalThis.alert("Error al buscar el país: " + error));
}

function fetchHabitantesPais(paisBuscar) {
   let paisAPI = "https://restcountries.com/v3.1/name/" + paisBuscar;
   fetch(paisAPI)
      .then((response) => response.json())
      .then((pais) => {
         buscarPais();         
         cerrarModal();

         let t1 = document.createElement("h3");
         let t2 = document.createElement("h3");
         let t3 = document.createElement("h3");
         let p1 = document.createElement("p");
         let p2 = document.createElement("p");
         let p3 = document.createElement("p");

         contenidoModal.appendChild(t1);
         contenidoModal.appendChild(p1);
         contenidoModal.appendChild(t2);
         contenidoModal.appendChild(p2);
         contenidoModal.appendChild(t3);
         contenidoModal.appendChild(p3);

         t1.innerText = "Habitantes";
         p1.innerText = pais[0].population;
         t2.innerText = "Superficie";
         p2.innerText = pais[0].translations.spa.common + " tiene un área de " + pais[0].area + " m²";         
         t3.innerText = "Ubicación geográfica";
         p3.innerText = pais[0].latlng[0] + "°N, " + pais[0].latlng[1] + "°W";
      })
      .catch((error) => globalThis.alert("Error al buscar el país: " + error));
}

function fetchIdiomasPais(paisBuscar) {
   let paisAPI = "https://restcountries.com/v3.1/name/" + paisBuscar;
   fetch(paisAPI)
      .then((response) => response.json())
      .then((pais) => {
         buscarPais();         
         cerrarModal();

         let t1 = document.createElement("h3");
         let t2 = document.createElement("h3");
         let t3 = document.createElement("h3");
         let t4 = document.createElement("h3");
         let p1 = document.createElement("p");
         let p2 = document.createElement("p");
         let l1 = document.createElement("ul");
         let l2 = document.createElement("ul");

         contenidoModal.appendChild(t1);
         contenidoModal.appendChild(p1);
         contenidoModal.appendChild(t2);
         contenidoModal.appendChild(l1);
         contenidoModal.appendChild(t4);
         contenidoModal.appendChild(p2);
         contenidoModal.appendChild(t3);
         contenidoModal.appendChild(l2);

         t1.innerText = "Idioma principal";
         p1.innerText = Object.values(pais[0].languages)[0];
         t2.innerText = "Idiomas oficiales";
         for (let i in Object.values(pais[0].languages)) {
            let li = document.createElement("li");
            li.innerText = Object.values(pais[0].languages)[i];
            l1.appendChild(li);
         }
         t3.innerText = "Zonas horarias";
         for (let i in Object.values(pais[0].timezones)) {
            let li = document.createElement("li");
            li.innerText = Object.values(pais[0].timezones)[i];
            l2.appendChild(li);
         }
         t4.innerText = "Moneda";
         p2.innerText = Object.values(pais[0].currencies)[0].name + " (" + Object.values(pais[0].currencies)[0].symbol + ")";

      })
      .catch((error) => globalThis.alert("Error al buscar el país: " + error));
}

function fetchImagenPais(paisBuscar) {
   let paisAPI = "https://restcountries.com/v3.1/name/" + paisBuscar;
   fetch(paisAPI)
      .then((response) => response.json())
      .then((pais) => {
         buscarPais();         
         cerrarModal();

         let i1 = document.createElement("img");
         contenidoModal.appendChild(i1);
         i1.setAttribute("src", pais[0].flags.svg);
         i1.setAttribute("alt", pais[0].flags.alt);
      })
      .catch((error) => globalThis.alert("Error al buscar el país: " + error));
}  

function limpiarElementos() {
   contenidoNombre.innerText = "";
   contenidoCapital.innerText = "";
   contenidoIdioma.innerHTML = "";
   contenidoHabitantes.innerText = "";
   contenidoImagen.setAttribute("src", "");
   contenidoImagen.setAttribute("alt", "");
}

function limpiarElementosModal() {
   contenidoModal.innerHTML = '';
}

function cerrarModal() {
   contenidoModal.innerHTML = '<i id="cerrar-modal" class="ph ph-x"></i>';
   let cierreModal = document.getElementById("cerrar-modal");
   cierreModal.addEventListener("click", function() {
      ocultarModal();
   })
}

function ocultarModal() {
   modal.style.display = "none";
   limpiarElementosModal();
}

function buscarPais() {
   var busqueda = cajaBusqueda.value;
   fetchPais(busqueda);
}

botonBusqueda.addEventListener("click", buscarPais);
cajaBusqueda.addEventListener("keypress", function (event) {
   if (event.key === "Enter") {
      buscarPais();
   }
});

nombre.onclick = function () {
   fetchNombrePais(cajaBusqueda.value);
   modal.style.display = "block";
}

capital.onclick = function () {
   fetchCapitalPais(cajaBusqueda.value);
   modal.style.display = "block";
}

habitantes.onclick = function () {
   fetchHabitantesPais(cajaBusqueda.value);
   modal.style.display = "block";
}

idiomas.onclick = function () {
   fetchIdiomasPais(cajaBusqueda.value);
   modal.style.display = "block";
}

contenidoImagen.onclick = function () {
   fetchImagenPais(cajaBusqueda.value);
   modal.style.display = "block";
}

globalThis.onkeydown = function(event) {
   if (event.key == "Escape") {
      ocultarModal();
   }
}

globalThis.onclick = function(event) {
   if (event.target == modal) {
      ocultarModal();
   }
}
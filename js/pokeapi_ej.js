let nombre = document.getElementById("pokemon-name");
let listaTipos = document.getElementById("pokemon-types");
let estadisticas = document.getElementById("pokemon-stats");
let imagen = document.getElementById("pokemon-image");
let chillido = document.getElementById("pokemon-cries");
let habilidades = document.getElementById("pokemon-abilities");
let dds = document.querySelectorAll(".texto");
let botonBusqueda = document.getElementById("boton-busqueda");
let cajaBusqueda = document.getElementById("caja-busqueda");


function fetchPokemon(pokemonBuscar) {
   let pokeapi = "https://pokeapi.co/api/v2/pokemon/" + pokemonBuscar;
   fetch(pokeapi)
   .then((response) => response.json())
   .then((pokemon) => {
      limpiarElementos();
      // Reemplazo del texto vacío del <dt> por texto con el nombre del pokémon
      nombre.innerText = pokemon.name;

      // Creación de una <ul> dentro de la <dd> "pokemon-types"
      let lista = document.createElement("ul");
      // Adición de la <ul> a la <dd> "pokemon-types"
      listaTipos.appendChild(lista);
      // Ciclo para agregar cada tipo del pokémon a la <ul>
      for (let i = 0; i < pokemon.types.length; i++) {
         // Asignación del arreglo de tipos del pokémon a la variable "tipo"
         const tipo = pokemon.types[i];
         // Asignación de la acción de crear un <li> a la constante "item"
         let item = document.createElement("li");
         // Reemplazo del texto vacío del <li> por el nombre del tipo dentro del arreglo de tipos del pokémon
         item.innerText = tipo.type.name;
         // Agregación del <li> con el nombre del tipo dentro del arreglo de tipos del pokémon a la <ul> dentro de la <dd> "pokemon-types"
         lista.appendChild(item);
      }

      // Creación de una <ul> dentro de la <dd> "pokemon-stats"
      let lista2 = document.createElement("ul");
      // Adición de la <ul> a la <dd> "pokemon-stats"
      estadisticas.appendChild(lista2);
      // Ciclo para agregar cada estadística del pokémon a la <ul>
      for (let i = 0; i < pokemon.stats.length; i++) {
         // Asignación del arreglo de estadísticas del pokémon a la constante "estadistica"
         const estadistica = pokemon.stats[i];
         // Asignación de la acción de crear un <li> a la variable "item"
         let item = document.createElement("li");
         // Reemplazo del texto vacío del <li> por el nombre y valor de la estadística dentro del arreglo de estadísticas del pokémon
         item.innerText = estadistica.stat.name + ": " + estadistica.base_stat;
         // Agregación del <li> con el nombre y valor de la estadística dentro del arreglo de estadísticas del pokémon a la <ul> dentro de la <dd> "pokemon-stats"
         lista2.appendChild(item);
      }
      
      // Asignación del valor de la propiedad "front_default" del objeto "sprites" del pokémon a la variable "imagen"
      imagen.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
      imagen.setAttribute("width", "200");
      imagen.setAttribute("height", "200");
      
      // Creación de un elemento <audio> dentro del elemento <dd> "pokemon-cries"
      let reproductor = document.createElement("audio"); 
      let reproductor2 = document.createElement("audio");
      // Agregación del elemento <audio> al elemento <dd> "pokemon-cries"
      chillido.appendChild(reproductor); 
      chillido.appendChild(reproductor2);
      // Asignación del valor de la propiedad "latest" del objeto "cries" del pokémon a la variable "src" del elemento <audio>
      reproductor.setAttribute("src", pokemon.cries.latest);
      reproductor2.setAttribute("src", pokemon.cries.legacy); 
      // Asignación del valor "" a la variable "controls" del elemento <audio>
      reproductor.setAttribute("controls", ""); 
      reproductor2.setAttribute("controls", "");

      let lista3 = document.createElement("ul");
      habilidades.appendChild(lista3);
      for (let i = 0; i < pokemon.abilities.length; i++) {
         const habilidad = pokemon.abilities[i];
         let item = document.createElement("li");
         item.innerText = habilidad.ability.name;
         lista3.appendChild(item);
      }

      dds.forEach(dd => {
         // Reemplazo de todos los caracteres '-' en el contenido del texto
         dd.innerText = dd.innerText.replaceAll('-', ' ');
      });
   })
   .catch((error) => errorBusqueda(error));
}

function limpiarElementos() {
   nombre.innerText = "";
   listaTipos.innerHTML = "";
   estadisticas.innerHTML = "";
   imagen.setAttribute("src", "");
   imagen.setAttribute("width", "0");
   imagen.setAttribute("height", "0");
   chillido.innerHTML = "";
   habilidades.innerHTML = "";
}

function buscarPokemon() {
   var busqueda = cajaBusqueda.value;
   fetchPokemon(busqueda);
}

function errorBusqueda(tipoDeError) {
   globalThis.alert("Pokémon no encontrado: " + tipoDeError);
   limpiarElementos();
}

botonBusqueda.addEventListener("click", buscarPokemon);
cajaBusqueda.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        buscarPokemon();
    }
}); 
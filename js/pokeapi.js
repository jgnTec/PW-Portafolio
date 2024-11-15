let nombreTxt = document.getElementById("pokemon-name");
let typesList = document.getElementById("pokemon-types");
let stats = document.getElementById("pokemon-stats");
let image = document.getElementById("pokemon-image");

fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
   .then((response) => response.json())
   .then((pokemon) => {
      //console.log(pokemon.name);
      nombreTxt.innerText = pokemon.name
      //console.log(pokemon.types);
      let lista = document.createElement("ul");
      typesList.appendChild(lista);
      for (let i = 0; i < pokemon.types.length; i++) {
         const tipo = pokemon.types[i];
         let item = document.createElement("li");
         item.innerText = tipo.type.name;
         lista.appendChild(item);
      }
      //console.log(pokemon.stats);
      let lista2 = document.createElement("ul");
      stats.appendChild(lista2);
      for (let i = 0; i < pokemon.stats.length; i++) {
         const estadistica = pokemon.stats[i];
         let item = document.createElement("li");
         item.innerText = estadistica.base_stat;
         lista2.appendChild(item);
      }
      //console.log(pokemon.sprites.front_default);
      image.setAttribute("src", pokemon.sprites.front_default)
   })
   .catch((error) => console.log(error));
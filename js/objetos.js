/*let nombre = prompt("¿Cómo te llamas?");

if (nombre){
   alert(`Hola ${nombre}`);
} else {
   alert("Anónimo");
}
*/

let lista = document.getElementById("log");

function registro(texto){
   let item = document.createElement("li");
   item.innerText = texto;
   return item;
}

lista.appendChild(registro("DOM cargado 📦"));

let timer = setTimeout(() => {
   lista.appendChild(registro("Timer ⏰"));
}, 3000);

let repetidor = setInterval(() => {
   lista.appendChild(registro("Hijito 👶🏻"));
}, 1000);

let activaTimerBtn = document.getElementById("activaTimer");
let pararRepetidorBtn = document.getElementById("pararRepetidor");

activaTimerBtn.addEventListener("click", 
   function() {
      lista.appendChild(registro("Activando timer ⏰"));
      clearTimeout(timer);
      timer.setTimeout(timer, 3000);
   }
);

pararRepetidorBtn.addEventListener("click", 
   function() {
      lista.appendChild(registro("Parando repetidor 🏁"));
      clearInterval(repetidor);
   }
);

console.table(location);
let secure = document.getElementById("secure");
if (location.protocol.valueOf == 'https'){
   secure.innerText = "Seguro"
} else {
   secure.innerText = "No seguro"
}

console.table(navigator);

let fin_semestre = new Date("2024-12-06 12:00:00");
let inicio_2025 = new Date(2025, 0, 1, 0, 0, 0); 

console.log(fin_semestre);
console.log(inicio_2025);
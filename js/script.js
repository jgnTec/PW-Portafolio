let resta = function (a,b) {
   return a - b;
};

console.log(resta(5, 3));
//
let objeto = {
   nombre: "Jesus",
   saludar: function () {
      setTimeout(() => {
         console.log(`Hola, soy ${this.nombre}`);
      }, 1000);
   },
};

objeto.saludar();
//
let frutas = ["🍎","🍐","🍇","🍓"];

frutas.push("🥭");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas);

let frutas2 = frutas.slice(1,3);
console.log(frutas2.join(" - "));
console.log(frutas.length);
console.log(frutas2.indexOf("🍇"));

let frutas3 = frutas.map((fruta) => fruta + "🍉");
console.table(frutas3);
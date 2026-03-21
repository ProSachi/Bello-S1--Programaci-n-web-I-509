/* // Un arreglo de strings
let playlist = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California'];
// Un arreglo de números
let calificaciones = [10, 9, 8, 7, 10];
// Un arreglo mixto
let datosMixtos = ['Ana', 28, true, null, {},
["calle", "Avenida"]];
 console.log(calificaciones);
console.log(calificaciones[0]); 
for (let index = 0; index < calificaciones.length; index++) {
    console.log(calificaciones[index]);
}

calificaciones.sort();
for (let index = 0; index < calificaciones.length; index++) {
    console.log(calificaciones[index]);
}
 */

/* let frutas = ['manzana', 'banana'];
frutas.push('naranja'); // Agrega uno o más elementos al final del arreglo.
console.log(frutas); // Resultado: ['manzana', 'banana', 'naranja']

let colores = ['rojo', 'verde', 'azul'];
colores.pop(); // Elimina el último elemento del arreglo.
console.log(colores); // Resultado: ['rojo', 'verde']

let numeros = [3, 4, 5];
numeros.unshift(1, 2); //Agrega uno o más elementos al principio del arreglo.
console.log(numeros); // Resultado: [1, 2, 3, 4, 5]

let animales = ['perro', 'gato', 'pájaro'];
animales.shift(); //Elimina el primer elemento del arreglo
console.log(animales); // Resultado: ['gato', 'pájaro']
 */

/* const numeros = [1, 2, 3];
 numeros.forEach();
 

const imprimir = (numero, indice) => {
    console.log(`El elemento ${numero} está en el índice ${indice}`);
}


imprimir(1, 0)
 */

const numeros = [1, 2, 3];

const dobles = numeros.map((otro) => otro * 2); 

console.log(dobles);

const otrosNumeros=[1, 2, 3, 4, 5, 6];
const pares = otrosNumeros.filter(n => n % 2 !== 0);

console.log(pares);


let edades = [15, 20, 30, 12];
let adultosEdadMayor = edades.filter(edad => {
        edad >= 18}
    );
console.log(adultosEdadMayor);

// adultos = [20, 30];

let edadRestada = adultosEdadMayor.map(edad => edad -1); 
console.log(edadRestada);

//Crear un arreglo con valores de billetes o monedas colombianas
//Filtrar todo lo que sea menor o igual a 5000 va para una alcancia.
//A los billetes restantes, sumarle 200 pesos.

let dinero = [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];

let alcancia = dinero.filter(cantidad => cantidad <= 5000);
let dineroAlto = dinero.filter(cantidad => cantidad > 5000);
let dineroInteres = dineroAlto.map(alto => alto + 200);

console.log(alcancia);
console.log(dineroAlto);
console.log(dineroInteres);
/* const numeros = [1, 2, 3];

const dobles = numeros.map((numero) => numero * 2);


const palabras = ["hola", "adios", "No", "si"]
const palabrasConcatenadas = palabras.map((palabra) => palabra + "otra");

palabrasConcatenadas.forEach(palabra => {
    console.log(palabra)
}); */

/* const edades = [12, 18, 25, 34, 41, 60];

const edadesAumentada = edades.map(edad => edad + 1);

console.log(edadesAumentada) */

/* const precios = [1990, 2500, 9999, 15000, 34990];

const precioMiles = precios.map(precio => precio/1000);

console.log(precioMiles) */

/* const temperaturas = [-2, 0, 7, 15, 28, 33];
const temperaturaFa = temperaturas.map(temperatura => (temperatura * 1.8) + 32);
console.log(temperaturaFa); */

/* const nombres = ["Ana", "Luis", "Camila", "Jorge", "Sofía"];

const nombresMayus = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayus);

Con palabras, crea un array con la longitud de cada palabra. 

const palabras = ["hola", "mundo", "javascript", "map", "práctica"];


const palabralongitud = palabras.map(longitud => longitud.length);

console.log(palabralongitud);
 */

/* En edades, filtra solo los mayores o iguales a 18. */
const edades = [12, 17, 18, 21, 15, 30, 9, 40];

const edadesMayores = edades.filter(edad => edad >= 18)

console.log(edadesMayores)


const [paco, pepe] = edades
const [,,tercero, cuarto] = edades



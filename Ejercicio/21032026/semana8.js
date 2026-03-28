/* const usuario5 = {
    id: 1,
    nombre: "Ana",
    rol: "Admin"
};


function saludarUsuario({ nombre, rol }) {
    console.log(`Hola ${nombre}, tienes permisos de ${rol}.`);
}

saludarUsuario(usuario5); // "Hola Ana, tienes permisos de Admin."
 */

const numerosSumar = {
    pep: 1,
    alirio: 2,
    maria: 3
}

function sumar({ pep, alirio }) {
    return pep + alirio
}

let resultado = sumar(numerosSumar)

console.log(resultado)






//En productos, filtra los productos con stock mayor a 0.

const productos = [
    { nombre: "Mouse", precio: 45000, stock: 8, categoria: "tecnologia" },
    { nombre: "Teclado", precio: 120000, stock: 0, categoria: "tecnologia" },
    { nombre: "Cuaderno", precio: 8000, stock: 20, categoria: "papeleria" },
    { nombre: "Lapiz", precio: 2000, stock: 100, categoria: "papeleria" },
    { nombre: "Monitor", precio: 800000, stock: 5, categoria: "tecnologia" }
];

const conStock = productos.filter(producto => producto.stock > 0);

for (const key in conStock) {
    if (!Object.hasOwn(conStock, key)) continue;
    const element = conStock[key];
    console.log(element)
}
const baseDeDatos = [
    { id: 1, titulo: "JavaScript Ninja", precio: 40, stock: true },
    { id: 2, titulo: "React Avanzado", precio: 60, stock: false },
    { id: 3, titulo: "CSS Master", precio: 30, stock: true },
    { id: 4, titulo: "Mouse gamer", precio: 85000, stock: true },
    { id: 5, titulo: "Teclado mecanico", precio: 150000, stock: false },
    { id: 6, titulo: "Audifonos", precio: 120000, stock: true },
    { id: 4, titulo: "Monitor 24 pulgadas", precio: 780000, stock: true },
    { id: 5, titulo: "Webcam HD", precio: 95000, stock: false }
];

const librosDisponibles = baseDeDatos.filter(libro => libro.stock === true);

console.log(librosDisponibles)
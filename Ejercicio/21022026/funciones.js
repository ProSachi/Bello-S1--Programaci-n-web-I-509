function calcularOperaciones(a, b) {
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;

    return {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion
    };
}

let resultados = calcularOperaciones(10, 5);
console.log("Suma:", resultados.suma);               // 15
console.log("Resta:", resultados.resta);             // 5
console.log("Multiplicación:", resultados.multiplicacion);
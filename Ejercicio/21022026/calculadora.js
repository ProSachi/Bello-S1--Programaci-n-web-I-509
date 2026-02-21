import { resta } from "./resta.js";

console.log("Bienvenido a la calculadora: ");
let continuar = true
while (continuar) {
    console.log("Que operación deseas realizar?");
    console.log("1- Para sumar?");
    console.log("2 - Para restar?");
    console.log("3 - Para multiplicar");
    console.log("4 - Para dividir");
    console.log("5 - Para salir");
    let opcion = parseInt(prompt("¿Qué operación quieres realizar?"));
    
    if (opcion!=5) {
        let num = parseInt(prompt("Dame un numero"));
        let num2 = parseInt(prompt("Dame otro numero"));
    }

    switch (opcion) {
        case 1:
            console.log(`La suma de ${num} y ${num2} es igual a ${(num + num2)}`);
            break;
        case 2:
            console.log(resta(num, num2));
            break;
        case 3:
            console.log(multiplicar(num, num2));
            break;
        case 4:
            console.log(dividir(num, num2));
            break;
        case 5:
            continuar = false
            break;
        default:
            break;
    }
}



function multiplicar(num, num2) {
    return num * num2
}

function dividir(num, num2) {
    if (num2 === 0) {
        return "El segundo numero no puede ser cero"
    }
    return num / num2
}




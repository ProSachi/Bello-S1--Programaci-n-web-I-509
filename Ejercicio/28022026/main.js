/* console.log(sumar(10, 5));


function sumar(a, b) {
    return a + b;
}




const sumar2 = function (a, b) {
    return a + b;
}

console.log(sumar2(4, 7));

miBoton.addEventListener("click", (a, b)=>{
    return a + b
});


function saludar() { ... } 

const saludar = function() { ... }

const saludar = () => { ... } 
 */


function sumar(a, b) {
    return a + b;
}
/* //Guardala en una constante, convertirla en anonima
const sumar= function(a, b){
    return a + b;
}

//Quitar la palabra function.
const sumar = (a, b){
    return a + b
}

//Añadir la "flecha" (=>) entre los parámetros y el cuerpo.
const sumar = (a, b)=>{
    return a + b
}
 */
const sumar2 = a => {
    return a
}

const sumar3 = () => {
    return "Hola"
}


const sumar5 = a => a

const sumar6 = (a, b) => a + b

function restar(a, b) {
    return a + b
}
/* //Guardala en una constante, convertirla en anonima
const sumar= function(a, b){
    return a + b;
}

//Quitar la palabra function.
const sumar = (a, b){
    return a + b
}

//Añadir la "flecha" (=>) entre los parámetros y el cuerpo.
const sumar = (a, b)=>{
    return a + b
} */

/* const restar2 = (a, b) => {
    console.log(object);
    console.log(object);
    console.log(object);
    console.log(object);
} */

function dividir(a, b) {
    if (b === 0) {
        return "Error: no se puede dividir por cero";
    }
    return a / b;
};

const dividir2 = function (a, b) {
    if (b === 0) {
        return "Error: no se puede dividir por cero";
    }
    return a / b;
};

const dividir3 =  (a, b) => {
    if (b === 0) {
        return "Error: no se puede dividir por cero";
    }
    return a / b;
};

const dividir4 =  (a, b) => b===0 ? "Error: no se puede dividir por cero" : (a/b);


function ejecutarCalculo(num1, num2, funcionOperacion) {
  
  // 1. Recibe los números y la FUNCIÓN.
  console.log("Ejecutando un cálculo...");
  
  // 2. ¡Llama a la función que recibió como argumento!
  //    y le pasa los números.
  const resultado = funcionOperacion(num1, num2);
  
  // 3. Retorna el resultado.
  return resultado;
}


ejecutarCalculo(1,2,dividir4)

dividir4(1, 2)

const usuario = {
    nombre: 'Carlos Rodriguez',
    edad: 32,
    esEstudiante: false,
    cursos: ['HTML', 'CSS', 'JavaScript'],
    direccion: {
        calle: 'Av. Siempre Viva',
        numero: 123
    },
    saludar: function() {
        console.log('¡Hola mundo!');
    }
};

/* console.log(usuario.nombre)
console.log(usuario["nombre"])
 */
const {nombre, edad } = usuario

console.log(nombre)
console.log(edad)


/* 
const chuc = {
  categories: [],
  created_at: "2020-01-05 13:42:25.352697",
  icon_url: "https://api.chucknorris.io/img/avatar/chuck-norris.png",
  id: "spA5T6EuQBWk5tZT2X26UA",
  updated_at: "2020-01-05 13:42:25.352697",
  url: "https://api.chucknorris.io/jokes/spA5T6EuQBWk5tZT2X26UA",
  value: "Chuck Norris once screamed \"bloody murder\" in sign language for the hearing impaired."
}

function imprimir({value, url}){
console.log("El chiste: " + value + "esta en la url: "+ url)
}

imprimir(chuc)
 */

/* console.log("Impresion")
console.log(usuario["cursos"])
 */

/* 
console.log(usuario.nombre)

usuario.nombre = "Maria"


console.log(usuario["nombre"])
 */



/* console.log(nombre)
console.log(edad)
console.log(esEstudiante) */

/* const {nombre, edad} = usuario

console.log(nombre)
console.log(edad)
 */

/* 

const {calle, numero } = direccion







const {nombre, edad, esEstudiante} = usuario


function saludarUsuario({ nombre, edad }) {
    console.log(`Hola ${nombre}, tienes permisos de ${edad}.`);
}

saludarUsuario(usuario);
 */

/* function sumar(a, b){
    return a + b;
}
sumar(3, 6) */
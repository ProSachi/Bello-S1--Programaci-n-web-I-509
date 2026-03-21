const usuario = {
    nombre: 'Carlos Rodriguez',
    edad: 32,
    esEstudiante: false,
    cursos: ['HTML', 'CSS', 'JavaScript'],
    direccion: {
        calle: 'Av. Siempre Viva',
        numero: 123
    },
    saludar: function () {
        console.log('¡Hola mundo!');
    }
};

/* console.log(usuario.nombre);
console.log(usuario['nombre']);
usuario.correo = "el correo";
usuario["Gusto"] = "Musica";


console.log(usuario["correo"]);
console.log(usuario["Gusto"]);

usuario["Gusto"] = "Nadar";

console.log(usuario["Gusto"]);

for (let key in usuario) {
    console.log(` ${key} es ${usuario[key]}`);
}
 */


// Opción 1: desestructurar dentro del cuerpo de la función
function mostrarUsuario(obj) {
    const { nombre, edad, direccion } = obj;
    console.log(nombre, edad, direccion);
}
mostrarUsuario(usuario);

// Opción 2: desestructurar directamente en los parámetros
function mostrarNombre({ nombre, edad, direccion }) {
    console.log(nombre, edad, direccion);
}
mostrarNombre(usuario);


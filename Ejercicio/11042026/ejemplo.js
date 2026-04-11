const usuarios = [
    { nombre: "Ada Lovelace", profesion: "Programadora" },
    { nombre: "Alan Turing", profesion: "Programador" },
    { nombre: "Grace Hopper", profesion: "Programadora" },
    { nombre: "Margaret Hamilton", profesion: "Ingeniera" },
    { nombre: "Katherine Johnson", profesion: "Matematica" },
    { nombre: "Linus Torvalds", profesion: "Programador" },
    { nombre: "Tim Berners-Lee", profesion: "Ingeniero" },
    { nombre: "Dennis Ritchie", profesion: "Programador" },
    { nombre: "Guido van Rossum", profesion: "Programador" },
    { nombre: "Radia Perlman", profesion: "Ingeniera" }
];


const contenedor = document.querySelector('#contenedor-usuarios');

/* //Piezas
const articulo = document.createElement('article');
const titulo = document.createElement('h2');
const descripcion = document.createElement('p');

//Contenido
articulo.classList.add('user-card');

titulo.textContent = usuario.nombre;
descripcion.textContent = usuario.profesion;

//Ensamblar las piezas
articulo.appendChild(titulo);
articulo.appendChild(descripcion);
contenedor.appendChild(articulo);
 */


const lista = document.querySelector('#menu-categorias');
const usuariosHTML = usuarios.map(usuario =>
    `<li>${usuario.nombre}<br>
    (Profesión: ${usuario.profesion})</li>`)
    .join('');

lista.innerHTML = usuariosHTML;









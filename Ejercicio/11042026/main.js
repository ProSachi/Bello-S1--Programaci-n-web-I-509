/* const inputNombre =  document.getElementById('name');
const labels = document.getElementsByClassName('paralabel');
 */

/*  const labels = document.querySelector('.paralabel');
 const labels2 = document.querySelector('#formulario :nth-child(4)');


console.log(labels);
console.log(labels2);

labels.textContent='Nombre Completo';
labels2.textContent='Correo Electronico';

const selecto = document.querySelector('#Noticias :nth-child(2)');

selecto.innerHTML= '<h2>¡Nuevo Título!</h2>';
console.log(selecto);
 */

const inputNombre = document.getElementById('name');
console.log(inputNombre);

inputNombre.setAttribute('placeholder','el nombre');

const formulario = document.getElementById('formulario');
formulario.setAttribute('class','formulario')

formulario.classList.toggle('formulariofeo'); 

 const labels = document.querySelector('.paralabel');
 const labels2 = document.querySelector('#formulario :nth-child(4)');

 const hijo = document.createElement('p');
 hijo.textContent='Cuarlquier cosa';

 labels.appendChild(hijo);

 const mensaje = document.getElementById('error');
 let condition = 1;
 if (condition) {
     mensaje.textContent='Mensaje de error'
 }

 const nuevoParrafo = document.createElement('p');
 nuevoParrafo.textContent = "Este es un nodo real de DOM";
nuevoParrafo.classList.add('texto-destacado'); //paralabel

const elPadre = document.getElementById('elBody');
console.log(elPadre);
elPadre.prepend(nuevoParrafo);




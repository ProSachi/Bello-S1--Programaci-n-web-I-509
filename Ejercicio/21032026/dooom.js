/* const h1Titulo = document.getElementById("titulo-principal");
console.log(h1Titulo)

h1Titulo.style.color = 'blue'; */

/* const parrafo = document.getElementsByTagName("p");
console.log(parrafo)

for (let i = 0; i < parrafo.length; i++) {
  parrafo[i].style.color = 'red';
} */

/* const dosP = document.getElementsByClassName("parrafo");
console.log(dosP)

for (const element of dosP) {
    element.style.color='blue';
} */

/* const divPadre = document.getElementById("divPadre");
const pHijo = divPadre.getElementsByTagName("p");

for (const element of pHijo) {
    element.style.color='blue';
}

console.log(divPadre);
console.log(pHijo);

 */

/* 
const h1etiqueta = document.querySelector("h1");
console.log(h1etiqueta);


const divPadre = document.querySelector('#divPadre')
console.log(divPadre)

const parrafo = document.querySelector('p')
console.log(parrafo)

const parrafos = document.querySelectorAll('p')
for (const element of parrafos) {
    element.style.color='blue';
}
 */

/* const divpapa = document.querySelectorAll(`div p:nth-child(2)`)
for (const element of divpapa) {
    element.style.color='blue';
    element.textContent='Este es un parrafo nuevo modificado'
} */

const botonModo = document.getElementById('btn-modo');

if (botonModo) {
    botonModo.addEventListener('click', () => {
        document.body.classList.toggle('clase-alternante');

        const modoOscuroActivo = document.body.classList.contains('clase-alternante');
        botonModo.textContent = modoOscuroActivo
            ? 'Cambiar a modo claro'
            : 'Cambiar a modo oscuro';
    });
}


const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputCorreo = document.querySelector('#correo');


console.log(inputNombre);

console.log(formulario);

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // OBLIGATORIO: Va en la primera línea.
    const nombre = inputNombre.value.trim().toUpperCase();
    const apellido = inputApellido.value.trim().toLowerCase();
    const Correo = inputCorreo.value.trim().toLowerCase();
    const spanError = inputNombre.nextElementSibling;

    console.log(nombre);
    console.log(apellido);
    console.log(Correo);


});

// Escuchamos los clics en todo el documento (Delegación)
document.addEventListener('click', (e) => {

    // CASO 1: El usuario hizo clic en cualquier botón de SUMAR
    if (e.target.classList.contains('btn-sumar')) {

        // Traversing: Buscamos al hermano que está JUSTO ANTES del botón '+'
        const spanCantidad = e.target.previousElementSibling;

        // Extraemos el número actual, lo convertimos y sumamos 1
        let cantidadActual = Number(spanCantidad.textContent);
        spanCantidad.textContent = cantidadActual + 1;
    }

    if (nombre.length < 4) {
        // Manipulamos el span usando Traversing
        spanError.textContent = "El nombre debe tener al menos 4 letras.";
        spanError.style.color = "red";
        inputUser.style.borderColor = "red"; // Pintamos el borde del input
    } 
    // CASO 2: El usuario hizo clic en cualquier botón de RESTAR
    if (e.target.classList.contains('btn-restar')) {

        // Traversing: Buscamos al hermano que está JUSTO DESPUÉS del botón '-'
        const spanCantidad = e.target.nextElementSibling;

        let cantidadActual = Number(spanCantidad.textContent);

        // Evitamos que compre "0" o números negativos
        if (cantidadActual > 1) {
            spanCantidad.textContent = cantidadActual - 1;
        }
    }
});


const CLAVECORRECTA = "admin12345"
const USERCORRECTA = "admin"

const inputNombre = document.getElementById('Nombre');
const btnEnviar = document.getElementById('btn-submit');
const inputContrasena = document.querySelector('#password');
const parrafo = document.querySelector('#parrafoMensaje')

/* console.log(inputNombre);
console.log(inputContrasena); */

// elemento.addEventListener('evento', callback);
btnEnviar.addEventListener('click', () => {
    const usuario = inputNombre.value.trim().toLowerCase();
    const contrasena = inputContrasena.value.trim();
    btnEnviar.classList.add('activo');
    let mensaje;
    if (usuario === USERCORRECTA && contrasena === CLAVECORRECTA) {
        mensaje = "Bienvenido al Sistema";
    } else {
        mensaje = "Usuario y/o contraseña invalido";
    }
    parrafo.textContent = mensaje;

});

btnEnviar.addEventListener('click', () => {
    console.log(2 + 6);
});






/* function sumar(){
    return a + b;
}

const sumar = function(){
    return a + b;
}

const sumar = () => {
    console.log(2 + 6);
} */

const tarjeta = document.querySelector('#tarjeta-perfil');
const info = document.querySelector('#info-oculta');

// Cuando el mouse entra al área de la tarjeta
tarjeta.addEventListener('mouseenter', () => {
    // Removemos la clase que lo oculta (ej. display: none en CSS)
    info.classList.remove('oculto');
    tarjeta.style.backgroundColor = "#f0f8ff";
});

// Cuando el mouse sale del área
tarjeta.addEventListener('mouseleave', () => {
    info.classList.add('oculto');
    tarjeta.style.backgroundColor = "white";
});


const areaTexto = document.querySelector('#mensaje');
const visualContador = document.querySelector('#contador');

areaTexto.addEventListener('input', (e) => {
    // También podríamos usar areaTexto.value, pero e.target es más seguro
    const cantidadLetras = e.target.value.length;

    visualContador.textContent = `${cantidadLetras} / 280`;

    if (cantidadLetras > 280) {
        visualContador.style.color = "red";
    } else {
        visualContador.style.color = "black";
    }
});

const inputBuscador = document.querySelector('#buscador');

inputBuscador.addEventListener('keyup', (e) => {
    // 'e' es el objeto con el reporte del suceso
    console.log("Presionaste la tecla: ", e.key);
/*     console.log("El elemento que disparó esto es: ", e.target);
 */});



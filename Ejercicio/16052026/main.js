const botonGuardar = document.querySelector('#btn-guardar')
const botonLimpiarUno = document.querySelector('#btn-limpiar-uno')
const botonLimpiarTodo = document.querySelector('#btn-limpiar-todo')
const botonCargar = document.querySelector('#btn-cargar')
const inputTarea = document.querySelector('#name-tarea')
const inputDesc = document.querySelector('#desc-tarea')

let tareas = [];
const nuevaTarea = {}

// ==========================================
// CREATE & UPDATE (Crear o Actualizar)
// ==========================================
let contador = 1;

botonGuardar.addEventListener('click', () => {
    // 1. Modificamos la RAM
    let tarea = inputTarea.value;
    let descr = inputDesc.value;
    console.log(tarea);
    console.log(descr);
    const nuevaTarea = { id: contador, texto: descr };
    tareas.push(nuevaTarea);
    // 2. Empaquetamos a JSON (Texto)
    const tareasJSON = JSON.stringify(tareas);

    // 3. Guardamos en el disco del navegador
    localStorage.setItem(tarea, tareasJSON);
    contador++;
});

// ==========================================
// READ (Leer al cargar la página)
// ==========================================



botonLimpiarTodo.addEventListener('click', eliminarTareaAll => {
    localStorage.clear();
    console.log("Limpiando todo en silencio");
});

botonLimpiarUno.addEventListener('click', () => {
    localStorage.removeItem('misTareas2');
    console.log("Limpiando uno en silencio");
})
botonCargar.addEventListener('click', () => {
    // 1. Buscamos el texto en el disco
    const datosGuardados = localStorage.getItem('misTareas');

    // 2. Evaluamos: ¿Había algo guardado?
    if (datosGuardados !== null) {
        // 3. Desempaquetamos el texto de vuelta a un Arreglo Real
        tareas = JSON.parse(datosGuardados);
        console.log("Tareas recuperadas:", tareas);
    } else {
        console.log("Es la primera vez que entra, no hay tareas.");
        tareas = [];
    }
})




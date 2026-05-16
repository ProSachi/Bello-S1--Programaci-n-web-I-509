
// SIMULACIÓN DE LA BASE DE DATOS (Arreglo en RAM)
let tareas = [];

// ==========================================
// CREATE & UPDATE (Crear o Actualizar)
// ==========================================
function agregarTarea(nuevaTarea) {
    // 1. Modificamos la RAM
    tareas.push(nuevaTarea);
    
    // 2. Empaquetamos a JSON (Texto)
    const tareasJSON = JSON.stringify(tareas);
    
    // 3. Guardamos en el disco del navegador
    localStorage.setItem('misTareas', tareasJSON);
}

// ==========================================
// READ (Leer al cargar la página)
// ==========================================
function cargarTareas() {
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
}

// PRUEBA DEL CICLO:
cargarTareas(); // Leer
agregarTarea({ id: 1, texto: "Aprender JSON" }); // Escribir

const formulario = document.querySelector('#form-login');
const inputEmail = document.querySelector('#email');
const inputPass = document.querySelector('#password');

formulario.addEventListener('submit', (e) => {
    // 1. Detener el comportamiento por defecto
    e.preventDefault(); 
    
    // 2. Extraer datos (aplicando trim para limpiar espacios)
    const correo = inputEmail.value.trim().toLowerCase();
    const clave = inputPass.value.trim();
    
    // 3. Validar (Lógica de Negocio)
    if (correo === '' || clave === '') {
        alert("Todos los campos son obligatorios.");
        return; // Early return: rompe la función, no ejecuta lo que sigue
    }
    
    if (clave.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres.");
        return;
    }
    
    // 4. Camino Feliz (Si todas las validaciones pasan)
    console.log(`Enviando credenciales de: ${correo}`);
    
    // 5. Limpieza visual
    formulario.reset(); // Vacía todos los inputs del formulario automáticamente
});

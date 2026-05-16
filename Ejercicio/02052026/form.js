const formReg = document.querySelector('#form-registro');
const inputUser = document.querySelector('#username');

formReg.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 1. Navegación: Del input, pasamos al siguiente elemento (el span)
    const spanError = inputUser.nextElementSibling;
    const usuario = inputUser.value.trim();
    
    if (usuario.length < 4) {
        // Manipulamos el span usando Traversing
        spanError.textContent = "El usuario debe tener al menos 4 letras.";
        spanError.style.color = "red";
        inputUser.style.borderColor = "red"; // Pintamos el borde del input
    } else {
        spanError.textContent = "Usuario válido ✓";
        spanError.style.color = "green";
        inputUser.style.borderColor = "green";
    }
});

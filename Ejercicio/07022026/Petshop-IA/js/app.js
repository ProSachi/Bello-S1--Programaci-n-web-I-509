/**
 * PetShop - Lógica de Autenticación
 * Maneja login, registro y control de sesión
 */

// Verificar si el usuario ya está autenticado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    requireNoAuth(); // Si está autenticado, redirigir al dashboard
    setupFormListeners();
});

/**
 * Configurar listeners de formularios
 */
function setupFormListeners() {
    const loginForm = document.getElementById('loginFormElement');
    const registerForm = document.getElementById('registerFormElement');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
}

/**
 * Alternar entre formularios de login y registro
 */
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');

    // Limpiar errores
    document.getElementById('loginError').classList.add('hidden');
    document.getElementById('registerError').classList.add('hidden');
}

/**
 * Manejar envío del formulario de login
 * @param {Event} e 
 */
function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');
    const errorMsg = document.getElementById('loginErrorMsg');

    // Limpiar error anterior
    errorDiv.classList.add('hidden');

    // Validaciones
    if (!email) {
        showError(errorDiv, errorMsg, 'Por favor ingresa tu correo');
        return;
    }

    if (!validateEmail(email)) {
        showError(errorDiv, errorMsg, 'Correo electrónico inválido');
        return;
    }

    if (!password) {
        showError(errorDiv, errorMsg, 'Por favor ingresa tu contraseña');
        return;
    }

    // Intentar autenticación
    const user = authenticateUser(email, password);

    if (!user) {
        showError(errorDiv, errorMsg, 'Correo o contraseña incorrectos');
        return;
    }

    // Éxito
    showToast(`¡Bienvenido, ${user.name}! 🎉`, 'success');
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1000);
}

/**
 * Manejar envío del formulario de registro
 * @param {Event} e 
 */
function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const phone = document.getElementById('registerPhone').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const errorDiv = document.getElementById('registerError');
    const errorMsg = document.getElementById('registerErrorMsg');

    // Limpiar error anterior
    errorDiv.classList.add('hidden');

    // Validaciones
    if (!name) {
        showError(errorDiv, errorMsg, 'Por favor ingresa tu nombre');
        return;
    }

    if (name.length < 3) {
        showError(errorDiv, errorMsg, 'El nombre debe tener al menos 3 caracteres');
        return;
    }

    if (!email) {
        showError(errorDiv, errorMsg, 'Por favor ingresa tu correo');
        return;
    }

    if (!validateEmail(email)) {
        showError(errorDiv, errorMsg, 'Correo electrónico inválido');
        return;
    }

    if (!phone) {
        showError(errorDiv, errorMsg, 'Por favor ingresa tu teléfono');
        return;
    }

    if (!validatePhone(phone)) {
        showError(errorDiv, errorMsg, 'Teléfono inválido (mínimo 10 dígitos)');
        return;
    }

    if (!password) {
        showError(errorDiv, errorMsg, 'Por favor ingresa una contraseña');
        return;
    }

    if (!validatePassword(password)) {
        showError(errorDiv, errorMsg, 'La contraseña debe tener al menos 6 caracteres');
        return;
    }

    if (password !== confirmPassword) {
        showError(errorDiv, errorMsg, 'Las contraseñas no coinciden');
        return;
    }

    // Verificar si el email ya existe
    const users = JSON.parse(localStorage.getItem(CONFIG.STORAGE_USERS) || '[]');
    if (users.some(u => u.email === email)) {
        showError(errorDiv, errorMsg, 'Este correo ya está registrado');
        return;
    }

    // Crear usuario
    const userData = {
        name,
        email,
        phone,
        password // En producción, esto se hashearía en el servidor
    };

    const success = createUser(userData);

    if (!success) {
        showError(errorDiv, errorMsg, 'Error al crear la cuenta. Intenta de nuevo.');
        return;
    }

    // Éxito
    showToast(`¡Cuenta creada exitosamente! 🎉`, 'success');
    
    // Auto-login
    setTimeout(() => {
        authenticateUser(email, password);
        window.location.href = 'dashboard.html';
    }, 1500);
}

/**
 * Mostrar error en el formulario
 * @param {HTMLElement} errorDiv 
 * @param {HTMLElement} errorMsg 
 * @param {string} message 
 */
function showError(errorDiv, errorMsg, message) {
    errorMsg.textContent = message;
    errorDiv.classList.remove('hidden');
}

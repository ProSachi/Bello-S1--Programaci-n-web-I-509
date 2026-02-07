/**
 * PetShop - Utilidades compartidas
 * Fornece funciones auxiliares para toda la aplicación
 */

// Configuración de la aplicación
const CONFIG = {
    STORAGE_USERS: 'petshop_users',
    STORAGE_AUTH: 'petshop_auth',
    STORAGE_CART: 'petshop_cart',
    TOKEN_EXPIRY: 24 * 60 * 60 * 1000, // 24 horas
};

/**
 * Validar correo electrónico
 * @param {string} email 
 * @returns {boolean}
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Validar fortaleza de contraseña
 * @param {string} password 
 * @returns {boolean}
 */
function validatePassword(password) {
    return password.length >= 6;
}

/**
 * Validar número de teléfono
 * @param {string} phone 
 * @returns {boolean}
 */
function validatePhone(phone) {
    const regex = /^[\d\s\-\+\(\)]+$/;
    return regex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Obtener el usuario actual autenticado
 * @returns {object|null}
 */
function getCurrentUser() {
    const auth = localStorage.getItem(CONFIG.STORAGE_AUTH);
    if (!auth) return null;
    
    try {
        const parsed = JSON.parse(auth);
        // Verificar si el token ha expirado
        if (parsed.expiryTime && new Date().getTime() > parsed.expiryTime) {
            localStorage.removeItem(CONFIG.STORAGE_AUTH);
            return null;
        }
        return parsed.user;
    } catch {
        return null;
    }
}

/**
 * Verificar si el usuario está autenticado
 * @returns {boolean}
 */
function isAuthenticated() {
    return getCurrentUser() !== null;
}

/**
 * Redirigir a página de inicio si no hay sesión
 */
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'index.html';
    }
}

/**
 * Redirigir al dashboard si hay sesión activa
 */
function requireNoAuth() {
    if (isAuthenticated()) {
        window.location.href = 'dashboard.html';
    }
}

/**
 * Crear un usuario nuevo
 * @param {object} userData 
 * @returns {boolean}
 */
function createUser(userData) {
    try {
        const users = JSON.parse(localStorage.getItem(CONFIG.STORAGE_USERS) || '[]');
        
        // Verificar si el email ya existe
        if (users.some(u => u.email === userData.email)) {
            return false;
        }
        
        // Agregar el nuevo usuario
        const newUser = {
            id: Date.now(),
            ...userData,
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem(CONFIG.STORAGE_USERS, JSON.stringify(users));
        return true;
    } catch {
        return false;
    }
}

/**
 * Autenticar un usuario
 * @param {string} email 
 * @param {string} password 
 * @returns {object|null}
 */
function authenticateUser(email, password) {
    try {
        const users = JSON.parse(localStorage.getItem(CONFIG.STORAGE_USERS) || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) return null;
        
        // Crear sesión
        const authData = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            expiryTime: new Date().getTime() + CONFIG.TOKEN_EXPIRY
        };
        
        localStorage.setItem(CONFIG.STORAGE_AUTH, JSON.stringify(authData));
        return authData.user;
    } catch {
        return null;
    }
}

/**
 * Cerrar sesión
 */
function logoutUser() {
    localStorage.removeItem(CONFIG.STORAGE_AUTH);
    localStorage.removeItem(CONFIG.STORAGE_CART);
}

/**
 * Mostrar notificación toast
 * @param {string} message 
 * @param {string} type 
 */
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    
    toast.className = `fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in`;
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('opacity-0');
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Dar formato a moneda
 * @param {number} value 
 * @returns {string}
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
}

/**
 * Obtener carrito del usuario
 * @returns {array}
 */
function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CONFIG.STORAGE_CART) || '[]');
    } catch {
        return [];
    }
}

/**
 * Guardar carrito
 * @param {array} cart 
 */
function saveCart(cart) {
    localStorage.setItem(CONFIG.STORAGE_CART, JSON.stringify(cart));
}

/**
 * Agregar producto al carrito
 * @param {object} product 
 */
function addToCart(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart(cart);
    updateCartUI();
    showToast(`${product.name} agregado al carrito! 🛒`);
}

/**
 * Remover producto del carrito
 * @param {number} productId 
 */
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartUI();
    showToast('Producto removido del carrito');
}

/**
 * Actualizar cantidad en carrito
 * @param {number} productId 
 * @param {number} quantity 
 */
function updateCartQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart(cart);
        }
    }
    
    updateCartUI();
}

/**
 * Actualizar UI del carrito
 */
function updateCartUI() {
    const cart = getCart();
    const cartCount = document.getElementById('cartCount');
    
    if (cart.length === 0) {
        cartCount.classList.add('hidden');
    } else {
        cartCount.textContent = cart.length;
        cartCount.classList.remove('hidden');
    }
}

/**
 * Calcular total del carrito
 * @returns {number}
 */
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Procesar compra
 * @returns {boolean}
 */
function processCheckout() {
    const cart = getCart();
    
    if (cart.length === 0) {
        showToast('El carrito está vacío', 'error');
        return false;
    }
    
    // Simular procesamiento de pago
    const total = getCartTotal();
    const user = getCurrentUser();
    
    // Crear registro de orden
    const order = {
        id: Date.now(),
        userId: user.id,
        items: cart,
        total: total,
        date: new Date().toISOString(),
        status: 'completed'
    };
    
    // Guardar orden en historial
    const orders = JSON.parse(localStorage.getItem('petshop_orders') || '[]');
    orders.push(order);
    localStorage.setItem('petshop_orders', JSON.stringify(orders));
    
    // Limpiar carrito
    localStorage.removeItem(CONFIG.STORAGE_CART);
    updateCartUI();
    
    showToast(`¡Compra realizada! Total: ${formatCurrency(total)} ✨`, 'success');
    return true;
}

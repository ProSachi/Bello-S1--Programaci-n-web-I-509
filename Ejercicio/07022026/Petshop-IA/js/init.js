/**
 * PetShop - Inicializador de Datos de Prueba
 * Crea usuarios y productos de ejemplo en localStorage
 * 
 * Ejecutar una sola vez (se comentará después)
 */

window.addEventListener('load', () => {
    initializeTestData();
});

/**
 * Inicializar datos de prueba
 */
function initializeTestData() {
    const users = localStorage.getItem('petshop_users');
    
    // Solo inicializar si no existen usuarios
    if (!users || JSON.parse(users).length === 0) {
        const testUsers = [
            {
                id: 1,
                name: 'Juan García',
                email: 'juan@email.com',
                phone: '+57 300 123 4567',
                password: '123456',
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                name: 'María López',
                email: 'maria@email.com',
                phone: '+57 301 987 6543',
                password: '123456',
                createdAt: new Date().toISOString()
            },
            {
                id: 3,
                name: 'Carlos Pérez',
                email: 'carlos@email.com',
                phone: '+57 315 456 7890',
                password: '123456',
                createdAt: new Date().toISOString()
            }
        ];
        
        localStorage.setItem('petshop_users', JSON.stringify(testUsers));
        console.log('✓ Usuarios de prueba inicializados');
    }
}

/**
 * Limpiar todos los datos de la tienda (para pruebas)
 * Ejecutar en consola si es necesario: clearAllPetShopData()
 */
function clearAllPetShopData() {
    if (confirm('¿Estás seguro de que deseas limpiar TODOS los datos? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('petshop_users');
        localStorage.removeItem('petshop_auth');
        localStorage.removeItem('petshop_cart');
        localStorage.removeItem('petshop_orders');
        console.log('✓ Todos los datos han sido eliminados');
        location.reload();
    }
}

/**
 * Mostrar todos los usuarios registrados (para debugging)
 */
function debugShowAllUsers() {
    const users = JSON.parse(localStorage.getItem('petshop_users') || '[]');
    console.table(users);
}

/**
 * Mostrar todas las órdenes (para debugging)
 */
function debugShowAllOrders() {
    const orders = JSON.parse(localStorage.getItem('petshop_orders') || '[]');
    console.table(orders);
}

/**
 * Mostrar carrito actual (para debugging)
 */
function debugShowCart() {
    const cart = JSON.parse(localStorage.getItem('petshop_cart') || '[]');
    console.table(cart);
}

console.log(`
╔═══════════════════════════════════════════════════════════════╗
║          🐾 PetShop - Sistema Inicializado 🐾                ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  📌 Cuentas de Prueba:                                       ║
║  ───────────────────────────────────────────────────────────  ║
║  1. juan@email.com        / 123456                           ║
║  2. maria@email.com       / 123456                           ║
║  3. carlos@email.com      / 123456                           ║
║                                                               ║
║  🛠️  Comandos de Debugging (ejecutar en consola):            ║
║  ───────────────────────────────────────────────────────────  ║
║  • debugShowAllUsers()    → Ver todos los usuarios           ║
║  • debugShowAllOrders()   → Ver todas las órdenes            ║
║  • debugShowCart()        → Ver carrito actual               ║
║  • clearAllPetShopData()  → Limpiar todos los datos          ║
║                                                               ║
║  📊 Productos: 20 mascotas disponibles                        ║
║  💰 Rango de precios: $25 - $300                              ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
`);

/**
 * PetShop - Dashboard / Catálogo
 * Gestiona el catálogo de productos, filtros, búsqueda y carrito
 */

let currentFilters = {
    category: '',
    price: '',
    age: '',
    search: ''
};

let selectedProductId = null;

// Inicializar dashboard cuando el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    requireAuth(); // Verificar autenticación
    initializeDashboard();
    setupEventListeners();
    displayProducts();
    updateCartUI();
});

/**
 * Inicializar el dashboard
 */
function initializeDashboard() {
    const user = getCurrentUser();
    if (user) {
        document.getElementById('userName').textContent = user.name;
    }
}

/**
 * Configurar event listeners
 */
function setupEventListeners() {
    // Event listeners para filtros
    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentFilters.search = e.target.value;
        displayProducts();
    });

    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        currentFilters.category = e.target.value;
        displayProducts();
    });

    document.getElementById('priceFilter').addEventListener('change', (e) => {
        currentFilters.price = e.target.value;
        displayProducts();
    });

    document.getElementById('ageFilter').addEventListener('change', (e) => {
        currentFilters.age = e.target.value;
        displayProducts();
    });
}

/**
 * Mostrar productos en el grid
 */
function displayProducts() {
    const container = document.getElementById('productsContainer');
    const emptyState = document.getElementById('emptyState');

    // Obtener productos filtrados
    const products = filterProducts(
        currentFilters.category,
        currentFilters.price,
        currentFilters.age,
        currentFilters.search
    );

    // Mostrar estado vacío si no hay productos
    if (products.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    // Limpiar contenedor
    container.innerHTML = '';

    // Renderizar cada producto
    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

/**
 * Crear tarjeta de producto
 * @param {object} product 
 * @returns {HTMLElement}
 */
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-xl shadow-md overflow-hidden border border-amber-100 hover:border-amber-300 cursor-pointer';
    
    card.innerHTML = `
        <div class="p-6">
            <div class="text-6xl text-center mb-3">${product.emoji}</div>
            <h3 class="text-lg font-bold text-gray-800 text-center mb-2">${product.name}</h3>
            <p class="text-gray-600 text-sm text-center mb-3">${product.breed}</p>
            
            <div class="space-y-2 text-sm mb-4">
                <div class="flex justify-between text-gray-700">
                    <span>Edad:</span>
                    <span class="font-semibold">${product.age} meses</span>
                </div>
                <div class="flex justify-between text-gray-700">
                    <span>Color:</span>
                    <span class="font-semibold">${product.color}</span>
                </div>
                <div class="flex justify-between text-gray-700">
                    <span>Vacunado:</span>
                    <span class="font-semibold">${product.vaccinated ? '✓ Sí' : '✗ No'}</span>
                </div>
            </div>

            <div class="border-t border-gray-200 pt-4">
                <p class="text-3xl font-bold text-amber-600 text-center mb-4">${formatCurrency(product.price)}</p>
                <div class="flex gap-2">
                    <button 
                        onclick="openProductModal(${product.id})"
                        class="flex-1 border-2 border-amber-500 text-amber-600 font-bold py-2 rounded-lg hover:bg-amber-50 transition"
                    >
                        👀 Ver más
                    </button>
                    <button 
                        onclick="addToCart(getProductById(${product.id}))"
                        class="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-2 rounded-lg transition"
                    >
                        🛒 Agregar
                    </button>
                </div>
            </div>
        </div>
    `;

    return card;
}

/**
 * Abrir modal de detalles del producto
 * @param {number} productId 
 */
function openProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;

    selectedProductId = product.id;

    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductImage').textContent = product.emoji;
    document.getElementById('modalProductType').textContent = `${product.emoji} ${product.breed}`;
    document.getElementById('modalProductAge').textContent = `${product.age} meses`;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = formatCurrency(product.price);

    document.getElementById('productModal').classList.remove('hidden');
}

/**
 * Cerrar modal del producto
 */
function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
    selectedProductId = null;
}

/**
 * Agregar producto al carrito desde el modal
 */
function addToCartFromModal() {
    if (selectedProductId) {
        const product = getProductById(selectedProductId);
        if (product) {
            addToCart(product);
            closeProductModal();
        }
    }
}

/**
 * Alternar visibilidad del carrito
 */
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('hidden');

    if (!modal.classList.contains('hidden')) {
        displayCartItems();
    }
}

/**
 * Mostrar items del carrito
 */
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cart = getCart();

    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartEmpty.classList.remove('hidden');
        cartFooter.classList.add('hidden');
        return;
    }

    cartEmpty.classList.add('hidden');
    cartFooter.classList.remove('hidden');

    // Mostrar cada item del carrito
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'border-b border-gray-200 pb-4 mb-4 last:border-0';
        itemEl.innerHTML = `
            <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-3 flex-1">
                    <div class="text-4xl">${item.emoji}</div>
                    <div>
                        <h3 class="font-bold text-gray-800">${item.name}</h3>
                        <p class="text-sm text-gray-600">${item.breed}</p>
                    </div>
                </div>
                <button 
                    onclick="removeFromCart(${item.id})"
                    class="text-red-500 hover:text-red-700 text-xl"
                >
                    ✕
                </button>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button 
                        onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})"
                        class="bg-white px-3 py-1 rounded hover:bg-gray-200 transition"
                    >
                        −
                    </button>
                    <span class="px-3 font-semibold">${item.quantity}</span>
                    <button 
                        onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})"
                        class="bg-white px-3 py-1 rounded hover:bg-gray-200 transition"
                    >
                        +
                    </button>
                </div>
                <div class="text-right">
                    <p class="text-sm text-gray-600">Subtotal</p>
                    <p class="text-xl font-bold text-amber-600">${formatCurrency(item.price * item.quantity)}</p>
                </div>
            </div>
        `;
        cartItems.appendChild(itemEl);
    });

    // Actualizar totales
    updateCartTotals();
}

/**
 * Actualizar totales del carrito
 */
function updateCartTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 5 : 0;
    const total = subtotal + shipping;

    document.getElementById('cartSubtotal').textContent = formatCurrency(subtotal);
    document.getElementById('cartShipping').textContent = formatCurrency(shipping);
    document.getElementById('cartTotal').textContent = formatCurrency(total);
}

/**
 * Proceder al pago
 */
function checkout() {
    const cart = getCart();

    if (cart.length === 0) {
        showToast('El carrito está vacío', 'error');
        return;
    }

    if (processCheckout()) {
        toggleCart();
        displayProducts();
    }
}

/**
 * Cerrar sesión
 */
function logout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        logoutUser();
        showToast('Sesión cerrada correctamente', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
}

/**
 * Refrescar página
 */
function refreshPage() {
    location.reload();
}

// Cerrar modal al hacer click fuera
document.addEventListener('click', (e) => {
    const productModal = document.getElementById('productModal');
    const cartModal = document.getElementById('cartModal');

    if (productModal && !productModal.classList.contains('hidden') && e.target === productModal) {
        closeProductModal();
    }

    if (cartModal && !cartModal.classList.contains('hidden') && e.target === cartModal) {
        toggleCart();
    }
});

// Cerrar modales con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const productModal = document.getElementById('productModal');
        const cartModal = document.getElementById('cartModal');

        if (productModal && !productModal.classList.contains('hidden')) {
            closeProductModal();
        }

        if (cartModal && !cartModal.classList.contains('hidden')) {
            toggleCart();
        }
    }
});

/**
 * PetShop - Catálogo de Productos
 * Base de datos de productos disponibles en la tienda
 */

const PRODUCTS = [
    // Perros
    {
        id: 1,
        name: 'Golden Retriever',
        type: 'perro',
        price: 250,
        emoji: '🐦',
        age: 2,
        description: 'Perro amigable, inteligente y leal. Excelente para familias con niños.',
        color: 'Dorado',
        breed: 'Golden Retriever',
        vaccinated: true
    },
    {
        id: 2,
        name: 'Bulldog Francés',
        type: 'perro',
        price: 180,
        emoji: '🐕',
        age: 3,
        description: 'Pequeño y musculoso, ideal para apartamentos. Muy cariñoso y juguetón.',
        color: 'Blanco y negro',
        breed: 'Bulldog Francés',
        vaccinated: true
    },
    {
        id: 3,
        name: 'Husky Siberiano',
        type: 'perro',
        price: 300,
        emoji: '🐕',
        age: 1,
        description: 'Energético y hermoso. Necesita mucho ejercicio y social. Perfecto para vida activa.',
        color: 'Blanco y gris',
        breed: 'Husky Siberiano',
        vaccinated: true
    },
    {
        id: 4,
        name: 'Dachshund',
        type: 'perro',
        price: 150,
        emoji: '🐕',
        age: 4,
        description: 'Pequeño y adorable. Ideal para personas que viven en espacios reducidos.',
        color: 'Café',
        breed: 'Dachshund',
        vaccinated: true
    },
    {
        id: 5,
        name: 'Pastor Alemán',
        type: 'perro',
        price: 280,
        emoji: '🐕',
        age: 2,
        description: 'Inteligente, leal y protector. Excelente como perro de servicio o familia.',
        color: 'Marrón y negro',
        breed: 'Pastor Alemán',
        vaccinated: true
    },

    // Gatos
    {
        id: 6,
        name: 'Gato Siamés',
        type: 'gato',
        price: 120,
        emoji: '🐱',
        age: 1,
        description: 'Elegante y vocal. Forma fuertes vínculos con sus dueños. Muy inteligente.',
        color: 'Blanco y marrón',
        breed: 'Siamés',
        vaccinated: true
    },
    {
        id: 7,
        name: 'Gato Persa',
        type: 'gato',
        price: 130,
        emoji: '🐱',
        age: 2,
        description: 'Largo cabello y personalidad dulce. Perfecto para ambientes tranquilos.',
        color: 'Gris',
        breed: 'Persa',
        vaccinated: true
    },
    {
        id: 8,
        name: 'Gato Bengalí',
        type: 'gato',
        price: 200,
        emoji: '🐱',
        age: 1,
        description: 'Patrón de leopardo. Muy activo y jugador. Necesita estimulación constante.',
        color: 'Naranja con manchas',
        breed: 'Bengalí',
        vaccinated: true
    },
    {
        id: 9,
        name: 'Gato Común',
        type: 'gato',
        price: 50,
        emoji: '🐱',
        age: 3,
        description: 'Adaptable y cariñoso. Perfecto para principiantes en mascotas.',
        color: 'Naranja',
        breed: 'Doméstico',
        vaccinated: true
    },

    // Pájaros
    {
        id: 10,
        name: 'Loro Verde',
        type: 'pajaro',
        price: 80,
        emoji: '🦜',
        age: 6,
        description: 'Inteligente y sociable. Vive muchos años. Necesita interacción diaria.',
        color: 'Verde',
        breed: 'Amazona',
        vaccinated: false
    },
    {
        id: 11,
        name: 'Canario',
        type: 'pajaro',
        price: 35,
        emoji: '🐦',
        age: 2,
        description: 'Pajarillo cantor. Ideal para principiantes. Fácil de cuidar.',
        color: 'Amarillo',
        breed: 'Canario Silvestre',
        vaccinated: false
    },
    {
        id: 12,
        name: 'Perico Australiano',
        type: 'pajaro',
        price: 45,
        emoji: '🐦',
        age: 1,
        description: 'Colorido y activo. Puede aprender a hablar palabras simples.',
        color: 'Azul y amarillo',
        breed: 'Periquito',
        vaccinated: false
    },

    // Roedores
    {
        id: 13,
        name: 'Hámster Sirio',
        type: 'roedor',
        price: 25,
        emoji: '🐹',
        age: 1,
        description: 'Pequeño y adorable. Perfecto para niños. Cuidado fácil.',
        color: 'Dorado',
        breed: 'Hámster Sirio',
        vaccinated: false
    },
    {
        id: 14,
        name: 'Conejillo de Indias',
        type: 'roedor',
        price: 60,
        emoji: '🐹',
        age: 2,
        description: 'Social y amigable. Mejor en parejas. Muy cariñoso con humanos.',
        color: 'Blanco y marrón',
        breed: 'Conejillo de Indias',
        vaccinated: false
    },
    {
        id: 15,
        name: 'Rata Doméstica',
        type: 'roedor',
        price: 30,
        emoji: '🐹',
        age: 1,
        description: 'Inteligente y afectuosa. Divertida de observar. Fácil de entrenar.',
        color: 'Gris',
        breed: 'Rata Doméstica',
        vaccinated: false
    },
    {
        id: 16,
        name: 'Conejo',
        type: 'roedor',
        price: 75,
        emoji: '🐹',
        age: 3,
        description: 'Suave y tranquilo. Requiere espacio. Excelente mascota familiar.',
        color: 'Blanco',
        breed: 'Conejo de Angora',
        vaccinated: true
    },

    // Reptiles
    {
        id: 17,
        name: 'Tortuga Rusa',
        type: 'reptil',
        price: 100,
        emoji: '🦗',
        age: 12,
        description: 'Larga vida. Requiere espacio al aire libre. Herbívora.',
        color: 'Verde oscuro',
        breed: 'Testudo horsfieldii',
        vaccinated: false
    },
    {
        id: 18,
        name: 'Iguana Verde',
        type: 'reptil',
        price: 90,
        emoji: '🦗',
        age: 2,
        description: 'Exótica y herbívora. Necesita mucho espacio y calor. Vida larga.',
        color: 'Verde brillante',
        breed: 'Iguana Verde',
        vaccinated: false
    },
    {
        id: 19,
        name: 'Serpiente Maíz',
        type: 'reptil',
        price: 85,
        emoji: '🦗',
        age: 1,
        description: 'Dócil y fácil de mantener. Ideal para iniciarse en reptiles.',
        color: 'Naranja y rojo',
        breed: 'Serpiente de Maíz',
        vaccinated: false
    },
    {
        id: 20,
        name: 'Gecko Leopardo',
        type: 'reptil',
        price: 110,
        emoji: '🦗',
        age: 2,
        description: 'Pequeño y colorido. Nocturno. Interesante de observar.',
        color: 'Amarillo con manchas',
        breed: 'Gecko Leopardo',
        vaccinated: false
    }
];

/**
 * Obtener todos los productos
 * @returns {array}
 */
function getAllProducts() {
    return PRODUCTS;
}

/**
 * Obtener producto por ID
 * @param {number} id 
 * @returns {object|null}
 */
function getProductById(id) {
    return PRODUCTS.find(p => p.id === id) || null;
}

/**
 * Filtrar productos
 * @param {string} category - Tipo de mascota
 * @param {string} priceRange - Rango de precio
 * @param {string} age - Rango de edad
 * @param {string} search - Término de búsqueda
 * @returns {array}
 */
function filterProducts(category = '', priceRange = '', age = '', search = '') {
    let filtered = PRODUCTS;

    // Filtro por categoría
    if (category) {
        filtered = filtered.filter(p => p.type === category);
    }

    // Filtro por precio
    if (priceRange) {
        filtered = filtered.filter(p => {
            if (priceRange === '0-50') return p.price >= 0 && p.price <= 50;
            if (priceRange === '50-100') return p.price > 50 && p.price <= 100;
            if (priceRange === '100-200') return p.price > 100 && p.price <= 200;
            if (priceRange === '200+') return p.price > 200;
            return true;
        });
    }

    // Filtro por edad
    if (age) {
        filtered = filtered.filter(p => {
            if (age === '0-3') return p.age >= 0 && p.age <= 3;
            if (age === '3-6') return p.age > 3 && p.age <= 6;
            if (age === '6-12') return p.age > 6 && p.age <= 12;
            if (age === '12+') return p.age > 12;
            return true;
        });
    }

    // Filtro por búsqueda
    if (search) {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchLower) ||
            p.breed.toLowerCase().includes(searchLower) ||
            p.description.toLowerCase().includes(searchLower)
        );
    }

    return filtered;
}

/**
 * Obtener categorías disponibles
 * @returns {array}
 */
function getCategories() {
    const categories = [...new Set(PRODUCTS.map(p => p.type))];
    return categories;
}

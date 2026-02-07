# 🐾 PetShop - Tienda de Mascotas

Una tienda de mascotas profesional y moderna desarrollada con **HTML5**, **Tailwind CSS** y **JavaScript vanilla** (ES6+). Incluye sistema completo de autenticación, catálogo de 20 productos y carrito de compras.

---

## ✨ Características

### ✅ Autenticación
- ✓ Formulario de **Login** con validaciones
- ✓ Formulario de **Registro** con verificación de datos
- ✓ Sistema de sesiones con localStorage
- ✓ Protección de rutas (acceso solo autenticado)
- ✓ Auto-logout después de 24 horas

### 🛒 Catálogo de Productos
- ✓ **20 productos** disponibles (perros, gatos, pájaros, roedores, reptiles)
- ✓ Información detallada: nombre, raza, edad, color, precio
- ✓ Modales con vista completa del producto
- ✓ Sistema de precios en USD

### 🔍 Búsqueda y Filtros
- ✓ Búsqueda en tiempo real por nombre/raza
- ✓ Filtro por tipo de mascota
- ✓ Filtro por rango de precio
- ✓ Filtro por edad
- ✓ Combinación de múltiples filtros

### 🛒 Carrito de Compras
- ✓ Agregar/remover productos
- ✓ Ajustar cantidad de items
- ✓ Cálculo automático de totales
- ✓ Costo de envío ($5.00)
- ✓ Procesamiento de compra

### 🎨 Diseño & UX
- ✓ Completamente **responsive** (mobile-first)
- ✓ **Tailwind CSS 3** con gradientes y animaciones
- ✓ Interfaz intuitiva y profesional
- ✓ Notificaciones toast interactivas
- ✓ Transiciones suaves

---

## 🚀 Cómo Usar

### 1. Abrir la aplicación
Abre el archivo `index.html` en tu navegador:
```
Haz doble click en: index.html
O arrastra el archivo al navegador
```

### 2. Cuentas de Prueba Predefinidas

Ya hay usuarios registrados para probar:

**Usuario 1:**
- Email: `juan@email.com`
- Contraseña: `123456`

**Usuario 2:**
- Email: `maria@email.com`
- Contraseña: `123456`

### 3. Crear una Nueva Cuenta
- Haz click en "Regístrate aquí"
- Completa los datos requeridos
- Sistema automáticamente te redirigirá al catálogo

### 4. Explorar el Catálogo
- Busca productos por nombre/raza
- Usa los filtros para encontrar lo que necesitas
- Haz click en "Ver más" para detalles completos
- Agrega productos al carrito

### 5. Comprar
- Haz click en el icono 🛒 en la esquina
- Ajusta cantidades según necesites
- Haz click en "Proceder al Pago"
- ¡Compra completada!

---

## 📁 Estructura del Proyecto

```
07022026/
├── index.html                 # Página de login/registro
├── dashboard.html             # Página de catálogo
├── js/
│   ├── utils.js              # Funciones compartidas (auth, storage, etc)
│   ├── app.js                # Lógica de login/registro
│   ├── products.js           # Base de datos de productos
│   └── dashboard.js          # Lógica del catálogo y carrito
├── README.md                 # Este archivo
└── .gitignore               # (opcional)
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **Tailwind CSS 3** - Estilos vía CDN
- **JavaScript ES6+** - Lógica y interactividad
- **Google Fonts (Poppins)** - Tipografía moderna

### Almacenamiento
- **localStorage** - Datos de usuarios y carrito
- **Sin dependencias externas** - Todo vanilla JS

### Validaciones
- Email válido
- Contraseña (mínimo 6 caracteres)
- Teléfono (mínimo 10 dígitos)
- Formularios completos

---

## 🔒 Seguridad (Nota)

⚠️ **IMPORTANTE:** Esta es una demostración educativa. En producción:
- Las contraseñas deben hashearse (nunca almacenarlas en texto plano)
- El backend debe validar toda entrada
- Usar HTTPS obligatoriamente
- Implementar JWT con tokens seguros
- Usar una base de datos real (no localStorage)

---

## 📊 Productos Disponibles

### 🐕 Perros (5)
- Golden Retriever - $250
- Bulldog Francés - $180
- Husky Siberiano - $300
- Dachshund - $150
- Pastor Alemán - $280

### 🐱 Gatos (4)
- Gato Siamés - $120
- Gato Persa - $130
- Gato Bengalí - $200
- Gato Común - $50

### 🦜 Pájaros (3)
- Loro Verde - $80
- Canario - $35
- Perico Australiano - $45

### 🐹 Roedores (4)
- Hámster Sirio - $25
- Conejillo de Indias - $60
- Rata Doméstica - $30
- Conejo - $75

### 🦗 Reptiles (4)
- Tortuga Rusa - $100
- Iguana Verde - $90
- Serpiente Maíz - $85
- Gecko Leopardo - $110

---

## 🎯 Funcionalidades Incluidas

### Sistema de Autenticación
```javascript
// Login
- Validación de email y contraseña
- Verificación de credenciales
- Sesión automática
- Auto-logout (24 horas)

// Registro
- Validar nombre (mínimo 3 caracteres)
- Validar email único
- Validar teléfono (formato)
- Validar contraseña (mínimo 6 caracteres)
- Confirmación de contraseña
```

### Catálogo
```javascript
// Búsqueda
- En tiempo real
- Por nombre o raza

// Filtros
- Por tipo de mascota
- Por rango de precio
- Por edad
- Combinables entre sí

// Producto
- Detalles completos
- Modal expandible
- Agregar al carrito directamente
```

### Carrito
```javascript
// Gestión
- Agregar items
- Remover items
- Ajustar cantidad
- Cálculo automático de totales
- Envío incluido

// Compra
- Validación de carrito
- Procesamiento de pago
- Confirmación
- Limpieza automática
```

---

## 🎨 Paleta de Colores

```
Primario:   Amber/Orange (#f59e0b, #f97316)
Secundario: Verde/Emerald (#10b981, #059669)
Acento:     Rojo (#ef4444)
Fondo:      Gradiente warm (Amber → Orange → Red)
```

---

## 📱 Responsive Design

- ✓ Mobile: 320px+
- ✓ Tablet: 768px+
- ✓ Desktop: 1024px+
- ✓ Large: 1280px+

---

## 🐛 Solución de Problemas

### No carga la página
- Verifica que todos los archivos .js estén en la carpeta `js/`
- Abre la consola (F12) para ver errores

### Los estilos Tailwind no aparecen
- El CDN de Tailwind se carga desde internet
- Requiere conexión a internet

### Olvidé las credenciales
- Usa las cuentas de prueba proporcionadas
- O crea una nueva cuenta

### No guarda los datos
- Los datos se almacenan en localStorage del navegador
- Si limpias el historial, se perderán
- Abre DevTools (F12) → Application → localStorage

---

## 👨‍💻 Notas de Desarrollo

### Convenciones de Código
- camelCase para variables y funciones
- PascalCase para configuraciones
- Comentarios JSDoc para funciones principales
- Mobile-first en CSS

### Performance
- Sin dependencias npm (ejecutable offline)
- Carga rápida (CDN solo Tailwind)
- Optimización de re-renders
- LocalStorage para persistencia instant

### Extensibilidad
- Fácil agregar más productos en `products.js`
- Sistema modular de "módulos"
- Lógica separada por responsabilidad

---

## 📝 Licencia

Proyecto educativo - Libre para uso académico y comercial.

---

## 🎓 Desarrollado por: Desarrollador Senior Web

Estándares aplicados:
✓ Código limpio y documentado
✓ Buenas prácticas de JavaScript
✓ Validaciones exhaustivas
✓ UX/UI profesional
✓ Responsive design
✓ Accesibilidad considerada

---

**¡Disfruta explorando nuestra tienda de mascotas! 🐾✨**

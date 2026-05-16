// Datos de ejemplo para las tarjetas
const personas = [
    {
        id: 1,
        nombre: "Ana Torres",
        correo: "ana.torres@email.com",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        nombre: "Luis Gómez",
        correo: "luis.gomez@email.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        nombre: "María López",
        correo: "maria.lopez@email.com",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

const container = document.querySelector('.card-container');

// Renderizar tarjetas locales
personas.forEach(persona => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${persona.avatar}" alt="Avatar" class="avatar">
        <h2>${persona.nombre}</h2>
        <p>${persona.correo}</p>
    `;
    card.onclick = () => {
        window.location.href = `detalle.html?id=${persona.id}`;
    };
    container.appendChild(card);
});

// Tarjeta fija que lleva al listado de estudiantes
const estudianteCard = document.createElement('div');
estudianteCard.className = 'card';
estudianteCard.innerHTML = `
    <img src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/98.jpg" alt="Avatar" class="avatar">
    <h2>Estudiantes</h2>
    <p>Ver listado desde API</p>
`;
estudianteCard.onclick = () => {
    window.location.href = 'estudiante.html';
};
container.appendChild(estudianteCard);

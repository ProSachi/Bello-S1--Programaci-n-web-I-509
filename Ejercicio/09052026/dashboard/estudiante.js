const btn = document.getElementById('consultar-estudiante-btn');
const detalleDiv = document.getElementById('detalle-estudiante');

function consultarEstudiantes() {
    detalleDiv.innerHTML = '<p>Cargando...</p>';
    fetch('https://6a064bd3c83ba8ad9b3d618f.mockapi.io/api/user/usuario')
        .then(res => res.json())
        .then(users => {
            detalleDiv.innerHTML = users.map(user => `
                <div class="card">
                    <img src="${user.avatar}" class="avatar" alt="Avatar">
                    <h2>${user.name}</h2>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>Teléfono:</b> ${user.phone}</p>
                </div>
            `).join('');
        })
        .catch(() => {
            detalleDiv.innerHTML = '<p>Error al cargar los datos.</p>';
        });
}

btn.addEventListener('click', consultarEstudiantes);

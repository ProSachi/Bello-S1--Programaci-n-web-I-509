// Obtener el ID de la persona desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const btn = document.getElementById('consultar-btn');
const detalleDiv = document.getElementById('detalle-persona');



function consultarPersona() {
    detalleDiv.innerHTML = '<p>Cargando...</p>';
    fetch('http://localhost:8080/api/enfermeros')
        .then(res => res.json())
        .then(data => {
            const user = data.results[0];
            detalleDiv.innerHTML = `
                <div class="card">
                    <img src="${user.picture.large}" class="avatar" alt="Avatar">
                    <h2>${user.name.first} ${user.nombre}</h2>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>Teléfono:</b> ${user.phone}</p>
                    <p><b>País:</b> ${user.location.country}</p>
                </div>
            `;
        })
        .catch(() => {
            detalleDiv.innerHTML = '<p>Error al cargar los datos.</p>';
        });
}

btn.addEventListener('click', consultarPersona);

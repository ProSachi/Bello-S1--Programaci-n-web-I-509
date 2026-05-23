
const url = "https://6a03dbbc2afe8349b4b58ebc.mockapi.io/api/v1/Usuario"

async function getData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem:', error);
  }
}

const cardsContainer = document.querySelector("#cards");

const formatoFecha = new Intl.DateTimeFormat("es-CO", {
  dateStyle: "medium",
  timeStyle: "short"
});

function crearTarjeta(item) {
  const card = document.createElement("article");
  card.className = "card";

  const nombre = document.createElement("span");
  nombre.className = "badge";
  nombre.textContent = item.name;

  const avatar = document.createElement("img");
  avatar.className = "avatar";
  avatar.src = item.avatar;
  avatar.alt = `Avatar de ${item.name}`;

  const avatarValue = document.createElement("a");
  avatarValue.className = "avatar-link";
  avatarValue.href = item.avatar;
  avatarValue.target = "_blank";
  avatarValue.rel = "noopener noreferrer";
  avatarValue.textContent = `Avatar: ${item.avatar}`;

  const fecha = document.createElement("p");
  fecha.className = "fecha";
  fecha.textContent = `Fecha: ${formatoFecha.format(new Date(item.createdAt))}`;

  const id = document.createElement("p");
  id.className = "fecha";
  id.textContent = `ID: ${item.id}`;

  card.append(nombre, avatar, avatarValue, fecha, id);
  return card;
}

async function pintarTarjetas() {
  try {
    const data = await getData();

    if (!Array.isArray(data) || data.length === 0) {
      cardsContainer.innerHTML = "<p class='estado'>No hay datos para mostrar.</p>";
      return;
    }

    cardsContainer.innerHTML = "";
    data.forEach((item) => {
      cardsContainer.appendChild(crearTarjeta(item));
    });
  } catch (error) {
    cardsContainer.innerHTML = "<p class='estado'>No fue posible cargar la información.</p>";
    console.error(error);
  }
}

pintarTarjetas();

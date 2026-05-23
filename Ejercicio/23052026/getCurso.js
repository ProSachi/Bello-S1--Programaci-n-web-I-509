
const url = "https://6a11ae153e35d0f37ee3876b.mockapi.io/api/v1/ventas"

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
const formatoCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 2
});

const formatoFecha = new Intl.DateTimeFormat("es-CO", {
  dateStyle: "medium",
  timeStyle: "short"
});

function crearTarjeta(item) {
  const card = document.createElement("article");
  card.className = "card";

  const categoria = document.createElement("span");
  categoria.className = "badge";
  categoria.textContent = item.category;

  const valor = document.createElement("p");
  valor.className = "valor";
  valor.textContent = formatoCOP.format(Number(item.value));

  const fecha = document.createElement("p");
  fecha.className = "fecha";
  fecha.textContent = `Fecha: ${formatoFecha.format(new Date(item.date))}`;

  const id = document.createElement("p");
  id.className = "fecha";
  id.textContent = `ID: ${item.id}`;

  card.append(categoria, valor, fecha, id);
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

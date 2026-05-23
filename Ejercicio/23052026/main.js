import getData from "./getVentas.js"
/* 
function lanzarMoneda() {
  return new Promise((resolve, reject) => {
    const resultado = Math.random() > 0.5 ? 'cara' : 'sello';
    setTimeout(() => {
      if (resultado === 'cara') {
        resolve('¡Salió Cara! Ganaste.');
      } else {
        reject('Salió Sello. Perdiste.');
      }
    }, 1000);
  });
}

lanzarMoneda()
  .then(respuesta => console.log(respuesta))
  .catch(error => console.error(error));



  // Función tradicional
async function obtenerDatos() {
    return "Datos listos";
}

// Arrow function
const procesarPago = async () => {
    return "Pago procesado";
};


const cargarPerfil = async () => {
    console.log("1. Iniciando carga...");
    
    // El código se detiene aquí hasta que la API responda
    const respuesta = await buscarUsuarioEnBaseDeDatos(); 
    
    // Esta línea no se ejecuta hasta que la anterior termine
    console.log("2. Perfil cargado:", respuesta); 
}; */

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
    const data = await getData;

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
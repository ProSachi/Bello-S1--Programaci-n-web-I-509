const stats = [
  { label: "Ingresos del dia", value: "$ 8.920.000", trend: "+12% vs ayer" },
  { label: "Usuarios activos", value: "1.284", trend: "+3.1% en 24h" },
  { label: "Cursos vendidos", value: "97", trend: "+9 hoy" },
  { label: "Tickets soporte", value: "14", trend: "-2 pendientes" }
];

const activities = [
  "Se registro una compra premium desde canal web.",
  "Se asigno un nuevo tutor al curso de JavaScript.",
  "Usuario Karen Soto actualizo su avatar.",
  "Se genero respaldo automatico de base de datos.",
  "El equipo comercial supero la meta diaria."
];

const sales = [
  { client: "Laura Rios", channel: "Web", status: "Aprobada", value: "$ 420.000" },
  { client: "Daniel Mena", channel: "WhatsApp", status: "Pendiente", value: "$ 180.000" },
  { client: "Andrea Gil", channel: "Web", status: "Aprobada", value: "$ 760.000" },
  { client: "Javier Cata", channel: "Tienda", status: "Revisar", value: "$ 210.000" },
  { client: "Sofia Arias", channel: "Web", status: "Aprobada", value: "$ 390.000" }
];

const statsGrid = document.querySelector("#stats-grid");
const activityList = document.querySelector("#activity-list");
const salesBody = document.querySelector("#sales-body");

function renderStats() {
  stats.forEach((item) => {
    const card = document.createElement("article");
    card.className = "stat-card";

    const label = document.createElement("p");
    label.className = "stat-label";
    label.textContent = item.label;

    const value = document.createElement("p");
    value.className = "stat-value";
    value.textContent = item.value;

    const trend = document.createElement("p");
    trend.className = "stat-trend";
    trend.textContent = item.trend;

    card.append(label, value, trend);
    statsGrid.appendChild(card);
  });
}

function renderActivities() {
  activities.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    activityList.appendChild(li);
  });
}

function renderSalesTable() {
  sales.forEach((row) => {
    const tr = document.createElement("tr");

    const client = document.createElement("td");
    client.textContent = row.client;

    const channel = document.createElement("td");
    channel.textContent = row.channel;

    const status = document.createElement("td");
    status.textContent = row.status;

    const value = document.createElement("td");
    value.textContent = row.value;

    tr.append(client, channel, status, value);
    salesBody.appendChild(tr);
  });
}

renderStats();
renderActivities();
renderSalesTable();

let vida = 3;
let dado = 0;
do {
    console.log(`Tienes ${vida} de vida `);
    console.log(`Preparando lanzamiento de dado `);
    console.log(`Lanzando dados `);
    dado = lanzamiento()
        console.log(`El numero en este lanzamiento es ${dado}`);
    if (dado === 1) {
        console.log("Pierdes una vida");
        vida--;
    } else if (dado === 6) {
        console.log("Ganaste");
        break;
    } else {
        console.log("Sigue lanzando para ganar, no pierdes vidas");
    }
    if (vida <= 0) {
        console.log("Has perdido te quedas sin vidas");
    }
} while (vida > 0);

function lanzamiento() {
  return  Math.floor(Math.random() * 6) + 1;
}
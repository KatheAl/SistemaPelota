const NP = 100;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  for (let i = 0; i < NP; i++) {
    pelota = new Pelota
    pelotas.push(pelota);
  }
  
}

function draw() {
  background(150);
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].actualizar();
    pelotas[i].visualizar();
  }
  }

 



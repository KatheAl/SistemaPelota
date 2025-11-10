const NP = 10;
let pelotas = [];
let rectangulos = [];
let cuadrados = [];
let elipses = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  for (let i = 0; i < NP; i++) {
    pelota = new Pelota
    pelotas.push(pelota);
    rectangulo = new Pelota
    rectangulos.push(rectangulo);
    cuadrado = new Pelota
    cuadrados.push(cuadrado);
    elipse = new Pelota
    elipses.push(elipse);
  }
  
}

function draw() {
  background(150);
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].actualizar();
    rectangulos[i].actualizar();
    elipses[i].actualizar("ellipse");
    cuadrados[i].actualizar("square");
    pelotas[i].visualizar("circle");
    rectangulos[i].visualizar("rect");
    elipses[i].visualizar("ellipse");
    cuadrados[i].visualizar("square");
  }
  }

 



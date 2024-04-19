let img;  // Variable para almacenar la imagen
let X = 0;  // Posición inicial en X de la imagen
let Y = 0;  // Posición inicial en Y de la imagen
let tamaño = 5;  // Tamaño del paso para mover la imagen

function setup() {
  createCanvas(400, 400);
  img = loadImage('Logo.png'); // Cargar la imagen
  img.resize(400, 400);  // Ajusta este tamaño según lo que necesites
}

function draw() {
  background(255);
  image(img, X, Y); // Dibujar la imagen en la posición actual
}

function keyPressed() {
  if (key === 'a' || key === 'A') { // Mover hacia la izquierda
    X -= tamaño;
  } else if (key === 'd' || key === 'D') { // Mover hacia la derecha
    X += tamaño;
  } else if (key === 'w' || key === 'W') { // Mover hacia arriba
    Y -= tamaño;
  } else if (key === 's' || key === 'S') { // Mover hacia abajo
    Y += tamaño;
  }
}

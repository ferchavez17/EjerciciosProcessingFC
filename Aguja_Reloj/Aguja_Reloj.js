let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Establecer el modo de ángulos a grados
}

function draw() {
  background(255);
  
  // Dibuja el reloj
  translate(width / 2, height / 2); // Mover el origen al centro del canvas
  rotate(angle); // Rotar el canvas
  
  // Dibuja la aguja del reloj
  strokeWeight(2);
  stroke(0);
  line(0, 0, 100, 0); // Dibuja la línea desde el centro hacia la derecha
  
  angle += 1; // Incrementa el ángulo para la rotación
  
  // Reiniciar el ángulo después de una vuelta completa
  if (angle >= 360) {
    angle = 0;
  }
}

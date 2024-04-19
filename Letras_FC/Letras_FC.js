function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0);
  strokeWeight(4);
}

function draw() {
  // Dibujar la letra "F"
  line(50, 50, 50, 150); // línea vertical
  line(50, 50, 100, 50); // línea superior
  line(50, 100, 100, 100); // línea media
  
  // Dibujar la letra "C"
  let x = 200;
  let y = 100;
  let radio = 50;
  let anguloInicio = PI / 6; // 30 grados
  let anguloFin = 11 * PI / 6; // 330 grados
  arc(x, y, radio * 2, radio * 2, anguloInicio, anguloFin);
  
  noLoop(); // Detener el dibujo después de una iteración
}

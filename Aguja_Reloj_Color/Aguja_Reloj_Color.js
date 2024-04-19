let angulo = 0; // Ángulo inicial (en grados)
let longitud = 150; // Longitud de la línea
let velocidad = 1; // Velocidad de rotación
let colores; // Array de colores para la transición

function setup() {
  createCanvas(400, 400);
  colores = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)]; // Rojo, verde, azul
}

function draw() {
  //background(255);
  
  // Calcula las coordenadas del extremo de la línea
  let x2 = width / 2 + longitud * cos(radians(angulo));
  let y2 = height / 2 + longitud * sin(radians(angulo));
  
  // Transición de color
  let colorActual = lerpColor(colores[0], colores[1], angulo / 360);
  
  // Dibuja la línea desde el centro hasta el extremo con el color actual
  stroke(colorActual);
  line(width / 2, height / 2, x2, y2);
  
  // Incrementa el ángulo para la próxima iteración
  angulo += velocidad;
  
  // Reinicia el ángulo cuando alcanza 360 grados
  if (angulo >= 360) {
    angulo = 0;
    // Cambia los colores para la siguiente transición
    colores.push(colores.shift()); // Mueve el primer color al final del array
  }
}

//Desarrollador frontend Junior

//HTML5 semantico
//CSS3 Flexbox, Grid, Position como minimo
//JS Fundamental
//Ingles Intermedio (B2)
//10 años de experiencia
// Edad 18 a 40

//Primer concursante
let html5 = false;
let css3 = false;
let js = false;
let ingles_b2 = true;
let frances_b2 = false;
let exp = 2;
let edad = 28;

// && ampersand AND (Todas las condiciones se deben cumplir)
// || OR (Con una condicion que se cumpla, todo bien)

// HTML5, CSS3 y JS obligatorio, opcional ingles_b2

if (html5 && css3 && js && exp >= 10 && edad >= 25 && edad <= 40) {
  // || en teclado español Alt Gr, Fn, Shift 1
  // || en teclado en inglés suele estar cerca de la tecla de borrar (backspace)
  console.log("Felicidades! Estas contratado!");
  // 1000 lineas
} else {
  console.log("Te llamaremos algun dia");
}

//FORMA ADECUADA DE HACERLO

let conocimientos_tecnicos = html5 && css3 && js;
let experiencia_requerida = exp >= 10;
let rango_edad = edad >= 25 && edad <= 40;

if (conocimientos_tecnicos && (experiencia_requerida || rango_edad)) {
  // || en teclado español Alt Gr, Fn, Shift 1
  // || en teclado en inglés suele estar cerca de la tecla de borrar (backspace)
  console.log("Felicidades! Estas contratado!");
  // 1000 lineas
} else {
  console.log("Te llamaremos algun dia");
}

//Codigo para verificar requisitos, forma cuestionable de hacerlo.

let numeroDeDia = 500; //0 es Lunes 6 es domingo
console.log("Dias con if");
if (numeroDeDia == 0) {
  console.log("Hoy es Lunes");
}
if (numeroDeDia == 1) {
  console.log("Hoy es Martes");
}
if (numeroDeDia == 2) {
  console.log("Hoy es Miercoles");
}
if (numeroDeDia == 3) {
  console.log("Hoy es Jueves");
}
if (numeroDeDia == 4) {
  console.log("Hoy es Viernes");
}
if (numeroDeDia == 5) {
  console.log("Hoy es Sabado");
}
if (numeroDeDia == 6) {
  console.log("Hoy es Domingo");
}

/* if (true) {
    console.log("Hoy es Domingo");
  } */

console.log("Dias con switch");
switch (numeroDeDia) {
  case 0:
    console.log("Hoy es lunes");
    //1000 lineas de codigo que quieras
    break;
  case 1:
    console.log("Hoy es martes");
    break;
  case 2:
    console.log("Hoy es miercoles");
    break;
  case 3:
    console.log("Hoy es jueves");
    break;
  case 4:
    console.log("Hoy es viernes");
    break;
  case 5:
    console.log("Hoy es sabado");
    break;
  case 6:
    console.log("Hoy es domingo");
    break;
  default:
    console.log("Este no es ningun dia")
    break;
}

// El resto del codigo

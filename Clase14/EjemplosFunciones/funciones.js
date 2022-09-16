function saludar() {
  console.log("Hola a todos!");
}

function saludarConRetorno() {
  return "Hola a todos con Retorno!";
}

function saludarDefinitivo() {
  saludar(); //Hola a todos!
  const resultado = saludarConRetorno(); //Hola a todos con Retorno!
  console.log(resultado);
}

//saludarDefinitivo();

function saludar_a_alguien(nombre,apellido){
    console.log("Hola "+nombre+" "+apellido+", ¿Cómo estás?");
}

//saludar_a_alguien("Carlos","Gonzales");
//SOLID 

function SumarYSaludarMejorado(nombre,num1,num2){
    let resultado= num1+num2;
    
    alert("Saludos "+nombre+", veo que eres nuevo en programación.");
    alert("Te felicito por tu progreso, como desarrollador web");
    alert("Sigue así ;D");
    alert("Sin más que agregar, aquí está tu resultado: "+ resultado);
}



/* const numero1= parseInt(prompt("Primer numero"));
const numero2= parseInt(prompt("Segundo numero")); */
const nombre="Stefano";

//SumarYSaludarMejorado("Stefano",numero1,numero2)



console.log()


/* function log(){
    // 1000 codigo
}

function log(mensaje){
    //1000 codigo    
} */

//console.log("ASdasdasd")



/* function otroSumar(num1,num2){
    return num1+num2;
} */
//sumarTotalDeProductos
//sumarTotalDeCompra
function sumar(num1,num2){
    let resultado= num1+num2;

    return resultado;
}
function saludar(mensaje){
    alert(mensaje);
}

let resultado=sumar(2,2);
saludar("Hola, tu resultado es: "+ resultado)
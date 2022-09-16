function funcion2(){
    console.log("Hola soy funcion 2")
}

const funcion3= ()=>{
    console.log("Hola soy funcion 3")
}

function funcion1(callback1,callback2){
    callback1();
    callback2();
}

funcion1(funcion2,funcion3);
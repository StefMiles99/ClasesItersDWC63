/* const nota_CSS = 3; */
/* 
const aprobado = nota_CSS>6; */


/* if(aprobado){
    console.log("He aprobado!");
}
else{
    console.log("No he aprobado!");
} */

/* if(!aprobado){
    console.log("No he aprobado");
}
else{
    console.log("Si he aprobado");
}

 */

let nombre = null;

nombre= "Stefano";

if(!nombre){
    console.log("Campo requerido!");
}

const form_login ={
    usuario:"",
    pass:null,
    /* codigo_telefono:"" */
}

console.log(form_login.usuario);

// Clausulas de Guarda

if(!form_login.usuario){
    console.log("El usuario es requerido");
}
if(!form_login.pass){
    console.log("El password es requerido");
}
if(!form_login.codigo_telefono){
    console.log("Codigo de seguridad requerido");
}

//NUNCA HACER ESTE TIPO DE CODIGOS ANIDADOS
/* if(form_login.usuario){
    console.log("El usuario es requerido");
    if(form_login.pass){
        console.log("El password es requerido");
        if(form_login.codigo_telefono){
            console.log("Codigo de seguridad requerido");
        }
    }
} */

console.log(form_login.variablequenoexiste);


const respuesta={
    usuario:{
        id:1,
        nombre:"Carlos",
        edad:20,
        rol: "Admin"
    },
    fecha:"",
    mas_datos:[

    ]
} // OBJETO JSON 

const respuesta_fallida={
    error:{
        mensaje:"Contraseña incorrecta"
    }
}

let respuesta_desconocida=respuesta_fallida; 


if(respuesta_desconocida.usuario){
    console.log("Bienvenido "+ respuesta_desconocida.usuario.nombre)
}

if(!respuesta_desconocida.usuario){
    console.log("Error al iniciar sesion")
}


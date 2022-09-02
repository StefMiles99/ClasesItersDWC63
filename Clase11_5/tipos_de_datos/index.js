let numero_entero= 12133 //number otros lenguajes:int/integer
let numero_decimal= 3.1415926535 //number  otros lenguajes:double/float/decimal
let nombre= "Pablo" // String= Cadena  
let logicos= true // Boolean = Algebra de Boole
let nombres= ["Ervin","Alexis","Alex","David","Adrian"] //Arrays
let numerosPrimos= [1,3,5,7,13,17] //Arrays
let respuestas_correctas= [true,true,true,false,false] //Arrays
let conjunto_variado= ["Pablo",15,true]
let alumnos_array= [["Ervin",25],["Alexis",22],["Alex",32],["David",40]] //Arrays
let alumno={
    nombre:"Carlos",
    edad:45,
    genero:"M",
    clase:"Frontend"
}// Elegimos las propiedades del objeto del mundo real a traves del proceso de abstraccion

nombres[5]= 'Eduardo'
console.log("Uno de mis amigos es: "+nombres[5]);

console.log("Uno de mis alumnos es:" + alumnos_array[3][0] )

console.log("Nuevo alumno registrado:" + alumno.nombre)

//Objeto complejo

pc_gamer={
    motherboard:"MarcaX",
    RAM:{
        tipo:"DDR6",
        capacidad:"16GB"
    },
    CPU:{
        marca:"Intel",
        modelo:"i9 9na"
    },
    propietario:{
        nombre:"Stefano",
        edad:"Desconocida",
        experiencia_laboral:[
            "Profesor de programacion",
            "Desarrollador web",
            "Ingeniero de datos"
        ],
        animales_favoritos:[
            {
                tipo:"mamifero",
                especie:"ballena"
            },
            {
                tipo:"reptil",
                especie:"Cocodrilo"
            }
        ]
    }
}

console.log("Ultima compra realizada, una PC Gamer de: "+ pc_gamer.propietario.nombre)
console.log("Su ultimo trabajo es: "+ pc_gamer.propietario.experiencia_laboral[0])
console.log("El primer animal en el que penso es: "+ pc_gamer.propietario.animales_favoritos[0].especie)

console.log(pc_gamer)

grid_servicios=[
    {
        titulo:"01.Responsive Layout",
        subtitulo: " Responsive layout design ...",
        detalles: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        titulo:"02. Javascript",
        subtitulo: " Responsive layout design ...",
        detalles: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        titulo:"03. Despliegue de apps web",
        subtitulo: "...",
        detalles: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

menu_krozo= {
    logo:"./img/logo.png",
    opciones:[
        {
            texto:"Home",
            link:"./paginas/index.html"
        },
        {
            texto:"Services",
            link:"./paginas/services.html"
        }
    ],
    social:[
        {
            icono:"fa fa-facebook",
            link:"facebook.com/mipaginagenial"
        }
    ]
}
console.log(menu_krozo.opciones[0].texto);
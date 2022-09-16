const listaCompras=[
    {
        id:12312421,
        nombre:"Pan",
        precio:1
    },
    {
        id:12421512,
        nombre:"Leche",
        precio:3
    },
    {
        id:126126,
        nombre:"Yogurt",
        precio:1
    }
]

/* const mensaje="hola mundo";
//:string retorna string, si es :void, no retorna nada.
const mensajeEnMayusculas= mensaje.toUpperCase();

console.log(mensaje); */

/* function ImprimirProducto(producto){
    console.log("nombre:"+producto.nombre);
    console.log("precio:"+producto.precio);
    console.log("");
} */

listaCompras.forEach(
    (producto/* ,posicion,TodosLosProductos */)=>{
        //console.log("Producto numero "+posicion);
        console.log("nombre:"+producto.nombre);
        console.log("precio:"+producto.precio);
        console.log("")
        //console.log(TodosLosProductos);
    }
)
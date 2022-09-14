//For of sirve para recorrer objetos iterables
//objeto iterable= Array 

const productos= [
    {
        id:"12312",
        nombre:"Queso",
        precio:2
    },
    {
        id:"12312",
        nombre:"Carne",
        precio:5
    },
    {
        id:"12312",
        nombre:"Leche",
        precio:3
    },
    {
        id:"12312",
        nombre:"Otra Leche",
        precio:3
    },
    {
        id:"12312",
        nombre:"Fruta1",
        precio:3
    },
    {
        id:"12312",
        nombre:"Fruta2",
        precio:3
    },
    {
        id:"12312",
        nombre:"Fruta3",
        precio:3
    },
    {
        id:"12312",
        nombre:"Fruta3",
        precio:3
    }
    ,
    {
        id:"12312",
        nombre:"Fruta3",
        precio:3
    }
]

for(let producto of productos){
    console.log(producto.nombre);
    // 1000 lineas codigo...
}
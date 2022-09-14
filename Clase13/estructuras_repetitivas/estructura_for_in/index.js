// key

/*
    Español
    objeto{
        clave:valor
    }

    Spanglish
    objeto{
        key:value
    }
*/
const estudiante={
    id:123213,
    nombre:"Jose",
    edad:18,
    genero:"M"
}

//const clave="genero"

//console.log(estudiante[clave])

for(let propiedad in estudiante ){
    console.log(propiedad+":" + estudiante[propiedad]) 
}




//const promesaRespuesta= fetch("http://localhost:3000/usuarios");

/* const respuestaMala= promesaRespuesta.then(
    (respuestaReal)=>{
    const promesaJSON =respuestaReal.json()
    promesaJSON.then(
        (usuarios)=>{
            console.log(usuarios)
        }
    )
})
 */
/* const respuestaBuena= promesaRespuesta.then(
    (respuestaReal)=>{
        return respuestaReal.json();
    }
).then(
    (usuarios)=>{
        console.log(usuarios)
    }
)
 */
const funcionAsincrona = async ()=>{
    const respuesta= await fetch("http://localhost:3000/usuarios");
    const usuarios= await respuesta.json();
    console.log(usuarios);
}

async function funcionNormal(){
    
}

funcionAsincrona();

//console.log(respuestaBuena);

//funcionMostrarUsuarios();

//funcionMostrarFooter();

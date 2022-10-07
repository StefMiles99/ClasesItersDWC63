const express = require("express");
const cors = require("cors");

const app = express();

const port = 3000;

//Linea de configuracion para permitir a nuestra API recibir JSON 
app.use(
    express.json()
);

app.use(
    cors()
);

app.get("/saludo",(req,res)=>{
    res.json({
        mensaje:"HOLA MUNDO"
    });
})

app.post("/ejemplo_post",(req,res)=>{
    res.json(
        {
            mensaje:"POST FUNCIONANDO MODIFICADO!"
        }
    )
})

app.get("/usuarios",(req,res)=>{
    res.json(
        [
            {
                nombre:"usuario1",
                email:"usuario1@gmail.com"
            },
            {
                nombre:"usuario2",
                email:"usuario2@gmail.com"
            }
        ]
    )
})

app.post("/usuarios",(req,res)=>{
    console.log(req.body)
    res.json({
        mensaje :"TODO BIEN!"
    })
})

app.put("/usuarios/:id",(req,res)=>{
    const { usuario,email }=req.body;
    const {id} = req.params;
    
    console.log("El usuario "+ id +" se ha modificado con los siguientes datos:")
    console.log("Usuario: "+usuario);
    console.log("Email: "+email);

    res.json({
        mensaje :"TODO BIEN!"
    })
})
app.delete("/usuarios/:id",(req,res)=>{
    const {id} = req.params;

    res.json(
        {
            mensaje: `El usuario ${id} se ha eliminado`
        }
    )
})


app.listen(
    port,()=>{
        console.log("Servidor iniciado!");
    }
)
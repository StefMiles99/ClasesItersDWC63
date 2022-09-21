const perro={
    nombre:"Zeus",
    raza:"Galgo",
    edad:2,
    sexo:"Macho",
    ladrar:()=>{
        console.log("guau guau");
    },
    dormir (){
        console.log("Zzzzzz");
    }
}

console.log(perro.nombre)
console.log(perro.raza);

perro.ladrar();
perro.dormir();
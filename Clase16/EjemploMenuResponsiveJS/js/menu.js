const menuIcon= document.querySelector(".menuIcon");



menuIcon.addEventListener("click",()=>{
    const opciones = document.querySelector("header .menu .opciones");
    opciones.classList.toggle("activo")
    document.body.classList.toggle("no_scroll");
})
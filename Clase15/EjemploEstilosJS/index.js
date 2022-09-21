const divGenial = document.querySelector(".cuadrado");

divGenial.addEventListener("click", () => {
  const esAzul = divGenial.classList.contains("azul");

  //ESTO ES UNA CLAUSULA DE GUARDA, PARA NO USAR ELSE ;D
  if (!esAzul) {
    divGenial.classList.remove("rojo");
    divGenial.classList.add("azul");
    return;
  }

  divGenial.classList.remove("azul");
  divGenial.classList.add("rojo");
});

let botonaso = document.getElementById("Ir");

botonaso.addEventListener("click", () => {
  let direccion: number = Number(pasito.value);

  switch (direccion) {
    case 1:
      location.href = "../ejerciciosProg/fibonacci.html";
      break;

    default:
      console.log("que onda we no carga");
      break;
  }
});

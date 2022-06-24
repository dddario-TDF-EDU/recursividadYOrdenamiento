let botonaso = document.getElementById("Ir");

botonaso.addEventListener("click", () => {
  let direccion: number = Number(pasito.value);

  switch (direccion) {
    case 1:
      location.href = "../ejerciciosProg/fibonacci.html";
      break;
    case 2:
      location.href = "../ejerciciosProg/invertirArrayRecursivo.html";
      break;
    case 3:
      location.href = "../ejerciciosProg/ordenamientoBurbuja.html";
      break;
    case 4:
      location.href = "../ejerciciosProg/ordenarPorDosCriterios.html";
      break;

    default:
      console.log("que onda we no carga");
      break;
  }
});

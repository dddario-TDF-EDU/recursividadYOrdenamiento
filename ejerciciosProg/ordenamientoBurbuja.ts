let botonBurbuja = document.getElementById("burbuja");

function esNum(numero: number): boolean {
  let datoValido: boolean = !isNaN(numero);
  if (datoValido === true) {
    return datoValido;
  } else {
    datoValido = false;
    return datoValido;
  }
}

function crearArray(array: number[]) {
  let tamanio: number = Number(prompt("ingrese el tamaño del array"));
  for (let index: number = 0; index < tamanio; index++) {
    array[index] = 0;
  }
}

function cargarArray(array: number[]) {
  let aux: number;
  for (let index: number = 0; index < array.length; index++) {
    aux = Number(prompt("ingrese el numero"));
    while (esNum(aux) === false) {
      alert("no es un numero");
      aux = Number(prompt("ingrese el numero"));
    }
    array[index] = aux;
  }
}

function ordenarArray(array: number[]) {
  let aux: number;
  let index: number = 0;
  while (index < array.length) {
    if (array[index] > array[index + 1]) {
      aux = array[index];
      array[index] = array[index + 1];
      array[index + 1] = aux;
    }
    index++;
  }
}

botonBurbuja?.addEventListener("click", () => {
  let arrayDesorden: number[];
  crearArray(arrayDesorden);
  cargarArray(arrayDesorden);
  console.log("array de salida " + arrayDesorden);
  ordenarArray(arrayDesorden);
  console.log("array ordenado: " + arrayDesorden);
});

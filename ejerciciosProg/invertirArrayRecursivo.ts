let botonRecursivo = document.getElementById("recursiva");

function esNum(numero: number): boolean {
  let datoValido: boolean = !isNaN(numero);
  if (datoValido === true) {
    return datoValido;
  } else {
    datoValido = false;
    return datoValido;
  }
}

function alReves(array, num: number, posCambio: number): number[] {
  let aux: number;
  if (posCambio > num) {
    return array;
  } else if ((array.length % 2 === 0) === true) {
    aux = array[num - posCambio];
    array[num - posCambio] = array[num + posCambio + 1];
    array[num + posCambio + 1] = aux;
    console.log("se intercambio" + aux);
    console.log("el arr ahora" + array);
    alReves(array, num, posCambio + 1);
  } else {
    aux = array[num - posCambio];
    array[num - posCambio] = array[num + posCambio + 2];
    array[num + posCambio + 2] = aux;
    console.log("se intercambio" + aux);
    console.log("el arr ahora" + array);
    alReves(array, num, posCambio + 2);
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

botonRecursivo?.addEventListener("click", () => {
  let arrayCargado: number[] = new Array();
  crearArray(arrayCargado);
  cargarArray(arrayCargado);

  let mitadArray: number = Math.floor(arrayCargado.length / 2) - 1;
  console.log(arrayCargado);
  console.log(mitadArray);
  //console.log("devolviendo recursivo");
  arrayCargado = alReves(arrayCargado, mitadArray, 0);
  console.log(arrayCargado);
});

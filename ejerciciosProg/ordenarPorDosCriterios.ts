let tripleIngreso = document.getElementById("ingresoArrays");
let botonOrdenar = document.getElementById("ordenaArrays");

//tomar array altura
//tomar array edad
//tomar array nombre
//los arrays estan relacionados
//mostrar el array de entrada
//ordenar en base a edad, si son iguales desempatar en base a altura
//mostrar el array de salida

function esNum(numero: number): boolean {
  let datoValido: boolean = !isNaN(numero);
  if (datoValido === true) {
    return datoValido;
  } else {
    datoValido = false;
    return datoValido;
  }
}

function edadRandom(): number {
  let aux: number = Math.floor(Math.random() * (20 - 10) + 10);
  return aux;
}

function alturaRandom(): number {
  let aux: number = Math.floor(Math.random() * (20 - 15) + 15);
  return aux;
}

function cargarNombres(nombre: string[], posicion: number) {
  nombre[posicion] = String(
    prompt("Por favor ingrese el nombre del cliente n°" + (posicion + 1))
  );
}

function cargarEdad(edad: number[], posicion: number) {
  // let auxEdad: number;
  // auxEdad = Number(
  //   prompt("Por favor ingrese la edad del cliente n°" + (posicion + 1))
  // );
  // while (esNum(auxEdad) === false) {
  //   alert("dato invalido, intente nuevamente");
  //   auxEdad = Number(
  //     prompt("Por favor ingrese la edad del cliente n°" + (posicion + 1))
  //   );
  // }
  edad[posicion] = edadRandom();
}

function cargarAltura(altura: number[], posicion: number) {
  // let auxAltura: number;
  // auxAltura = Number(
  //   prompt(
  //     "Por favor ingrese la altura del cliente n°" +
  //       (posicion + 1) +
  //       " en centimetros"
  //   )
  // );
  // while (esNum(auxAltura) === false) {
  //   alert("dato invalido, intente nuevamente");
  //   auxAltura = Number(
  //     prompt(
  //       "Por favor ingrese la edad del cliente n°" +
  //         (posicion + 1) +
  //         " en centimetros"
  //     )
  //   );
  // }
  altura[posicion] = alturaRandom();
}

function cargaArrays(
  arrayNombres: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  tamanho: number
) {
  alert("Comienza carga de clientes");
  for (let index: number = 0; index < tamanho; index++) {
    cargarNombres(arrayNombres, index);
    cargarEdad(arrayEdad, index);
    cargarAltura(arrayAltura, index);
  }
}

function comparador(arrayEdad: number[], arrayAltura: number[], i: number) {
  let comparacion: number = 0;

  if (arrayEdad[i] > arrayEdad[i + 1]) {
    comparacion = 1;
  } else if (arrayEdad[i] === arrayEdad[i + 1]) {
    if (arrayAltura[i] > arrayAltura[i + 1]) {
      comparacion = 1;
    } else if (arrayAltura[i] < arrayAltura[i + 1]) {
      comparacion = -1;
    }
  } else {
    comparacion = -1;
  }

  return comparacion;
}

function intercambioNumeros(array: number[], index: number) {
  let aux: number;
  aux = array[index];
  array[index] = array[index + 1];
  array[index + 1] = aux;
}

function intercambioNombres(array: string[], index: number) {
  let aux: string;
  aux = array[index];
  array[index] = array[index + 1];
  array[index + 1] = aux;
}

function ordenar(
  arrayNombres: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  tamanho: number
) {
  for (let i: number = 1; i < tamanho; i++) {
    for (let index: number = 0; index < tamanho - i; index++) {
      if (comparador(arrayEdad, arrayAltura, index) === 1) {
        intercambioNumeros(arrayEdad, index);
        intercambioNombres(arrayNombres, index);
        intercambioNumeros(arrayAltura, index);
      }
    }
  }
}

let listaNombres: string[];
let listaEdades: number[];
let listaAlturas: number[];
let tamanhoArray: number;

tripleIngreso.addEventListener("click", () => {
  tamanhoArray = Number(prompt("ingrese el tamaño del array"));

  if (esNum(tamanhoArray) === true) {
    listaNombres = new Array(tamanhoArray);
    listaEdades = new Array(tamanhoArray);
    listaAlturas = new Array(tamanhoArray);
    cargaArrays(listaNombres, listaEdades, listaAlturas, tamanhoArray);
    console.log("Lista de nombres:");
    console.log(listaNombres);
    console.log("Lista de edades:");
    console.log(listaEdades);
    console.log("Lista de alturas:");
    console.log(listaAlturas);
  } else {
    alert("dato incorrecto, intente nuevamente");
  }
});

botonOrdenar.addEventListener("click", () => {
  ordenar(listaNombres, listaEdades, listaAlturas, tamanhoArray);
  console.log("Lista de nombres ordenada:");
  console.log(listaNombres);
  console.log("Lista de edades ordenada:");
  console.log(listaEdades);
  console.log("Lista de alturas ordenada:");
  console.log(listaAlturas);
});

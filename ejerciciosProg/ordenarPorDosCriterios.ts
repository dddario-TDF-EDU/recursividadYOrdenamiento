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
  nombre[posicion] = prompt(
    "Por favor ingrese el nombre del cliente n°" + (posicion + 1)
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

function intercambioNumeros(array: number[], index) {
  let aux: number;
  aux = array[index];
  array[index] = array[index + 1];
  array[index + 1] = aux;
}

function intercambioNombres(array: string[], index) {
  let aux: string;
  aux = array[index];
  array[index] = array[index + 1];
  array[index + 1] = aux;
}

function ordenarPorEdad(
  arrayNombres: string[],
  arrayEdad: number[],
  arrayAltura: number[],
  tamanho: number
) {
  let hayIntercambio: boolean;
  for (let i: number = 1; i < tamanho; i++) {
    for (let index: number = 0; index < tamanho - i; index++) {
      hayIntercambio = false;
      if (
        arrayEdad[index] > arrayEdad[index + 1] ||
        arrayEdad[index] === arrayEdad[index + 1]
      ) {
        if (arrayEdad[index] > arrayEdad[index + 1]) {
          intercambioNumeros(arrayEdad, index);
          console.log("se intercambio " + arrayEdad[index]);
          hayIntercambio = true;
        } else {
          if (arrayAltura[index] > arrayAltura[index + 1]) {
            intercambioNumeros(arrayEdad, index);
            hayIntercambio = true;
          }
        }
      }
      if (hayIntercambio === true) {
        intercambioNumeros(arrayAltura, index);
        intercambioNombres(arrayNombres, index);
      }
    }
  }
}

let listaNombres: string[] = new Array();
let listaEdades: number[] = new Array();
let listaAlturas: number[] = new Array();
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
  ordenarPorEdad(listaNombres, listaEdades, listaAlturas, tamanhoArray);
  console.log("Lista de nombres ordenada:");
  console.log(listaNombres);
  console.log("Lista de edades ordenada:");
  console.log(listaEdades);
  console.log("Lista de alturas ordenada:");
  console.log(listaAlturas);
});

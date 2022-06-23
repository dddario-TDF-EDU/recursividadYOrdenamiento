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

function cargarArray(array[]) {
  let condicionCierre: boolean = false;
  let index: number = 0;
  let aux: number;
  while (condicionCierre === false) {
    aux = Number(prompt("ingrese su numero"));
    if (esNum(aux) === true) {
      array[index] = aux;
      index++;
    } else {
      condicionCierre = true;
    }
  }
}

function alReves(array,num,tamanio):number[]{
  let aux:number;
  if (num===tamanio){
    return array;
  } else if (tamanio%2===0){
    aux=array[num];
    array[num]=array[num+1];
    array[num+1]=aux;
    alReves(array,num+2,tamanio);
  } else {
    aux=array[num+1];
    array[num+1]=array[num-1];
    array[num-1]=aux;
    alReves(array,num+1,tamanio);
  }
}

botonRecursivo?.addEventListener("click", () => {
  let arrayCargardo:number[]=new Array;
  //cargarArray(arrayCargardo);
  let condicionCierre: boolean = false;
  let index: number = 0;
  let aux: number;
  while (condicionCierre === false) {
    aux = Number(prompt("ingrese su numero"));
    if (esNum(aux) === true) {
      arrayCargardo[index] = aux;
      index++;
    } else {
      condicionCierre = true;
    }
  }
  
  let mitadArray:number=Math.floor(arrayCargardo.length/2);
  let largo:number=arrayCargardo.length;
  console.log(arrayCargardo);
  console.log("devolviendo recursivo");
  console.log(alReves(arrayCargardo,mitadArray,largo));

});

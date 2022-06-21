let botonRecursivo = document.getElementById("recursiva");
let botonSecuencial = document.getElementById("secuencial");

function calculoRecursivo(num: number): number {
  if (num === 0 || num === 1) {
    return num;
  } else {
    return calculoRecursivo(num - 1) + calculoRecursivo(num - 2);
  }
}

function calculoSecuencial(numEntrada: number) {
  let aux: number = numEntrada;
  let numIndice: number = 1;
  let sumatoria: number = 0;
  if (numEntrada === 0 || numEntrada === 1) {
    console.log("el resultado es: " + numEntrada);
  } else {
    while (numIndice < numEntrada) {
      sumatoria += sumatoria + 1;
      numIndice += 1;
    }
    console.log("el resultado es: " + sumatoria);
  }
}

//Fibonacci(n) = Fibonacci(n - 1) + Fibonacci(n - 2);

botonRecursivo.addEventListener("click", () => {
  let resultado: number;
  resultado = calculoRecursivo(Number(prompt("ingrese el numero a calcular")));
  console.log("el resultado es: " + resultado);
});

botonSecuencial.addEventListener("click", () => {
  calculoSecuencial(Number(prompt("ingrese el numero a calcular")));
});

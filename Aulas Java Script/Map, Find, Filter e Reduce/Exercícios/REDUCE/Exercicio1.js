//! REDUCE
//? => Calculo total de valores
const valores = [100, 200, 50, 150];

const valorTotal = valores.reduce((acumulador, valor) => acumulador + valor, 0); 
console.log(valorTotal)
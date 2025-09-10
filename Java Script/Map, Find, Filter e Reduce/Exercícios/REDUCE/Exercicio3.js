//! REDUCE
//? => Calculo de media
const numeros = [1, 2, 3, 4, 5];

const numerosMedia = numeros.reduce((total, numero) => total + numero, 0) / numeros.length
console.log("A media e: " + numerosMedia)

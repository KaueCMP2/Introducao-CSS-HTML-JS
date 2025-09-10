//! MAP
//? => Converter em numeros elevados
const numeros = [1, 2, 3, 4];
prefixo = "O numero: ";

const numerosElev = numeros.map(elevado => prefixo + elevado * elevado)
console.log(numerosElev)
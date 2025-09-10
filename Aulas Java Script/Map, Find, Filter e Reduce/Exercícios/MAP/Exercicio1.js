//! MAP
//? => Converter em fahrenheit
const temperaturas = [20, 25, 30, 15];

const temperaturasFahren = temperaturas.map(temperaturas => temperaturas  * 1.8 + 32);
console.log(temperaturasFahren);
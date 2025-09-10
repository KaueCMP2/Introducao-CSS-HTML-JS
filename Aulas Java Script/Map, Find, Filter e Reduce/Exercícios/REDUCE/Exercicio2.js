//! REDUCE
//? => Juncao de palavras
const palavras = ["JS ", " é ", " muito ", " legal"];

const palavrasJunc = palavras.reduce((acumulador, palavra) => acumulador + palavra);
console.log(palavrasJunc);
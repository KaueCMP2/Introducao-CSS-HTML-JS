//! FILTER
//? => palavras com menos de (4) letras
const palavras = ["sol", "mar", "computador", "lua", "código"];

const palavrasLongas = palavras.filter(palavra => palavra.length >= 4)
console.log("Os nomes são: " + palavrasLongas)


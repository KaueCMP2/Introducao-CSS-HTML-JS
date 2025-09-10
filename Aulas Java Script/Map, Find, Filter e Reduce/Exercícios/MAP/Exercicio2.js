//! MAP
//? => Converter em minusculo e prefixo
const produtos = ["camisa", "calça", "sapato"];
const prefixo = "Produto: ";

const produtosConv = produtos.map(item => prefixo + item.charAt(0).toUpperCase() + item.slice(1));
console.log(produtosConv)
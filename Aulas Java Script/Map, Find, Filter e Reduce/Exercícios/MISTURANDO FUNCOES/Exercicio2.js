//! MISTURANDO FUNCOES
//? => - Criar lista de strings - Calcular valor total da compra - Encotrar produto.
const carrinho = [
  { produto: "Notebook", preco: 2500 },
  { produto: "Mouse", preco: 100 },
  { produto: "Teclado", preco: 200 }
];
const prefixoProd = "Produto"

let listStrings = carrinho.map(produtos => ` Produto: ${produtos.produto} R$:${produtos.preco},00 `);
console.log(listStrings);

let valorTotal = carrinho.reduce((acumulador, total) => acumulador + total.preco, 0)
console.log("O valor da total da compra sera: de R$: " + valorTotal + ",00")

let EncontrarProdt = carrinho.find(nomeProdt => nomeProdt.produto === "Mouse")
console.log(EncontrarProdt)


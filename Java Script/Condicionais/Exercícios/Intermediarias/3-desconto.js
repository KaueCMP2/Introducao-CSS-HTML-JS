let valorProduto = Number(prompt("Digite o valor do produto"))
valorProduto = parseInt(valorProduto)

if (valorProduto >= 100)
    alert("O desconto eh: R$" + (valorProduto * 0.1) + ",00 E o valor total eh: R$:" + (valorProduto * 0.1 + valorProduto) + ",00")

else
    alert("R$: " + valorProduto + ",00 Eh um valor muito baixo, sem desconto disponivel")
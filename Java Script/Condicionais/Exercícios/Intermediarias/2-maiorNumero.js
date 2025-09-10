let numero1 = Number(prompt("Digite o 1o numero"))
let numero2 = Number(prompt("Digite o 2o numero"))
let numero3 = Number(prompt("Digite o 3o numero"))

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)
numero3 = parseInt(numero3)

if (numero1 > numero2 && numero2 >= numero3)
    alert("O 1o Numero e o maior")

else if (numero2 > numero1 && numero1 >= numero3)
    alert("O 2o Numero e o maior")

else if (numero3 > numero2 && numero2 >= numero1)
    alert("O 3o Numero e o maior")

else 
    alert("Temos 2 ou mais numeros iguais")
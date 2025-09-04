let numero1 = parseInt(prompt("digite o 1o numero"))
let numero2 = parseInt(prompt("digite o 2o numero"))
let operacao = prompt("Digite qual sera a operacao")

if (operacao == "+")
    alert(numero1 + numero2)

else if (operacao == "-")
    alert(numero1 - numero2)

else if (operacao == "*" || operacao == "x")
    alert(numero1 * numero2)

else
    alert(numero1 / numero2)
let altura = prompt("Digite sua altura")
let peso = prompt("Digite seu peso")

altura = parseFloat(altura /100)
peso = parseFloat(peso)

imc = parseFloat(peso / (altura * altura))

if (imc <= 18.5)
    alert("Ta magrinho(a)")

else if (imc <24.9)
    alert("ta em forma")

else if (imc <29.9)
    alert("Mais pesado que o normal")

else if (imc <39.9)
    alert("Ta obeso")

else
    alert("Obesidade morbida")
let ladoA = Number(prompt("Digite o lado A"))
let ladoB = Number(prompt("Digite o lado B"))
let ladoC = Number(prompt("Digite o lado C"))

ladoA = parseInt(ladoA)
ladoB = parseInt(ladoB)
ladoC = parseInt(ladoC)

if (ladoA + ladoB <= ladoC || ladoB + ladoC <= ladoA || ladoC + ladoA <= ladoB)
    alert("Nao e um trinagulo")

else if(ladoA == ladoB && ladoB == ladoC)
    alert("Triangulo equilatero")

else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA)
    alert("Tringulo escaleno")

else if (ladoA == ladoB && ladoC !== ladoA || ladoB == ladoC && ladoA !== ladoB || ladoC == ladoA && ladoB !== ladoC)
    alert("Trinagulo isoceles")

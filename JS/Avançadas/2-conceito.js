let nota = Number(prompt("Digite a nota"))
nota = parseInt(nota)

if (nota > 100 || nota < 0)
    alert("Nota escede o limite total");

else if (nota >= 90 && nota <= 100 )
    alert("A");


else if (nota >= 80 && nota < 90)
    alert("B");


else if (nota >= 70 && nota < 80)
    alert("C");


else if (nota >= 60 && nota < 70)
    alert("D");

else
    alert("F");
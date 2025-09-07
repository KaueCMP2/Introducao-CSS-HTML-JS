//! exercicio 1 basico
//? => Contagem de 1 a 10
// let numero = 10

// for(let i = 0; i <= numero; i++)
// {
//     console.log("Contando: " + i)
// }

//! exercicio 2 basico
//? => Tabuada de um número
// let numeroDig = prompt("digite um numero")
// numeroDig = parseFloat(numeroDig)

// for(let i = 0; i <= 10; i++)
// {
//     let resultado = i * numeroDig;
//     console.log("O resultado e: " + resultado)
// }

//! exercicio 3 basico
//? => Soma dos primeiros N números naturais
// let numeroDig = Number(prompt("Digite um numero"))
// let i = 1;
// let soma = 0;

// while(i <= numeroDig){
//     soma += i
//     console.log("O numero atual: " + soma)
//     i++
// }

//! exrcicio 1 Intermediário
//? => Exibir os números pares de 1 a 50
//todo Resolução 1 (Nao pula o 0 sem pedir)
// let numP = 50;

// for (let i = 0; i <= numP; i++) {
//     if (!(i % 2) && i > 0)
//         console.log("numero: " + i)
// }

//! exrcicio 1 Intermediário
//? => Exibir os números pares de 1 a 50
//todo Resolução 2 (ja comeca do 2 e e mais compacto)
// let numP = 50;

// for (let i = 2; i <= numP; i += 2) {
//     console.log("Numero: " + i)
// }


//! exrcicio 2 Intermediário
//? => Jogo de adivinhação
//todo Resolução 1 (Sem numeros aleatorios, como seria)
// let palpite = Number(prompt("De um palpite"))
// let numeroCorreto = 21
// let aviso = 0;

// while (numeroCorreto !== palpite) {
//     console.log("Tentativa: " + aviso++)
//     palpite = Number(prompt("tente novamente"))
// }

// alert("Voce acertou, na tentativa: " + aviso)

//! exrcicio 2 Intermediário
//? => Jogo de adivinhação
//todo Resolução 2 (Com numeros aleatorios)
// let numeroCorreto = Math.floor(Math.random() * 100) + 1
// alert(numeroCorreto) && console.log(numeroCorreto)
// let palpite = Number(prompt("Digite um numero e teste sua sorte"))
// let aviso = 0

// while (numeroCorreto !== palpite) {
//     console.log("Tentativa" + aviso++)
//     palpite = Number(prompt("Errou, tente novamente"))
// } 
// alert("Parabens!!! voce acertou em " + aviso) 

//! exrcicio 3 Intermediário
//? => Contagem regressiva
// let numero = Number(prompt("Digite o numero para a contagem"))

// while (numero >= 0)
// {
//     console.log(numero--);
// }

//! exrcicio 1 avançado
//? => Soma dos dígitos de um número
//TODO Resolução 1 (codigo longo e baguncado)
//let valorT = Number(prompt("digite um valor inteiro ate 999"));
// let soma = 0
// let soma2 = 0
// let sobra = 0
// let sobra2 = 0
// let resultado = 0
// let i = 1

// while (i < valorT) {
//     i++

//     if (valorT > 0 && valorT < 99) {
//         soma = valorT % 10
//         sobra = Math.floor(valorT / 10)
//         resultado = soma + sobra

//         console.log(resultado)
//     }

//     else if (valorT > 100 && valorT < 999) {
//         soma = valorT % 10
//         sobra = Math.floor(valorT / 10)
//         soma2 = sobra % 10
//         sobra2 = Math.floor(valorT / 100)
//         resultado = soma + soma2 + sobra2

//         console.log(resultado)
//     }
// }

//! exrcicio 1 avançado
//? => Soma dos dígitos de um número
//TODO Resolução 2 (codigo curto e bem estruturado... GPT Que fez)
// let valorT = Number(prompt("digite um valor inteiro ate 999"));
// let somaTotal = 1;

// while (valorT > 0) //* Enquanto valorT > 0:
// {
//     let digito = valorT % 10; //* → pega o último dígito.
//     console.log(digito)
//     somaTotal += digito //*  → adiciona à soma total.
//     valorT = Math.floor(valorT / 10) //* → remove o último dígito.
// }

// console.log("A soma e: " + somaTotal)

//! exrcicio 2 avançado
//? => Fatorial
//todo Resolução 1 (FOR)
// let valor = Number(prompt("Digite um numero"))
// let valorF = 1

// for (let i = 1; i <= valor; i++) {
//     valorF = valorF * i;
//     console.log(valorF)
// }


//! exrcicio 2 avançado
//? => Fatorial
//todo Resolução 2 (WHILE)
// let valor = Number(prompt("Digite um numero")) //* Pede que digite um numero
// let valorF = 1; //* inicia valor Fatorial como 1
// let i = 1 //* inicia o i(que nesse caso e a mesma coisa que o 'i' no for) como 1

// while (i < valor) //* enquanto o i < valor... que vai servir para limitar a quatidade de vezes que se repete
// {
//     i++ //* Inicia a contagem por rotacao... ou seja o i seria 1,2,3...
//     valorF = valorF * i //* Valor Fatorial(valorF) e igual a valor fatorial x a rotacao atual do i.
//     console.log(valorF) //* mostra o resultado no console.
// }

//! exrcicio 3 avançado
//? => Invertido
//todo Resolução 1
// let valorT = Number(prompt("Digite um numero"))
// let digito = 0
// let somaTotal = 0
// let numeroInvertido = 0

// while (valorT > 0) {
// digito = valorT % 10 //* 1ro pega o ultimo digito o 3 do nomero 123
//                      //* 2do pega o ultimo digito o 2 do numero 32 
//                      //* 3ro pega o ultimo digito o 1 do numero 1

// numeroInvertido = numeroInvertido  * 10 + digito //* numero invertido = 0 * 10 + 3 (o ultimo digito) ou seja 3 
//                                                  //* segunda vez 3 * 10 + 2 ou seja 32
//                                                  //* terceira vez 32 * 10 + 1 ou seja 321  

// valorT = Math.floor(valorT / 10) //* valorT = Math.floor(123 / 10) → 12 (remove o último dígito 3)
//                                  //* valorT = Math.floor(12 / 10) → 1 (remove o último dígito 2)
//                                  //* valorT = Math.floor(1 / 10) → 0 (remove o último dígito 1, loop termina) 

// console.log(numeroInvertido) //* apresenta o numero invertido, e depois reinicia ate o valor total chegar a 0
// }


//! exercicio 4 avaçado
//? Números perfeitos de 1 a 1000
//todo Resolução 1
let numero = 6
let somaDivisores = 0

for (let i = 1; i <= 1000; i++) {
    if (numero % i == numero) {
        somaDivisores = somaDivisores + i;
    }
}

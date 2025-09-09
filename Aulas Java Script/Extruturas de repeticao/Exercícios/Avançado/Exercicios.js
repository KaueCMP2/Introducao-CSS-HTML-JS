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
//todo Resolução 1 (Incompleto)
let numero = 6
let somaDivisores = 0

for (let i = 1; i <= 1000; i++) {
    if (numero % i == numero) {
        somaDivisores = somaDivisores + i;
    }
}

//? --------------------------------------------------------------
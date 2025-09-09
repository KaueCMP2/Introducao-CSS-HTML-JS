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

//? --------------------------------------------------------------




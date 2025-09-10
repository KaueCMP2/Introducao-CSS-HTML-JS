//! FILTER
//? => Filtrar números maiores que 2
// const numeros = [1, 2, 3, 4, 5, 6]

// const maioresQueDois = numeros.filter(numero => numero >2)
// console.log(maioresQueDois)

//todo Filtrar nomes
// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Fernanda"] 

// //? Filtrar nomes longos
// let nomeslongos = nomes.filter(nome => nome.length > 5)
// console.log(nomeslongos)

// //? Filtrar Numeros (pares)
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let pares = numeros.filter(numero => numero % 2 === 0)
// console.log(pares)

// //? Filtrar (Nome e Idade) 
// let pessoas = [
//     { nome: "Lucas", idade: 17 },
//     { nome: "Should Be", idade: 30 },
//     { nome: "Pedro", idade: 20 },
// ]

// let adultos = pessoas.filter(pessoa => pessoa.idade >= 18)
// console.log(adultos)

//! FIND
//? Retorma o primeiro elemento da lista correspondente a condição
//? Procurar um produto pelo preço

//todo Encontrar o preco dos produtos 
// const produtos = [
//     {id: 1, nome:"Teclado", preco: 800},
//     {id: 2, nome:"Mouse", preco: 50},
//     {id: 3, nome:"Monitor", preco: 700},
// ]

// const produtoCaro = produtos.find(produto => produto.preco >= 600) //o "produto" sem o S é apenas um auxiliar para direcionar cada elemento da lista    
// console.log(produtoCaro)

// //todo Encontrar O primeiro numero > que 10
// let numeros = [5, 8, 12, 20, 3, 15]

// let encontrado = numeros.find(numero => numero > 10)
// console.log(encontrado)

// //todo Encontrar primeiro nome que comecam com a letra (C) 
// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Cática"]

// let nomeEncontrado = nomes.find(nome => nome.startsWith("C"))
// console.log(nomeEncontrado)

//! MAP
//? => Multiplicar todos os números por 2
const valores = [1, 2, 3, 4, 5];
const valoresDobrados = valores.map(valor => valor * 2);
console.log(valoresDobrados);

//? => Criando um array a partir de objetos
let pessoasArray =
    [
        { nome: "Igor", idade: 19 },
        { nome: "Guilherme", idade: 17 },
        { nome: "Should Be", idade: 17 }
    ];

let nomesPessoasArray = pessoasArray.map(pessoa => pessoa.nome);
console.log(nomesPessoasArray);

let mensagems = pessoasArray.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos.`);
console.log(mensagems);

//! REDUCE
//?Reduz array um único valor

// //? => Somar todos os números do array
// const numerosParaSomar = [1, 2, 3, 4, 5];

// const somaTotal = numerosParaSomar.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(somaTotal);

// //? => Contar frequencia de palavras
// const palavras = ["Maçã", "Banana", "Maçã", "Laranja", "Banana", "Maçã"]

// const contagem = palavras.reduce((acumulador, palavra) => {
//     acumulador[palavra] = (acumulador[palavra] || 0) +1
//     return acumulador
// }, {})

// console.log(contagem)


// //? => Calcular notas media de notas 
// const notas= [7, 8, 9, 6, 10]
// const media = notas.reduce((total, nota) => total + nota, 0) / notas.length

// console.log(media)

// //? => Uso combinado
// const usuarios = [
//     { id: 1, nome: " Alice", idade: 25 },
//     { id: 2, nome: " Bob", idade: 30 },
//     { id: 3, nome: " Carol", idade: 20 }
// ]

// //! Quais os maiores de idade
// const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 21)

// //! Encontrar o primeiro usuario com idade maior que 21
// const usuarioIdade = usuarios.find(usuario => usuario.idade > 21)

// //! Criar um array apenas com nomes de usuarios
// const nomesUsuarios = usuarios.map(usuario => usuario.nome)

// //! Somar todas as idades dos usuarios usando o reduce
// const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)

// console.log("Maiores de idade: " + maioresDeIdade)
// console.log("Primeiro maior de idade: " + usuarioIdade)
// console.log("Nomes de usuarios: " + nomesUsuarios)
// console.log("Soma de idades: " + somaIdades)








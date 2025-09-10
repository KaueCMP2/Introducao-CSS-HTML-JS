//! MISTURANDO FUNCOES
//? => - Filtre livros - Crie um array com os títulos - Calcule o total de páginas dos livros.
const livros = [
  { titulo: "Dom Casmurro", paginas: 300 },
  { titulo: "O Hobbit", paginas: 295 },
  { titulo: "A Revolução dos Bichos", paginas: 112 }
];
const prefixo = "Titulos: "

const filtroLivros = livros.filter(livrosM => livrosM.paginas >= 200)
console.log(filtroLivros)

const arrayTitulos = livros.map(titulos => prefixo + titulos.titulo)
console.log(arrayTitulos)

const somaPag = livros.reduce((acumulador, livro) => acumulador + livro.paginas, 0);
console.log("O total de paginas e: " + somaPag)



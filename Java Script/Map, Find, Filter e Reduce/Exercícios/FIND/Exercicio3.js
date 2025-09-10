//! FIND
//? => Encontrar primeiro aluno com nota > ou = (7)
const alunos = [{nome: "Ana", nota: 8},
               {nome: "Carlos", nota: 5},
               {nome: "Beatriz", nota: 9}];

const alunosNota = alunos.find(aluno => aluno.nota >= 7)    
console.log("O aluno(a) e: " + alunosNota)
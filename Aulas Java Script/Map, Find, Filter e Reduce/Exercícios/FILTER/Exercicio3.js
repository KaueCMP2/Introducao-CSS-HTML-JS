
//! Filter
//? => Animais com letra (C)
const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];

const animaisLetraC = animais.filter(animais => animais.startsWith('c'))
console.log("Os animais são: " + animaisLetraC)
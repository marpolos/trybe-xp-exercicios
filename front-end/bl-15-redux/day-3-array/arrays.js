// Mutação
const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario;
//mutacaoTeste.push(6);
console.log(mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log(itemPrimario); // [1, 2, 3, 4, 5, 6]

// Copia
// const itemPrimario = [1, 2, 3, 4, 5];
let clonagemTeste = itemPrimario;
const teste = clonagemTeste.concat(6);
console.log(clonagemTeste); // [1, 2, 3, 4, 5]
console.log(itemPrimario); // [1, 2, 3, 4, 5]
console.log(teste)

//copia
const itemPrimario2 = [1, 2, 3, 4, 5, 6];
let spreadTeste = [...itemPrimario2, 7];
console.log(spreadTeste); // [1, 2, 3, 4, 5, 6, 7]
console.log(itemPrimario2); // [1, 2, 3, 4, 5, 6]
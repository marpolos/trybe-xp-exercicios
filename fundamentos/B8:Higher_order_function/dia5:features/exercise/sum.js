//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// escreva sum abaixo
const sumElement = (...rest) => rest.reduce((acc, curr) => acc += curr, 0);

console.log(sumElement(1, 2, 8, 55, -9, 120, -2));
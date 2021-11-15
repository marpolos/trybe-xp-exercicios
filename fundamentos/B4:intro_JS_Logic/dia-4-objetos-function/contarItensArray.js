// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

// REFAZER
function itensQueRepetem (array) {
    let count = 0;

    for (let i = 0; i < array.length; i += 1) {
        for (let e = 0; e < array.length; i += 1) {
            if (array[i] == array[e]) {
            }
        }
    }
}
console.log(itensQueRepetem([2, 3, 2, 5, 8, 2, 3]));
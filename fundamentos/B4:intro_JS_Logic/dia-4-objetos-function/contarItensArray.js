// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

// REFAZER
function itensQueRepetem (array) {
    let count = 0;
    let qtdeElement = [];

    for (let i = 0; i < array.length; i += 1) {
        item = {};
        item.element = array[i];
        
        for (let e = 0; e < array.length; e += 1) {
            
            if (array[i] == array[e]) {
                count += 1;
            }
            item.repeat = count;
        }
    
        qtdeElement.push(item);
        count = 0;
    }
    return qtdeElement;

    let nRepeat = qtdeElement[0].repeat;
    let valorQueRepete = qtdeElement[0].element;

    for (let i = 0; i < qtdeElement.length; i += 1) {
        if (qtdeElement[i].repeat > nRepeat) {
            nRepeat = qtdeElement[i].repeat;
            valorQueRepete = qtdeElement[i].element;
        }
    }
    return "O valor que mais repete é " + valorQueRepete + " por " + nRepeat + " vezes.";
}
console.log(itensQueRepetem([2, 3, 2, 5, 8, 1, 3, 8, 8, 7, 2, 8, 2, 8, 8]));
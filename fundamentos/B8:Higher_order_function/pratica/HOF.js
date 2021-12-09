/* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */
const analise = (standart, received) => {
    let count = 0;
    for (let i = 0; i < standart.length; i += 1) {
        /* for (let e = i; e += 1) {
            if (standart[i] == received[e]) count += 1;
        } */
        standart[i] == received[i] ? count += 1: received[i] == 'N.A' ? count = count : count -= 0.5;
    }
    return `Pontuação: ${count}`;
}

//console.log(analise(['a', 'b', 'c', 'd'], ['b', 'a', 'c', 'd']));

function hof(gabarito, resposta, callback) {
    return callback(gabarito, resposta);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, analise));
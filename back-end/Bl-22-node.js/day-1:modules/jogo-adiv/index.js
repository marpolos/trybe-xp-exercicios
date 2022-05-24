const readline = require('readline-sync');
const message = require('./sorteio');

let value = readline.questionInt("Qual número inteiro entre 1 e 10 você quer chutar? ");

console.log(message(value));

const replay = readline.question('Deseja jogar novamente? s/n ');

do {
    let value = readline.questionInt("Qual número inteiro entre 1 e 10 você quer chutar? ");
    console.log(message(value));
    const replay = readline.question('Deseja jogar novamente? s/n ');
} while (replay = 's');

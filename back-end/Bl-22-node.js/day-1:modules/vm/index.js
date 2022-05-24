const readline = require('readline-sync');
const vm = require('./velocidade');

const d = readline.questionInt('Qual a distancia em metros? ');
const t = readline.questionInt('Qual o tempo em segundos? ');

console.log(vm(d, t));
import { imc, result } from './imc.js';
import readline from 'readline-sync';

const peso = readline.questionFloat("Qual o seu peso? ");
const altura = readline.questionFloat("Qual o seu altura? ");

console.log(`${imc(peso, altura)} na categoria ${result(imc(peso, altura))}`);
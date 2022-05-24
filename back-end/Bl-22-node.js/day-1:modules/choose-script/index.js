console.log('Index');
const readline = require('readline-sync');

const script = readline.question(`
************************
Qual scrip quer executar? 
1: message;
2: calculadora;
************************
`);

const response = () => {
switch (script) {
    case 1:
        return 'npm run message';
    case 2:
        return 'npm run calculadora';
    default:
        return 'Erro'
}
}
console.log(response);
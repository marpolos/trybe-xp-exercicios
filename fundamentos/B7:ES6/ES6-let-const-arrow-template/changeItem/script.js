// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
const mySkills = ['HTML', 'DOM', 'JS', 'Resiliencia', 'Assertividade'];
const changeX = (string, subs) => {
    // const separator = string.split(' ');
    // for (let i = 0; i < separator.length; i += 1) {
    //     if (separator[i] == 'x') {
    //         separator[i] = subs;
    //     }
    // }
    // const joinSeparator = separator.join(' ');
    // return joinSeparator;
    //REPLACE: https://www.w3schools.com/jsref/jsref_replace.asp
  const newString = string.replace(/x/ig, subs);
  return newString;
}
const result1 = changeX('Primeira string x segunda', 'versus');
console.log(changeX('Primeira string x segunda', 'versus'));

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
const stringTwo = (result1, mySkills) => {
    const stringSkills = mySkills.sort().join(' ');
    const finallyString = `${result1} ${stringSkills}`;
    return finallyString;
};
console.log(stringTwo(result1, mySkills));
//Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (string) => {
    const stringToArray = string.split(' ');
    //let countWord = {};
    maior = 0;
    let word = '';
    for (let i = 0; i < stringToArray.length; i += 1) {
      //countWord[stringToArray[i]] = stringToArray[i].length;
      //if (stringToArray[i].length > maior) {
      //    maior = stringToArray[i].length;
      //    word = stringToArray[i];
      //}
      stringToArray[i].length > maior ? word = stringToArray[i] : null;
    }
    return console.log(word);
}

longestWord("O último epsódio de Big Bang Theory foi muiiiiito emocionante.") // retorna 'aconteceu'
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
function verificaFimPalavra (word, ending) {
    let newWord = "";
    let size = word.length - ending.length;
    for (let i = size; i < word.length; i += 1) {
        newWord += word[i];
    }
    if (newWord == ending) {
        return true;
    }
    return false;
}

console.log(verificaFimPalavra("marcelle", "mar"));
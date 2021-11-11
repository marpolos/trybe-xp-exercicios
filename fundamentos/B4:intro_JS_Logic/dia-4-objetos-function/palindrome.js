// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function palindrome (frase){
    let entrada = frase.length-1;
    let reverse = ""
    for(let i = entrada; i>=0; i-=1){
        let letra = frase[i];
        reverse = reverse + letra;
    }
    if(reverse == frase){
        console.log("É um palindromo, pois " + frase + " é igual a " + reverse + ".");
    } else {
        console.log("Não é um palindromo, pois " + frase + " é diferente de " + reverse + ".");
    }
}
 palindrome("arara");
 palindrome("desenvolvimento");
 palindrome
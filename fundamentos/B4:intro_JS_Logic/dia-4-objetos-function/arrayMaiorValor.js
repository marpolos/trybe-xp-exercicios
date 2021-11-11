// Crie uma função que receba um arrayExterno de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
function arrayMaiorValor(arrayExterno){
    let arrayInterno = [];
    arrayInterno = arrayExterno;
    for(i=1; i<arrayExterno.length; i+=1){
        for(e = 0; e<= i; e+=1){
            if(arrayExterno[i]<arrayExterno[e]){
                let position = arrayExterno[i];
                arrayExterno[i] = arrayExterno [e];
                arrayExterno[e] = position;
            }
        }
    }
    let maiorValor = arrayExterno[arrayExterno.length-1];
    
    let positionMaiorValor = arrayInterno.indexOf(maiorValor);
    console.log("A posição do maior valor é " + positionMaiorValor +"\n Array de entrada: " + arrayExterno +"\n Array de saída: " + arrayInterno);
    //return positionMaiorValor, arrayExterno, arrayExterno;

}
console.log(arrayMaiorValor([2, 3, 6, 7, 10, 11, 22, 77, 8]));

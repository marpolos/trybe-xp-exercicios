// Crie uma função que receba um arrayExterno de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
function arrayMaiorValor(arrayExterno){
   let maior = arrayExterno[0];

   for (let i = 0; i < arrayExterno.length; i += 1) {
       if (maior < arrayExterno[i]) {
           maior = arrayExterno[i];
       }
   }
   let position = arrayExterno.indexOf (maior);
   return position;
}
console.log(arrayMaiorValor([6, 6, 2, 7, 10, 3, 22, 78, 8]));

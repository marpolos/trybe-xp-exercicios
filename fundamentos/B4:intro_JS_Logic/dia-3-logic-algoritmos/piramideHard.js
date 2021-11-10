// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******
//HELP

let n = 7;
let aster = "*";
//console.log("*".repeat(n));
let top = n%2;

for(i = 1; i <=n-1; i+=1){
    aster = aster + "*";
}
console.log("*".repeat(top));
console.log(aster);
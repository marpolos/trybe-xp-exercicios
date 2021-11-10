//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****
//documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/repeat


//  let n = 9;
//  let linha="";
//  for(i=1; i<=n; i+=1){
//      console.log(" * ".repeat(n));
//  }

let n = 5;
let linha = "";
for(i = 1; i <= n; i+= 1){
    for(i2 = 1; i2 <=n; i2 +=1){
        linha += " * ";
    }
console.log(linha);
linha = "";
}

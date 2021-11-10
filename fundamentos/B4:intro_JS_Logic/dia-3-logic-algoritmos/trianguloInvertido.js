// Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// let n = 8;
// let linha = '';
// for(i = 1; i<=n; i+=1){
//   console.log(" ".repeat(n-i) + "*".repeat(i));
// }

let n = 9;
let linha = "";
for(i=1; i<=n; i+=1){
  linha += " * ";
  console.log(linha);
}
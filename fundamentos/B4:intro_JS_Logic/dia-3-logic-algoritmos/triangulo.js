// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

// let n=9;
// for(i=1; i<=n; i+=1){
//     console.log("*".repeat(i));
// }

let n = 9;
let linha = "";
for(i=1; i<=n; i+=1){
    //for(i2 = 1; i2 <= n; i2 += 1){
        linha += " * ";
        console.log(linha);
    //}
    //linha = "";
}
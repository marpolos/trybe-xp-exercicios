// Depois, faça uma pirâmide com n asteriscos de base:
//HELP
// n = 5

//   *
//  ***
// *****

let n = 9;
for(i = 1; i<=n; i+=1){
console.log(" ".repeat(2) + "*".repeat(n-4)+ " ".repeat(2));
console.log(" ".repeat(i) + "*".repeat(n-2)+ " ".repeat(i));
console.log("*".repeat(n));
}
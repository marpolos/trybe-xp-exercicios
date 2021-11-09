// Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

let n = 5;
console.log(" ".repeat(2) + "*".repeat(n-4)+ " ".repeat(2));
console.log(" ".repeat(1) + "*".repeat(n-2)+ " ".repeat(1));
console.log("*".repeat(n));
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);

let fruits2 = fruits.reverse(); // O método reverse modifica a array original mesmo que eu coloque o resultado dentro de outra variável.

console.log(fruits);
console.log(fruits2);

fruits.reverse();
console.log(fruits);

let palavra = "aprendizagem";
console.log(palavra);
//palavra.reverse();// Não funciona porque é um método de array.
//console.log(palavra); 
let toarray = palavra.split("");
console.log(toarray);
let reverter = toarray.reverse();
console.log(reverter);
let toString = reverter.join("");
console.log(toString);
//Crie uma função que receba um número e retorne seu fatorial.

 const fatorial = number => {
     let fatNumber = number;
     for (let i = number - 1; i >= 1; i -= 1){
         fatNumber *= i;
     }
     return fatNumber;
 }

//const fatorial = number => {
//    (number * )
//}

console.log(fatorial(5));
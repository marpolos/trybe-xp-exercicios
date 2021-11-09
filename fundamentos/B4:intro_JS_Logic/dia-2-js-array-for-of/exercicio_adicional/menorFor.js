
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for(i=0; i<numbers.length; i+=1){
    if(numbers[i]>maior){
        maior = numbers[i];
    }
}

let menor = maior;

for(i=0; i<numbers.length; i+=1){
    if(menor > numbers[i]){
        menor = numbers[i];
        console.log("Menor valor: ", menor);
    }
}

console.log("Menor valor: ", menor);

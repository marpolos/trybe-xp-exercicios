
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
//let ordenarArray = numbers.sort(); //ordena do maior para o menor;

//let maior = ordenarArray[0];
//console.log("*******************************");
//console.log("O maior valor é: ", maior);
//*****************************
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior=0;

for(i=0; i<numbers.length; i+=1){
    if(numbers[i]>maior){
        maior = numbers[i];
    }
  
}
console.log("Maior valor: ", maior);





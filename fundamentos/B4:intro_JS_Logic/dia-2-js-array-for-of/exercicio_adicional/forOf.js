//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let arrayVinteCinco = [];
for(i=1; i<=25; i+=1){
    arrayVinteCinco.push(i);
}
console.log(arrayVinteCinco);
for(let n of arrayVinteCinco){
    console.log(n);
}

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
console.log(arrayVinteCinco);
for(let n of arrayVinteCinco){
    console.log(n/2);
}
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];
for(let number of numbers){
    if(number%2 !=0){
        impar.push(number);
    }
}
if(impar.length == 0){
    console.log("*******************************");
    console.log("Nenhum valor impar encontrado.");
}
else{
    console.log("*******************************");
    console.log("Quantidade de números ímpares: " + impar.length);
    console.log(impar);
}
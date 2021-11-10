/*
Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/
const a = 7;
const b = 18;
const c = 18;

let maior;
if(a>b && a>c){
    maior = a;
}
else if (b>a && b>c){
    maior = b;
}
else if (c>b && c>a){
    maior = c;
}
else{
    maior = "Empate";
}
console.log(maior);
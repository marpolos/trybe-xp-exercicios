/*
Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/
const a = 5;

if(a<0){
    console.log("negativo");
}
else if(a == 0){
    console.log("neutro");
}
else{
    console.log("positivo");
}
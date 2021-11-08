/*
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
*/
let soldoBruto = 1500.50;
let INSS;
let IR;



if (soldoBruto <=1556.94){
    INSS = soldoBruto*0.08;
}
else if(soldoBruto<=2594.92){
    INSS = soldoBruto*0.09;
}
else if(soldoBruto<=5189.82){
    INSS = soldoBruto*0.11;
}
else{
    INSS = 570.88
}

let soldoDescontoINSS = soldoBruto - INSS;


if (soldoDescontoINSS<=1903.98){
    IR = 0;
}
else if (soldoDescontoINSS <= 2826.65){
  IR = soldoDescontoINSS*0.075;
}
else if (soldoDescontoINSS <= 3751.05){
    IR = soldoDescontoINSS * 0.15;
}
else if (soldoDescontoINSS <= 4664.68){
    IR = soldoDescontoINSS * 0.225;
}
else{
    IR = soldoDescontoINSS * 0.275;
}

let soldoLiquido = soldoDescontoINSS-IR;


console.log("Salário bruto: "+ soldoBruto);
console.log("Desconto do INSS: "+ INSS);
console.log("Desconto do IR: "+ IR);
console.log("Salário líquido: "+ soldoLiquido);
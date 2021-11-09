/*
Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
*/
const custo = 90;
const valorVenda = 180;

let imposto = custo * 0.2;
let custoTotal = custo + imposto;

let seller = 1000;
let lucro = (valorVenda - custoTotal);
let lucroTotal = lucro*seller;

if (custo == 0 || valorVenda == 0){
    console.log("Valores de custo ou venda zerado.");
}
else{
    console.log("Custo do produto com imposto: R$"+ custoTotal);
    console.log("Lucro por 1 produto: R$"+ lucro);
    console.log("Quantidade de produtos vendidos: " + seller);
    console.log("Lucro total: R$" + lucroTotal);
}


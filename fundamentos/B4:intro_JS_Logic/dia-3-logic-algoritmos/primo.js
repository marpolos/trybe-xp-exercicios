// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let primo = 49;
//let teste;
//let divide = [];
let sum = 0;

for(i =1; i<=primo; i+=1){
    //teste = primo / i;
    //divide.push(teste);

    if(primo%i != 0){
        sum +=1;
    }
}
//console.log(divide);
if(sum > 2){
    console.log("Número primo.");
}
else{
    console.log("Não é primo.")
}
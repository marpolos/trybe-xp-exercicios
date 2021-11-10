//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let three = 0;
for(i = 2; i<=150; i+=1){
    console.log(i%3);
    if (i%3 == 0){
        three = three +1;
    }
    
}

if(three ==50){
    console.log("Mensagem secreta");
}
else{
    console.log("Diferente de 50.")
}

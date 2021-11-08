/*
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/
let note = 80;

if (note >=90 && nota<=100){
    console.log("A");
}
else if(note>=80){
    console.log("B");
}
else if(note>=70){
    console.log("C");
}
else if(note>=60){
    console.log("D");
}
else if(note>=50){
    console.log("E");
}
else if(note<50 && nota>=0){
    console.log("F");
}
else{
    console.log("Nota inválida.")
}
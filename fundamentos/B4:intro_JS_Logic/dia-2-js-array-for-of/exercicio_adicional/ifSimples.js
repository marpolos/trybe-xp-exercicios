//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let number of numbers){
  sum +=number;
}

let med = sum / numbers.length;
console.log("*******************************");
console.log("A média dos números é: ", med)

if (med>=20){
    console.log("*******************************");
    console.log("Valor maior que 20");
}
else{
    console.log("*******************************");
    console.log("Valor menor ou igual a 20");
}
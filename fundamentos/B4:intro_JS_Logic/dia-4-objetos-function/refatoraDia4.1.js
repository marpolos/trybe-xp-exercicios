function calculadora(a, b, valor){
let mensagem = "Escolha a opção desejada:" +
"\n1: somar;" +
"\n2: substrair;" +
"\n3: multiplicar;" +
"\n4: dividir;" +
"\n5: porcentagem;";

let opera;

 switch(valor){
  case 1: 
    opera = a + b;
    break;
  case 2:
      opera = a-b;
      break;
  case 3:
      opera = a*b;;
      break;
  case 4:
        opera = a/b;
        break;
  case 5:
        opera = a%b;
        break;
  default:
      console.log("Opção inválida.");
 }

 console.log("A operação é: ", opera);
}

function retornaMaiorValor(a, b){
let maior;
if(a>b){
    maior = a;
}
else{
    maior = b;
}
return console.log(maior);

}

function maiorDe3 (a, b, c){

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
return console.log(maior);
}

function positiveNegative (a){

if(a<0){
    console.log("negativo");
}
else if(a == 0){
    console.log("neutro");
}
else{
    console.log("positivo");
}
}

function trianguloExiste(a, b, c){

if (a+b+c == 180){
    console.log("Triângulo");
}
else if (a<0 || b<0 || c<0){
    console.log("Ângulo negativo");
}
else{
    console.log("Não é triângulo.")
}
}


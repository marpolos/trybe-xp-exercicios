/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/
let a = 5
let b = 6

let mensagem = "Escolha a opção desejada:" +
"\n1: somar;" +
"\n2: substrair;" +
"\n3: multiplicar;" +
"\n4: dividir;" +
"\n5: porcentagem;";

valor = 1;
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
/*const myName = "Marcelle Monteiro";
const birthCity = "São Gonçalo";
let birthYear = 1995;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
birthCity = "Niterói";

console.log(birthYear);
console.log(birthCity);

*************************

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
patientId='50';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

************************

const base = 5;
let height = 8;

const area = base * height;

console.log(area);

const perimeter = (2 * base) + (2 * height);

console.log(perimeter);
************************

const note = 50;

if(note>=80){
    console.log("Parabéns, você foi aprovado(a)!!!!")
}
else if(note<80 && note>=60){
    console.log("Você está na nossa lista de espera.")
}
else{
    console.log("Você foi reprovado. =(")
}

**********************

const currentHour = 7;
let message;

if(currentHour>=22){
    message = "Não devemos comer nada. É hora de dormir!";
}
else if(currentHour>=18 && currentHour<22){
    message = "Rango da noite. Vamos jantar!";
}
else if(currentHour>=14 && currentHour<18){
    message = "Vamos fazer um bolo!";
}
else if(currentHour>11 && currentHour<14){
    message = "Hora do almoço!"
}
else{
    message = "Hmmm Cheiro de café";
}

console.log(message);
*******************

let weekDay = "domingo";

if(weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} 
else{
  console.log("FINALMENTE, descanso merecido UwU");
}
****************
*/
let status; 
let note = 70;

switch(note)
{
    case 100: 
        console.log("aprovada");
        break;
    case 80:
        console.log('lista');
        break;
    default:
        console.log("reprovada");
        break;
 }

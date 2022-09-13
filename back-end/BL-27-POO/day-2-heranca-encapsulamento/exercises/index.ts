import Person from "./classes/Person";
import Student from "./classes/Student";
import Subject from "./classes/Subject";
import Teacher from "./classes/Teacher";

const anita = new Person("Anita", new Date("2010/12/30"));
const marcelle = new Person("Marcelle", new Date("1995/08/22"));

console.log(anita);
console.log(marcelle);

const student1 = new Student("Renata", new Date("2000/12/12"));
const student2 = new Student("Mário", new Date("1990/03/12"));

console.log(student1);
console.log(student2);

const matematica = new Subject("Matemática");
const historia = new Subject("História");
const filosofia = new Subject("Filosofia");
console.log(matematica, historia, filosofia);

const profMat = new Teacher("Marta", new Date("1995/06/2"), 2000, matematica);
const profHis = new Teacher("Ricardo", new Date("1970/03/12"), 1800, historia);
const profFil = new Teacher("Marcio", new Date("2000/01/01"), 1500, filosofia);
console.log(profMat);
console.log(profFil);
console.log(profHis);
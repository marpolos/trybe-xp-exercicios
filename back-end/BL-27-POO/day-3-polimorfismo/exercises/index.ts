import Student from "./classes/Student";
import Subject from "./classes/Subject";
import Teacher from "./classes/Teacher";
import Evaluation from "./classes/Evaluation";
import EvaluationResult from "./classes/EvaluationResult";
import Work from "./classes/Work";
import Exam from "./classes/Exam";

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

const workProfMat = new Work(50, profMat);
const examProfMat = new Exam(25, profMat);
const workProfHis = new Work(40, profHis);
const examProfHis = new Exam(20, profHis);

const resultAluno1 = new EvaluationResult(workProfMat, 60);
student1.addEvaluationResult(resultAluno1);
console.log(student1);
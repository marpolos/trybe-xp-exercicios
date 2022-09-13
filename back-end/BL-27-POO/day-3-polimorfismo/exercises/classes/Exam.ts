import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }
  set score(value: number) {
    if (value < 0) throw new Error("O score não pode ser negativo.");
    if (value > 25) throw new Error("O score não pode ultrapassar 25.");    
    // this.score = value;
  }
}
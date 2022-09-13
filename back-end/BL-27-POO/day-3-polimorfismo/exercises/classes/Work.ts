import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }
  set score(value: number) {
    if (value < 0) throw new Error("O score não pode ser negativo.");
    if (value > 50) throw new Error("O score não pode ultrapassar 50.");    
    // this.score = value;
  }
}
import Evaluation from "./Evaluation";
import Exam from "./Exam";
import Work from "./Work";
export default class EvaluationResult {
  constructor(private _evaluation: Work | Exam, private _score: number) {
    this.evaluation = _evaluation;
    this.score = _score;
  }

  public get evaluation(): Work | Exam {
    return this._evaluation;
  }
  public set evaluation(value: Work | Exam) {
    this._evaluation = value;
  }
  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    if (value < 0) throw new Error("O score não pode ser negativo.");
    if (value > this.evaluation.score) throw new Error("O score não pode ultrapassar o score da avaliação.");
    this._score = value;
  }
}
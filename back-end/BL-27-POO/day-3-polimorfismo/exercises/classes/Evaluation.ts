import Teacher from './Teacher';
export default abstract class Evaluation {
  constructor(private _score: number, private _teacher: Teacher) {
    this.score = _score;
    this.teacher = _teacher;
  }

  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    if (value < 0) throw new Error("O score não pode ser negativo.");
    this._score = value;
  }

  public get teacher(): Teacher {
    return this._teacher;
  }
  public set teacher(value: Teacher) {
    this._teacher = value;
  }
}
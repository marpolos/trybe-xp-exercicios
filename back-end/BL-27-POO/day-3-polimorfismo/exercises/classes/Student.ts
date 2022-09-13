import Enrollable from "../interface/Enrollable";
import Person from "./Person";
import EvaluationResult from './EvaluationResult';

export default class Student extends Person implements Enrollable{
    private _enrollment: string = '';
    private _examsGrades: number[] = Array();
    private _worksGrades: number[] = [];
    private _evaluationsResults: EvaluationResult[] = [];
    
    constructor(_name: string, _birthdate: Date) {
      super(_name, _birthdate);
      this.enrollment = this.generateEnrollment();
    }
  
    public get examsGrades(): number[] {
      return this._examsGrades;
    }
    public set examsGrades(value: number[]) {
      if (value.length !== 4) throw new Error("Insira 4 notas de provas");
      this._examsGrades = value;
    }
  
    public get worksGrades(): number[] {
      return this._worksGrades;
    }
    public set worksGrades(value: number[]) {
      if (value.length !== 2) throw new Error("Insira 2 notas de trabalhos");
      this._worksGrades = value;
    }
    public get enrollment(): string {
      return this._enrollment;
    }
    public set enrollment(value: string) {
      this._enrollment = value;
    }
    public get evaluationsResults(): EvaluationResult[] {
      return this._evaluationsResults;
    }
    public set evaluationsResults(value: EvaluationResult[]) {
      this._evaluationsResults = value;
    }
  
    sumGrades() {
      const sum = [...this.examsGrades, ...this.worksGrades]
      .reduce((ac, value) => {
        ac += value
        return ac;
      }, 0);
      return sum;
    }
  
    sumAverageGrade() {
      const med = this.sumGrades() / (this.examsGrades.length + this.worksGrades.length);
      return med.toFixed(2);
    }

    generateEnrollment () {
      const enroll = `${new Date()}`.replace(/ /g, '').replace(/:/g, "").slice(0, 16);
      return enroll;
    }

    addEvaluationResult(result: EvaluationResult) {
      this.evaluationsResults.push(result);
    }
}
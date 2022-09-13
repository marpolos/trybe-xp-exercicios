import Person from "./Person";

export default class Student extends Person {
    private _enrollment: string;
  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }
    private _examsGrades: number[] = Array();
    private _worksGrades: number[] = [];
    
    constructor(nome: string, birthdate: Date) {
      super(nome, birthdate);
      
      this._enrollment = this.generateEnrollment();
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
}
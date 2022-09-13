import Employee from "../interface/Employee";
import Person from "./Person";
import Subject from './Subject';

export default class Teacher extends Person implements Employee{
  private _subject: Subject;
    public get subject(): Subject {
        return this._subject;
    }
    public set subject(value: Subject) {
        this._subject = value;
    }
  private _registration: string;
    public get registration(): string {
        return this._registration;
    }
    public set registration(value: string) {
        this._registration = value;
    }
  private _salary: number = 0;
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
      if(value < 0) throw new Error("Salário não pode ser negativo");
      this._salary = value;
    }
  private _admissionDate: Date;
    public get admissionDate(): Date {
        return this._admissionDate;
    }
    public set admissionDate(value: Date) {
      if (value > new Date()) throw new Error("A data não pode ser futura.");
      
      this._admissionDate = value;
    }

  constructor(name: string, birthdate: Date, salary: number, subject: Subject, ) {
    super(name, birthdate);
    this.salary = salary;
    this._subject = subject;
    this._registration = this.generateRegistration();
    this._admissionDate = new Date();
  }

  generateRegistration() {
    const reg = Math.floor(Math.random() * 999 + 1);
    if (reg < 10) return `00${reg}`;
    if (reg < 100) return `0${reg}`;
    return `${reg}`;
  }

}
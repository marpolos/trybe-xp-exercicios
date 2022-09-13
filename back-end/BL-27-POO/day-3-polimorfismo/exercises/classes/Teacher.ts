import Employee from "./Employee";
import Subject from './Subject';

export default class Teacher extends Employee{
  private _subject: Subject;

  constructor(_name: string, _birthdate: Date, _salary: number, subject: Subject, ) {
    super(_name, _birthdate, _salary);
    this._subject = subject;
  }
  public get subject(): Subject {
    return this._subject;
  }
  public set subject(value: Subject) {
    this._subject = value;
  }

}
import Enrollable from "../interface/Enrollable";
import Person from "./Person";

export default class Employee extends Person implements Enrollable{
  private _enrollment: string = '';
  private _admissionDate: Date = new Date();

  constructor(_name: string, _birthdate: Date,
    private _salary: number) {
    super(_name, _birthdate);
    this.salary = _salary;
    this.admissionDate = new Date();
    this.enrollment = this.generateEnrollment();
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    if(value < 0) throw new Error("Salário não pode ser negativo");
    this._salary = value;
  }
  public get admissionDate(): Date {
    return this._admissionDate;
  }
  public set admissionDate(value: Date) {
    if (value > new Date()) throw new Error("A data não pode ser futura.");
    this._admissionDate = value;
  }
  generateEnrollment () {
    const enroll = `${new Date()}`.replace(/ /g, '').replace(/:/g, "").slice(0, 16);
    return enroll;
  }
}
export default class Subject {
  private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
  constructor(name: string) {
    this.validation(name);
    this._name = name;
  }
  validation(value: string) {
    if (value.length < 4) throw new Error("O nome da disciplina deve ser maior que 3.");
  }
}
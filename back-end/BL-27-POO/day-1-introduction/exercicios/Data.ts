export default class Data {
  private _dia: number;
    public get dia(): number {
        return this._dia;
    }
    public set dia(value: number) {
        this._dia = value;
    }
  private _mes: number;
    public get mes(): number {
        return this._mes;
    }
    public set mes(value: number) {
        this._mes = value;
    }
  private _ano: number;
    public get ano(): number {
        return this._ano;
    }
    public set ano(value: number) {
        this._ano = value;
    }

  constructor(dia: number, mes: number, ano: number) {
    this._dia = dia;
    this._mes = mes;
    this._ano = ano;
    this.validate();
  }

  validate() {
    const data = `${this.ano}-${this.mes}-${this.ano}`;
    if(new Date(data).getDate() !== this.dia) {
        this._ano = 1900;
        this._mes = 1;
        this._ano = 1;
    }
  }
}
export default class Aluno {
  private _nome: string;
  private _matricula: string;
  private _notasProva: number[] = Array();
  private _notasTrabalho: number[] = [];
  
  constructor(nome: string, matricula: string, notasProva: number[], notasTrabalho: number[]) {
    this._nome = nome;
    this._matricula = matricula;
    this.notasProva = notasProva;
    this.notasTrabalho = notasTrabalho;
  }

  public get notasProva(): number[] {
    return this._notasProva;
  }
  public set notasProva(value: number[]) {
    if (value.length !== 4) throw new Error("Insira 4 notas de provas");
    this._notasProva = value;
  }

  public get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }
  public set notasTrabalho(value: number[]) {
    if (value.length !== 2) throw new Error("Insira 2 notas de trabalhos");
    this._notasTrabalho = value;
  }

  sumNotas() {
    const sum = [...this.notasProva, ...this.notasTrabalho]
    .reduce((ac, value) => {
      ac += value
      return ac;
    }, 0);
    return sum;
  }

  media() {
    const med = this.sumNotas() / (this.notasProva.length + this.notasTrabalho.length);
    return med.toFixed(2);
  }
}

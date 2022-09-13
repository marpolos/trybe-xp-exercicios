export default class Person{
  private _name: string = "";
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
      if (value.length < 3) throw new Error("Mínimo de 4 letras.");
      this._name = value;
    }

  private _birthdate: Date = new Date();
    public get birthdate(): Date {
        return this._birthdate;
    }
    public set birthdate(value: Date) {
      // Value precisa do formato: "1995/05/12"
      if (value > new Date()) throw new Error("Data superior ao dia de hoje.");
      /*Para operar com datas, vamos operar somente com milissegundos. Uma data
        é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
      const timeDiff = Math.abs(
        Date.now() -
        value.getTime()
      );
    
      /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
        Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
      const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

      if (age > 120) throw new Error("Idade superior a 120 anos.");
      this._birthdate = value;
    }

  constructor(name: string, birthdate: Date) {
    this.name = name;
    this.birthdate = birthdate;
  }
  
}
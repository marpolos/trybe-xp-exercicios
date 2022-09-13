export default interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class myClass implements MyInterface {
  constructor(
    public myNumber: number,
  ) {}

  myFunc(myParam: number): string {
    return `A soma é: ${this.myNumber + myParam}`;
  }
}

const classe = new myClass(5);
console.log(classe);
console.log(classe.myFunc(2));
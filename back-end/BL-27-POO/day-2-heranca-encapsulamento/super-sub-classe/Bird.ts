import Animal from "./Animal";

class Bird extends Animal {
    constructor(public name: string) {
      super(name, new Date());
    }
    fly() {
      console.log(`${this.name} está voando!`);
    }
    showBirthDate() {
        console.log(this.birthDate); // Okay!
      }
  }
  
  const parrot = new Bird(
    'Papagaio',
    // new Date(Date.parse('Jun 07, 2017')),
  );
  
  console.log(parrot.age);
  parrot.fly();
  parrot.showBirthDate();
  
  /*
  Saída (código executado em Mar/2022):
  
  Papagaio está voando!
  */
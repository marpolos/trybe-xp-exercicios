class Superclasse {
  public isSuper: boolean = true;
  constructor(isSuper: boolean) {
    this.isSuper = isSuper;
  };

  public sayHello() {
    console.log('Hello world!');
    console.log(this.isSuper);
  }
}

class Subclass extends Superclasse {
  constructor(public isSuper: boolean) {
    super(false);
  }
  sayAgain() {
    this.sayHello();
    console.log('Subclasse no ar.');
  };
}

function myFunc (objeto: Subclass) {
    const message = objeto.isSuper ? 'Super!' : 'Sub!';
    console.log(message);
}

const superClasse = new Superclasse(true);
const subClasse = new Subclass(false);

// myFunc(superClasse);
myFunc(subClasse);

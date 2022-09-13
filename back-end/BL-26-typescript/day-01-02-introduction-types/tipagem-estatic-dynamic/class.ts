class Dog {
    _nome: string;
    _raca: string;

    constructor(nome: string, raca: string) {
        this._nome = nome;
        this._raca = raca;
    }

    dataDog(): void {
        console.log(`O nome dele é ${ this._nome } e a raça é ${ this._raca }`);
    }
}

const dog = new Dog("Anita", "Vira-lata");
dog.dataDog();

class House {
    _bairro: string;
    _endereco: string;

    constructor(bairro: string, endereco: string) {
        this._bairro = bairro;
        this._endereco = endereco;
    }

    dataHouse(): void {
        console.log(`A casa está no bairro ${this._bairro} e seu endereço é ${this._endereco}.`);
    }
}

const house = new House("Jockey Club", "Diamantino");
console.log(house);

interface Voo {
    _hora: Date;
    _localSaida: string;
    _localEntrada: string;
}

class Voo {
    constructor(hora: Date, localEntrada: string, localSaida: string) {
        this._hora = hora;
        this._localSaida = localSaida;
        this._localEntrada = localEntrada;
    }

    datasVoo(): string {
        return `Dados do voo: ${this._hora}, ${this._localSaida}, ${this._localEntrada}`
    }
}

const voo = new Voo(new Date(), "Rio de Janeiro", "Fortalrza");
console.log(voo);
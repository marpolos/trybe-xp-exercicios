"use strict";
class Dog {
    constructor(nome, raca) {
        this._nome = nome;
        this._raca = raca;
    }
    dataDog() {
        console.log(`O nome dele é ${this._nome} e a raça é ${this._raca}`);
    }
}
const dog = new Dog("Anita", "Vira-lata");
dog.dataDog();
class House {
    constructor(bairro, endereco) {
        this._bairro = bairro;
        this._endereco = endereco;
    }
    dataHouse() {
        console.log(`A casa está no bairro ${this._bairro} e seu endereço é ${this._endereco}.`);
    }
}
const house = new House("Jockey Club", "Diamantino");
console.log(house);
class Voo {
    constructor(hora, localEntrada, localSaida) {
        this._hora = hora;
        this._localSaida = localSaida;
        this._localEntrada = localEntrada;
    }
    datasVoo() {
        return `Dados do voo: ${this._hora}, ${this._localSaida}, ${this._localEntrada}`;
    }
}
const voo = new Voo(new Date(), "Rio de Janeiro", "Fortalrza");
console.log(voo);

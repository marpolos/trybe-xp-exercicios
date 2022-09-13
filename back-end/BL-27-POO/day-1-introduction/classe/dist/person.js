"use strict";
class Person2 {
    constructor(name, height, weight, age) {
        this.name = name;
        this._weight = weight;
        this._age = age;
        this.height = height;
    }
    getWeight() {
        return this._weight;
    }
    // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
    get age() {
        return this._age;
    }
    // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
    set age(newValue) {
        if (newValue >= 0 && newValue < 200) {
            this._age = newValue;
        }
    }
    birthday() {
        this._age += 1;
    }
}
const p3 = new Person2('Maria', 171, 58, 19);
const p4 = new Person2('João', 175, 66, 18);
console.log(p3.getWeight());
console.log(p3.age);
p4.age = 2;
console.log(p4.age);

"use strict";
class Person1 {
    constructor(n, h, w) {
        console.log(`Creating person ${n}`);
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    sleep() {
        console.log(`${this.name}: zzzzzzz`);
    }
}
const p1 = new Person1('Maria', 171, 58);
const p2 = new Person1('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/ 
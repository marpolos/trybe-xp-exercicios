"use strict";
function whichBird(birdFind) {
    console.log(`The bird is ${birdFind.name}`);
}
;
whichBird({ name: "trinca-ferro" });
/* function receiveNumber(sum: Numbers) {
    const s = sum.x + sum.y;
    return s;
} */
function receiveNumber(x, y) {
    return `The sum is: ${x + y}`;
}
console.log(receiveNumber(5, 6));
function getAddress(data) {
    console.log(`The address: ${data.rua}, ${data.num} - ${data.cidade}`);
}
getAddress({ rua: "Diamantino", num: 21, cidade: "SG" });

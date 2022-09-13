type Bird = {
    name: string;
};

function whichBird(birdFind: Bird) {
    console.log(`The bird is ${ birdFind.name }`);
};

whichBird({ name: "trinca-ferro"});

/* type Numbers = {
    x: number;
    y: number;
}; */
type NumberInsert = number;

/* function receiveNumber(sum: Numbers) {
    const s = sum.x + sum.y;
    return s; 
} */

function receiveNumber(x: NumberInsert, y: NumberInsert) {
    return `The sum is: ${ x + y}`;
}

console.log(receiveNumber(5, 6));

type Address = {
    rua: string;
    num: number;
    cidade: string;
}

function getAddress(data: Address) {
    console.log(`The address: ${ data.rua }, ${ data.num } - ${ data.cidade }`);
}
getAddress({rua: "Diamantino", num: 21, cidade: "SG" });
const numbers = [32, 15, 3, 2, -5, 56, 10];

let initial = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if(numbers[index] > initial) initial = numbers[index];
}
//console.log(initial);

console.log(numbers.reduce((acc, number) => {
    if(number > acc) acc = number;
    return acc;
}));

///////////////////////

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85
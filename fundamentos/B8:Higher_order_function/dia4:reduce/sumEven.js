const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// faça uma função que some todos os números pares do array:
//reduce
const even = (acc, number) => number % 2 == 0 ? acc + number : acc;

console.log('reduce', numbers.reduce(even, 0));

//reduce and filter
const evenNumbers = numbers.filter((number) => number % 2 == 0);
console.log("Filter and reduce:", evenNumbers.reduce((acc, number) => acc + number));

//Resposta TRYBE:
//const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

//Resposta TRYBE:

//const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair2 = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers2 = (array) => array.reduce(sumPair2, 0);

console.log(sumNumbers2(numbers)); // 152
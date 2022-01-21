const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3_000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);   // O retorno é [2, 3]

//Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:
setTimeout(() => console.log(numbers), 3000);

//setTimeOut -> https://www.w3schools.com/jsref/met_win_settimeout.asp
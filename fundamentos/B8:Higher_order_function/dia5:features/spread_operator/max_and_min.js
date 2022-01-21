const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5
console.log(Math.max(randomNumbers)); // NaN porque precisa de números, e não um array com números.
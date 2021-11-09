let pizzas =[];
pizzas.push("Quatro queijos");
pizzas.push("Palmito");
pizzas.push("Champgnion");
console.log(pizzas.length);

pizzas.unshift("Marguerita");
console.log(pizzas);

pizzas.pop();
console.log(pizzas);

pizzas.shift();
console.log(pizzas);

let position = pizzas.indexOf("Palmito");
console.log(position);
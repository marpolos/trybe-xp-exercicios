//Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    const arrayUnico = (acc, item) => {
      //console.log(acc, item);
      return acc.concat(item)};
    return arrays.reduce(arrayUnico, []);
  }

  //console.log(flatten());

  let text1 = "Hello";
  let text2 = "world!";
  let result = text1.concat(' ' + text2);
  //console.log(result);

  let text3 = ["sea"];
let text4 = "food";
let resultado = text3.concat(text4);
console.log(text3, text4, resultado);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2,arr3);
console.log(children)

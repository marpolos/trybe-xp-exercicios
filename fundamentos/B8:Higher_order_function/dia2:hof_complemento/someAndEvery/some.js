//Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  // false
  let arrayForTest = [12, 5, 8, 1, 4];
  console.log(arrayForTest.some(isBiggerThan10)); // true

[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
console.log([12, 5, 8, 1, 4].some(elem => elem > 10)); // true
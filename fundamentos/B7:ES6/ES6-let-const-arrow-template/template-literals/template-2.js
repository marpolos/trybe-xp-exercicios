// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderer = (array) => {
      for(let i = 1; i < array.length; i += 1) {
            for(let e = 0; e < i; e += 1) {
              if (array[e] > array[i]) {
                  let number = array[i];
                  array[i] = array[e];
                  array[e] = number;
              }
            }
      }
      return array;
}
console.log(orderer([13, 3, 4, 10, 7, 2]));

      //console.log(oddsAndEvens.sort((a,b) => a-b)); // será necessário alterar essa linha 😉
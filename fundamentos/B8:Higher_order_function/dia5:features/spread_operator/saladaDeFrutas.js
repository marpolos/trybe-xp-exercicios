// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Pêssego', 'Laranja', 'Kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Maça', 'Banana', 'Melão'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
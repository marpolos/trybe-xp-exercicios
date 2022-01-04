//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    const contA = (acc, letter) => letter == 'a' ? acc += 1 : acc;
    const text = names.join('').toLowerCase().split('');
    return text.reduce(contA, 0);
  }
  console.log(containsA());
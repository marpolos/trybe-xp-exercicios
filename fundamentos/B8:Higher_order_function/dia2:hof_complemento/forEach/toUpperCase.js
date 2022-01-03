const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
console.log(names);
const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
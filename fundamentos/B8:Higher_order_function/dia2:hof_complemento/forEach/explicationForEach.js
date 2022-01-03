const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

/* Suas partes:
arrayOfValues - Nome do array que será percorrido;
.forEach - A HOF , pode ser, .find , .some , .every ;
element - Valor do elemento do array;
(element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade . */
/* A arrow function passada para o forEach possui element , index e array como parâmetros. */
//Set Time Out simula comportamentos assíncronos, na prática a aplicação depende de uma informação de um banco de dados externo e espera pegar a informação para retornar.
//1s = 1000ms = 1_000 = 1000
//myTimeout = setTimeout(function, milliseconds);
//clearTimeout(myTimeout);
setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

//fluxo assíncrono: https://nodejs.org/pt-br/docs/guides/dont-block-the-event-loop/
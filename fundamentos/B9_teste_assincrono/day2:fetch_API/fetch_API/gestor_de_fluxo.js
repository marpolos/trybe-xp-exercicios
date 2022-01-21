//Para usar o fetch precisamos instalá-lo assim:
//1 - Instale o npm com o comando npm init -y numa pasta com nome sem caracteres especieis e como especificado no bloco de jest.
// 2 - Digite o comando npm i node-fetch@^2
//Esse final @^2 significa que queremos a versão atual, mas não superior a 2.
// Essa especificação ocorre visto que a versão 3 do node-fetch foi alterada para ser usada através de módulos do JS, podendo ser importada apenas através do import e não mais do require .

/* const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke(); */
//Ao rodar esse código você vai perceber que no console foi impresso Promise { <pending> } ao invés da piada. Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu estado e não o dado requisitado.

//Para o código funcionar...
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();

/* Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then() :
Passamos como argumento uma função. Essa função também recebe 1 argumento que é a resposta do fetch .
O .then() é usado "em cadeia", um conceito chamado de chaining . Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a resposta do fetch (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado! */

/* Vamos ver o que acontece no código acima. A função fetchJoke chama o fetch que é executado e após sua execução, caso a requisição seja bem sucedida, retorna para o parâmetro da função do primeiro .then() uma resposta e na sua execução iremos pegar a versão JSON dessa resposta por meio da função .json() . Note que a função .json() também é assíncrona, por isso temos o segundo .then() que, por sua vez, vai pegar o JSON vindo do primeiro .then() e dentro dele acessar o elogio que esta armazenado no campo value para mostrar no console. */
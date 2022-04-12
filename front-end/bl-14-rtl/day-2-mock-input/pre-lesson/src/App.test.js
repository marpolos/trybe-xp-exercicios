import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';

//Teste se sua aplicação tem o funcionamento correto no navegador retornando uma piada aleatória a cada vez que a pagina é atualizada.
afterEach(() => jest.clearAllMocks());
describe("Testando chamada da piada", () => {
test('Verifica se aparece uma piada diferente a cada requisição', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
  //  PRIMEIRA FORMA:
  /* global.fetch = (url) => {
    return Promise.resolve({
      json: () => Promise.resolve({
        id: '7h3oGtrOfxc',
        joke: 'Whiteboards ... are remarkable.',
        status: 200,
      })
    })
  } */

  // SEGUNDA FORMA:
  /* global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    })
  }); */
  //TERCEIRA FORMA  
  /* jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  }); */

  // QUARTA FORMA
 /*  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  })); */

  //QUINTA FORMA
  //Nesse exemplo estamos dizendo que global.fetch agora é uma função mockada com jest.fn que retorna uma Promise , e na primeira vez que ela for resolvida, deve se retornar um objeto com uma outra função json que também é uma Promise , que quando resolvida retorna sua piada.
// Outra forma de escrever o mesmo exemplo seria com a sintaxe async/await , onde temos o mock dessa forma:

  global.fetch = jest.fn(async () => ({
    json: async () => joke
  }));

  render(<App />);
  // Acessar
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');

  //Agir
  //Testar
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

/* Vamos em partes entender o que esta acontecendo:
A constante joke cria um objeto similar ao que é retornado da API ;
O jest.spyon espiona as chamadas a função fetch do objeto global , é por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo a função parseInt ;
Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock . Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria, primeiro retornamos um objeto que contem a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;
É importante termos o async em it('fetch joke', async () => { , para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: ei espere até que consiga encontrar esse texto no dom ou de erro por limite de tempo ;
As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.
A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , isso é bem util para que não tenha interferência entre um teste e outro. */
});

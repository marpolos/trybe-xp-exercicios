// import * as math from './math';
//jest.mock('./math');

// Utilizando o jest.fn() , teríamos que mockar todas as funções uma a uma. Com o jest.mock() , podemos mockar todas com um só comando:

/* Uma vez que mockarmos todo o arquivo math.js , passemos a simular o comportamento de todas as suas funções, porém sua implementação individual permanece indefinida. Caso passemos os parâmetros 1 e 2 para a função somar , por exemplo, o retorno será "undefined". Isso se dá porque a simulação deixou de acessar o comportamento da função original do math.js .
Apesar de podermos definir um retorno com mockReturnValue , há casos em que é útil ir além dessa capacidade de retornar valores e criar um novo comportamento para a função simulada. É o que o método mockImplementation(func) faz. Ele aceita uma função que deve ser usada como implementação. */

const math = require('./math');
jest.mock("./math");

test.skip("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test.skip("Testar o spy do jest na math", () => {
    // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
    const mockSomar = jest.spyOn(math, "somar");
  
    mockSomar(1, 2);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(1, 2);
    expect(mockSomar(1, 2)).resolves.toBe(3);
  });


  test.skip("Testando resetar as mocks", () => {
    // testando a implementação original, o mock e o mock resetado
    // implementação original
    expect(math.somar(1, 2)).resolves.toBe(3);
  
    // criando o mock e substituindo a implementação para uma subtração
    math.somar = jest.fn().mockImplementation((a, b) => a - b);
  
    math.somar(5, 1);
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar(5, 1)).toBe(4);
    expect(math.somar).toHaveBeenCalledTimes(2);
    expect(math.somar).toHaveBeenLastCalledWith(5, 1);
  
    // resetando o mock
    math.somar.mockReset();
    expect(math.somar(1, 2)).toBe(undefined);
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenLastCalledWith(1, 2);
  });


test.skip("Testando spyOn", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});
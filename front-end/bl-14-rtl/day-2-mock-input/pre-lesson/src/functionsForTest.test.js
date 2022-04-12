let { divisivelPorDois, retornaNumeroAleatorio } = require('./functionsForTest');

/* test('quando o número aleatório é par, a função retorna `true`', () => {
    expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
  }); */


  test("Verifica a função divisivelPorDois", () => {
    // testando se a função foi chamada
    divisivelPorDois = jest.fn().mockReturnValue(true);

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
  expect(divisivelPorDois()).toBe(true);

    //Esse erro acontece porque a propriedade toHaveBeenCalled , assim como outras que serão ensinadas a seguir, são exclusivas para funções simuladas. Ou seja: se você não simula uma função, a propriedade não funciona corretamente .

    /* Ao declarar divisivelPorDois = jest.fn(); , estamos dizendo ao teste que, a partir daquele momento, estamos tomando controle da função divisivelPorDois e que ela será uma simulação da função original.
Por ser uma simulação, podemos especificar qual vai ser o retorno da função . Basicamente, o que podemos dizer é: "No contexto deste teste, quando essa função for chamada, ela retornará o valor que eu defini, ao invés de um valor aleatório!" . Duas propriedades nos permitem fazer essa declaração: mockReturnValue(value) e mockReturnValueOnce(value) . O mockReturnValue define um valor padrão de retorno. Já o mockReturnValueOnce retorna o valor definido apenas uma vez, e é importante, pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes. */
  });

  test("Quantas vezes chamamos a função divisivelPorDois", () => {
    // testando quantas vezes a função foi chamada e qual seu retorno
    divisivelPorDois = jest
      .fn()
      .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call');
  
    expect(divisivelPorDois).toHaveBeenCalledTimes(0);
  
    expect(divisivelPorDois()).toBe("first call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(1);
  
    expect(divisivelPorDois()).toBe("second call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(2);
  
    expect(divisivelPorDois()).toBe("default value");
    expect(divisivelPorDois).toHaveBeenCalledTimes(3);
  });
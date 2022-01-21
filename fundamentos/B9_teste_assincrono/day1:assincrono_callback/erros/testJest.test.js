/* test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  }); */

 /*   test('Não deveria passar!', (done) => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    }, 500);
  });  */

/*   Apesar do código acima parecer correto, irá falhar com uma mensagem de timeout. O motivo é que quando uma asserção (verificação) falha, a exceção é lançada, ou seja, algo inesperado aconteceu. Dessa forma, o fluxo é interrompido antes que a instrução done() seja executada. Para resolver este problema podemos colocar um bloco try/catch em volta da nossa asserção. Enquanto o try tenta executar a função no seu escopo com sucesso, o catch "captura" o erro, chamando a callback done : */

//Dessa forma, caso nosso try não consiga executar o código dentro dele, cairá no catch , que vai pegar esse erro e vai encerrar nosso teste lançando um erro.
  test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
}); 
//src/renderWithRouter.js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>), history,
  });

  //Aqui utilizaremos a biblioteca history para criar um histórico de navegação. A helper irá passar o histórico para o componente Router , e vai renderizar o componente que quisermos dentro dele, bastando apenas passar o componente como argumento quando a chamarmos.
  //Com a ajuda desta função, vamos escrever muito menos código na hora de testar, porque precisamos apenas chamar a renderWithRouter . Não podemos esquecer que devemos colocar o <BrowserRouter /> encapsulando o componente <App /> inteiro.
  // Para fazermos isso, devemos colocá-lo no index.js . Isto é necessário porque queremos ter controle sobre o BrowserRouter nos testes. Se ele estiver dentro do componente que vamos testar, nós perderemos o controle sobre ele.
  // Uma outra característica dessa função é que ela retorna tanto o componente que passamos como parâmetro, já encapsulado no router, quanto o histórico que geramos, o que também serve para nos levar a outras páginas com facilidade.

};
export default renderWithRouter;
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App, { About } from './App';
import userEvent from '@testing-library/user-event';

//Talvez você esteja se perguntando porque o App não foi importado com {} e o About foi. Isso aconteceu porque só pode haver um export default por arquivo (que faz o componente ser importável sem as chaves {} ) e o App tomou esse espaço, então os outros componentes exportados ficam em "segundo plano". Por isso, para serem importados corretamente, necessitam do {} .


describe('teste da aplicação toda', () => {
it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
});

it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});

it('deve testar um caminho não existente e a renderização do Not Found', () => {

  // A diferença nesse caso é que utilizamos a função history.push() e passamos como argumento algum link que não existe dentro de nossa aplicação. Depois disso, testamos se o texto que aparece no navegador, ao digitar um caminho para uma página que não existe, é encontrado.

  const { history } = renderWithRouter(<App />);

  history.push('/pagina/que-nao-existe/');
  // Nesse caso o push é uma function que redireciona direto para a page que eu quero testar.

  const notFoundTitle = screen.getByRole('heading',
    { name: 'Página não encontrada' });
  expect(notFoundTitle).toBeInTheDocument();
});
});

describe("Componentes isolados", () => {
  it('deve renderizar o componente About (apenas componente)', () => {
    renderWithRouter(<About />);
  
    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
})
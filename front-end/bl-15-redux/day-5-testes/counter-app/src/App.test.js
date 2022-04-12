import React from 'react'
import { cleanup, screen } from '@testing-library/react';
import App from './App';
import renderWithRedux from './renderWithRedux';
import userEvent from '@testing-library/user-event';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
  
    expect(queryByText('5')).toBeInTheDocument();
  });

  test('Click funciona com reducer default', () => {
    renderWithRedux(<App />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(screen.getByText('1')).toBeDefined();
  });

  test('Alterar o valor do count para 10 e clicar no button', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(screen.getByText('11')).toBeDefined();
  });
});

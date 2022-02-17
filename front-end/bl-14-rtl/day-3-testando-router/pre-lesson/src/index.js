import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
/* o BrowserRouter deve encapsular todos os itens chamados pelo react-router-dom e, no nosso caso, existem dois <Link> no App.js , o que nos leva a esse erro. Vamos resolver isso colocando a tag <BrowserRouter> no arquivo index.js , deixando ele da seguinte forma: */
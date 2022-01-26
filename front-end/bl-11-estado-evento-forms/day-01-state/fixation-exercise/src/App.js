import React from 'react';
import './App.css';

function text1() {
  console.log('Funciono de fora da classe.')
  this.setState((after, _props) => ({
    button1: after.button1 + 1
  }))
}

class App extends React.Component {
  constructor() {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()
    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
    // O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente.

    this.text2 = this.text2.bind(this);
    this.text3 = this.text3.bind(this);

    // Aqui em defino alguns estados, um para cada botão, antes o estado era null.
    this.state = {
      button1: 0,
      button2: 0,
      button3: 0
    }
  }

  text3() {
    console.log('Funciono com this.');
    this.setState((anterior, _props) => ({
      button3: anterior.button3 + 1
    }))
  };

  text2() {
    console.log(this.handleColor(this.state.button2));
    this.setState((estadoAnterior, _props) => ({
      button2: estadoAnterior.button2 + 1
    }));
  }

  handleColor(clicks) {
    return clicks % 2 === 0 ? 'green' : 'white';
  }
  consolar() {

  }

  render() {
    const { button1, button2, button3 } = this.state;
    return(
      <div>
        <button onClick={ text1 }>{ button1 }</button>
        <button onClick={ this.text2} style={ { backgroundColor: this.handleColor(button2) } }>{ button2 }</button>
        <button onClick={ this.text3 } style={ { backgroundColor: this.handleColor(button3) } }>{ button3 }</button>
      </div>
    );
  }
}

export default App;

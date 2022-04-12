import React from "react";

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
      console.log("construtor");
    }
  
    componentDidMount() {
      console.log("componentDidMount");
    }
  
    // Podemos também, nos métodos shouldComponentUpdate e componentDidUpdate , acessar os estados ou props próximos e anteriores. Para isso, devemos utilizar os parâmetros nextProps e nextState no shouldComponentUpdate e prevProps e prevState no componentDidUpdate . 
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", this.state, nextState);
      return true;
    }
  
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", this.state, prevState);
    }
    // Perceba que o estado só é de fato atualizado quando chega no método componentDidUpdate . Por isso, caso seja necessário impedir uma renderização, você deve utilizar o método shouldComponentUpdate , que permite comparar os atuais e próximos estados ou props e adicionar a lógica.
  
    render() {
      console.log("render");
      return (
        <div>
          <p>Contador</p>
          <button
            onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
          >
            Soma
          </button>
          <p>{this.state.counter}</p>
        </div>
      );
    }
  }

export default Counter;
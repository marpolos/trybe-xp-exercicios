import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};

//Agora podemos ter certeza que, caso o componente seja renderizado com alguma prop de tipo inválido, o console disparará um aviso , facilitando muito o processo de debugging .
// Em casos como esse, no qual as props são essenciais para o bom funcionamento do componente, é importante acrescentar o .isRequired - inglês para "é obrigatório" - após a definição do tipo da prop :

export default Greeting;
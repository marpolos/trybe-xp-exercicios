// src/InputsList.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addAssignment from './actions';

class InputsList extends React.Component {
  constructor() {
    super();
    this.state = { textValue: '' };
  }

  /* handleClick = (textValue) => {
    const { add } = this.props;
    add(textValue)
    //this.setState({ inputValue: '' });
  }; */

  render() {
    const { add } = this.props;
    const { textValue } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={ (event) => this.setState({ textValue: event.target.value }) }
        />
        <button type="button" onClick={ () => add(textValue) }>
        {/* <button type="button" onClick={ (textValue) => this.handleClick(textValue) }> */}
          Adicionar Tarefa
        </button>
      </div>
    );
  }
}

InputsList.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapDispatchtoProps = (dispatch) => ({
  add: (value) => dispatch(addAssignment(value))
});

export default connect(null, mapDispatchtoProps)(InputsList);
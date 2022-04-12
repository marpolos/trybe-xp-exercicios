import React, { Component } from 'react'
// import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSobreMim = this.handleSobreMim.bind(this);
    this.handleChangeAll = this.handleChangeAll.bind(this);

    this.state = {
      estadoFavorito: '',
      sobreMim: '',
      lugares: '',
      vaiComparecer: false,
      idade: 0,
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  handleSobreMim(event) {
      this.setState({
          sobreMim: event.target.value,
      })
  }

  handleChangeAll({ target }) {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value 
      this.setState({
          [name]: value,
      })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
              <label>
                Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
                  <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
              </label>
              <label for=""> Idade
                  <input
                    type="number"
                    name="idade"
                    value={this.state.idade}
                    onChange={this.handleChangeAll}
                  />
              </label>
              <label for=""> Vai comparecer?
                  <input
                    type="checkbox"
                    name="vaiComparecer"
                    value={this.state.vaiComparecer}
                    onChange={this.handleChangeAll}
                  />
          </label>
          </fieldset>
          <label>
              <select 
                name='lugares'
                value={this.state.lugares}
                onChange={this.handleChangeAll}>
                  <option>Nebrasca</option>
                  <option>Moscou</option>
              </select>
          </label>
          <label>
              <textarea value={this.state.sobreMim} onChange={this.handleSobreMim}/>
          </label>
          <label>
          <input type="file" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
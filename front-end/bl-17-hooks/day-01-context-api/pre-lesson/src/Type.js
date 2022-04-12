import React, { createContext } from 'react';

const MyContext = createContext('Type');

class Type extends React.Component {
  componentDidMount() {
    const value = this.context;
    // ...
  }

  render() {
    const value = this.context;
    return(
        <p>{ value }</p>
    )
    // ...
  }
}

Type.contextType = MyContext;
export default Type;

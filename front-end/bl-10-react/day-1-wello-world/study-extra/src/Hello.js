/* import React from 'react';

export default function HelloWorld() {
  return (
    <h1>Hello World</h1>
  );
} */

// Reescrevendo com props -> propriedades/ properties
import React from 'react';

export default function HelloWithProps(props) {
  return (
    <h1>Hello {props.name}</h1>
  );
}
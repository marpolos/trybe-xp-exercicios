import React from 'react';
import MyOtherComponent from './MyOtherComponent';
import MyContext from './MyContext';

function MyComponent() {
  return (
    <MyContext.Provider value={123}>
        <MyOtherComponent />
    </MyContext.Provider>
  )
}

export default MyComponent;
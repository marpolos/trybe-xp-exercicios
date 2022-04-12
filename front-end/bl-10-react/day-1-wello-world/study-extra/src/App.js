import './App.css';
import Button from './Button';
import HelloWithProps from './Hello';
import PropTypes from 'prop-types';
import Timer from './Timer';
import Main from './ButtonWithCSS';

function App() {
  return (
    <div>
      <HelloWithProps name="Marcelle" />
      <Button />
      {Button()}
      <Timer />
      {Main()}
    </div>
  );
}

// Dessa forma evito bugs ao informar o que eu espero, usamos o PropTypes. Assim informo ao react para ele só aceitar string.
HelloWithProps.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;

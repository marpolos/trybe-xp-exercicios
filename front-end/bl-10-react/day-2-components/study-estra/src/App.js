import './App.css';
import ReactDOM from 'react-dom';
import Car from './Car';
import Garage from './Garage';

function App() {
  return (
    <div>
    {ReactDOM.render(<Car />, document.getElementById('root'))}
    {ReactDOM.render(<Garage />, document.getElementById('root'))}
    </div>
  );
}

export default App;

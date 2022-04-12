import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const linguagens = ['Ruby', 'C#', 'Python'];

function App() {
  return (
    // agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .
    // Task('React')
    // por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .
    linguagens.map((langue) => Task(langue))
  );
}

export default App;
